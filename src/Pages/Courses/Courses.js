import React from 'react';
import img1 from '../../assest/images/1.jpg'
import img2 from '../../assest/images/2.jpg'
import img3 from '../../assest/images/3.jpg'
import './Course.css'

const Courses = () => {
    return (
        <div className='bg-base-200 py-10'>
             <h2 className='text-2xl font-bold text-center'>COURSES</h2>
            <div className='p-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-20 w-full lg:w-2/3 mx-auto'>
            <div className='Course-box'>
                <img src={img1} alt="" />
                <div>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis molestias excepturi fugit
                    </p>
                </div>
            </div>
            <div className='Course-box'>
                <img src={img2} alt="" />
                <div>
                    <h2>Graphix Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis molestias excepturi fugit
                    </p>
                </div>
            </div>
            <div className='Course-box'>
                <img src={img3} alt="" />
                <div>
                    <h2>Digital Marketing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis molestias excepturi fugit
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Courses;