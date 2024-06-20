import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Header() {
  const [toggleMenu, setToggleMenu]  = useState(false);

  return (
   <header className='flex justify-between px-5 py-2 bg-primary hover:text-blue-500'>
    <a className='font-bold text-black hover:text-blue-500'href='#'>IDA</a>
    <nav className='hidden md:block hover:text-blue-500'>
    <ul className='flex text-black'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#Client'>Client</a></li>
      <li><a href='#Project'>Project</a></li>
      <li><a href='#contact'>Contact us</a></li>
    </ul>
    </nav>
    {toggleMenu && <nav className="block md:hidden hover:text-blue-500 ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href='#client'>Client</a></li>
                <li><a href='#Project'>Project</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>
        </nav>}
    <button  onClick={()=>setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-black h-5 hover:text-blue-500'/></button>
    </header>
  )
}
