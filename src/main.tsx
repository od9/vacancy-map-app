import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') return
  if (import.meta.env.VITE_MSW === 'off') return
  const { worker } = await import('./mocks/browser')
  await worker.start({ serviceWorker: { url: '/mockServiceWorker.js' } })
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
})
