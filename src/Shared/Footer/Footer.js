import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className='bg-blue-900'>
            <div className="footer place-items-center p-10  text-base-200">
                
                <div className="form-control">
                <span className="font-bold mb-2">Subscribe for newslatter</span>
                    <div className="input-group">
                        <input type="text" placeholder="email" className="input input-bordered text-black" />
                        <button className="btn ">
                            Subscribe                            
                        </button>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div>
                <p className='text-center text-base-300 py-4'>Copyright © 2023 - All right reserved by Rydan Theme</p>
            </div>
        </footer>

    );
};

export default Footer;