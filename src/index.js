import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //pega a div root e renderiza o componetne App
  document.getElementById('root')
);

