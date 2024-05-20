import style from './Items.module.scss'
import { useEffect, useState } from 'react'
import {phones} from '../db/data'

const Items = (props: any) => {

  // -------------------- count phones -----------------------------------
  const [count, setCount] = useState(1)
  function remove(e) {
    setCount(0) 
    phones[e.target.id-1].count= 0
    console.log(phones)
  }
  function changeNumAscend(e) {
    let i = count+1
    setCount(i)
    phones[e.target.id-1].count= i
    // console.log(phones[e.target.id-1].count)
    // console.log(e.target)
    sum(e)
    
  }
  function changeNumDescend(e) {
    sum(e)
    if (count>0) {
      let i = count-1
      setCount(i)
      phones[e.target.id-1].count= i
    }
    else {
      remove(e)
    }
    console.log(e.target.id-1)
    // sum={sum} setSum={setSum}
  }
  // --------------------------------------------------------------

  function sum(e) {
    e.target.id
    console.log(phones[e.target.id-1].price)
  }


  return (
    <div className={count!=0 ? style.items : style.disable}>
      <div className={style.icon}><img src={props.url} alt="icon" /></div>

      <div className={style.info}>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p className={style.remove} id={props.id} onClick={remove}>remove</p>
      </div>

      <div className={style.change}>
        
        <p onClick={changeNumAscend} id={props.id} name={props.name}>^</p>
        <p>{phones[props.id-1].count}</p>
        <p onClick={changeNumDescend} id={props.id}>v</p>

      </div>
    </div>
  )
}

export default Items
