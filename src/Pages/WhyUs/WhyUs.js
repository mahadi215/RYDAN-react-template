import React from 'react';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className='p-16'>
            <h2 className='text-2xl font-bold  text-center'>WHY CHOOS US</h2>
            <div className='grid grid-cols lg:grid-cols-2 gap-10'>
                <ul className="steps steps-vertical ">
                    <li className="step step-primary text-right "><div>
                        <h2 className=''>VARITY COURSES</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quas magnam quae voluptatum voluptates asperiores iusto errorquo sed nobis</p>
                    </div></li>
                    <li className="step step-primary"><div>
                        <h2>ATTRACTIVE PRICES</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quas magnam quae voluptatum voluptates asperiores iusto errorquo sed nobis</p>
                    </div></li>
                </ul>
                <div>
                    <ul className="steps steps-vertical">
                        <li className="step step-primary">
                            <div>
                                <h2>EVENTS</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas magnam quae voluptatum voluptates asperiores iusto errorquo sed nobis</p>
                            </div></li>
                        <li className="step step-primary"><div>
                            <h2>TALENTE TEACHERS</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quas magnam quae voluptatum voluptates asperiores iusto errorquo sed nobis</p>
                        </div></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;