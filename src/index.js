import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Adding Interceptors to Execute Code Globally
axios.interceptors.request.use(
  req => {
    console.log(req);
    // always return or edit
    return req;
  }, // error for no network connectivity
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  req => {
    console.log(req);
    // always return or edit
    return req;
  }, // error for no network connectivity
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
