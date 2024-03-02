import React from 'react';
import Item from './Item';

function Items() {
    return (
        <div className='flex flex-row flex-wrap p-3 m-2 items-center justify-center'>
            <Item name='MacBook' price={100000} />
            <Item name='Pendrive' price={400} />
            <Item name='Mobile' price={35000} />
            <Item name='iPhone' price={65000} />
            <Item name='Laptop' price={78000} />
        </div>
    );
}

export default Items;