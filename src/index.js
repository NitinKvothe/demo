//import styles
import 'grommet/scss/hpe/index';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './App'

let element = document.getElementById('content');
ReactDOM.render(React.createElement(App), element);

document.body.classList.remove('loading');
