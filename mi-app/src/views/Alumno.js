import React, { Component } from  'react'
import ProspectoService from './../services/ProspectoService'
import './../App.css'


class Alumno extends Component{
   constructor() {
    super();
    this.state = {
        _from:[]
    }
   }

  validador(){

  }
  inputChangeHandler(e) {

    if(e.target.maxLength>=0){
        if(e.target.value.length<=e.target.maxLength){
            let _from = {...this.state._from};
            _from[e.target.name] = e.target.value;
            this.setState({
                _from
            });
        }else{
            console.log("sds");
        }
    }else{
        let _from = {...this.state._from};
            _from[e.target.name] = e.target.value;
            this.setState({
                _from
            });
    }
    console.log(this.state._from)
   }

   formHandler(e) {
    e.preventDefault();
    var obj = this.state._from;
    ProspectoService.registrar(obj)
    .then((response) => {
       this.setState({
        listaProspecto:response.data
      })
      console.log(response)
      console.log(this.state.listaProspecto)
    });
   }
 
    render(){
        return(
        <section className="view-prospecto-registro" id="Prospecto">
            <div className="row b-main">
                <div className="col-sm-12">
                    <form id="formProspecto" onSubmit={(e)=>this.formHandler(e)}>
                        <div className="row justify-content-around b-formulario">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input maxLength="10" type="text" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state._from.PrimerNombre}  name="PrimerNombre"   className="form-control" required/>
                                    <label className="floating-label">Nombre</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state._from.Apellidos}  name="Apellidos"   className="form-control" required/>
                                    <label className="floating-label">Apellido Materno</label>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="text-center">
                                    <button  className="btn btn-success btn-Registrar-Prospecto">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </section>
        )
    }
}

export default Alumno;