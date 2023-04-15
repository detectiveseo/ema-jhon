import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friends from './Friends';

const User = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1 className='text-center p-5 text-5xl font-bold mt-10'>Hello buddy it's all my user {friends.length}</h1>
            <div className='grid grid-cols-3 gap-7 w-8/12 mx-auto mt-10'>
                {
                   friends.map(friend => <Friends key={friend.id} friend={friend}></Friends>)
                }
            </div>
        </div>
    );
};

export default User;