import React, { useState, useLayoutEffect } from 'react'
import './App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
    </div>

  )
}


export default App;
