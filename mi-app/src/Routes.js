import React, {Component} from 'react'
import history from './history'
import { Router, Route, Switch } from 'react-router-dom'
import Prospecto from './views/Prospecto'
import Alumno from './views/Alumno'
import Registrar from './Component/Prospecto/Registrar'
import Home from './views/Home'

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/alumno" component={Alumno} />
        <Route path="/prospecto" component={Prospecto} />
        <Route path="/registrar" component={Registrar} />
       </Switch>
      </Router>
    )
   }
  }

  export default Routes;