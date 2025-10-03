import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getHealth } from '@/api/client'
import Home from './pages/Home'
import Test from './pages/Test'
import Clients from './pages/Clients'

function App() {
  const [count, setCount] = useState(0)
  const [health, setHealth] = useState('pending')

  useEffect(() => {
    getHealth()
      .then(res => setHealth(res.status))
      .catch(() => setHealth('error'))
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <nav style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: '2rem' }}>
        <Link to="/">Главная</Link>
        <Link to="/test">Test</Link>
        <Link to="/clients">Clients</Link>
      </nav>
      <div className="card">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<><Test /><p>Health: {health}</p></>} />
          <Route path="/clients" element={<Clients />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
