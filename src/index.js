import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/home" component={Home} />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));
