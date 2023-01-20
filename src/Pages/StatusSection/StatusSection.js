import React from 'react';
import './StatusSection.css'
import icon1 from '../../assest/icon/graduated.png'
import icon2 from '../../assest/icon/pc.png'
import icon3 from '../../assest/icon/verify.png'

const StatusSection = () => {
    return (
        <div className='status bg-blue-800 flex justify-center gap-10 items-center p-20'>
            <div>
                <div className='p-4 mx-auto w-16 h-16 rounded-full bg-white'><img src={icon1} alt="" /></div>
                <h4 className=''>86</h4>
                <p>ACTIVE STUDENTS</p>
            </div>
            <div>
                <div className='p-4 mx-auto w-16 h-16 rounded-full bg-white'><img src={icon3} alt="" /></div>
                <h4>56</h4>
                <p>REGISTERED STUDENTS</p>
            </div>
            <div>
                <div className='p-4 mx-auto w-16 h-16 rounded-full bg-white'><img src={icon2} alt="" /></div>
                <h4>3</h4>
                <p>ONLINE COURSES</p>
            </div>

        </div>
    );
};

export default StatusSection;