import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            { noHeaderFooter || <Navbar/> }
            <Outlet/>
            { noHeaderFooter || <Footer/> }
        </div>
    );
};

export default MainLayout;