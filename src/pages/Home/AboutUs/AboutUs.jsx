import React from 'react';
import aboutUs from '../../../assets/images/about/aboutus.jpg'

const AboutUs = () => {
    return (
        <div className='my-24 px-6 md:px-[240px] flex items-center flex-col md:flex-row gap-12'>
            <div className='md:w-1/2'>
                <img src={aboutUs} />
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-2xl font-semibold mb-3 text-center md:text-left'>About Us</h1>
                <p className='mb-6 text-[#757575]'>
                    Elevate your learning experience & join VirtuLearn. today and discover the boundless possibilities that await you on the road to educational excellence.
                </p>
                <div className='grid grid-cols-2'>
                    <div className='mb-6'>
                        <span className='font-medium text-xl'>25K</span>
                        <p className='text-[#757575]'>Completed Projects</p>
                    </div>
                    <div className=''>
                        <span className='font-medium text-xl'>12M</span>
                        <p className='text-[#757575]'>Patient Around World</p>
                    </div>
                    <div>
                        <span className='font-medium text-xl'>85M</span>
                        <p className='text-[#757575]'>Ideas Raised Funds</p>
                    </div>
                    <div>
                        <span className='font-medium text-xl'>5K</span>
                        <p className='text-[#757575]'>Categories Served</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;