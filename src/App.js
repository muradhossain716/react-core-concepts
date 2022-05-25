import React from "react";
import Card from './Components/Card'
import cardData from './data.json'
{/* <Card title='Rafan Ahmed' description="I am a Web Developer."/>
        <Card title='Rakib Ahmed' description='I am a Junior Web Developer'/>  */}
function App(){
    return <div>
         {
             cardData.map((el,i)=><Card key={i} title={el.title} description={el.description}/>)

         }
    </div>
}
export default App;