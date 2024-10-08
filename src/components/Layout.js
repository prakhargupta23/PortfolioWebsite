import React from 'react'

const Layout = ({children,classname}) => {
  return (
    <div className={` w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${classname}`}>
      {children}
    </div>
  )
}

export default Layout
