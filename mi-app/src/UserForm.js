import React, { Component } from 'react'
import history from './history'
export default class UserForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      list:[],
      value: '',
      Nombre:'',
      Apellido:'',
      Correo:'',
      Direccion:''
    };
  }
  handelInput(event){
   this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
  Guardar(e) {
    e.preventDefault();
    var object ={
      Nombre:this.state.Nombre,
      Apellido:this.state.Apellido,
      Correo:this.state.Correo,
      Direccion:this.state.Direccion
    }
    this.setState({
      list: this.state.list.push(object)
    });
    localStorage.setItem('list',this.state.list);
     console.log(this.state);
     history.pushLater({ pathname: "/listar" })
  }
  

  render(){
    return (
      <form onSubmit={(e)=>this.Guardar(e)}>
      <div class="row">
        <div className="col-md-12">
          <div class="col-md-3">
            <input type="text" value={this.state.Nombre} onChange={(event)=>this.handelInput(event)} name="Nombre" class="form-control" placeholder="Nombre"/>
          </div>
          <div class="col-md-3">
            <input type="text" value={this.state.Apellido}  onChange={(event)=>this.handelInput(event)} name="Apellido" class="form-control" placeholder="Aperllido"/>
          </div>
          <div class="col-md-3">
            <input type="text" value={this.state.Correo}  onChange={(event)=>this.handelInput(event)} name="Correo" class="form-control" placeholder="Correo"/>
          </div>
          <div class="col-md-3">
            <input type="text" value={this.state.Direccion}   onChange={(event)=>this.handelInput(event)} name="Direccion" class="form-control" placeholder="Direccion"/>
          </div>
          <div class="col-md-3 text-center lb-5" >
            <button type="submit" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </form>
    );
  }
}