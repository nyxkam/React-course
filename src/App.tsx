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

  const fetchData = async () => {
    consoleLoader(true)
    try {
      const response = await fetch("https://api.example.com/data")

      if (!response.ok) {
        throw new Error("Error al obtener datos")
      }

      const jsoData = await response.json()
      setData(jsoData)
    } catch (err) {
      setError(err as string)
    } finally {
      consoleLoader(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div>Cargando ... </div>
  }
  if (error) {
    return <div>UPS! Hay un error: {error}</div>
  }
  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
    </>
  )
}

export default App
