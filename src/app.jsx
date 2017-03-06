
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
// import GameApp from './components/index.jsx';
import {GameApp} from './components/test.jsx';
// import {GameApp} from './components/test2.jsx';
import './css/index.scss';
import './css/pc.scss';
import './css/ipad.scss';
import './css/mobile.scss';
import './config/config.js';


import thunkMiddleware from 'redux-thunk';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import sectionReducers from './reducers/test.reducer.js';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let GAME_APP_STORE = createStoreWithMiddleware(sectionReducers);

ReactDOM.render(<Provider store={GAME_APP_STORE}>
  <GameApp/>
</Provider>,document.getElementById('Main'));
