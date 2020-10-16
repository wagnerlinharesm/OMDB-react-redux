import React from 'react';
import {Provider} from 'react-redux'
import {store} from './store/store'
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import {Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store = {store}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about/:id" component={About} exact /> 
        </Switch>
      </Provider>
  );
}

export default App;
