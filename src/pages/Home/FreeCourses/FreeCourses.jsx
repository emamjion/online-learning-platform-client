import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const FreeCourses = () => {
    const [ freeCourses, setFreecourses] = useState([]);
    useEffect(() => {
        fetch('Courses.json')
        .then(res => res.json())
        .then(data => setFreecourses(data))
    }, []);
    
    return (
        <div className='my-24 px-6 md:px-[240px]'>
            <div>
                <h1 className='font-semibold mb-3 text-2xl text-center md:text-left'>Free Courses</h1>
                <p className='md:w-[700px] text-[#757575] text-sm text-center md:text-left'>
                    Offering free courses on Our online education platform can be a powerful strategy to attract learners, build brand awareness, and demonstrate the value of our offerings.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                {
                    freeCourses.filter(course => course.courseType === 'free').map(freeCourse => <div
                        key={freeCourse.id}
                    >
                        <div className='relative'>
                            <img 
                                src={freeCourse.courseImg}
                                className='w-[480px] h-[280px] rounded-lg'
                            />
                            <div className='absolute -right-3 -bottom-4'>
                                <button className='bg-[#569bd3] px-3 py-1 text-white rounded-[30px]'>Free</button>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-xl font-medium my-4'>{freeCourse.courseName}</h1>
                            <div className='flex items-center justify-between mt-6'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-[#569bd3]'><FiUser /></span>
                                    <p className='text-[#757575]'>{freeCourse.student}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span className='text-[#569bd3]'><FaStar /></span>
                                    <p className='text-[#757575]'>{freeCourse.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FreeCourses;