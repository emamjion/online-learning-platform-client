import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaStar } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const CoursesCard = ({course}) => {
    const { courseName, id, lesson, rating, courseImg, student} = course;
    return (
        <div>
            <img 
                src={courseImg}
                className='w-[480px] h-[280px] rounded-lg hover:scale-105 duration-500 cursor-pointer'
            />
            <div>
                <h1 className='text-xl font-medium my-4'>{courseName}</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <span className='text-[#569bd3]'><FaBookOpen /></span>
                        <p className='text-[#757575]'>{lesson}</p>
                    </div>
                    <div className='flex items-center gap-1 mt-6'>
                        <span className='text-[#569bd3]'><FiUser /></span>
                        <p className='text-[#757575]'>{student}K</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1 mt-6'>
                        <span className='text-[#569bd3]'><FaStar /></span>
                        <p className='text-[#757575]'>{rating}K</p>
                    </div>
                    <div>
                        <Link className='text-[#569bd3] font-medium text-sm'>Enroll Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;