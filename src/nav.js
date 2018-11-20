import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import logo1 from './images/logo1.gif';


import Home from './Home';
import List from './List';
import Signup from './Signup';
const Header = (props) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">

      <NavLink className="navbar-brand" to="/" exact activeClassName="active">

       <img src={logo1} className="App-logo" alt="logo" />

      </NavLink>

      <ul className="navbar-nav ml-auto">

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" activeClassName="active">Signup</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/list" activeClassName="active">Clients</NavLink>
        </li>

      </ul>
    </nav>

  </div>
);



export default Header;
