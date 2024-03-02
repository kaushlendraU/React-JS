import React from 'react';
import { useCart } from '../context/CartContext';

function Item(props) {

    const cart = useCart()

    return (
        <div className='flex flex-col justify-center items-center m-7 border-slate-700 border-2 p-4 bg-green-300'>
            <h1 className='text-3xl font-serif mb-4'>{props.name}</h1>
            <p className='text-xl'>Price: ${props.price}</p>
            <button className='m-3  border-slate-900 border-4 bg-neutral-300 rounded-2xl p-1.5 ' onClick={() => {
                cart.setItems([
                    ...cart.items, {name: props.name, price: props.price},
                ])
            }}>Add To Cart</button>
        </div>
    );
}

export default Item;