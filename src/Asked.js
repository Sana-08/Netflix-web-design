import React from 'react';
import styles from './Asked.module.css';

const Asked = () => {
  return (
    <div className={styles.main}>
    <div className={styles.para}>
        <h1>Frequently Asked Questions</h1>
        </div>
    
        <div className={styles.net}>
            <p>What is Netflix?</p>
            <p className={styles.add}>+</p>
        </div>
        <div className={styles.net}>
            <p>How much does Netflix cost?</p>
            <p className={styles.add}>+</p>
        </div>
        <div className={styles.net}>
            <p>Where can I watch?</p>
            <p className={styles.add}>+</p>
        </div>
        <div className={styles.net}>
            <p>How do I cancel?</p>
            <p className={styles.add}>+</p>
        </div>
        <div className={styles.net}>
            <p>What can I watch on Netflix?</p>
            <p className={styles.add}>+</p>
        </div>
        <div className={styles.net}>
            <p>Is Netflix good for kids?</p>
            <p className={styles.add}>+</p>
        </div>


        <div className={styles.all}>
            <p className={styles.read}>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className={styles.log}>
            <input type='email' placeholder='Email address' className={styles.input}/>
            <button className={styles.get}>Get Started ></button>
        </div>
        </div>
    </div>
    
 
  )
}

export default Asked