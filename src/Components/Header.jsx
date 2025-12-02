import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dog from '../Assets/dogs.svg?react';
import { UserContext } from '../../src/UserContext';

const Header = () => {

  const {data, userLogout} = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container` }>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}><Dog /></Link>
        {data ? (<Link to="/conta" className={styles.login}> {data.nome} </Link>) : (<Link to="/login" className={styles.login}> Login / Criar </Link>)}
        {data && <button onClick={userLogout} className={styles.logout}>Sair</button>}
        
      </nav>
    </header>
  )
}

export default Header
