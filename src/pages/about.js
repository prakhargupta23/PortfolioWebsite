import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import profilePic from "../../public/images/profile/profile-pic.png"
import Image from 'next/image'
import { motionValue, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'





const AnimatedNumbers = ({value}) => {
    const ref=useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000});
    const isInView = useInView(ref,{once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView,value,motionValue])

    useEffect(() => {
        springValue.on("change", (latest)=> {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        }
        
        ) 
    },[springValue,value])


    return <span ref={ref}></span>
}




const about = () => {
  return (
    <>
    <Head>
        <title>Prakhar Gupta | About Page</title>
        <meta name="description" about="description" />
    </Head>
    <main className='w-full flex flex-col items-center justify-center'>
        <Layout className="pt-16">
            <AnimatedText text="Passion fuels Purpose!" className='mb-16'/>
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start dark:text-light'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
                    <p className='my-4 font-medium'>Hi, I&apos;m Prakhar Gupta, a web developer with a passion for creating beautiful, functional, 
                    and user-centered digital experiences. With a fresher in the field. I am always looking for 
                    new and innovative ways to bring my clients&apos; visions to life.</p>
                    <p className='my-4 font-medium'>I believe that design is about more than just making things look pretty – it&apos;s about solving problems and 
                    creating intuitive, enjoyable experiences for users. </p>
                </div>
            
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8' >
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                <Image src={profilePic} alt="profile image" className='w-full h-auto rounded-2xl'/>
            </div>

            <div className='col-span-2 flex flex-col items-start justify-between dark:text-light'>

                <div className='flex flex-col items-end justify-center '>
                    <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={5}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>Projects Completed</h2>
                    
                </div>     
                
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={1}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>Years of Experience</h2>
                    
                </div>     

            </div>


            </div>
            <Skills/>
            {/* <Experience/> */}
            <Education/>
        </Layout>

    </main>
    </>
  )
}

export default about
