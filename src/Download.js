import React from 'react';
import styles from './Download.module.css';
import pic from './images/boxshot.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Download = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.box}>
              <div>
                <img src={pic} alt='pic' className={styles.pic}/>
              </div>
              <div className={styles.both}>
                <h4>Stranger Things</h4>
                <p className={styles.para}>Downloading...</p>
              </div>
              <div>
               <ArrowDownwardIcon className={styles.download}/>
              </div>
          </div>
          </div>
  


          <div className={styles.right}>
            <div className={styles.three}>
            <p className={styles.show}>Download your</p>
            <p className={styles.watch}>shows to watch</p>
            <p className={styles.off}>offline</p>
            </div>
            <div className={styles.two}>
            <p className={styles.small}>Save your favourites easily and always have</p>
            <p className={styles.next}>something to watch.</p>
            </div>
          </div>
   </div>
  )
}

export default Download;