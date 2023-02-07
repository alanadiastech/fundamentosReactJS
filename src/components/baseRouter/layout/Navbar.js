import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Link to="/">Home</Link>
      </li>
      <li className={style.item}>
        <Link to="/empresa">Empresa</Link>
      </li>
      <li className={style.item}>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  )
}

export default Navbar