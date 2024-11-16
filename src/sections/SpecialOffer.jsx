import React from 'react'
import offer from '../nike_landing_assets/assets/images/offer.svg'
import Button from '../components/Button'
import { arrowRight } from '../nike_landing_assets/assets/icons'
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} 
        className= 'object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className='text-coral-red'>
            Special
          </span> Offer
        </h2>
        <p className="mt-4 sm:max-w-sm-lg info-text lg:max-w-lg">Don’t miss this chance to upgrade your footwear collection with premium comfort and style. Offer ends soon—act fast!</p>
        <p className='lg:w-lg info-text mt-6 mb-5'>Comfort, durability, and style have never been this affordable. </p>
        <div className='flex-wrap flex mt-11 gap-4'>
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray" />
        </div>
        
       
      </div>
    </section>
  )
}

export default SpecialOffer