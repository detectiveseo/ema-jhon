import React from 'react';
import Logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='bg-slate-700 h-24 flex items-center justify-between px-40'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <nav className='grid grid-flow-col gap-10 text-white list-none'>
                <li><a href="">Order</a></li>
                <li><a href="">Order Review</a></li>
                <li><a href="">Manage Inventory</a></li>
                <li><a href="">Login</a></li>
            </nav>
        </div>
    );
};

export default Header;