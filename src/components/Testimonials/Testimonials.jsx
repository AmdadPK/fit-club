import React from 'react'
import { useState } from 'react'
import { testimonialsData } from '../../data/TestimonialsData'
import { motion } from "framer-motion"
import './Testimonials.css'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {

    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    const transitions = {type: 'spring', duration: 3}

  return (
    <div className='testimonials' id='testimonials'>
        <div className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transitions}
            >
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color: 'var(--green)'}}>{testimonialsData[selected].name} </span>
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className='right-t'>
            <motion.div
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transitions, duration: 2}}
            ></motion.div>
            <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transitions, duration: 2}}
            ></motion.div>
            <motion.img
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transitions}
             src={testimonialsData[selected].image} alt="" />

            <div className='arrows'>
                <img src={leftArrow} alt="" 
                onClick={() => {
                    selected === 0 ? setSelected(tLength - 1):
                    setSelected((prev) => prev - 1)
                }}
                />
                <img src={rightArrow} alt="" 
                onClick={() => {
                    selected === tLength - 1 ? setSelected(0):
                    setSelected((prev) => prev + 1)
                }}
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonials