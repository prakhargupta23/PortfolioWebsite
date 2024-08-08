import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed right-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark animate-spin-slow"} />
            <Link href="mailto:abcd@gmail.com" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-mdborder border-solid border-dark w-20 h-20 rounded-full">Hire Me</Link>
            <span className="absolute"></span>
        </div>
    </div>
  )
}

export default HireMe
