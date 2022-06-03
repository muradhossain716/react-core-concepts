import React,{useState} from 'react'
import Style from './style.module.css'
export default function FORM() {
  // const [name,setName]=useState('');
  // const [email,seteEmail]=useState('');
  // const [password,setPassword]=useState('');
  const [user,setUser]=useState({name:'',email:'',password:''});
  const {name,password,email}=user;
  // const handleName =(e)=>{
  //   console.log(e.target.value);
  //   // setUser(e.target.value)
  //   setUser({name:e.target.value,email,password})
  //   console.log('user:',user)
  // };
  // const handleEmail =(e)=>{
    
  //   setUser({name,email:e.target.value,password})
  //   console.log(e.target.value);
  // };
  // const handlePassword =(e)=>{
  //   console.log(e.target.value);
  //   setUser({name,email,password:e.target.value})
  //   console.log('user2:',user)
  // };
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    console.log(name,email,password,user);
    e.preventDefault();
  }
  return (
  
    <div>
      <form action="" onSubmit={handleSubmit}>
          <div className={Style.spacing}>
          <label htmlFor='name'>Name : </label>
          <input type='text' name='name' id='name' required onChange={handleChange} value={name}></input>
          </div>
          <div className={Style.spacing}>
            <label htmlFor='email'>Email : </label>
            <input type='email' name='email' id='email' required onChange={handleChange} value={email}></input>
          </div>
          
          <div className={Style.spacing}>
            <label htmlFor='password'>Password : </label>
            <input type='password' name='password' id='password' value={password} required onChange={handleChange}></input>
          </div>
          <div>
          <button type='submit' >Register</button>
          </div>
          
      </form>
    </div>
  )
}
