'use client'
import React from 'react';
import './footer.css';
import {BiLogoInstagramAlt,BiLogoGithub} from 'react-icons/bi';
import { motion } from 'framer-motion';
const Footer = () => {
  const vars = {
    whileHover:{ scale:1.02 , x:50, transition:{duration: 2 , type: "tween"}}
  }
  return (
    <motion.div className='footer' >
      <h3>Contacts:</h3>
      <motion.h5 variants={vars} whileHover='whileHover'>+7 777-137-84-20</motion.h5>
      <motion.h5 variants={vars} whileHover='whileHover'>sultanoverjan22@gmail.com</motion.h5>
      <div className="allIcons" >
        <BiLogoInstagramAlt  className='icon' href='https://www.instagram.com/erzzhan_'/>
        <BiLogoGithub className='icon' href='https://github.com/alogsDiu'/>
      </div>
    </motion.div>
  )
}

export default Footer