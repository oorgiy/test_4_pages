import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CountReducer from '../reducers/CountReducer'
import { Link } from 'react-router-dom';
import searchpage from '../components/pages/searchpage';
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
      }
    check(event)
    { 
        this.props.onUpdateClick(event);
        this.props.onLink(event.target.value);
    }
    render() {
        const {count, wish_value, onIncreaseClick,onLink} = this.props
        if (count === 1){
        return(
                <div>
                    <button>
                        <Link  to="/search" >Поиск</Link> 
                    </button>
                    <input value={wish_value} type="text" onChange={this.check} onClick={onLink}/>
                </div>
        )}  else { 
            return (
                <div>
                    <button  onClick={onIncreaseClick}>Increase</button>
                    <button onClick={onLink}>Поиск</button>
                    <button>
                        <Link to="/" onClick={() => alert("неверное имя п")}>Поиск</Link>
                    </button>
                    <input value={wish_value} type="text" onChange={this.check} onClick={onLink}/>
                </div>)
        }
    }
}