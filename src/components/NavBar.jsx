import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../assets/lie-down.png'
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    const navRef = React.useRef(null);
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const ToggleMobileNav = (e) => {
        navRef.current.classList.toggle("hidden");
    };

    return (
        <div className='w-full h-[80px] z-10 bg-silver-100 sticky top-0 drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <img src={logo} alt='Black Hills Dogos Logo' className='hidden md:flex w-10 h-[40px] mr-3' />
                    <h1 className=' lg:text-3xl font-bold mr-8 ml-2 md:text-3xl text-3xl text-center' >BLACK HILLS DOGOS</h1>
                    <ul className='hidden lg:flex'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/shop">Shop Acessories</Link></li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='hidden lg:flex pr-4' >
                    <button className='border-none bg-transparent text-black mr-4 px-7'><Link to="/signin">Sign In</Link></button>
                    <button className=' px-7 py-3'><Link to="/signup">Sign Up</Link></button>
                </div>
                <div className='lg:hidden' onClick={() => {
                    handleClick();
                    ToggleMobileNav();
                }}>
                    {!nav ? <MenuIcon className='w-12 ' /> : <XIcon className='w-12' />}

                </div>
            </div>
            <ul ref={navRef} className='absolute lg:hidden hidden bg-silver-100 w-full px-8 '>
                <li className='border-b-2 border-silver-200 w-full text-left'><Link to="/">Home</Link></li>
                <li className='border-b-2 border-silver-200 w-full text-left'><Link to="/about">About</Link></li>
                <li className='border-b-2 border-silver-200 w-full text-left'><Link to="/shop">Shop Acessories</Link></li>
                <li className='border-b-2 border-silver-200 w-full text-left'><Link to="/contact">Contact</Link></li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-green border-green mb-4 px-7 py-3'><Link to="/signin">Sign In</Link></button>
                    <button className=' px-7 py-3 text-silver-100'><Link to="/signup">Sign Up</Link></button>
                </div>
            </ul>
            <Outlet />
        </div>
    )
}

export default NavBar