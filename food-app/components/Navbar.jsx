import React from 'react'

import styles from '../styles/Navbar.module.css'
import Image from 'next/image'





const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>

                <div className={styles.callButton}>
                    <image src='/img/telephone.png' alt='telephone-img' />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>91 85258XXX</div>
                </div>



            </div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
        </div>
    )
}

export default Navbar