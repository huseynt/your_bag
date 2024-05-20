import style from './Items.module.scss'
import { useEffect, useState } from 'react'
import {phones} from '../db/data'

const Items = (props: any) => {

  // -------------------- count phones -----------------------------------
  // remove phone ------------------------------
  const [count, setCount] = useState(1)
  function remove(e:any) {
    setCount(0) 
    phones[e.target.id-1].count= 0
    sum()
  }
  //  count + ----------------------------------
  function changeNumAscend(e:any) {
    const i = count+1
    setCount(i)
    phones[e.target.id-1].count= i
    sum()
  }
  // count - ------------------------------------
  function changeNumDescend(e:any) {
    sum()
    if (count>0) {
      const i = count-1
      setCount(i)
      phones[e.target.id-1].count= i
    }
    else {
      remove(e)
    }
  }
  //  -------------------------- sum -----------------
  function sum() {
    const arr = []
    const arrCount = []
    for (let i = 0; i < phones.length; i++) {
      arr.push(phones[i].price * phones[i].count)
      arrCount.push(phones[i].count)
    }
    console.log(arr)  
    props.setSum(arr.reduce((a, b) => a + b, 0))
    props.setCountPhone(arrCount.reduce((a, b) => a + b, 0))
  }
  useEffect(()=>{sum()},[])

  


  return (
    <div className={count!=0 ? style.items : style.disable}>
      <div className={style.icon}><img src={props.url} alt="icon" /></div>

      <div className={style.info}>
        <p className={style.phoneName}>{props.name}</p>
        <p>${props.price}</p>
        <p className={style.remove} id={props.id} onClick={remove}>remove</p>
      </div>

      <div className={style.change}>
        <p onClick={changeNumAscend} id={props.id}>^</p>
        <p className={style.count}>{phones[props.id-1].count}</p>
        <p onClick={changeNumDescend} id={props.id}>v</p>
      </div>
    </div>
  )
}

export default Items
