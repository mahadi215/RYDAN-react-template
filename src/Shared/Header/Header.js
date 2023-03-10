import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assest/logo/RYDAN-LOGO.png'
// import logo from '../../../assest/logo/RYDAN-LOGO.png'

const Header = () => {
    return (
        <div className="navbar bg-base-200 sticky z-50 top-0">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact font-bold text-blue-800 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/'>Home</Link></li> 
                    <li tabIndex={0}>
                        <Link className="justify-between">
                            Courses
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-base-300">
                            <li><Link>HSE course</Link></li>
                            <li><Link>Coming soon</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <Link to='/' className='ml-6'><img className=' w-24' src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold text-blue-800">
            <li><Link to='/'>Home</Link></li> 
                    <li tabIndex={0}>
                        <Link className="">
                            Courses
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-base-300">
                            <li><Link>HSE course</Link></li>
                            <li><Link>Coming soon</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link className="btn btn-primary">Get started</Link>
        </div>
    </div>
    );
};

export default Header;