const date=new Date();
const year=date.getFullYear();
const arr=[ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];
const month=arr[date.getMonth()]
function Card(props){
    const {title,description}=props;
    return <div className='card'>
      <h1 className='card-title'>{title}</h1>
      <p className='card-desription'>{description}</p>
      <p className='card-footer'>Welcome to {month} {year}</p>
    </div>
  

}
export default Card;