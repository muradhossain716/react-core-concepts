import React from "react";
import Card from "./Components/Card/Card";
import CardData from "./data.json";
import DataList from "./Components/uniqueList/list";
import Card2 from "./Components/Card/Card2";
import Card3 from "./Components/Card/Card3";

function App(){
    return(<div><p className="card-specifier">Card generated from Json file</p>
        {
        CardData.map((el,i)=>{
            const {title,description}=el; 
            return <Card key={i} title={title} description={description}/>})
        }
        <p className="card-specifier">Card genarated from js file with unique id</p>
        <DataList />
        <p className="card-specifier">Card generated from Class Component</p>
        <Card2  name="card2" description="This a new Card"/>
        <Card3 />
    </div>
        
    );

            }
export default App;