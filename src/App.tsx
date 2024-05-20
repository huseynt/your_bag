import Header from './components/Header'
import Block from './components/Block'
import './App.css'
import { useState } from 'react'

function App() {

  // const [phoneseven,setPhoneSeven] = useState(1)
  // const [phoneegiht,setPhoneEgiht] = useState(1)
  // const [phonepixel,setPhonePixel] = useState(1)
  // const [phoneredmi,setPhoneRedmi] = useState(1)
  

  const [ sum, setSum] = useState(0)

  return (
    <>
    <Header/>
    <Block  sum={sum} setSum={setSum}/>
    <p>{sum}</p>
    </>
  )
}

export default App;
