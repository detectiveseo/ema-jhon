import React from 'react';
import { Link } from 'react-router-dom';

const Friends = ({friend}) => {
    console.log(friend)
    return (
        <div className='border p-10 relative h-72 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold '>{friend.name}</h1>
            <h4>Email: {friend.username}</h4>
            <h4>Email: {friend.email}</h4>
            <button className='bg-slate-600 mb-3 py-2 px-5 text-white absolute bottom-0 '><Link to={`/user/${friend.id}`}>See more</Link></button>
        </div>
    );
};

export default Friends;