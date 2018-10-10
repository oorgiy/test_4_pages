import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CountReducer from '../reducers/CountReducer'
import { Link } from 'react-router-dom';
export default class Counter extends Component {
    
        
        
          
        
          
        
    render() {
        function check()
        {
            onUpdateClick();
            onLink();
        }
        const {count, wish_value, onIncreaseClick,onLink,onUpdateClick} = this.props
        if (count === 1){
        return(
            <div>
                <div>
                    <span>{count}</span>
                    <button  onClick={onIncreaseClick}>Increase</button>
                    <button onClick={onLink}>Поиск</button>
                    <button onClick={onLink}>
                        <Link  to="/search">Поиск</Link> 
                    </button>
                    <input value={wish_value} type="text" onChange={"onUpdateClick()"} onClick={onIncreaseClick}/>
                </div>
                
            </div>
        )} else { return (
<div>
                <div>
                    <span>{count}</span>
                    <button  onClick={onIncreaseClick}>Increase</button>
                    <button onClick={onLink}>Поиск</button>
                    <button onClick={onLink}>
                        <Link to="/" onClick={alert("неверное имя п")}>Поиск</Link>
                    </button>
                    <input value={wish_value} type="text" onChange={"onUpdateClick()"} onClick={onIncreaseClick}/>
                </div>
                
            </div>)
        }
    }
}