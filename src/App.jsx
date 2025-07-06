import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{AuthContextProvider}from "./index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p style = {{color:"red"}}>Visible afuera del contexto</p>
      <AuthContextProvider>
        <span>Hola desde context</span>
      </AuthContextProvider>
    </>
  )
}

export default App
