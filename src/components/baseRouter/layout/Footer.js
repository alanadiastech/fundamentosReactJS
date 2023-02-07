import React from "react"
import {FaFacebookF, FaInstagramSquare, FaLinkedinIn} from 'react-icons/fa'
// import styles from './Footer.module.css'
import styles from '../layout/Footer.module.css'

function Footer(): JSX.Element {
    return (
       <div>
         <ul className={styles.social_list}>
            <li>
                <FaFacebookF/>
            </li>
            <li>
                <FaInstagramSquare/>
            </li>
            <li>
                <FaLinkedinIn/>
            </li>
        </ul>
        <p>Rodapé!</p>
       </div>
    )
}

export default Footer