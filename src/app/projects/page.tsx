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
import cart from './static/cart.png';
import check from './static/check.png';
import redir from './static/redir.png';


const Projects = () => {
  const [first,setFirst] = useState(false);
  const [second,setSecond] = useState(false);
  const [third,setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const projectNames=['"Movies API"','"2D Tanks Game"','"HtmlTestCreator"','"Oqiga"','"foodOrderingSystem"'];
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
  const firstContent = "Это многосервисное приложение, демонстрирующее современную микросервисную архитектуру. Система создана с использованием Spring Boot, Docker, Kafka и PostgreSQL для обработки заказов и платежей в режиме реального времени.";
  const thirdContent = "Простой API для взаимодействия с базой данных MongoDB. Позволяет получать всю необходимую информацию о фильмах и даёт пользователям возможность оставлять отзывы.";
  const secondContent = "Oqiga — это платформа для поиска и организации вечеринок, написанная на Go с использованием HTMX и SQLite.";
  const forthContent = "‘TwoTanks’ — это игра на JavaFX для двух игроков. В игре вы можете сразиться на одной клавиатуре с интуитивно понятным управлением. В начале игры можно ввести имена игроков и начать эпическую битву.";
  return (
      <m.div className='projects' exit={{opacity:0}}>
        <m.div onClick={e=>{setFirst(first===false)}} variants={devProps} whileHover='hover' initial={{x:1700,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:'tween'}} exit={{x:1700}} className='project'>
        <m.h1>{projectNames[4]}</m.h1>
          <div className='imgContainer'>
            <Image src={cart} alt="FirstPic" className='img'/>
            <Image src={check} alt="SecondPic" className='img'/>
            <Image src={redir} alt="ThirdPic" className='img'/>
          </div>
          {first===true && <div><p>{firstContent}</p><a href='https://github.com/alogsDiu/foodOrderingSystem'><BiLogoGithub className='icon'/></a></div>}
        </m.div>
        <m.div onClick={e=>{setSecond(second===false)}} variants={devProps} whileHover='hover' initial={{x:1700,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:'tween'}} exit={{x:1700}} className='project'>
        <m.h1>{projectNames[3]}</m.h1>
          <div className='imgContainer'>
            <Image src={oqigaLogin} alt="FirstPic" className='img'/>
            <Image src={oqigaProfile} alt="SecondPic" className='img'/>
            <Image src={oqigaPartiesChat} alt="ThirdPic" className='img'/>
          </div>
          {second===true && <div><p>{secondContent}</p><a href='https://github.com/alogsDiu/oqiga'><BiLogoGithub className='icon'/></a></div>}
        </m.div>
        <m.div onClick={e=>{setThird(third===false)}} variants={devProps} whileHover='hover' initial={{x:1700,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:'tween'}} exit={{x:1700}} className='project'>
        <m.h1>{projectNames[0]}</m.h1>
          <div className='imgContainer'>
            <Image src={allMovies} alt="FirstPic" className='img'/>
            <Image src={selectedMovie} alt="SecondPic" className='img'/>
            <Image src={reviewController} alt="ThirdPic" className='img'/>
          </div>
          {third===true && <div><p>{thirdContent}</p><a href='https://github.com/alogsDiu/MoviesAPI'><BiLogoGithub className='icon'/></a></div>}
        </m.div>
        <m.div onClick={e=>{setFourth(fourth===false)}} variants={devProps} whileHover='hover'  initial={{x:-1700,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2 ,type:'tween' , delay:0.5}} className='project'>
          <m.h1>{projectNames[1]}</m.h1>
          <div className='imgContainer'>
            <Image  src={opening} alt="FirstPic" className='img'/>
            <Image  src={gameProces} alt="SecondPic" className='img'/>
            <Image  src={hit} alt="ThirdPic" className='img'/>
          </div>
          {fourth===true && <div><p>{forthContent}</p><a href='https://github.com/alogsDiu/TwoTanks'><BiLogoGithub className='icon'/></a></div>}
        </m.div>
      </m.div>
  )
}

export default Projects;3