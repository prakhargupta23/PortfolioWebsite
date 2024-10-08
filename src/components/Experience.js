import React from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({position,company,companyLink,time,address,work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-boldtext-2xl'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
            <span>
                {time} | {address}
            </span>
            <p>{work}</p>
            
        </motion.div>
    </li>
}


const Experience = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
  return (
    <div className='my-64 dark:text-light'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
        <div ref={ref} className='w-[75%] m-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"></motion.div>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position="Software Engineer" company="Google" companyLink="www.google.com" time='2022-Present' address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />

                <Details position="Software Engineer" company="Google" companyLink="www.google.com" time='2022-Present' address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />

                <Details position="Software Engineer" company="Google" companyLink="www.google.com" time='2022-Present' address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />

                <Details position="Software Engineer" company="Google" companyLink="www.google.com" time='2022-Present' address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />
                
                <Details position="Software Engineer" company="Google" companyLink="www.google.com" time='2022-Present' address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />


            </ul>
        </div>
      
    </div>
  )
}

export default Experience
