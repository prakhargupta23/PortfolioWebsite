import React from 'react'
import { motion,useScroll } from 'framer-motion'


const LiIcon = ({reference}) => {
    const {scrollYProgress}=useScroll(
        {
            target: reference,
            offset: ["center end","center center"]
        }
    )
  return (
    <figure className="-rotate-90 absolute left-0 stroke-dark dark:stroke-light">
        <svg widths="75" height="75" viewBox='0 0 100 100'>
            <circle cx="70" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-2 fill-none'/>
            <motion.circle cx="70" cy="50" r="20" className='stroke-2 fill-light dark:fill-dark' style={{pathLength:scrollYProgress}}/>
            <circle cx="70" cy="50" r="10" className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark'/>
         </svg>
      
    </figure>
  )
}

export default LiIcon
