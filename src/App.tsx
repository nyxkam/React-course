import { useState } from 'react'
import './App.css'
import { Button } from './components'


function App() {
  // 1 - mount 
  // 2 - cambio de estado 
  // 3 - async

  // batching 
  const countMore = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
    </>
  )
}

export default App
