import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';

function Item(props) {

    const cart = useContext(CartContext);

    return (
        <div className='w-full flex flex-col justify-center items-center m-7'>
            <h1 className='text-3xl font-serif mb-4'>{props.name}</h1>
            <p className='text-xl'>Price: ${props.price}</p>
            <button className='m-3 border-slate-900 border-4 bg-neutral-300 rounded-2xl p-1.5 ' onClick={() => {
                cart.setItems([
                    ...cart.items, {name: props.name, price: props.price},
                ])
            }}>Add To Cart</button>

        </div>
    );
}

export default Item;