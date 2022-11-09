import React, { Component } from "react";
import Form from "./Form";
import ShowForm from "./ShowForm";
import Modal from "./Modal";
import "./App.css";

class App extends Component {
  state = {
    note: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
      show: false,
    },
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value },
    });
  };

  showModal = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show, // Making opposite state of what it was.
    });
  };

  closeHandler = (e) => {
    //window.location.reload()
    this.setState({
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    });
  };

  render() {
    return (
      <div className="app">
        <Form
          getValues={this.changeHandler}
          showModal={this.showModal}
          {...this.state.note}
        />
        <ShowForm
          // firstname={this.state.firstname}
          // lastname={this.state.lastname}
          // phone={this.state.phone}
          // role={this.state.role}
          // message={this.state.message}
          {...this.state.note}
        />
        {this.state.show && (
          <Modal
            // firstname={this.state.firstname}
            // lastname={this.state.lastname}
            // phone={this.state.phone}
            // role={this.state.role}
            // message={this.state.message}
            {...this.state.note}
            close={this.closeHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
