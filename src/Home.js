import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import List from './List';
import Signup from './Signup';
// import logo1 from './images/logo1.gif';
import Login from './login';

class Home extends Component {
  render() {
    return (
      <Router>

      <div className="row">

        <div className="left col-6 mt-5 ">
          <h3 className="text-justify">Welcome back to Front Me!</h3>
          <h6 className="mt-5 check-list"><i class="fas fa-check"></i> Compare personalized loan offers from multiple vetted lenders  </h6>
          <h6 className="mt-5 check-list"><i class="fas fa-check"></i> Our Expert Client success team is here to help you along the way! </h6>
          <h6 className="mt-5 check-list"><i class="fas fa-check"></i> Checking rates wont effect your credit </h6>
        </div>
        <div className="right border col-6 mt-4 ">
          <div className="form-header">
            <p>Welcome Back</p>
            <h5>Log in To Front ME</h5>
          </div>
          <div className="form">
              <p>Username</p>
              <input type="text" class="form-control" placeholder="Username" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
              <p className="mt-3">Password</p>

              <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="far fa-eye"></i></span>
                  </div>
              </div>
              <p className="forgot">Forgot your Password?</p>
              <button type="button" class="btn btn-primary btn-sm">Log In</button>

              <Link to="/Signup"><p className="Sign-up">Dont have an account? Sign-up</p></Link>

          </div>

        </div>
      </div>
      </Router>
    );
  }
}

export default Home;
