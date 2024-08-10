import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Crystal from '../../public/Crystal';
import Tree  from '../../public/Tree'
import { Environment, PerspectiveCamera } from '@react-three/drei';

export default function Home() {
  return (
    <>
      <Head>
        <title>Prakhar Gupta | Home Page</title>
        <meta name="description" content="Prakhar Gupta Portfolio" />
      </Head>
      <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
        <Layout classname='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              {/* <Image src={profilePic} alt="codebucks" className="w-full h-auto"/> */}
              <Canvas style={{ height: '100vh' }}>
                <PerspectiveCamera
                  makeDefault
                  position={[10, 7, 12]}
                  fov={110}
                  near={0.5}
                  far={200}
                />
                <ambientLight intensity={0.5}  />
                <directionalLight position={[5, 5, 5]} intensity={0.25} />
                <pointLight position={[-5, -5, 5]} intensity={0.25} />
                <OrbitControls enableZoom={false} />
                <Suspense fallback={null}>
                  <Tree />
                  
                  <Environment preset="forest" />
                </Suspense>
              </Canvas>
              

            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Hi, I'm Prakhar Gupta" className="!text-5xl !text-left"/>
              <p className='my-4 text-base font-medium text-4xl'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/PrakharResume.pdf" target='_blank' className='flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent  hover:border-dark' download={true}>
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                {/* <Link href="mailto:walkar732@gmail.com" target='_blank' className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline'>Contact Me</Link> */}
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
      </main>
    </>
  );
}
