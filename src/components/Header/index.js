import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss'
import mandalorian from './mandalorian.png'

function Header() {
    return (
      <>
        <header className={style.headerContainer}>

            <div className={style.NameNav}>
                <nav className={style.Navlinks}>
                    <NavLink to="/"> 
                        <img src={mandalorian} alt="" className={style.homeImg} />
                    </NavLink>
                    <NavLink to="/login"> Login </NavLink>
                    <NavLink to="/signUp"> SignUp </NavLink>
                </nav>
            </div>
        </header>
      </>
    );
  }
    
export default Header;