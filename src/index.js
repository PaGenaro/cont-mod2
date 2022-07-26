import React, { Component } from 'react'

export default class App extends Component{
  
  state ={
    num:0,
  }

add = ()=>{
  this.setState({num: this.state.num +1})
}

remove = ()=>{
  this.setState({num: this.state.num -1})
}
  render(){
    return(
      <>
        <h1>{this.state.num}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
      </>
    )
  }

}