import React from 'react';
import logo from '../../../assets/images/logo/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='md:flex items-center justify-between px-[120px]'>
            <Link to='/' className='md:flex items-center text-center md:text-left'>
                <img src={logo} className='w-32 mx-auto' />
                <h1 className='-ml-6 font-bold text-3xl'>Learners<span className='text-[#569BD3]'>.</span></h1>
            </Link>
            <div className='md:flex items-center mt-6 md:mt-0'>
                <ul className='navlist text-center md:text-left'>
                    <NavLink className='md:mr-10 font-medium text-lg hover:text-[#569BD3] duration-500 block md:inline' to='/'>Home</NavLink>
                    <NavLink className='md:mr-10 font-medium text-lg hover:text-[#569BD3] duration-500 block md:inline' to='/about'>About</NavLink>
                    <NavLink className='md:mr-10 font-medium text-lg hover:text-[#569BD3] duration-500 block md:inline' to='/courses'>Courses</NavLink>
                    <NavLink className='md:mr-10 font-medium text-lg hover:text-[#569BD3] duration-500 block md:inline' to='/pages'>Pages</NavLink>
                    <NavLink className='md:mr-10 font-medium text-lg hover:text-[#569BD3] duration-500 block md:inline' to='/contact'>Contact</NavLink>
                </ul>
                <div className='md:ml-6 flex items-center gap-2 flex-col md:flex-row mt-3 md:mt-0'>
                    <span className='text-[#569BD3]'> <FaPhoneAlt /> </span>
                    <p className=''>+880123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;