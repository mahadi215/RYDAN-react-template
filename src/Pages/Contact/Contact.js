import React from 'react';
import locationImg from '../../assest/icon/location.png'
import phoneImg from '../../assest/icon/phone.png'
import mailImg from '../../assest/icon/mail.png'
// import logo from '../../assest/logo/RYDAN-LOGO.png'

const Contact = () => {
    return (
        <section className='p-8'>
            <h2 className='text-2xl font-bold text-center mb-4'>CONTACT US</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 shadow-xl justify-center w-full lg:w-2/3 mx-auto border'>
                <div className='contact-info bg-gradient-to-tr from-blue-900 to-blue-700 p-10 '>
                    <div>
                        <h2 className='text-xl text-white font-bold'>Let's Get In Touch</h2> <br />
                        <h2 className=' text-base-200'>We'r open to any suggetion or just to have a chat</h2>
                        <div className='mt-8 lg:mt-20 '>
                            <h2 className='text-xl text-white font-bold border-l-4 border-white pl-2'>Contact Details</h2> <br />
                            <p className='text-base-200 flex' > <span className='bg-white p-2 w-8 h-8 rounded-full  mr-2'><img className='w-8' src={locationImg} alt="" />
                            </span><span >Bangladesh,Chittagong</span></p>
                            <p className='text-base-200 flex my-4' > <span className='bg-white p-2 w-8 h-8 rounded-full  mr-2'><img className='w-8' src={phoneImg} alt="" /> </span>
                                <span >+880 180000100001</span></p>
                            <p className='text-base-200 flex' > <span className='bg-white p-2 w-8 h-8 rounded-full  mr-2'><img className='w-8' src={mailImg} alt="" /> </span>   <span >RydanDemo@mail.com</span></p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6 p-10 col-span-2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder="Enter your number" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" placeholder="Enter your subject" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full col-span-2">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-40" placeholder="message"></textarea>
                    </div>
                    <button className='btn btn-primary mx-auto col-span-2'>Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;