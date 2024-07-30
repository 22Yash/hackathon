import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Preloader from './component/Preloader'
import Navbar from './component/Navbar'
import Problem from './component/Problem'
import Hero from './component/Hero'
import Timeline from './component/Timeline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Preloader/>
    <Navbar/>
    <Hero/>
    <Problem/>
    <Timeline/>
    </>
  )
}

export default App
