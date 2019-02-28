
  // handleClick(e) {
  //   var ee = e.currentTarget.dataset.id;
  //   console.log(ee)
  //   var ddd = document.getElementById(ee).getElementsByClassName;
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

import React, {Component} from 'react'
import Child from './Child'
import { Link} from 'react-router-dom'
import history from './history'
import Routes from './Routes'
import UserForm from './UserForm'
import 'sweetalert/dist/sweetalert.css'
const Menu =[
  {
    id:0,
    nombre:'Prospecto',
    path:'/prospecto',
    icono:'fa fa-user'
   },
   {
    id:1,
    nombre:'Registro',
    path:'/registrar',
    icono:'fa fa-user'
   },
  ]
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true,
      otro: true
    }

    this.handleClick = this.handleClick.bind(this);
    this.IrEditar = this.IrEditar.bind(this);
  }

  handleClick(e) {

    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  IrEditar(e) {
    e.preventDefault();
    const PATH_REDIRECT_LOGIN = '/create';
    history.pushLater({ pathname: PATH_REDIRECT_LOGIN })

  }

  ir(e) {
    e.preventDefault();
    var ee = e.currentTarget.dataset.path;
    history.pushLater({ pathname: ee })
  }

  render() {
    return (
      <div className="App">
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand"  onClick={(e)=>this.ir(e)} data-path="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mr-auto">
               
                { Menu.map((e,i)=>

                <li key={i} className="nav-item active">
                  <a className="nav-link"  onClick={(e)=>this.ir(e)} data-path={e.path} >{e.nombre} <span className="sr-only">(current)</span></a>
                </li>
                )}
              </ul>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
         {/* <Child IrEditar={this.IrEditar} /> */}
        <Routes/>
      </div>
    );
  }
}

export default App;