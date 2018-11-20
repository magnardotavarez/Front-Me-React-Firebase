import React, { Component } from "react";
import ReactDOM from "react-dom";

class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassname}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
