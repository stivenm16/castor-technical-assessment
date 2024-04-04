export type TypeWithKey<T> = { [key: string]: T }

export interface NextAuthError {
  error: string
  status: number
  ok: boolean
  url: string
}
