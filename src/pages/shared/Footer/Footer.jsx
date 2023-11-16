import React from 'react';
import logo from '../../../assets/images/logo/logo.png';
import { FaFacebookF,FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='my-24 md:px-[240px]'>
            <div className='bg-[#ddedfa] md:h-[300px] md:flex justify-around items-center px-6 py-10 md:py-0 text-center md:text-left'> 
                <div>
                    <div className='flex items-center flex-col md:flex-row'>
                        <img 
                            src={logo}
                            className='w-20'
                        />
                        <h1 className='font-bold text-xl md:-ml-4'>VirtuLearn.</h1>
                    </div>
                    <div className='mt-4'>
                        <p className='text-[#757575] text-sm'>Follow us on social media</p>
                        <div className='flex items-center justify-center md:justify-normal mt-8 md:mt-4 gap-8'>
                            <span className='text-xl text-[#569bd3]'><FaFacebookF /></span>
                            <span className='text-xl text-[#569bd3]'><FaTwitter /></span>
                            <span className='text-xl text-[#569bd3]'><FaLinkedinIn /></span>
                            <span className='text-xl text-[#569bd3]'><FaInstagram /></span>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-0'>
                    <h1 className='text-lg font-semibold'>Explore</h1>
                    <ul className='flex flex-col'>
                        <Link className='hover:text-[#569BD3] duration-500 block md:inline mt-2' to='/'>Home</Link>
                        <Link className='hover:text-[#569BD3] duration-500 block md:inline mt-2' to='/about'>About</Link>
                        <Link className='hover:text-[#569BD3] duration-500 block md:inline mt-2' to='/courses'>Courses</Link>
                        <Link className='hover:text-[#569BD3] duration-500 block md:inline mt-2' to='/pages'>Pages</Link>
                    </ul>
                </div>
                <div className='mt-12 md:mt-0'>
                    <h1 className='text-lg font-semibold'>Information</h1>
                    <ul className='flex flex-col mt-2'>
                        <Link className='hover:text-[#569BD3] duration-500 block md:inline mt-2' to=''>Privacy Policy</Link>
                        <Link className='hover:text-[#569BD3] duration-500 block md:inline mt-2' to=''>Membership</Link>
                        <Link className='hover:text-[#569BD3] duration-500 block md:inline mt-2' to=''>Purchases Guide</Link>
                        <Link className='hover:text-[#569BD3] duration-500 block md:inline mt-2' to=''>Term of Service</Link>
                    </ul>
                </div>
                <div className='mt-12 md:mt-0'>
                    <h1 className='text-lg font-semibold'>Get In Touch</h1>
                    <div className='mt-2'>
                        <p className='mt-2 md:mt-6'>
                            Address: <span className='text-[#757575] ml-1'>New York, NY</span>
                        </p>
                        <p className='mt-2 md:mt-6'>
                            Phone: <span className='text-[#757575] ml-1'>+880123 456789</span>
                        </p>
                        <p className='mt-2 md:mt-6'>
                            Email: <span className='text-[#757575] ml-1'>virtulearn@info.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;