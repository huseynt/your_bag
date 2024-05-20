import style from './Header.module.scss'
import basket from '/basket.png'

const Header = (props:any) => {
  
  return (
    <div className={style.header}>
      <div className={style.head}>UseReducer</div>

      <div className={style.icon}>
        <img className={style.basket} src={basket} alt="basket"/>
        <div className={style.count}>{props.count}</div>
      </div>

    </div>
  )
}

export default Header;
