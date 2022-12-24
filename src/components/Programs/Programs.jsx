import React from 'react'
import { programsData } from '../../data/ProgramsData'
import { FaArrowRight } from "react-icons/fa";
import './Programs.css'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>To shape you</span>
        </div>
        <div className='programs-categories'>
            {
                programsData.map((program, index) => (
                    <div className="category" key={index}>
                        <span>
                            <program.icon />
                        </span>
                        <span>{program.header}</span>
                        <span>{program.details}</span>
                        <span>Join Now <FaArrowRight/></span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Programs