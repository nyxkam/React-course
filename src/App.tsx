import { useState } from 'react'
import './App.css'
import { Button } from './components'


function App() {
  // 1 - mount 
  // 2 - cambio de estado 
  // 3 - async
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Alex")

  const countMore = () => {
    setCount((count) => count + 1)
  }

  const changeName = () => {
    setName("Rosas")
  }

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      <p>{name}</p>
      <Button label="Change Name" parentMethod={changeName} />
    </>
  )
}

export default App
