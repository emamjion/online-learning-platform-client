import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import PopularCourses from '../PopularCourses/PopularCourses';
import ChooseUs from '../ChooseUs/ChooseUs';
import Facilities from '../Facilities/Facilities';
import FreeCourses from '../FreeCourses/FreeCourses';

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
            {/* Free Courses */}
            <FreeCourses/>
        </div>
    );
};

export default Home;