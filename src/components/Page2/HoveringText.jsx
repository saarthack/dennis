import React from 'react'

const HoveringText = (props) => {
  return (
    <div className='hover:px-40 hover:text-gray-400 transition-all p-20 flex justify-between relative items-center border-t-2'>
        <div id='overlay' className='h-full w-full z-40 absolute top-0 left-0'></div>
        <h1 className='text-9xl'>{props.h1}</h1>
        <p>{props.p}</p>
      </div>
  )
}

export default HoveringText