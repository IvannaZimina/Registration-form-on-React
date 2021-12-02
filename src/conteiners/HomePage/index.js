import style from './style.module.scss';
import {useState, useEffect} from 'react';

function HomePage() {
  const [login, setLogin] = useState('');

  useEffect( () => {
    const userlogin = localStorage.getItem('login');
    setLogin(userlogin);
    
  }, []);

  return (
      <>
        <h1>Hello {login}</h1>
      </>
    );
  }
    
export default HomePage;