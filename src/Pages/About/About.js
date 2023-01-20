import React from 'react';
import aboutimg from '../../assest/images/about.jpg'
const About = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-2 p-10 mx-10'>
                <div className=''>
                    <img className='w-full' src={aboutimg} alt="" />
                </div>
                <div className=' p-16 flex flex-col justify-center items-center '>
                    <h2 className='text-2xl font-bold text-center mb-2'>ABOUT US</h2>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur veritatis fugit est provident quibusdam quis reiciendis, beatae neque harum maxime laborum. Esse, deserunt sunt debitis quasi officiis molestiae necessitatibus.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur veritatis fugit est provident quibusdam quis reiciendis, beatae neque harum maxime laborum. Esse, deserunt sunt debitis quasi officiis
                    </p>
                    <button className='btn btn-primary mt-4'>Follow Us</button>
                </div>
            </div>
        </section>
    );
};

export default About;