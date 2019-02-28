import React, { Component } from 'react'

export default class UserEdit extends Component{
  constructor(){
      super();
      
  }
  userEdi={
          Nombre:this.props.name,
          Email:this.props.email
      }
  render(){
    return (
      <form onSubmit={this.props.onAddUser}>
          <input type="text" placeholder="Nombre" name="name" value={this.props.Nombre} />
          <input type="email" placeholder="Email" name="email" value={this.props.Email} />
          <input type="submit" value="Guardar" />
      </form>
    );
  }
}