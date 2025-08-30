import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue)
    console.info(loading)
  }

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
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
