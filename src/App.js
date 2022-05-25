import React from "react";
import Card from "./Components/Card";
import CardData from "./data.json";
import DataList from "./Components/uniqueList/list";

function App(){
    return(<div>{
        CardData.map((el,i)=>{
            const {title,description}=el; 
            return <Card key={i} title={title} description={description}/>})
        }
        
        <DataList />
    </div>
        
    );

            }
export default App;