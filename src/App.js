import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import VisibleCounter from './containers/VisibleCounter'
export const suppliersArr = ["Google","Apple","Rosneft","apple","google","rosneft","роснефть","Роснефть"];

class App extends Component {
    
    render() {
        return ([
            
            <div >
                <VisibleCounter style={{height:"500px"}}/>
            </div>,
             <input  type="text" defaultValue="Поиск"></input>,
             <button>
                 <Link  to="/search">Поиск</Link>
             </button>,
             <div>
               <img src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609051049"></img>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFyQR7UPqP_K-LV8TU3phu2o0xztsEMy1VabejeU9VvxHoRLt"></img>
               <img src="https://www.rosneft.com/media/rosneft/img/logo_en.png"></img>
             </div>,
             <div>
               <label>Apple</label>
               <label>Google</label>
               <label>Ростефть</label>
             </div>
        ]);
    }
}

export default App;

/*
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./supplier.json";

const suppliersArr = ["Google","Apple","Rosneft","apple","google","rosneft","роснефть","Роснефть"];


export default class  MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isValid: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.supplierCheck = this.supplierCheck.bind(this);
    this.Authorisation = this.Authorisation.bind(this);
  }
  
  handleClick() {
    console.log('Click happened');
  }
  supplierCheck(evt) {
     
      if ( suppliersArr.indexOf(evt.target.value)  !== -1 ){
        this.setState({
          isValid: true,
          inputValue: evt.target.value
        });
    } else {
      this.setState({
        isValid: false,
        inputValue: evt.target.value
    });
  }}
  Authorisation() {
    if (this.state.isValid === true){
    return (
      <Link  to="/search">Поиск</Link>
    )}
    else {
      return <Link to="/" onClick={alert("неверное имя п")}>Поиск</Link>
    }
  }
  
  render() {
    return ( 
      [
      <input onChange={evt => this.supplierCheck(evt)} value={this.state.inputValue} type="text" defaultValue="Поиск"></input>,
      <button>
          <this.Authorisation />  
      </button>,
      <div>
        <img src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609051049"></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFyQR7UPqP_K-LV8TU3phu2o0xztsEMy1VabejeU9VvxHoRLt"></img>
        <img src="https://www.rosneft.com/media/rosneft/img/logo_en.png"></img>
      </div>,
      <div>
        <label>Apple</label>
        <label>Google</label>
        <label>Ростефть</label>
      </div>
      ]
    );
  }
}
*/