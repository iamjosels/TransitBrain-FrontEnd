export interface ProblemDetails {
  type?: string
  title?: string
  status?: number
  detail?: string
  instance?: string
  [key: string]: unknown
}

export interface ApiError extends Error {
  status?: number
  code?: string
  problemDetails?: ProblemDetails
  cause?: unknown
}

