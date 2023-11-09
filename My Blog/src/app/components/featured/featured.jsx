import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hello.</b> My first blog
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}>
                        <b>Featured post</b>
                    </h2>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum autem explicabo minus totam similique sint ea, debitis quis odio consequatur cupiditate, laudantium ex quibusdam! Quas minima labore tempora quae velit!
                    </p> 
                    <button className={styles.button}>Read More</button>      
                </div>
           </div>
        </div>
    )
}

export default Featured;