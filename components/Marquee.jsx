import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-speed=".1"  className='w-full  py-[3vw] bg-[#004D43]'>
      <div className='text flex whitespace-nowrap border-t-2 p-2 border-b-2 overflow-hidden text-white border-[#4D837C]'>
        <motion.h1 
           initial={{ x:"0" }} 
           animate={{ x:"-100%" }} 
           transition={{ repeat: Infinity, ease: "linear", duration: 10, delay: 1 }} 
          className='text-[20vw] leading-none uppercase px-2 py-3  font-bold pr-10'>
          We Are Ochii
        </motion.h1>
        <motion.h1 
          initial={{ x: "0%" }}  // Adjusted initial x value to stagger animation
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 10, delay: 1 }} 
          className='text-[20vw] leading-none uppercase px-2 py-3  font-bold pr-10'>
          We Are Ochii
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee;