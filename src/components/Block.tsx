import style from './Block.module.scss'
import {phones} from '../db/data'
import Items from './Items'
import { useEffect, useState } from 'react'

const Block = (props:any) => {
  console.log()

    const [clear, setClear] = useState(false)
    const [sum, setSum] = useState(0)

    function clearItems() {
      setClear(true)
      phones.map(x=> x.count=0)
    }
    useEffect(()=> {
      let a = 0
      for(let i =0; i<phones.length;i++) {
        a+=phones[i].count
      }
      setSum(a)
      console.log(sum)
    },[])



  return (
    <div className={style.block}>
        <h3 className={style.head}>YOUR BAG</h3>

        <div className={clear ? style.itemsBlock: ''}>
            {phones.map((phones) => {
              return <Items 
              id={phones.id} 
              key={phones.id} 
              name={phones.name} 
              price={phones.price} 
              url={phones.url} 
              count={phones.count}
              setSum={props.setSum}/>
            })}
        </div>

        <div className={style.bottom}>
            <div className={style.total}>
                <p>Total</p>
                <p>{sum}</p>
            </div>
            
            <p onClick={clearItems} className={style.clear}>Clear Card</p>
        </div>

    </div>
  )
}

export default Block
