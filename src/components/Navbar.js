import React from 'react'
import Link from 'next/link'
import Logo from './Logo.js'
import { useRouter } from 'next/router.js'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons.js'
import {motion} from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher.js'


const CustomLink=({href,title,className=""})=>{
  const router=useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[2px] inline-block bg-dark 
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath===href ? 'w-full': 'w-0'} dark:bg-light`}
      >&nbsp;</span>
    </Link>
  )
}


const Navbar = () => {

  const [mode,setMode]=useThemeSwitcher();

  return (
    <div>
      <header className="w-full px-32 py-2 bg-light dark:bg-dark dark:text-light font-medium flex items-center justify-between">
        <nav>
          <CustomLink href="/" title="Home" className='mr-4'/>
          <CustomLink href="/about" title="About" className='mx-4'/>
          <CustomLink href="/projects" title="Projects" className='mx-4'/>
          <CustomLink href="/articles" title="Articles" className='ml-4'/>
        </nav>

        <div className='absoulute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-8'><TwitterIcon/></motion.a>
          <motion.a href="https://github.com/prakhargupta23" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-8'><GithubIcon/></motion.a>
          <motion.a href="https://www.linkedin.com/in/prakhar-gupta-7a1727205/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-8'><LinkedInIcon/></motion.a>

          
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-3 flex items-center justify-center rounded-full p-1"
          >
            {
              mode==="dark"?
              <SunIcon className={"fill:dark"}/>:
              <MoonIcon className={"fill:dark"}/>
            }
          </button>
        </nav>

        
      </header>
    </div>
  )
}

export default Navbar
