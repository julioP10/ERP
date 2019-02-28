import React, { Component } from  'react'
import ProspectoService from './../../services/ProspectoService'


class Registrar extends Component{
   constructor() {
    super();
    this.state = {
     formFields: {PrimerNombre: ''}
    }
   }

  handelInput(event){
   this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
  inputChangeHandler(e) {
    let formFields = {...this.state.formFields};
    formFields[e.target.name] = e.target.value;
    this.setState({
     formFields
    });
   }

   formHandler(e) {
    e.preventDefault();
    var obj = this.state.formFields;
    // const {formFields} = this.state;
    ProspectoService.registrar(obj)
    .then((response) => {
       this.setState({
        listaProspecto:response.data
      })
      console.log(response)
      console.log(this.state.listaProspecto)
    });
   }
 
//   Guardar(e) {
//     e.preventDefault();
//     var object ={
//       Nombre:this.state.Nombre,
//       Apellido:this.state.Apellido,
//       Correo:this.state.Correo,
//       Direccion:this.state.Direccion
//     }
//     this.setState({
//       list: this.state.list.push(object)
//     });
//     localStorage.setItem('list',this.state.list);
//      console.log(this.state);
//      history.pushLater({ pathname: "/listar" })
//   }
    render(){
        return(
        <section className="view-prospecto-registro" id="Prospecto">

            <div className="row b-top1">
                <div className="col-sm-6 mr-auto b-title">
                    <h2>Registro</h2>
                </div>
                <div className="col-sm-6 ml-auto b-buscador">
                </div>
            </div>
            <div className="row b-top2">
                <div className="col-sm-6 mr-auto b-breadcrumb">
                    <div>Inicio > Admisión > Postulantes</div>
                </div>
                <div className="col-sm-6 ml-auto b-favoritos">
                    <a href="#"><i className="far fa-star"></i></a>
                </div>
            </div>
            <div className="row b-main">
                <div className="col-sm-12">
                    <form id="formProspecto" onSubmit={(e)=>this.formHandler(e)}>
                        <div className="row justify-content-around b-formulario">
                            <input type="hidden"{...(e)=>this.handelInput(e)}  name="IdProspecto" />

                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.PrimerNombre}  name="PrimerNombre"   className="form-control" required/>
                                    <label className="floating-label">Nombre</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text"  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.ApellidoPaterno}  name="ApellidoPaterno"   className="form-control" required/>
                                    <label className="floating-label">Apellido Materno</label>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text"  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.ApellidoMaterno}  name="ApellidoMaterno"   required className="form-control"/>
                                    <label className="floating-label">Apellido Materno</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <select onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.IdSede}  name="IdSede"   className="form-control">
                                        <option value="0">Elegir</option>
                                    </select>
                                    <label className="floating-label">Sede</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">

                                    <select onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.IdProducto}  name="IdProducto"   className="form-control">
                                        <option value="0">ELEGIR PROGRAMA</option>
                                    </select>
                                    <label className="floating-label">Carrera</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="email"   className="form-control obligatorio" placeholder=" " onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.Correo}  name="Correo"/>
                                    <label className="floating-label">Corre</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="tel"    className="form-control obligatorio" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.Telefono}  name="Telefono"  required/>
                                    <label className="floating-label">Telefono</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <select className="form-control"   required onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.IdTipoAtencion}  name="IdTipoAtencion" >
                                        <option value="0">Elegir Tipo de atenci&oacute;n</option>
                                    </select>
                                    <label className="floating-label">Tipo Atencion</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text"    className="form-control lu-beneficiario"onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.Counter}  name="Counter" />
                                    <input type="hidden" className="form-control"onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.IdCounter}  name="IdCounter"/>
                                    <label className="floating-label">Counter</label>
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

export default Registrar;