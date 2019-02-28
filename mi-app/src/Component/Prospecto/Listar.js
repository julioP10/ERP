import React, { Component } from 'react'
import ProspectoService from './../../services/ProspectoService'

class Listar extends Component{
  constructor(props){
    super(props);
    this.state={
        listaProspecto:[],
    }
  }
  componentDidMount(){
    const {subject, message} = this.state;
    ProspectoService.listar({subject, message})
    .then((response) => {
       this.setState({
        listaProspecto:response.data
      })
    });
   }
   consultar(i){
    var obj={idProspecto:i}
    console.log(obj)
    ProspectoService.consultar(obj)
    .then((response) => {
    //    this.setState({
    //     listaProspecto:response.data
    //   })
    console.log(response)
    });
   }
    render(){
        return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                 this.state.listaProspecto.map((e,i)=>
                 <tr key={i}>
                    <th scope="row">{e.idProspecto}</th>
                    <td>{e.primerNombre}</td>
                    <td>{e.apellidoPaterno} {e.apellidoMaterno}</td>
                    <td>{e.correo}</td>
                    <td>
                      <button onClick={()=>this.consultar(e.idProspecto)} data-id={e.idProspecto} type="button" className="btn btn-primary btn-sm">Editar</button>
                      <button onClick={()=>this.consultar(e.idProspecto)} data-id={e.idProspecto} type="button" className="btn btn-secondary btn-sm">Consular</button>
                    </td>
                 </tr>
                 )    
                }
                    
                </tbody>
            </table>
        </div>
        )
    }
}

export default Listar;