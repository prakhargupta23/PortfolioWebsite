import AnimatedText from '@/components/AnimatedText'
import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { GithubIcon } from '@/components/Icons'
import Link from 'next/link'
import Image from 'next/image'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import p3 from "../../public/images/projects/p-3.png"
import p2 from "../../public/images/projects/p-2.png"
import { motion } from 'framer-motion';
import p1 from "../../public/images/projects/app.png"


const FeaturedProjects = ({type,title,summary,img,link,github}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'/>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.5}}/> 
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Projects</Link>
                </div>
            </div>
        </article>
    )
}

const FramerImage = motion(Image);


const Project = ({title,type,img,link,github}) => {
    return(
        <article className='w-full flex flex-col xitems-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'/>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.5}}/> 
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                
            
                <div className='w-full mt-2 flex items-center justify-between'>
                    
                    <Link href={link} target="_blank" className='underline text-lg font-semibold'>Visit</Link>
                    <Link href={github} target="_blank" className='w-8'><GithubIcon/></Link>
                </div>
            </div>
        </article>
    )
}





const projects = () => {
  return (
    <>
    <Head>
        <title>Prakhar Gupta | Projects Page</title>
        <meta name="description" about="description" />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light dark:bg-dark'>
        <Layout classname="pt-16">
            <AnimatedText text="Featured Projects" className='mb-16'/>
            <div className='grid grid-cols-12 gap-24 gap-y-32'>
                <div className='col-span-12'>
                <FeaturedProjects title="Image to Excel App" summary="The Image to Excel App simplifies grading by allowing users to capture photos of answer sheets. The app automatically extracts question-wise marks and inserts them into an Excel sheet. Utilizing Flutter for the front-end and Python with OpenCV for image processing, it reduces manual data entry, minimizes errors, and accelerates the grading process." link="/" type="Professional Work" github="https://github.com/prakhargupta23/Image-to-Exel-App" img={p1}/>
                
            </div>
            
            <div className='col-span-6'>
            <Project title="LNMIIT GuestHouse Booking" summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency." link="/" type="Professional Project" github="https://github.com/prakhargupta23/guesthouse" img={p3}/>
            </div>

            <div className='col-span-6'>
            <Project title="Portfolio Website" summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency." link="/" type="Personal Project" github="https://github.com/prakhargupta23/PortfolioWebsite" img={p2}/>
            </div>

            

            
                {/* <div className='col-span-12'>
                <FeaturedProjects title="Crypto Screener Application" summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency." link="/" type="Featured Project" github="/" img={project1}/>
                
            </div>


            <div className='col-span-6'>
            <Project title="Crypto Screener Application" summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency." link="/" type="Featured Project" github="/" img={project1}/>
            </div>

            <div className='col-span-6'>
            <Project title="Crypto Screener Application" summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency." link="/" type="Featured Project" github="/" img={project1}/>
            </div> */}

            </div>
            
        </Layout>
    </main>
      
    </>
  )
}

export default projects
