import React from 'react';
import styles from './Profiles.module.css';
import kids from './images/img-4.png'

const Profiles = () => {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <div className={styles.image}>
            <img src={kids} alt='kids' className={styles.kids}/>
            </div>
        </div>

        <div className={styles.right}>
            <div className={styles.sent}>
                <p className={styles.chill}>Create profiles for kids</p>
                <div className={styles.all}>
                <p>Send children on adventures with their</p>
                <p>favourite characters in a space made just for</p>
                <p>them—free with your membership.</p>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Profiles