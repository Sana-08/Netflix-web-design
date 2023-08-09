import React from 'react';
import styles from './Watch.module.css';
import {DefaultPlayer as Video} from 'react-html5video';
import rightVideo from './videos/video-2.mp4';
import 'react-html5video/dist/styles.css';

const Watch = () => {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <p className={styles.para}>Watch everywhere</p>
       
        <div className={styles.side}>
            <p className={styles.tv}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        </div>


        <div className={styles.right}>
            <div className={styles.video}>
            <div className={styles.back}>
              <Video autoPlay loop>
              <source src={rightVideo} type='video/webm'/>
              </Video>  
            </div> 
      </div>  
        </div>
    </div>
  )
}

export default Watch