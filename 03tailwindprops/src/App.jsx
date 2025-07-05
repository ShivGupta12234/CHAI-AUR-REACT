import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '../components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(15);
  let myObj = {
    username:"shiv",
    age:21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      
      <Card username="Chaiaurcode" btnText="Click me" />
      <br />
      <br />
      <Card username="Shiv" btnText="Visit me"/>
    </>
  )
}

export default App
