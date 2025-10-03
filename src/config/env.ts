import { z } from 'zod'

const schema = z.object({
  VITE_API_BASE_URL: z.string().url().default('http://localhost:3000'),
  VITE_MSW: z.enum(['on', 'off']).default('on'),
})

export type AppEnv = z.infer<typeof schema>

export const env: AppEnv = schema.parse({
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  VITE_MSW: import.meta.env.VITE_MSW,
})


