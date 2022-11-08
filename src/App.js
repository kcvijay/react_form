import React, { Component } from "react";
import Form from "./Form";
import ShowForm from "./ShowForm";
import Modal from "./Modal";
import "./App.css";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
    show: false,
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showModal = (e) => {
    e.preventDefault();
    this.setState({
      show: true,
    });
    e.target.reset();
  };

  hideModal = (e) => {
    e.preventDefault();
    this.setState({
      show: false,
    });
    e.target.reset();
  };

  render() {
    return (
      <div className="app">
        <Form getValues={this.changeHandler} showModal={this.showModal} />
        <ShowForm
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          role={this.state.role}
          message={this.state.message}
        />
        {this.state.show && (
          <Modal
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phone={this.state.phone}
            role={this.state.role}
            message={this.state.message}
            hideModal={this.hideModal}
          />
        )}
      </div>
    );
  }
}

export default App;
