import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import VisibleCounter from 'C:/projects/react/test/src/containers/VisibleCounter'
import Counter from 'C:/projects/react/test/src/counter/counter';
import CountReducer from 'C:/projects/react/test/src/reducers/CountReducer'
const scores = [88,19,46,23,16,22,75,43,81,28];
let scoreIs = true;
class  searchpage extends Component {
  constructor(props) {
    super(props);
    this.check2 = this.check2.bind(this);
    this.checkScore = this.checkScore.bind(this);
  }  
  /*render() {
    return ( 
      [
      <input type="text"></input>,
      <button>
          <Link to="/off">Поиск</Link>
      </button>
      ]
    );
  } */
  check2(event) {
    this.checkScore(event.target.value);
  }
checkScore(number){
  alert(scoreIs)
      if (scores.indexOf(number)  !== -1){
        scoreIs  = true;
    } else 
        scoreIs = false;  
    
}
render() {
  const {count, wish_value, onIncreaseClick,onLink,onUpdateClick} = this.props
  if (scoreIs === true){
  return(
      <div>
        <input onChange={event => this.check2(event)} type="text"></input>,
          <div>
            <button>
              <Link to="/off">Поиск</Link>
            </button>
            <input value={wish_value} type="text"/>
          </div>
      </div>
  )} else { return (
      <div>
        
        <input  onChange={event => this.check2(event)} type="text"></input>,
          <div>
              <button>
                  <Link to="/search" onClick={() => alert("неверное имя п")}>Поиск</Link>
              </button>
              <input value={wish_value} type="text"/>
          </div>
      </div>)
  }
}
}
function mapStateToProps (state) {
  return {
    count: state.CountReducer.count,
    wish_value: state.CountReducer.wish_value
  }
}
function mapDispatchToProps(dispatch) {
  return {
      onIncreaseClick: () => dispatch(actions.increaseTodo()),
      onLink: () => dispatch(actions.linkTodo()),
      onUpdateClick: event => dispatch((
          actions.updateTodo(event.target.value)
      ))
  }
}
const searchpageC = connect(
  mapStateToProps,
  mapDispatchToProps
)(searchpage);

export default searchpageC;