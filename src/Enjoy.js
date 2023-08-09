import React from 'react';
import styles from './Enjoy.module.css';
import {DefaultPlayer as Video} from 'react-html5video';
import rightVideo from './videos/video-tv-1.mp4';
import 'react-html5video/dist/styles.css';

const Enjoy = () => {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <p className={styles.leftSide}>Enjoy on your TV</p>
            <p className={styles.smart}>Watch on smart TVs, PlayStation, Xbox,</p>
            <p className={styles.apple}>Chromecast, Apple TV, Blu-ray players and</p>
            <p className={styles.more}>more.</p>
        </div>

        <div className={styles.right}>
          <div className={styles.video}>
            <Video autoPlay loop>
              <source src={rightVideo} type='video/webm'/>
            </Video>   
          </div>   
        </div>
    </div>
  );
};

export default Enjoy;