import React from 'react';
import { Routes, Route } from 'react-router-dom';
import style from './style.module.scss'

import Header from '../components/Header';
import Footer from '../components/Footer';

import Login from '../conteiners/Login';
import SignUp from '../conteiners/SignUp';
import ForgotPwd from '../conteiners/ForgotPwd';


function App() {
  return (
    <div className={style.mainContainer}>
      <Header />
      
      <div className={style.centerContext}>
        <Routes>
          {/* <Route exac path='/' element={<HomePage />} /> */}
          <Route exac path='/login' element={<Login />} />
          <Route exac path='/signUp' element={<SignUp />} />
          <Route exac path='/forgotPass' element={<ForgotPwd />} />
        </Routes>

      </div>

      <Footer />

    </div>
  );
}

export default App;