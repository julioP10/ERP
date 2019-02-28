import React, { Component } from 'react'


class Child extends Component {
    constructor(props){
        super(props);
    }
    render() {
     return(
      <div className="App">
      <h3>Hola mundo</h3>
      <button type="button" onClick={this.props.IrEditar}>Click</button>;
    </div>
     )
   }
  }

export default Child;