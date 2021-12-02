import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import style from './style.module.scss';

function Login() {

  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');
  // const [styleElem, setStyleElem] = useState(`${style.hide}`);

  const datas = () => {
    console.log(login, pwd);
    localStorage.setItem('login', login);
  }

  return (
    <>
      <div className={style.loginContainer} >
        
        <div className={style.inputField}>
          <input
            type="text"
            value={login}
            placeholder="Enter login"
            onChange={ev => setLogin(ev.target.value)}
            required
          />
        </div>

        <div className={style.inputField}>
          <input
            type="password"
            value={pwd}
            placeholder="Enter password"
            onChange={ev => setPwd(ev.target.value)}
            required
          />
        </div>

        <NavLink to="/">
          <button
            type="button"
            onClick={datas}
            className={style.btnLogin}
          >
            Enter
          </button>
        </NavLink>


        <div>
          <NavLink to="/forgotPass" className={style.linkPwd}> Forgot password? </NavLink>
        </div>

      </div>
    </>
  );
}
    
export default Login;