import { env } from '@/config/env'

export async function getHealth(): Promise<{ status: string }> {
  const res = await fetch(`${env.VITE_API_BASE_URL}/health`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}
