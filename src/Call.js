import React from 'react';
import styles from './Call.module.css';

const Call = () => {
  return (
    <div className={styles.main}>
        <div className={styles.all}>
            <p className={styles.para}>Questions? Call 000-800-919-1694</p>
        </div>
        <div className={styles.box}>
            <div className={styles.each}>
                <div className={styles.cont}><u>FAQ</u></div>
                <div className={styles.cont}><u>Media Centre</u></div>
                <div className={styles.cont}><u>Ways to Watch</u></div>
                <div className={styles.cont}><u>Cookie Preferences</u></div>
                <div className={styles.cont}><u>Speed Test</u></div>
            </div>

            <div className={styles.each}>
                <div className={styles.cont}><u>Help Centre</u></div>
                <div className={styles.cont}><u>Investor Relations</u></div>
                <div className={styles.cont}><u>Terms of Use</u></div>
                <div className={styles.cont}><u>Corporate Information</u></div>
                <div className={styles.cont}><u>Legal Notices</u></div>
            </div>

            <div className={styles.each}>
                <div className={styles.cont}><u>Account</u></div>
                <div className={styles.cont}><u>jobs</u></div>
                <div className={styles.cont}><u>Privacy</u></div>
                <div className={styles.cont}><u>Contact Us</u></div>
                <div className={styles.cont}><u>Only on Netflix</u></div>
            </div>
        </div>

        <div className={styles.drop}>
        <select className={styles.color}>
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      <div className={styles.end}>
       <p className={styles.ind}>Netflix India</p>
      </div>
    </div>
  )
}

export default Call