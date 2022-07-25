import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../assets/lie-down.png'

const NavBar = () => {
    const [ nav, setNav ] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-10 bg-silver-100 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <img src={logo} alt='Black Hills Dogos Logo'className='hidden md:flex w-10 h-[40px] mr-3' />
                    <h1 className=' lg:text-3xl font-bold mr-8 ml-2 md:text-xl sm:text-4xl text-4xl text-center' >BLACK HILLS DOGOS</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop Acessories</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4' >
                    <button className='border-none bg-transparent text-black mr-4 px-7'>Sign In</button>
                    <button className=' px-7 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-6 ' />: <XIcon className='w-5' />}
                 
                </div>
            </div>
            <ul className='absolute bg-silver-100 w-full px-8 '>
                <li className='border-b-2 border-silver-200 w-full text-left'>Home</li>
                <li className='border-b-2 border-silver-200 w-full text-left'>About</li>
                <li className='border-b-2 border-silver-200 w-full text-left'>Shop Acessories</li>
                <li className='border-b-2 border-silver-200 w-full text-left'>Contact</li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-green border-green mr-4 mb-4 px-7 py-3'>Sign In</button>
                    <button className=' px-7 py-3 text-silver-100'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default NavBar