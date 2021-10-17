import React from 'react';
import Navbar2 from './components/Navbar2';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Randomvids from './components/Randomvids';
// import Navbuttons from './components/navbuttons';

function App() {
  return (
    <div className="App">
      
      <Navbar2 />
      
      <Switch>
        <Route exact path="/" component={Homepage}  />
        <Route exact path="/about" component={About}  />
        <Route exact path="/skills" component={Skills}  />
        <Route exact path="/randomvids" component={Randomvids}  />
      </Switch>
      
      
    </div>
  );
}

export default App;
