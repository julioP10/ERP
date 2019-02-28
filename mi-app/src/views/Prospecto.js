import React, { Component } from 'react'
import history from './../history'
import Listar from './../Component/Prospecto/Listar'
import Registrar from './../Component/Prospecto/Registrar'
import SweetAlert from 'sweetalert2-react';
// import SweetAlert from 'sweetalert-react'

class Prospecto extends Component{
    constructor(props){
      super(props);
      this.state={
          opcion:true
      }
    }
    transicion(e){
       this.setState({
           opcion:!this.state.opcion
       })
    //    var path = e.currentTarget.dataset.path;
    //    history.pushLater({ pathname: path }) 
    }
    render(){
        return(
         <div className="row">
          <div className="col-md-12">
            <div className="card">
                <div>
                <button onClick={() => this.setState({ show: true })}>Alert</button>
                <SweetAlert
                    show={this.state.show}
                    title="Demo"
                    type="success"
                    text="SweetAlert in React"
                    onConfirm={() => this.setState({ show: false })}
                />
                </div>
                <div className="card-header">
                 {(this.state.opcion)?
                   <button onClick={(e)=>this.transicion(e)}   type="button" className="btn btn-primary btn-sm">Registrar</button>
                   :
                   <button onClick={(e)=>this.transicion(e)}   type="button" className="btn btn-primary btn-sm">Regresar</button>

                }
                </div>
                <div className="card-body">
                {(this.state.opcion)?
                  <Listar/>
                  :
                  <Registrar transicion={this.transicion}/>
                }
                </div>
            </div>
          </div>
         </div>
        )
    }
}

export default Prospecto