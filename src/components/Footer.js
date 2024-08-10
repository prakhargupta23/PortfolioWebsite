import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light'>
        <Layout classname="py-8 flex items-center justify-between">
            <span>{new Date().getFullYear()}&copy;All Rights Reserved.</span>
            <div className='flex items-center'>
                Built by Prakhar
            </div>
            <Link href="https://www.linkedin.com/in/prakhar-gupta-7a1727205/" target="_blank" className="underline underline-offset-2">Let&apos;s Connect</Link>

        </Layout>

      </footer>
    </div>
  )
}

export default Footer
