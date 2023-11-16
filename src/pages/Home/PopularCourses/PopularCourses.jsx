import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';

const PopularCourses = () => {
    const [ popularCourses, setPopularcourses] = useState([]);
    useEffect(() => {
        fetch('Courses.json')
        .then(res => res.json())
        .then(data => setPopularcourses(data))
    }, []);

    const [visibleCourses, setVisibleCourses] = useState(3);
    const [showAll, setShowAll] = useState(false);

    
    return (
        <div className='my-24 px-6 md:px-[240px]'>
            <div className='md:flex items-center justify-between'>
                <div>
                    <h1 className='font-semibold text-2xl mb-2'>Our Popular Courses</h1>
                    <p className='text-[#757575] md:w-[700px] text-sm'>
                        Dive into our curated collection of popular courses at VirtuLearn, where learning meets demand. Explore cutting-edge content and expertly crafted modules that cater to the latest trends and industry demands.
                    </p>
                </div>
                <div className='mt-6 md:mt-0 text-center md:text-left'>
                    {
                        showAll ? <button 
                        className='bg-[#569bd3] px-6 py-2.5 text-white rounded-[30px]'
                        onClick={() => setShowAll(!showAll)}
                    >See Less</button> :
                    <button 
                        className='bg-[#569bd3] px-6 py-2.5 text-white rounded-[30px]'
                        onClick={() => setShowAll(!showAll)}
                    >See All</button>
                    }
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                {
                    popularCourses.slice(0, showAll ? popularCourses.length : visibleCourses).map(pp => <CoursesCard
                        key={pp.id}
                        course={pp}
                    />)
                }
            </div>
        </div>
    );
};

export default PopularCourses;