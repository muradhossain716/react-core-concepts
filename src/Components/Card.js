const date=new Date();
const year=date.getFullYear();
const arr=[ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];
const month=arr[date.getMonth()]
function Card(){
    return <div className='card'>
      <h1 className='card-title'>Welcome to {month} {year}</h1>
      <p className='card-desription'>We are in a very highly competitive world</p>
      <p className='card-footer'>Footer</p>
    </div>
  

}
export default Card;