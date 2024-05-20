import Header from './components/Header'
import Block from './components/Block'
import './App.css'
import { useState } from 'react'

function App() {
  const [ sum, setSum] = useState(0)
  const [ countPhone, setCountPhone] = useState(0)

  return (
    <>
    <Header count={countPhone}/>
    <Block  
    sum={sum} 
    setSum={setSum} 
    countPhone={countPhone} 
    setCountPhone={setCountPhone}/>
    </>
  )
}

export default App;
