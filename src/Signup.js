

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HowMuch = () => (
  <div>
    <div className="form mb-5">
    <h3 className=" mb-5">Lets start with how much you want to borrow?</h3>

        <div class="input-group mb-5">

        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fas fa-dollar-sign"></i></span>
        </div>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <Link to="/about"><button type="button" class="btn btn-warning btn-sm">Continue</button></Link>
    </div>
  </div>
);
const About = () => (
  <div>
    <div className="form mb-5">
    <h3 className=" mb-5">Lets us know a little more about you!</h3>


        <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1"/>
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-check"></i></span>
            </div>
        </div>

        <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1"/>
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-check"></i></span>
            </div>
        </div>
        <div class="input-group mb-5">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fas fa-check"></i></span>
        </div>
        </div>

        <Link to="/Employed"><button type="button" class="btn btn-warning btn-sm">Continue</button></Link>
    </div>
  </div>
);
const Employed = () => (
  <div>
    <div className="form mb-5">
    <h3 className=" mb-5">Are you employed?</h3>


          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/>
              </div>
            </div>
            <input type="text" class="form-control" value="Full-Time" aria-label="Text input with checkbox"/>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/>
              </div>
            </div>
            <input type="text" class="form-control" value="Part-Time" aria-label="Text input with checkbox"/>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/>
              </div>
            </div>
            <input type="text" class="form-control" value="Self-Employed" aria-label="Text input with checkbox"/>
          </div>
            <div class="dropdown mb-5">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More Options
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">I am professional borrower</button>
            <button class="dropdown-item" type="button">Mom takes care of me</button>
            <button class="dropdown-item" type="button">Full-Time Student</button>
            </div>
            </div>

        <Link to="/Tax"><button type="button" class="btn btn-warning btn-sm">Continue</button></Link>
    </div>
  </div>

);
const Tax = () => (
  <div>
    <div className="form mb-5">

    <h3 className=" mb-5">How much do you earn annually after tax?</h3>
    <div class="input-group mb-5">

    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1"><i class="fas fa-dollar-sign"></i></span>
    </div>
        <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>


        <Link to="/Address"><button type="button" class="btn btn-warning btn-sm">Continue</button></Link>
    </div>
  </div>

);
const Address = () => (
  <div>
    <div className="form mb-5">

    <h3 className=" mb-5">What is your home address?</h3>

    <input type="text" class="form-control mb-3" placeholder="Adress" aria-label="Adress" aria-describedby="basic-addon1"/>
    <input type="text" class="form-control mb-3" placeholder="Apt" aria-label="Apt" aria-describedby="basic-addon1"/>
    <input type="text" class="form-control mb-3" placeholder="Zipcode" aria-label="Zipcode" aria-describedby="basic-addon1"/>

        <Link to="/Phone"><button type="button" class="btn btn-warning btn-sm">Continue</button></Link>
    </div>
  </div>

);
const Phone = () => (
  <div>
    <div className="form mb-5">

    <h3 className=" mb-5">What is your Phone Number?</h3>

    <input type="text" class="form-control mb-3" placeholder="000-000-00000" aria-label="Adress" aria-describedby="basic-addon1"/>

        <Link to="/CreatePassword"><button type="button" class="btn btn-warning btn-sm">Continue</button></Link>
    </div>
  </div>

);
const CreatePassword = () => (
  <div>
    <div className="form mb-5">

    <h3 className=" mb-5">Last Step! Create a Password to see your Loan!</h3>

    <input type="text" class="form-control mb-3" placeholder="Password" aria-label="Adress" aria-describedby="basic-addon1"/>

        <Link to="/Password"><button type="button" class="btn btn-warning btn-sm">Submit</button></Link>
    </div>
  </div>

);

const App = () => (
  <Router>
    <div class="gradient">
      <h1>Welcome to Front Me! </h1>
      <Link to="/"><button type="button" class="btn btn-warning btn-sm">Continue</button></Link>


      <Route exact path="/" component={HowMuch} />
      <Route path="/about" component={About} />
      <Route path="/Employed" component={Employed} />
      <Route path="/Tax" component={Tax} />
      <Route path="/Address" component={Address} />
      <Route path="/Phone" component={Phone} />
      <Route path="/CreatePassword" component={CreatePassword} />
    </div>
  </Router>
);
export default App;
