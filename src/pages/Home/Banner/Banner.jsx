import React from 'react';
import bannerImg from '../../../assets/images/banner/banner.png';

const Banner = () => {
    return (
        <div className=' mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 items-center md:px-[240px]'>
            <div className='px-12'>
                <h1 className='text-3xl font-semibold mb-3 text-center md:text-left'>Anytime Anywhere Learn on your <br /> Suitable Schedule</h1>
                <p className='mt-6 text-[#757575] text-center md:text-left'>
                    Embark on a transformative journey of knowledge with VirtuLearn. <br /> Our online learning hub is designed to empower minds and <br /> inspire futures. Explore a diverse range of expert-led courses, <br /> unlock new skills, and chart your path to success.
                </p>
                <div className='mt-12 md:mt-8 flex items-center relative'>
                    <div className=''>
                        <input 
                            type="text"
                            placeholder='Search Here'
                            className='border w-[300px] h-10 px-4 rounded-[30px] mx-auto md:mx-0 focus:outline-0'
                        />
                    </div>
                    <div className='absolute -right-2 md:right-[50%]'>
                        <input 
                            type="submit" 
                            value="Search"
                            className='border w-[100px] h-10 bg-[#569BD3] text-white rounded-[30px] cursor-pointer'
                        />
                    </div>
                </div>
            </div>
            <div className='mt-8 md:mt-0'>
                <img 
                    src={bannerImg}
                    className='-ml-24' 
                />
            </div>
        </div>
    );
};

export default Banner;