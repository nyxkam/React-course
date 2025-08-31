import './App.css'
import { AppForm, Button, ColorRed } from './components'

const LoginInputs = () => {
  return (
    <>
      <input type="text" name='username' placeholder='Usuario' />
      <input type="password" name='password' placeholder='Contraseña' />
    </>
  )
}

function App() {
  const submitForm = () => {
    console.log("SUBMITTED")
  }

  const handleClick = () => {
    console.log("Uy me clickio todo")
  }

  const sayMeHello = () => {
    alert("Hola!")
  }

  return (
    <>
      <ColorRed><Button parentMethod={sayMeHello}>My Button Red</Button></ColorRed>
      <Button parentMethod={handleClick}>My Normal Button</Button>
      <AppForm inputs={<LoginInputs />}>
        <button type='submit' onClick={submitForm}>Enviar</button>
      </AppForm>
    </>
  )
}

export default App
