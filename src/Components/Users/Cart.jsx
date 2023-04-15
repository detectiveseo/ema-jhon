import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import Sidebar from '../Sidebar/Sidebar';

const Cart = () => {
    const allData = useLoaderData();
    const storedData = getShoppingCart();
    const saveCart = [];
    const [remanData, setReaminDat ] = useState(saveCart)
    for(const id in storedData){
        const addeddData = allData.find(pd => pd.id == id);
        if(addeddData){
            const quantity = storedData[id];
            addeddData.quantity = quantity;
            saveCart.push(addeddData);
        }

    }
    const rmProduct = id =>{
        const remainProduct = remanData.filter(pd => pd.id !== id);
        setReaminDat(remainProduct);
        removeFromDb(id);
    }
    

    
    return (
        <div className='grid grid-cols-2'>
            <div>
                <h1>Added product length {remanData.length}</h1>
                <div>
                    {
                        remanData.map( singleData => {
                            return (
                                <div className='m-5 border rounded p-2 flex  items-center relative'>
                                    <img className='w-3/12' src={singleData.img} alt="" />
                                    <h2>{singleData.name}</h2>
                                    <button 
                                    onClick={() => rmProduct(singleData.id)}
                                    className='bg-slate-600 p-3 rounded text-white absolute right-5'>Remove This</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Sidebar addToCart={remanData}></Sidebar>
        </div>
    );
};

export default Cart;