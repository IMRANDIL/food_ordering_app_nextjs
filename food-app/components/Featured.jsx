import Image from 'next/image'
import React from 'react'
import styles from '../styles/Featured.module.css'












const Featured = () => {


    const images = [
        '/img/featured.png',
        '/img/featured2.png',
        '/img/featured3.png'
    ]









    return (
        <div className={styles.container}>
            <Image src='/img/arrowl.png' alt='arrowl-img' />
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    {images.map((img) => (
                        <Image src={img} alt='featured-img' />
                    ))}

                </div>




            </div>
            <Image src='/img/arrowr.png' alt='arrowr-img' />
        </div>
    )
}

export default Featured