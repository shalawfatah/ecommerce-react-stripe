import Link from 'next/link'
import React from 'react'
import { menu } from './menu'

const Layout = ({children}) => {
  return (
    <div className='relative'>
        <div className='flex items-center gap-2 justify-center my-2 fixed left-0 right-0'>
        {menu.map(item => {
            return <Link className='font-bold text-white bg-black rounded-md px-4 py-1' key={item.id} href={item.path}>{item.text}</Link>
        })} 
        </div>
       {children}
    </div>
  )
}

export default Layout