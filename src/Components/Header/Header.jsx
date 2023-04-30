import React, { useState } from 'react';
import Logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [profileMenu, setProfileMenu] = useState(true);
    const handleMenu = () => {
        setProfileMenu(!profileMenu);
    }
    return (
        <div className='bg-slate-700 h-24 flex items-center justify-between px-40'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <nav className='grid grid-flow-col gap-10 text-white list-none'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
                <li><Link to="users">users</Link></li>
                <li><Link to="about">About us</Link></li>
                <li><Link to="cart">Cart</Link></li>
            </nav>
            <div className=' relative'>
                <li onClick={handleMenu} className='text-white list-none font-bold uppercase'>My Account</li>

                <div className={`transition ease-in-out delay-150 absolute bg-slate-200 p-5 list-none text-1xl font-bold ${profileMenu ? "-mt-72" : "mt-0"}`}>
                    <li>Profile</li>
                    <li>Setting</li>
                </div>
            </div>
        </div>
    );
};

export default Header;                                    