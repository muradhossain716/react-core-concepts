import React,{Component} from "react";

class Card2 extends Component{
    render(){
        return(
        <div className="card">
            <h1 className="card-title">{this.props.name}</h1>
            <p className="card-desription">{this.props.description}</p>
            </div>
        )
    }
}
export default Card2;