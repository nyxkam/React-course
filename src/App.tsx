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

  // endpoint:(entidad externa al componente)
  // Comunicarnos con un endpoint - entidad externa al componente

  // useEffect es un metodo que acepta metodos y un arreglo de dependencias
  // maneja el ciclo de vida de un componente no tanto asi 
  // se maneja segun el re-render de un componente

  // El useEffect sirve para sincronizar con entidades externas (sync)
  // operaciones async 
  // parametros de entrada
  // context (depende)
  // redux (depende)
  useEffect(() => {
    fetchData()
    // lógica ? que lógica ? cuándo se ejecuta esta logica?
    // 1 - Se ejecuta cuando se monsta el componente
    // 2 - Cada vez que se modifique uno de los valores del state
    // la folowing -> el return se ejecuta cada vez que el componente muera o se destruya
    return () => {
      // manejar el estado de la memoria
    }
  }, [fetchData])

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
