import React, { useContext } from 'react';
import logo from '../../../assets/images/logo/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut().then(() => {}).catch(error => console.log(error))
    }
    
    return (
        <div className='md:flex items-center justify-between md:px-[240px]'>
            <Link to='/' className='md:flex items-center text-center md:text-left'>
                <img src={logo} className='w-32 mx-auto md:mx-0' />
                <h1 className='-ml-6 font-bold text-3xl'>VirtuLearn<span className='text-[#569BD3]'>.</span></h1>
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
            <div>
                <span>{user?.displayName}</span>
                {
                    user ? <>
                        <Link onClick={handleLogout} className='ml-6 bg-[#569bd3] px-6 py-2.5 text-white rounded-[30px]'>
                    Logout
                </Link>
                    </> : <>
                        <Link className='ml-6 bg-[#569bd3] px-6 py-2.5 text-white rounded-[30px]' to='/login'>
                        Login
                </Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;