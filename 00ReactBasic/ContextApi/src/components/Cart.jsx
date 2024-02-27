import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function Cart(props) {

    const cart = useContext(CartContext);

    return (
        <>
        <hr/>
            <div className='w-full flex flex-col justify-center items-center m-7'>
            <h1 className='text-3xl font-serif mb-4'>Cart</h1>

            {
                cart && cart.items.map((items, index) => <li key={index}>
                    {items.name} - ${items.price}
                </li>)
            }

                <h5 className='text-xl'>Total Bill: $</h5>
            </div>
        </>
    );
}

export default Cart;