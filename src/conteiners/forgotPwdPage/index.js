import style from "./style.module.css";
import { useState } from "react";

function ForgotPwdPage() {
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [formClass, setFormClass] = useState(`${style.form}`);
  const [successNotification, setSuccessNotification] = useState(`${style.hide} ${style.successNotification}`);

  const handleEmailInput = (e) => {
    setInputEmailValue(e.target.value);
  };
  const sendEmail = async (ev) => {
    console.log(`email is sent`);
    setInputEmailValue('');

    setFormClass(`${style.hide}`)
    setSuccessNotification(`${style.show} ${style.successNotification}`)
  }

  return (
    <div className={`${style.component}`}>
      <div className={`${style.task}`}>
        <h1>Password recovery</h1>

        <h3>Are you having trouble signing in?</h3>

        <form className={formClass}>
          <p>Please enter your email</p>
          <input placeholder='email' type="text" value={inputEmailValue} onChange={handleEmailInput} />
          <button type="button" onClick={sendEmail}>send</button>
        </form>

        <div className={successNotification}>
          <p>check your email for recovery password</p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPwdPage;
