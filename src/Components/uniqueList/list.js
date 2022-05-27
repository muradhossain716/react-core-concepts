import React from "react";
import { v4 as uuidv4 } from 'uuid';
const Data=[
    
    {
        id:uuidv4(),
        "title":"Rafan Ahmed",
        "description":"I am web developer"

    },
    {   
        id:uuidv4(),
        title:"Ratul Ahmed",
        description:"I am web developer 2"
    },
    {
        id:uuidv4(),
        title:"Rakib Hasan",
        description:"I am web developer 3"
    },
    {
        id:uuidv4(),
        title:"Raqeeb Hasan",
        description:"I am web developer 4"
    }
];
 function DataList(){
    return <div>
        {
            Data.map((el)=>{const {id,title,description}=el;
            return <div key={id} className="card">
                <h3 className="card-title">{title}</h3>
                <p className="card-desription">{description}</p>
            </div>
            
            })
        }
    </div>
}
export default DataList;