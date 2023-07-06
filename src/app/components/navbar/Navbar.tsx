'use client';
import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import './navbar.css'; 
const Navbar = () => {
  const vars = {
    properties:{
      scale:1.2 ,
      textShadow: '0px 0px 8px rgba(0,0,0,0)',
      boxShadow :'0px 0px 8px rgba(0,0,0,0)'
    }}
    
    return (
    <motion.div className='navbar' transition={{duration:0.5}} initial={{opacity:0}} animate={{opacity:1}} >
        <motion.h1 className='name' transition={{duration:2 ,delay:1}} initial={{opacity:0}} animate={{opacity:1}} >Sultanov Yerzhan</motion.h1>
        <div className='linkContainer'>
          <Link  href="ortf/" className='link'>
            <motion.button initial={{opacity:0}}transition={{duration:1}} animate={{opacity:1}} variants={vars} whileHover='properties' >About</motion.button>
          </Link>
          <Link  href="/projects" className='link'>
            <motion.button initial={{opacity:0}} transition={{duration:1.5}} animate={{opacity:1}} variants={vars} whileHover='properties'>Projects</motion.button>
          </Link>
          <Link href="/contact" className='link'>
            <motion.button initial={{opacity:0}} transition={{duration:2}} animate={{opacity:1}} variants={vars} whileHover='properties'>Contact</motion.button>
          </Link>
        </div>
    </motion.div>
  );
}
export default Navbar;
