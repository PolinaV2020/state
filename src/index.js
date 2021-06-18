import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkbox from './Checkbox.js';
import Play from './Play.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Checkbox />
    <Play />
  </React.StrictMode>,
  document.getElementById('root')
);

