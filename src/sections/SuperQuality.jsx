import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../nike_landing_assets/assets/images'
export const SuperQuality = () => {
  return (
    <section id='about-us'
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className='text-coral-red'>
            Super
          </span>
          <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
        </h2>
        <p className="mt-4 sm:max-w-sm-lg info-text lg:max-w-lg">Discover stylish Nike arrivals, quality comfort, and innovation for your active life. Unmatched comfort, durability, and style in every step. Made with premium materials and crafted to perfection, our shoes are designed to last and impress. Perfect for work, play, or special occasions—elevate your footwear game today</p>
        <p className='lg:w-lg info-text mt-6 mb-5'>Our dedication to detail ensures customers satisfaction</p>
        <div className='w-full'>
          <Button label="View details"/>
        </div>
        
       
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img 
        src={shoe8} 
        alt="shoe8"
        width={570}
        height={522} />
      </div>
    </section>
  )
}

export default SuperQuality