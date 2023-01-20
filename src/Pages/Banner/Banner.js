import React from 'react';
import { Link } from 'react-router-dom';
import hsePng from '../../assest/images/hse-png.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className=" min-h-screen p-10 banner">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

                <div>
                    <h1 className="text-5xl font-bold text-white">BROADEN YOUR KNOWLEDGE WITH TUTORS</h1>
                    <p className="py-6 text-base-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className=''>
                        <button className="btn btn-primary mr-4">Get Started</button>
                        <button className="btn btn-primary">Contact us</button>
                    </div>
                </div>
                <div className=' flex justify-end items-center'>
                    <img src={hsePng} className=" w-full lg:w-2/3" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;