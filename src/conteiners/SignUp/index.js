import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './style.module.css'



function SignUp() {
    const [valueLogin, setValueLogin] = useState('')
    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valuePwd, setValuePwd] = useState('')
    const [valueRepeatPwd, setValueRepeatPwd] = useState('')
    const [valueNumber, setValueNumber] = useState('')
    const [pwdErr, setPwdErr] = useState('')
    
    const btnClick = () => {
        setPwdErr('')
        if (valuePwd !== valueRepeatPwd) {
            console.log('ERROR PASSWORD')
            setPwdErr('Пароли не совпадают')
            return
        } else {
            console.log(valueLogin, valueName, valueEmail, valuePwd, valueNumber)
            setValueEmail('')
        }
        
    }

    return (
        <>
        <div className={style.signUp}>

            <form className={style.inputField}>
                <input required onChange={(ev) => setValueLogin(ev.target.value)}  placeholder="Логин"/><br/>
                <input required onChange={(ev) => setValueName(ev.target.value)} placeholder="Имя"/><br/>
                <input required onChange={(ev) => setValueEmail(ev.target.value)} type="email" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" placeholder="Email"/><br/>
                <input required onChange={(ev) => setValuePwd(ev.target.value)}  type="password" placeholder="Пароль"/><br/>
                <input required onChange={(ev) => setValueRepeatPwd(ev.target.value)} type="password" placeholder="Повторите пароль"/><br/>
                <input onChange={(ev) => setValueNumber(ev.target.value)} type="number" placeholder="+380ХХ-ХХХ-ХХ-ХХ"/><br/>
                <div>
                    {pwdErr}
                </div><br/>

                <NavLink to="/login">
                    <button type="button" className={style.btnSignUp}  onClick={btnClick}>Регистрация</button>
                </NavLink>
            </form>

            
        </div>
        
        </>
    )
};

export default SignUp