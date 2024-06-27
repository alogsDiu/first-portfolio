'use client';
import React, { useState } from 'react';
import './static/project.css';
import { motion as m ,AnimatePresence } from 'framer-motion';
import {BiLogoGithub} from 'react-icons/bi';
import Image from 'next/image';
import allMovies from './static/allData.png';
import selectedMovie from './static/selectedData.png';
import reviewController from './static/reviewController.png';
import opening from './static/tanksOpening.png';
import gameProces from './static/gameItself.png';
import hit from './static/hit.png';
import incorrect from './static/inCorrect .png';
import correct from './static/Correct.png';
import questionFormat from './static/questionFormat.png';
import oqigaProfile from './static/profile_oqiga.png';
import oqigaLogin from './static/oqiga_login.png';
import oqigaPartiesChat from './static/parties_chat.png';


const Projects = () => {
  const [first,setFirst] = useState(false);
  const [second,setSecond] = useState(false);
  const [third,setThird] = useState(false);
  const projectNames=['"Movies API"','"2D Tanks Game"','"HtmlTestCreator"','"Oqiga"'];
  const devProps = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.01,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', // Box shadow effect
      transition: {
        duration: 0.3,
      },
    },
  };
  const firstContent="Simple API for interacting with a MongoDB, fetching all the relevant data about movies, and allowing users to post reviews for a specific movie.";
  const secondContent='"TwoTanks" is a JavaFX game designed for two players. The game allows you to play on a single keyboard with intuitive controls. At the start of the game, you can enter your names and engage in an epic battle';
  const thirdContent="This app constructs basic test as a web page with instant check given that questions are provided in a certain format. A bit of history I observed my friend struggling to prepare for an upcoming test. She complained to me about the discomfort associated with test preparation (They had to pair up in order to construct tests for each other and check them manually) . Utilizing the limited knowledge I had at that time, I decided to create an HTML builder as it seemed like the most suitable format for the task at hand.";
  const forthContent='Oqiga is a platform for finding and organizing parties written in Go using HTMX and Sqlite'
  return (
      <m.div className='projects' exit={{opacity:0}}>
        <m.div onClick={e=>{setFirst(first===false)}} variants={devProps} whileHover='hover' initial={{x:1700,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:'tween'}} exit={{x:1700}} className='project'>
        <m.h1>{projectNames[3]}</m.h1>
          <div className='imgContainer'>
            <Image src={oqigaLogin} alt="FirstPic" className='img'/>
            <Image src={oqigaProfile} alt="SecondPic" className='img'/>
            <Image src={oqigaPartiesChat} alt="ThirdPic" className='img'/>
          </div>
          {first===true && <div><p>{forthContent}</p><a href='https://github.com/alogsDiu/oqiga'><BiLogoGithub className='icon'/></a></div>}
        </m.div>
        <m.div onClick={e=>{setFirst(first===false)}} variants={devProps} whileHover='hover' initial={{x:1700,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:'tween'}} exit={{x:1700}} className='project'>
        <m.h1>{projectNames[0]}</m.h1>
          <div className='imgContainer'>
            <Image src={allMovies} alt="FirstPic" className='img'/>
            <Image src={selectedMovie} alt="SecondPic" className='img'/>
            <Image src={reviewController} alt="ThirdPic" className='img'/>
          </div>
          {first===true && <div><p>{firstContent}</p><a href='https://github.com/alogsDiu/MoviesAPI'><BiLogoGithub className='icon'/></a></div>}
        </m.div>
        <m.div onClick={e=>{setSecond(second===false)}} variants={devProps} whileHover='hover'  initial={{x:-1700,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2 ,type:'tween' , delay:0.5}} className='project'>
          <m.h1>{projectNames[1]}</m.h1>
          <div className='imgContainer'>
            <Image  src={opening} alt="FirstPic" className='img'/>
            <Image  src={gameProces} alt="SecondPic" className='img'/>
            <Image  src={hit} alt="ThirdPic" className='img'/>
          </div>
          {second===true && <div><p>{secondContent}</p><a href='https://github.com/alogsDiu/TwoTanks'><BiLogoGithub className='icon'/></a></div>}
        </m.div>
        <m.div onClick={e=>{setThird(third===false)}} variants={devProps} whileHover='hover'  initial={{x:1700,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:'tween', delay:1}} className='project'>
          <m.h1>{projectNames[2]}</m.h1>
          <div className='imgContainer'>
            <Image  src={incorrect} alt="FirstPic" className='img'/>
            <Image  src={correct} alt="SecondPic" className='img'/>
            <Image  src={questionFormat} alt="ThirdPic" className='img'/>
          </div>
          {third===true && <div><p>{thirdContent}</p><a href='https://github.com/alogsDiu/HtmlTestConstructer'><BiLogoGithub className='icon'/></a></div>}
        </m.div>
      </m.div>
  )
}

export default Projects;3