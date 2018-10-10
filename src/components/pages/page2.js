import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class  searchpage extends Component {
  render() {
    return ( 
      [
      <input type="text" defaultValue="лицевой счет"></input>,
      <button>
          <Link to="/off">Поиск</Link>
      </button>,
      <div></div>
      ]
    );
  }
}