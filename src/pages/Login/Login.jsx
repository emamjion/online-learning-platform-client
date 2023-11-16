import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {
    const {logIn, logOut, googleSignIn} = useContext(AuthContext);
    const {register, handleSubmit, reset, formState: {error}} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    

    const onSubmit = (data) => {
        logIn(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;

            Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            navigate(from, {replace: true});
        })
    }
    const handleGoogleLogin = () => {
        googleSignIn().then((result) => {
            const loggedUser = result.user;

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, {replace: true});
        })
    }
    
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-[#ddedfa] md:w-[600px] p-12 rounded-lg'>
                <h1 className='text-2xl font-semibold text-center mb-6'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col'>
                    <div>
                        <input 
                            type="email"
                            placeholder='Your Email'
                            className='md:w-[300px] h-10 px-3 rounded-[30px] text-sm'
                            name='email'
                            {...register("email")}
                        />
                    </div>
                    <div className='mt-3'>
                        <input 
                            type="password"
                            placeholder='Your Password'
                            className='md:w-[300px] h-10 px-3 rounded-[30px] text-sm'
                            name='password'
                            {...register("password")}
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
                <div className='flex items-center justify-center gap-1 border border-[#569bd3] w-[120px] mx-auto cursor-pointer py-2 rounded-[30px]' onClick={handleGoogleLogin}>
                    <span className='text-[#569bd3]'>< FaGoogle /></span>
                    <span className='font-semibold'>Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;