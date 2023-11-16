import React from 'react';
import chooseUsImg from '../../../assets/images/ChooseUs/chooseUs.jpg';

const ChooseUs = () => {
    return (
        <div className='my-24 px-6 md:px-[240px] md:flex items-center'>
            <div className='md:w-1/2 p-6'>
                <h1 className='font-semibold mb-3 text-2xl text-center md:text-left'>Why Choose Us</h1>
                <p className='md:w-[600px] text-justify text-[#757575] md:leading-7 text-sm'>
                    Emphasize the quality of your educational content. Highlight any expert instructors, industry professionals, or renowned educators contributing to our platform. Ensure that your platform is easy to navigate and user-friendly. A clean and intuitive interface enhances the overall learning experience.Emphasize flexibility in learning schedules. Offer self-paced courses to accommodate learners with various time commitments.Clearly communicate the value proposition of your courses. If your platform offers competitive pricing or special discounts, make sure to highlight this.
                </p>
            </div>
            <img 
                src={chooseUsImg} 
                className='md:w-1/2 rounded-lg'
            />
        </div>
    );
};

export default ChooseUs;