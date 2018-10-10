import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class  offpage extends Component {
  render() {
    return ( 
      [ <ul>
      <li><input type="text" defaultValue="имя"></input></li>
      <li><input type="text" defaultValue="фамилия"></input></li>
      <li><input type="text" defaultValue="адрес"></input></li>
      <li><input type="text" defaultValue="+7 "></input></li>
      </ul>,
      <button>
          <Link to="/off">Оплата</Link>
    </button>,

      ]
    );
  }
}