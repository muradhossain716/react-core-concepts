import React from 'react';
import ReactDOM from 'react-dom/client';
const date=new Date();
const year=date.getFullYear();
const arr=[ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];
const month=arr[date.getMonth()]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Welcome to {month} {year}</h1>
  </div>

);

