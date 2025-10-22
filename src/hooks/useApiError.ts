import { useMemo } from 'react'

import type { ApiError } from '@/types/problem'

export function useApiError(error: unknown) {
  return useMemo(() => {
    if (!error) return undefined
    if (typeof error === 'string') {
      return { message: error }
    }

    if ((error as ApiError)?.name === 'ApiError') {
      const apiError = error as ApiError
      return {
        message: apiError.message,
        status: apiError.status,
        code: apiError.code,
        detail: apiError.problemDetails?.detail,
      }
    }

    if (error instanceof Error) {
      return { message: error.message }
    }

    return { message: 'Unknown error' }
  }, [error])
}

