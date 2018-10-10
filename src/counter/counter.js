import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    
    render() {
        
        const {count, wish_value, onIncreaseClick,onLink,onUpdateClick} = this.props
        return(
            <div>
                <div>
                    <span>{count}</span>
                    <button  onClick={onIncreaseClick}>Increase</button>
                    <button onClick={onLink}>Поиск</button>
                    <input value={wish_value} type="text" onChange={onUpdateClick} onClick={onIncreaseClick}/>
                </div>
                
            </div>
        )
    }
}