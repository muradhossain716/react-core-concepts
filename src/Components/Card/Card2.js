import React,{Component} from "react";

function HowReactCreateElement(){
    return React.createElement("div",{},
    React.createElement('p',{},'This is a text created using React.createElement.')
    )
}
class Card2 extends Component{
    render(){
        return(
        <div>
            <div className="card">
                <h1 className="card-title">{this.props.name}</h1>
                <p className="card-desription">{this.props.description}</p>
                </div>

                <HowReactCreateElement />
        </div>
        )
    }
}
export default Card2;