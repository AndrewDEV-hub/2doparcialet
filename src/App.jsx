import { useState } from 'react'
import './components/formulario.jsx'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <formulario />
    </>
  )
}

export default App
