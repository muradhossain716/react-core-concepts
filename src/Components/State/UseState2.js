import React,{useState}from 'react'

export default function USESTATE2() {
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
  return (
  <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>increment</button>

  </div>
      
  )
}
