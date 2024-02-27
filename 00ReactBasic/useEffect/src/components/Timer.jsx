import React, { useEffect, useState } from "react";


function Timer() {
    let [time, setTime] = useState(0)

    useEffect(() => {
        console.log("mounted");
        const timer = setInterval(() => setTime(time + 1), 1000)
        
        return function () {
            console.log("Unmounted");
            clearInterval(timer);
        }


    }, [time]);

    function stopTimer() {
        setTime(0)
    }


    return (
        <div className="flex flex-col align-middle justify-center m-5">
            <h1 className="text-center text-3xl font-bold">Stopwatch</h1>
            <p className="m-3 text-center">Current Tine is {time}</p>
            <button className=" bg-black rounded-xl text-white p-2 border-white w-8" onClick={stopTimer}>Stop</button>
        </div>
    );
}

export default Timer; 