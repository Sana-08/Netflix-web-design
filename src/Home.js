import React from 'react'
import styles from './Home.module.css';
import image from './images/netflix-logo.svg';

const Home = () => {
  return (
    <div>
        <div className={styles.image}>
            <img src={image} alt='netflix' className={styles.net}/>
            <div className={styles.drop}>
              <select className={styles.color}>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className={styles.button}>Sign In</button>
            </div>
              
              <div className={styles.head}>
                 <p className={styles.para}>Unlimited movies, TV shows and more</p>
                 <p className={styles.watch}>Watch anywhere. Cancel anytime.</p>
                 <p className={styles.ready}>Ready to watch? Enter your email to create or restart your membership</p>  
              </div>

              <div className={styles.log}>
                <input type='email' placeholder='Email address' className={styles.input}/>
                <button className={styles.get}>Get Started {">"}</button>
              </div>
        </div>
    </div>
  ) 
};
export default Home;