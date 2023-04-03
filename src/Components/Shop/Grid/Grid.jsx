import React from 'react';

const Grid = ({product, handleCart}) => {
    const {id,img, category, name, seller, price, quantity, ratings, stock} = product;
    return (
        <div>


            <div className="card w-full bg-base-100 h-[37rem] shadow-xl relative">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <div className='grid grid-cols-2 text-left w-full list-none font-light'>
                            <li>{category}</li>
                            <li>Brand: {seller}</li>
                            <li>Rating: {ratings} Star</li>
                            <li>Avilable: {stock}</li>
                        </div>
                            <p className='font-bold text-2xl text-left w-full'>৳{price}</p>
                        <div className="card-actions">
                        <button onClick={() => handleCart(product)} className="btn bg-slate-700 rounded-none w-full absolute  bottom-0 left-0">Add to Cart</button>
                        </div>
                    </div>
             </div>
            
        </div>
    );
};

export default Grid;