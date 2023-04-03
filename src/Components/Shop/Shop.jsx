import React, { useEffect, useState } from 'react';
import Grid from './Grid/Grid'
import Sidebar from '../Sidebar/Sidebar'
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [slice, setSlice] = useState(6);
    const [addToCart, setAddToCart] = useState([])


    useEffect(() => {
        fetch("fakeData/products.json")
        .then(responce => responce.json())
        .then(productData => setProduct(productData))
    }, [])

    useEffect( () => {

    }, [])

    const sliceIncrase = () => {
        setSlice(slice + 6)
    }

    const handleCart = (product) => {
        setAddToCart([...addToCart, product]);
        addToDb(product.id)
    }

    return (
        <div className='grid gap-10 mx-20 mt-10' style={{gridTemplateColumns: "70fr 30Fr"}}>
            <div className='flex flex-col justify-center items-center'>
                <div className='grid grid-cols-3 gap-4'>
                    {products.slice(0, slice).map(product => <Grid handleCart={handleCart} product={product}></Grid>)}
                </div>
                <button onClick={sliceIncrase} className="btn btn-primary mt-10">Show More</button>
            </div>
            <Sidebar addToCart={addToCart}></Sidebar>
         </div>
    );
};

export default Shop;