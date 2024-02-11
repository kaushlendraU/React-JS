import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [limitText, setLimit] = useState('')

  let addValue = () =>{
     if (count < 20) {
      setCount(count+1)
     }else{
       setLimit(''+'reached your add limit')
     }
  }

  let subtractValue = () =>{
    if (count > 0) {
     setCount(count-1)
    }else{
      setLimit(''+'reached your subtract limit')
    }
 }

  return (
    <>
      <h1>Count is : {count}</h1>
      <button onClick={addValue}>Increase count</button>
      <br />
      <button onClick={subtractValue}>decrease count</button>
      <p>{limitText}</p>
    </>
  )
}

export default App
