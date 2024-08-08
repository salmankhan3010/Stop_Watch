import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isActive,setIsSctive] = useState(false)
  const handleStart = () => setIsSctive(true)
  const handleStop = () => setIsSctive(false)
  const handleReset = () => {
    setIsSctive(false)
    setTime(0)
  } 

  useEffect(() => {
    if(isActive){
      let id = null
    id = setInterval(() => {
        setTime(prev => prev + 1)
      },1000)
      return () => clearInterval(id)
    }
  },[isActive])

  return (
    <>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
