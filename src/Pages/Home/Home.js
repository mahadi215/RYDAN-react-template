import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import WhyUs from '../WhyUs/WhyUs';
import Courses from '../Courses/Courses';
import StatusSection from '../StatusSection/StatusSection';
import NewsSection from '../NewsSection/NewsSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <WhyUs></WhyUs>
           <Courses></Courses>
           <StatusSection></StatusSection>
           <NewsSection></NewsSection>
        </div>
    );
};

export default Home;