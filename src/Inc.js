import React, { useState } from 'react';

const Inc = () => {
    const[data,setData] = useState(0);

    const inc =()=>{
        setData(data + 1);        
    }

    const dec =()=>{
        setData(data - 1);        
    }

    function reset(){
        setData(0);
    };

  return (

    <div className='text-center mt-5'>
      
      <h2> Counter : {data}</h2>

        <button className='mt-3 btn btn-outline-success' onClick={inc}>Increment</button>

        <button className='mt-3 btn btn-outline-primary mx-2' onClick={dec} disabled={data == 0}>Decrement</button>

        <button className='mt-3 btn btn-outline-danger mx-2' onClick={reset} >Reset</button>
    </div>
  )
}

export default Inc
