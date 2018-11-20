import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import logo1 from './images/logo1.gif';
import Header from './nav'

import Home from './Home';
import List from './List';
import Signup from './Signup';
import Signin from './OAuthPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <div className="container mt-2">
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/contact" component={Signup} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
