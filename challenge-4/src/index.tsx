import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './pages/home/App';
import Users from './pages/users/Users';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
