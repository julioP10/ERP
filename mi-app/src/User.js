import React, { Component } from 'react';
import UserEdit from './UserEdit'

class User extends Component {
  constructor(){
    super();
    this.state = {
      isToggleOn: false,
      list:[]
    };
  }
  componentDidMount(){
    var list_ = localStorage.getItem('list');
    this.setState({
      list: (list_).length>0?list_:[]
    });
  }
  handleClick(e) {
    this.setState(state => ({

    }));
    console.log(e.currentTarget.dataset.ids );
    console.log(this.props);
    console.log(<UserEdit></UserEdit>)
    return <UserEdit props={this.props}/>
  }

  render () {
    return (
      <div>
        {(this.state.list.length==0)? null :this.state.list.map((e,i)=><li key={i}>{e.nombre}</li>)}
       
        <button type="button" onClick={(e) => this.handleClick(e)} data-ids={this.props.name}>
         Editar
        </button>
      </div>
    );
  }
}

export default User;