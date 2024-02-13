import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(props) {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/kaushlendraU')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

     return (
        <div className='flex w-6/12 flex-col justify-center  text-center ml-auto mr-auto mt-5 mb-5 bg-slate-300 text-gray p-4 text-3xl rounded-2xl'>
            Github followers: {data.followers}
            <div className='flex justify-center items-center m-6'>
                <img src={data.avatar_url} alt="Git Picture " width={'300rem'} className='rounded-3xl' />
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/kaushlendraU')
    return response.json()
}