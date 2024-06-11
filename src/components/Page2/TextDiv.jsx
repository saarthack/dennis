import React, { useRef, useState } from 'react'
import HoveringText from './HoveringText'
import Image from './Image'
import { motion } from 'framer-motion'

const TextDiv = () => {
  const hoverRef = useRef(null)
  const parentRef = useRef(null)
  const overlayRef = useRef(null)


  const [xMove, setXMove] = useState(0)
  const [yMove, setYMove] = useState(0)

  const mouseMoving = (e) => {
    setXMove(e.clientX)
    setYMove(e.clientY)
    hoverRef.current.style.left = (xMove - parentRef.current.getBoundingClientRect().x) + "px"
    hoverRef.current.style.top = (yMove - parentRef.current.getBoundingClientRect().y) + "px"
  }
  const mouseEntering = () => {
    hoverRef.current.style.transform = `translate(-50%,-50%) scale(1)`
  }
  const mouseLeaving = () => {
    hoverRef.current.style.transform = `translate(-50%,-50%) scale(0)`
  }

  return (
    <div
    ref={parentRef}
    onMouseMove={(e) => {
      mouseMoving(e)
    }}
      className='relative'
    >

      <div className='h-full w-full z-50 absolute top-0 left-0 ' 
      
      ref={overlayRef}
      onMouseEnter={() => {
        mouseEntering()
      }}
      onMouseLeave={() => {
        mouseLeaving()
      }}
      >

      </div>

      <div
        ref={hoverRef}
        id='imagediv'
        className='h-[20vw] w-[20vw] -translate-x-1/2 -translate-y-1/2 absolute z-30'
      >
        <div className='h-full w-full overflow-hidden'>
          <img className='h-full w-full object-cover object-center' src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice-810x810-crop-q72.jpg" alt="" />
          <img className='h-full w-full object-cover object-center' src="https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2-810x810-crop-q72.jpg" alt="" />
          <img className='h-full w-full object-cover object-center' src="https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray-810x810-crop-q72.jpg" alt="" />
          <img className='h-full w-full object-cover object-center' src="https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk-810x810-crop-q72.jpg" alt="" />

        </div>

      </div>
      <HoveringText h1={"Twice"} p={"Ineraction & Development"} />
      <HoveringText h1={"The Damai"} p={"Ineraction & Development"} />
      <HoveringText h1={"Fabric"} p={"Ineraction & Development"} />
      <HoveringText h1={"Antakshri"} p={"Ineraction & Development"} />
    </div>
  )
}

export default TextDiv