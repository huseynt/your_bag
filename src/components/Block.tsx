import style from './Block.module.scss'
import {phones} from '../db/data'
import Items from './Items'
import { useState } from 'react'

const Block = (props:any) => {

    const [clear, setClear] = useState(false)
    function clearItems() {
      setClear(true)
      phones.map(x=> x.count=0)
      props.setSum(0)
      props.setCountPhone(0)
    }




  return (
    <div className={style.block}>
        <h3 className={style.head}>YOUR BAG</h3>

        <div className={clear ? style.itemsDisable: ''}>
            {phones.map((phones) => {
              return <Items 
              id={phones.id} 
              key={phones.id} 
              name={phones.name} 
              price={phones.price} 
              url={phones.url} 
              count={phones.count}
              setSum={props.setSum}
              countPhone={props.countPhone} 
              setCountPhone={props.setCountPhone}/>
            })}
        </div>

        <div className={style.bottom}>
            <div className={style.total}>
                <p>Total</p>
                <p>${Math.floor(props.sum*100)/100}</p>
            </div>

            <p onClick={clearItems} className={style.clear}>Clear Card</p>
        </div>

    </div>
  )
}

export default Block
