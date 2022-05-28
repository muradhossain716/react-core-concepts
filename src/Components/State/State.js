import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


export default class state extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         search:''
      }
    }

    increment=()=>{
      this.setState({
          count : this.state.count+1,
      })
    }
    decrement=()=>{
      this.setState({
        count:this.state.count-1
      })
    }
    showInputText=(e)=>{
      this.setState({
        search:e.target.value
      },()=>console.log(this.state.search))
      // console.log(this.state.search)

    }
  render() {
    return (
      <div>
          <p style={{paddingLeft: "50px",
    fontSize: "30px"}}>{this.state.count}</p>
          <Button className="btn-in-de" variant="primary" onClick={this.increment} disabled={this.state.count>=5?true:false} >+</Button>
          <Button className="btn-in-de" variant="primary" onClick={this.decrement} disabled={this.state.count<=0?true:false}>-</Button>
          <input onChange={this.showInputText} style={{display:"block"}}></input>
          
          <p>{this.state.search}</p>
      </div>
    )
  }
}
