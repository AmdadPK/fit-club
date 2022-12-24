import React from 'react'
import Header from '../Header/Header'
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
import './Hero.css'
import heroImage from '../../assets/hero_image.png'
import heroImageBack from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

const Hero = () => {
    const transitions = {type: 'spring', duration: 3}
  return (
    <div className='hero'>
        <div className='blur hero-blur'></div>
        <div className="left-h">
            <Header/>

            <div className="the-best-ad">
                <motion.div
                initial={{left: '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transitions, type: 'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                        .typeString("Ideal body")
                        .pauseFor(1000)
                        .start();
                    }}
                />
                <div className='span'>
                    In here we will help you to shape and build your ideal body and live up your life to fullest
                </div>
            </div>

            <div className="figures">
                <div>
                    <span>+ 140</span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                    <span>+ 978</span>
                    <span>Members joined</span>
                </div>
                <div>
                    <span>+ 50</span>
                    <span>Fitness Programs</span>
                </div>
            </div>

            <div className="hero-buttons">
               <button className='btn'>Get Start</button> 
               <button className='btn'>Learn More</button> 
            </div>
        </div>

        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div className="heart-rate"
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transitions}
            >
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            <img src={heroImage} className='hero-image' alt="" />
            <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transitions}
             src={heroImageBack} className='hero-image-back' alt="" />

            <motion.div className="calories"
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={transitions}
            >
                <img src={calories} alt="" />
                <div>
                    <span>Calories burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero