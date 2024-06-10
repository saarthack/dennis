import React from 'react'
import 'remixicon/fonts/remixicon.css'

const HeroFlex = () => {
  return (
    <div className='flex items-end justify-between absolute top-1/3 w-4/5'>
      <div className='bg-stone-900 w-72 rounded-e-full p-5 justify-between items-center text-white flex'>
        <h2 className='text-xl leading-none'>Located <br />in the <br />Netherlands</h2>
        <div className='bg-gray-400 px-6 py-5 rounded-full'>
          <i className="ri-global-line rotate-12 text-3xl inline-block"></i>
        </div>
      </div>
      <div className='flex flex-col gap-40'>
        <i className="text-white ri-arrow-right-down-line font-light text-5xl"></i>
        <h4 className='text-white text-5xl font-light'>Freelancer <br />Designer & Developer</h4>
      </div>
    </div>
  )
}

export default HeroFlex