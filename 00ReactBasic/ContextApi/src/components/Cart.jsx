import React from 'react';
import { useCart } from '../context/CartContext';


function Cart() {

    const cart = useCart()

    const total = cart.items.reduce((a, b) => a + b.price, 0)

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='w-1/2 flex flex-col justify-center items-center m-7 border-slate-700 p-4 border-2 bg-orange-200'>
                    <h1 className='text-3xl font-serif mb-4'>Cart</h1>
                    <ul className='flex justify-center items-center gap-3 p-2 m-3 flex-row flex-wrap'>
                        {
                            cart && cart.items.map((items, index) => <li className='font-serif font-bold text-xl border-slate-700 p-2 border-2  bg-green-300' key={index}>
                                {items.name} - ${items.price}
                            </li>)
                        }
                    </ul>
                    <h5 className='text-xl font-serif border-slate-900 border-2 p-2 mt-4'>Total Bill: ${total}</h5>
                    <button className='mt-4 border-slate-900 border-2 bg-neutral-300 rounded-2xl p-1.5 ' onClick={() => {
                        cart.setItems([])
                    }}>Clear Cart</button>
                </div>
            </div>
        </>
    );
}

export default Cart;