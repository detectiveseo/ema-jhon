import React from 'react';
import Logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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
        </div>
    );
};

export default Header;