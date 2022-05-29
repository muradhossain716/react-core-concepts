import React,{useState}from 'react';
import Style from './state.module.css';

export default function USESTATE2() {
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecement=()=>{
      setCount(count-1)
    }
  return (
  <div>
      <p className={Style.color}>{count}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecement} disabled={count<=0?true:false}>decrement</button>

  </div>
      
  )
}
