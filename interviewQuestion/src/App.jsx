import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [counter, setCounter] = useState(15)//for updating the value of counter globally.

  const addValue = () =>{
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    if(counter === 0){
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick = {addValue}
      >Add Value {counter}</button>
      <br />
      <button onClick = {removeValue}>Remove Value {counter}</button>
      <footer>Footer: {counter}</footer>
    </>
  )
}
export default App