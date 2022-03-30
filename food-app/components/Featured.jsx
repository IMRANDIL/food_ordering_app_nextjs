import Image from 'next/image'
import React from 'react'
import styles from '../styles/Featured.module.css'












const Featured = () => {


    const images = [
        '/img/featured1.jpg',
        '/img/featured2.jpg',
        '/img/featured3.png'
    ]









    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }}>
                <Image src='/img/arrowl.png' alt='arrowl-img' layout='fill' />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    {images.map((img, i) => (
                        <Image key={i} src={img} alt='featured-img' layout='fill' />
                    ))}

                </div>




            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }}>
                <Image src='/img/arrowr.png' alt='arrowr-img' layout='fill' />
            </div>

        </div>
    )
}

export default Featured