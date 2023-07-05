'use client';
import styles from './home.module.css';
import {DiJava,DiJavascript1,DiHtml5,DiCss3Full,DiMongodb} from 'react-icons/di';
import { motion} from 'framer-motion';


export default function HomeTrue() {
  const introText : String = `Hello ! 
  I am a junior dev looking forward to helping your company while gaining valuable experience along the way !
  `;
  return (
   <motion.main className={styles.main} exit={{opacity:0}}>
      <motion.div key={'hey'}  onAnimationComplete={()=>{document.getElementById('hey')?.remove()}}  whileHover={{scale:1.02}} transition={{duration:2, type:'tween'}} initial={{x:-1700,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-1700 ,transition:{duration:2}}} className={styles.intro}><motion.h1 exit={{x:-1700}} className={styles.introText}>{introText}</motion.h1></motion.div>
      <div style={{display:'flex',width:"100%",marginTop:"5%"}}>
        <motion.div whileHover={{scale:1.02}} transition={{duration:2 ,type:'tween'}}  initial={{x:-800,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-800}} className={styles.technical}>
          <h1>Technical skills:</h1>
          <div className={styles.iconsSet}>
            <div className={styles.iconDiv}>
              <DiJava className={styles.icon}color='#000000'style={{fontWeight:'bold'}}/>
              <h2>JAVA</h2>
            </div>
            <div className={styles.iconDiv}>
              <DiJavascript1 className={styles.icon}color='#000000'/>
              <h2>JAVASCRIPT</h2>
            </div>
            <div className={styles.iconDiv}>
              <DiHtml5 className={styles.icon}color='#000000'/>
              <h2>HTML</h2>
            </div>
            <div className={styles.iconDiv}>
              <DiCss3Full className={styles.icon}color='#000000'/>
              <h2>CSS</h2>
            </div>
            <div className={styles.iconDiv}>
              <DiMongodb className={styles.icon}color='#000000'/>
              <h2>MongoDB</h2>
            </div>
          </div>
          <h2 className={styles.additional}>- Solid understanding of algorithms</h2>
          <h2 className={styles.additional}>- Having a grasp on the MVC pattern</h2>
          <h2 className={styles.additional}>- Familiarity with mainstream frameworks/libraries</h2>
        </motion.div>
        <motion.div  whileHover={{scale:1.02}} transition={{duration:2, type:'tween'}}  initial={{x:800,opacity:0}} animate={{x:0,opacity:1}} exit={{x:800}} className={styles.personal}>
          <h1>Soft skills:</h1>
          <h2>- Friendliness</h2>
          <h2>- Adaptability</h2>
          <h2>- Creativity</h2>
          <h2>- Problem-solving</h2>
          <h2>- Ability to speak in several languages</h2>
          <h2>- Reliability</h2>
        </motion.div>
      </div>
    </motion.main>
  )
}