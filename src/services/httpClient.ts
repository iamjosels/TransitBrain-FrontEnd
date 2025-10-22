import axios, { AxiosHeaders, type AxiosError, type AxiosInstance } from 'axios'

import type { ApiError, ProblemDetails } from '@/types/problem'

const DEFAULT_HEADERS: Record<string, string> = {
  Accept: 'application/json, application/problem+json',
}

const problemJsonMediaTypes = new Set<string>([
  'application/problem+json',
  'application/vnd.api+problem+json',
])

function getHeader(error: AxiosError, headerName: string): string | undefined {
  const headers = error.response?.headers
  if (!headers) return undefined

  if (typeof (headers as { get?: unknown }).get === 'function') {
    const value = (headers as { get: (name: string) => string | undefined }).get(
      headerName,
    )
    return value ?? undefined
  }

  const normalizedHeaders = headers as Record<string, string | string[] | undefined>
  const value = normalizedHeaders[headerName]
  if (Array.isArray(value)) {
    return value[0]
  }
  return value ?? undefined
}

function parseProblemDetails(error: AxiosError): ProblemDetails | undefined {
  const contentType = getHeader(error, 'content-type') ?? ''
  const [mediaType] = contentType.split(';')
  if (!problemJsonMediaTypes.has(mediaType?.trim() ?? '')) {
    return undefined
  }

  const data = error.response?.data as unknown
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    return data as ProblemDetails
  }
  try {
    if (typeof data === 'string') {
      return JSON.parse(data) as ProblemDetails
    }
  } catch {
    return undefined
  }
  return undefined
}

function toApiError(error: AxiosError): ApiError {
  const problemDetails = parseProblemDetails(error)
  const apiError: ApiError = new Error(
    problemDetails?.title ?? error.message ?? 'Unexpected API error',
  )
  apiError.name = 'ApiError'
  apiError.status = error.response?.status
  apiError.code = problemDetails?.type ?? error.code
  apiError.problemDetails = problemDetails
  apiError.cause = error
  return apiError
}

function attachAuthorization(instance: AxiosInstance) {
  instance.interceptors.request.use(async (config) => {
    const token = await getAccessToken()
    if (token) {
      if (config.headers instanceof AxiosHeaders) {
        config.headers.set('Authorization', `Bearer ${token}`)
      } else {
        const headers = AxiosHeaders.from(config.headers ?? {})
        headers.set('Authorization', `Bearer ${token}`)
        config.headers = headers
      }
    }
    return config
  })
}

function getAccessToken(): Promise<string | undefined> {
  // Placeholder for future OIDC integration.
  return Promise.resolve(undefined)
}

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: DEFAULT_HEADERS,
  withCredentials: true,
  timeout: 15_000,
})

attachAuthorization(httpClient)

httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (!error.isAxiosError) {
      return Promise.reject(error)
    }
    return Promise.reject(toApiError(error))
  },
)

export type HttpClient = typeof httpClient
