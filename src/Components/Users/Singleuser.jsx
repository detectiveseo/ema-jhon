import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Singleuser = () => {
    const userData = useLoaderData();
    return (
        <div>
            <h1>This is the single user page</h1>
        </div>
    );
};

export default Singleuser;