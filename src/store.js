import {createStore, combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'

const reducer = combineReducers({
    CountReducer
});

const initialState = {
    CountReducer: {count: 0, wish_value: ""}
};

let store = createStore(reducer, initialState);


export default store;