
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import GameApp from './components/index.jsx'
import './css/index.scss';
import './css/pc.scss';
import './css/ipad.scss';
import './css/mobile.scss';
import './config/config.js';



ReactDOM.render(<GameApp/>,document.getElementById('Main'));
