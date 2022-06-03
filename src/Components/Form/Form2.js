import React,{useState} from 'react';
import Style from "./style.module.css"

export default function Form2() {
    const [user,setUser]=useState({name:'',password:''});
    const {name,password}=user;
    const onSubmit =(e)=>{
        e.preventDefault();
        console.log(user,name,password)
    };
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <form onSubmit={onSubmit} className={Style.spacing}>
            <div className={Style.spacing}>
                <label htmlFor='name'>Name: </label>
                <input name="name" type='text' value={name} onChange={handleChange}></input>
            </div>
            <div className={Style.spacing}>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" value={password} onChange={handleChange}></input>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}
