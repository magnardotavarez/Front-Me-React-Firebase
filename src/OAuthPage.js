import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import logo1 from './images/logo1.gif';
import Header from './nav'

import Home from './Home';
import List from './List';
import Signup from './Signup';
import Login from './login';


class Signin extends Component {
  render() {
    return (
          <Login />
    );
  }
}

export default Signin;
