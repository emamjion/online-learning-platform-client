import React from 'react';
import { SlNote } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { PiCertificateLight } from "react-icons/pi";

const Facilities = () => {
    return (
        <div className='my-24 px-6 md:px-[240px] md:flex items-center justify-around gap-10'>
            <div className='text-center mt-8 md:mt-0'>
                <span className='flex items-center justify-center text-[#569bd3] text-3xl'><SlNote /></span>
                <h1 className='text-lg font-semibold my-3'>Quick Learning</h1>
                <p className='text-[#757575] text-sm'>
                    Quick learning is a concept that emphasizes the ability to rapidly acquire new skills or knowledge. In the context of an online education platform, offering quick learning opportunities can be a significant advantage. 
                </p>
            </div>
            <div className='text-center mt-8 md:mt-0'>
                <span className='flex items-center justify-center text-[#569bd3] text-3xl'><BiSupport /></span>
                <h1 className='text-lg font-semibold my-3'>All Time Support</h1>
                <p className='text-[#757575] text-sm'>
                    Providing all-time support is a crucial aspect of any online education platform, as it ensures that learners can receive assistance whenever they need it.
                </p>
            </div>
            <div className='text-center mt-8 md:mt-0'>
                <span className='flex items-center justify-center text-[#569bd3] text-3xl'><PiCertificateLight /></span>
                <h1 className='text-lg font-semibold my-3'>Certification</h1>
                <p className='text-[#757575] text-sm'>
                    Certification is a valuable component of an online education platform as it provides learners with tangible proof of their skills and accomplishments.
                </p>
            </div>
        </div>
    );
};

export default Facilities;