import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
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
      {/* очищено: логотипы удалены */}
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
        {/* очищено: кнопка-счетчик удалена */}
      </div>
      {/* очищено: подпись снизу удалена */}
    </>
  )
}

export default App
