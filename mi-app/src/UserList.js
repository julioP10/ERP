import React, { Component } from 'react';
import User from './User'

class UserList extends Component {
 
  constructor(){
    super();
    this.state = {
      isToggleOn: false,
      list:[]
    };
  }
  componentDidMount(){
    var list_ = localStorage.getItem('list');
    console.log(list_)
    this.setState({
      list: (list_==null)? []:list_
    });
  }



  render () {
    return (
      <div>
         {(this.state.list == null)? <p>no</p> :this.state.list.map((e,i)=><li key={i}>{e.nombre}</li>)}
       
      </div>
    );
  }
}

export default UserList;