import React from 'react'
import { plansData } from '../../data/PlanData'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-content' id='plans'>
      <div className="blur plans-blur-left"></div>
      <div className="blur plans-blur-right"></div>
      <div className="programs-header">
          <span className='stroke-text'>Ready to Start</span>
          <span>now withus</span>
          <span className='stroke-text'>Your Journey</span>
      </div>

      <div className="plans">
        {
          plansData.map((plan, index) => (
            <div className="plan" key={index}>
              <span><plan.icon/></span>
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className='features'>
                {
                  plan.features.map((feature , index) => (
                    <div className="feature" key={index}>
                      <img src={whiteTick} alt="" />
                      <span>{feature}</span>
                    </div>
                  ))
                }
              </div>

              <div>
                <span>See more benefits -></span>
              </div>
              <button className='btn'>Join now</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Plans