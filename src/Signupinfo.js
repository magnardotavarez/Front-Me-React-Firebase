import React, {Component} from 'react';
import fire from './fire';

class List extends Component {
  state = {
    table: fire.database().ref('list'),
    rows: [],
    name:"",
    LoanAmount:""
  }

  componentDidMount(){
    //We are using firebase to request a response from our table
    //The response is a higher order function object (don't ask - lol - I mean...do)
    //We then build a simple array of rows
    this.state.table.on('value', (response) => {
      let objects = response.val();
      let rows = [];
      for(let key in objects) {
        let row = objects[key];
        row.key = key;
        rows.push(row);
      }
      this.setState({rows});
    });
  }

  handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }

  add = (event) => {
    event.preventDefault();
    if(this.state.name){
      let row = {
        name: this.state.name,
        LoanAmount: this.state.LoanAmount
      }
      this.state.table.push(row);
      this.setState({name:"", LoanAmount:""});
    }
  }

  delete = (row) => {
    this.state.table.child(row.key).remove();
  }

  render(){
    let rows = this.state.rows.map(row =>
      <li key={row.key} className="list-group-item">

        {row.name} has a balance of : ${row.LoanAmount}

        <button onClick={clickEvent => this.delete(row)} className="btn btn-danger float-right">

          <i className="fa fa-trash"></i>

        </button>
      </li>
    );

    return (
      <div className="container mt-3">
        <h3>My Clients</h3>
        <form className="form-inline my-3">

          <input className="form-control" type="text"
            name="name"
            placeholder="Name here"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <input className="form-control" type="text"
            name="LoanAmount"
            placeholder="Loan Amount"
            onChange={this.handleChange}
            value={this.state.location}
          />


          <button onClick={this.add} className="btn btn-success">
            <i className="fa fa-plus"></i>
          </button>
        </form>
        <ul className="list-group mb-3">
          {rows}
        </ul>
      </div>
    );
  }
}

export default List;
