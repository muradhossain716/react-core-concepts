import React, { Component } from 'react'

export default class USESTATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:0
      }
    }
    handel=()=>this.setState({
        value:1
    })
  render() {
    return (
      <div onClick={this.handel}>{this.state.value}</div>
    )
  }
}
