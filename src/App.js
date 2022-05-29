import React from "react";
import Card from "./Components/Card/Card";
import CardData from "./data.json";
import DataList from "./Components/uniqueList/list";
import Card2 from "./Components/Card/Card2";
import Card3 from "./Components/Card/Card3";
import State from "./Components/State/State";
import USESTATE from "./Components/State/UseState";
import USESTATE2 from "./Components/State/UseState2";


function App(){
    return(<div style={{margin:"5% 30% 0% 30%"}}><p className="card-specifier">Card generated from Json file</p>
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
        <State />
        <USESTATE />
        <USESTATE2 />
    </div>
        
    );

            }
export default App;