import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import PopularCourses from '../PopularCourses/PopularCourses';
import ChooseUs from '../ChooseUs/ChooseUs';
import Facilities from '../Facilities/Facilities';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner/>
            {/* AboutUs */}
            <AboutUs/>
            {/* Popular Courses */}
            <PopularCourses/>
            {/* Why Choose Us */}
            <ChooseUs/>
            {/* Facilities */}
            <Facilities/>
        </div>
    );
};

export default Home;