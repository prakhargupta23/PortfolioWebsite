import React from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({type,time,place,info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='text-lg font-bold capitalize'>{type}</h3>
            <span className='font-boldtext-2xl'>
                {time} | {place}
            </span>
            <p className='font-boldtext-2xl'>{info}</p>
            
        </motion.div>
    </li>
}


const Education = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
  return (
    <div className='my-64 dark:text-light'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
        <div ref={ref} className='w-[75%] m-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"></motion.div>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details type="Bachelor of Technology In Computer Science and Engineering" time="2021-2025" place="The LNM Institute of Information Technology (LNM-IIT Jaipur)" info="Relevant courses included Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks and Artificial Intelligence."/>

                <Details type="12th Standard" time="2020" place="Lord Buddha Public School(Kota)" info="Relevant courses included Physics Chemistry Mathematics Physical Education and English."/>

                <Details type="10th Standard" time="2018" place="Delhi Public School Kalyanpur(Kanpur)" info="Relevant courses included Physics Chemistry Mathematics Biology Hindi and English."/>


            </ul>
        </div>
      
    </div>
  )
}

export default Education
