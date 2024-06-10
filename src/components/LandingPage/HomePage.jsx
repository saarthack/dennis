import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroImage from './HeroImage'
import HeroText from './HeroText'

const HomePage = () => {
  return (
    <div className='h-auto'>
      <Navbar />
      <HeroImage />
      <HeroText />
    </div>
  )
}

export default HomePage