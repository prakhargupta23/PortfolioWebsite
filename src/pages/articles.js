import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { motion,useMotionValue } from 'framer-motion';
import networkautologin from "../../public/images/articles/networklogin.png"
import { useRef } from 'react';
import p2 from "../../public/images/projects/p-2.png"
import p3 from "../../public/images/projects/p-3.png"
import app from "../../public/images/projects/app.png"



const FramerImage = motion(Image);


const MovingImg = ({title,img,link}) => {

    const x=useMotionValue(0);
    const y=useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display="inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    
    function handleMouseLeave(event){
        imgRef.current.style.display="none";
        x.set(event.pageX);
        y.set(-10);
    }

    return(
        <Link href={link} target="_blank" 
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
            style={{x:x,y:y}}
            initial={{opacity:0}}
            whileInView={{opacity : 1 , transition : { duration : 0.2 }}}
            ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg"/>
        </Link>
    );
};



const Article = ({img,title,date,link}) => {
    return(
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img,title,time,summary,link}) => {
    return(
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'/>
            <Link href={link || "/"} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.5}}/> 
            </Link>
            <Link href={link || "/"} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}



const articles = () => {
  return (
    <>
        <Head>
            <title>Prakhar Gupta | Posts Page</title>
            <meta name="description" about="description" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout classname="pt-16">
                <AnimatedText text="Unlock your potential with every step forward." className='mb-16' />
                {/* <ul className='grid grid-cols-2 gap-16'>
                    <FeaturedArticle title="Build A Custom Pagination Component In Reactjs From Scratch" summary="
Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project." time="9 min read" link='/' img={project1} />
                    <FeaturedArticle title="Build A Custom Pagination Component In Reactjs From Scratch" summary="
Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project." time="9 min read" link='/' img={project1} />
                </ul> */}

                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Posts</h2>
                <ul>
                    <Article
                    title="ImagetoExcelApp"
                    date="April 15,2024"
                    link="https://github.com/prakhargupta23/Image-to-Exel-App"
                    img={app}
                    />
                    
                    <Article
                    title="Portfolio Website"
                    date="May 10,2024"
                    link="https://github.com/prakhargupta23/PortfolioWebsite"
                    img={p2}
                    />
                    <Article
                    title="LNMIIT GuestHouse Booking Website"
                    date="April 4,2023"
                    link="https://github.com/prakhargupta23/guesthouse"
                    img={p3}
                    />
                    <Article
                    title="LNMIIT Network Auto-login"
                    date="March 22,2023"
                    link="https://github.com/prakhargupta23/LNMIIT-Network-Autologin"
                    img={networkautologin}
                    />
                    
                </ul>
            </Layout>
        </main>
      
    </>
  )
}

export default articles
