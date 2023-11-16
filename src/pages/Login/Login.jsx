import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-[#ddedfa] md:w-[600px] p-12 rounded-lg'>
                <h1 className='text-2xl font-semibold text-center mb-6'>Login</h1>
                <form onSubmit={handleLogin} className='flex items-center justify-center flex-col'>
                    <div>
                        <input 
                            type="email"
                            placeholder='Your Email'
                            className='md:w-[300px] h-10 px-3 rounded-[30px] text-sm'
                            name='email'
                        />
                    </div>
                    <div className='mt-3'>
                        <input 
                            type="password"
                            placeholder='Your Password'
                            className='md:w-[300px] h-10 px-3 rounded-[30px] text-sm'
                            name='password'
                        />
                    </div>
                    <div className='mt-4'>
                        <input 
                            type="submit"
                            value='Login'
                            className='bg-[#569bd3] px-6 py-2.5 text-white rounded-[30px] cursor-pointer'
                        />
                    </div>
                </form>
                <div className='text-center mt-4 text-sm'>
                    <span className='text-[#757575]'>Not Registered?</span> <Link className='text-[#569bd3] underline' to='/register'>Register</Link>
                </div>
                <hr className='border-[#ccc] my-6' />
                <div className='flex items-center justify-center gap-1 border border-[#569bd3] w-[120px] mx-auto cursor-pointer py-2 rounded-[30px]'>
                    <span className='text-[#569bd3]'>< FaGoogle /></span>
                    <span className='font-semibold'>Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;