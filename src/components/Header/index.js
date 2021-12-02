import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss'
import checkIn from './checkIn.png'

function Header() {

  const [linkText, setLinkText] = useState(`${style.linkText}`)
  const [styleElem, setStyleElem] = useState(`${style.hide}`)

  console.log(linkText);

  useEffect( () => {
    const userLogin = localStorage.getItem('login');

    if(userLogin) {
      setLinkText(styleElem);
      setStyleElem(linkText);
    }

  }, []);

  const changeStyle = () => {
    setLinkText(linkText);
    setStyleElem(styleElem);
    localStorage.clear();
  };

  return (
      <>
        <header className={style.headerContainer}>
          <div className={style.NameNav}>
            <nav className={style.Navlinks}>
              <NavLink to="/"><img src={checkIn} alt="" className={style.homeImg} /></NavLink>
              <NavLink to="/login" className={linkText}> Login </NavLink>
              <NavLink to="/signUp" className={linkText}> SignUp </NavLink>
              <NavLink to="/" className={styleElem}> 
                <button
                  type="button"
                  onClick={changeStyle}
                  className={style.btnLogout}
                >
                  Log out
                </button>
              </NavLink>
            </nav>
          </div>
        </header>
      </>
    );
  }
    
export default Header;