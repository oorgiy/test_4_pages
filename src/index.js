import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import App from './App';
import {
    Route,
    BrowserRouter,
  } from 'react-router-dom';
  import offpage from './components/pages/page3';
  import searchpage from './components/pages/page2';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            
            <div >
            <div >
            </div>
            <div >
              <Route exact strict path="/" component={App} />
              <Route path="/off" component={offpage} />
              <Route path="/search" component={searchpage} />

            </div>
          </div>
          </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

