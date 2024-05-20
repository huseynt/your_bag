import style from './Header.module.scss'

const Header = (props:any) => {

  function setItem () {
    props.settest(5)
  }
  
  return (
    <div className={style.header}>
      <div className={style.head}>UseReducer</div>
      <div className={style.rubbish} onClick={setItem}>aaaaaaa</div>
    </div>
  )
}

export default Header;
