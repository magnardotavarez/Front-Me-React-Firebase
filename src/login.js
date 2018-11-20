import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './fire.js';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      LoanAmount: '',
      client: '',
      username: '',
      items: [],
      user: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value

    });
  }
  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      amount: this.state.LoanAmount,
      client: this.state.client,
      user: this.state.user.displayName || this.state.user.email
    }
    itemsRef.push(item);
    this.setState({
      LoanAmount: '',
      client: '',
      username: '',
    });
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      console.log(user);

    });
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          amount: items[item].amount,
          client: items[item].client,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });

    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <div className='app '>
        <header>
            <div className=" ">
              {this.state.user ?
                <button className="button nav-item nav-link" onClick={this.logout}>Logout</button>
              :
                <button className="button nav-item nav-link" onClick={this.login}>Log In</button>
              }
            </div>
        </header>
        {this.state.user ?
          <div>


            <div className='bg-light  border mt-2'>
              <section className='add-client'>

              <center>
              <div className='user-profile'>
                  <img src={this.state.user.photoURL} />
              </div>
              <h4 className="welcome mt-2" name="username" placeholder="Investor Name" onChange={this.handleChange} > {this.state.user.displayName || this.state.user.email} </h4>


                    <form className="form" onSubmit={this.handleSubmit}>
                      <input className="border p-2" type="text" name="client" placeholder="Client Name" onChange={this.handleChange} value={this.state.client} />
                      <input className="border m-4 p-2" type="text" name="LoanAmount" placeholder="Loan Amount" onChange={this.handleChange} value={this.state.LoanAmount} />
                      <button className="btn btn-primary ">Add Clients</button>
                    </form>
                    </center>

              </section>

              <section className='display-item'>
                  <div className=" ">

                    <ul className="ul row flex-parent">
                    <h2 id="fm" className="mb-3">Front Me Clients</h2>
                      {this.state.items.map((item) => {

                        return (

                          <li className="li wrapper " key={item.id}>

                            <h3>Investor : {item.user}
                              {item.user === this.state.user.displayName || item.user === this.state.user.email ||  this.state.user.email == "magnardotavarez@gmail.com" ?
                                <button className="btn btn-sm btn-danger" onClick={() => this.removeItem(item.id)}>Remove Client</button>
                              : null}
                            </h3>
                            <div className="p-3">
                            <h4>Client: {item.client}</h4>
                            <h5>Balance : ${item.amount}</h5>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
              </section>
            </div>
          </div>
        :
          <h4 id="log-in" className="mt-4">Log in with Google to see your clients!</h4>
        }

      </div>
    );
  }
}


export default Login;
