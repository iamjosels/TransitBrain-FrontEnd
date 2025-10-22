import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (failureCount > 2) return false
        if (error instanceof Error && error.name === 'CanceledError') return false
        return true
      },
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    },
    mutations: {
      retry: false,
    },
  },
})

