import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './App';


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
