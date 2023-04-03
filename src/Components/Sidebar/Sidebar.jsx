import React from 'react';

const Sidebar = ({addToCart}) => {
    console.log(addToCart);
    let price = 0;
    let totalShipping = 0;
    let tax = 0;
    for(const singleCart of addToCart){
        price = price + singleCart.price;
        totalShipping = totalShipping + singleCart.shipping;
        tax = price*10/100;
    }
    return (
        <div className='bg-slate-400 rounded-lg p-5 h-[40rem] text-center sticky top-10'>
            <h1 className='text-4xl font-bold'>Order Summery</h1>
            <div className='text-left text-2xl font-semibold'>
                <p>Total Added: <span className='text-3xl font-semibold'>{addToCart.length}</span></p>
                <p>Total Price {price}</p>
                <p>Shipping ${totalShipping}</p>
                <p>Tax: {tax}</p>
            </div>
        </div>
    );
};

export default Sidebar; 