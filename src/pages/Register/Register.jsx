import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const {register, handleSubmit, reset, formState: {error}} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;

            updateUserProfile(data.name, data.photo)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User has been created",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                navigate('/login');
            })
            .catch(error => console.log(error))
        })
    }
    
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-[#ddedfa] md:w-[600px] p-12 rounded-lg'>
                <h1 className='text-2xl font-semibold text-center mb-6'>Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col'>
                    <div>
                        <input 
                            type="text"
                            placeholder='Your Name'
                            className='md:w-[300px] h-10 px-3 rounded-[30px] text-sm'
                            name='name'
                            {...register("name")}
                        />
                    </div>
                    <div className='mt-3'>
                        <input 
                            type="text"
                            placeholder='Your Photo URL'
                            className='md:w-[300px] h-10 px-3 rounded-[30px] text-sm'
                            name='photo'
                            {...register("photo")}
                        />
                    </div>
                    <div className='mt-3'>
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
                            value='Register'
                            className='bg-[#569bd3] px-6 py-2.5 text-white rounded-[30px] cursor-pointer'
                        />
                    </div>
                </form>
                <div className='text-center mt-4 text-sm'>
                    <span className='text-[#757575]'>Already a user?</span> <Link className='text-[#569bd3] underline' to='/login'>Login</Link>
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

export default Register;