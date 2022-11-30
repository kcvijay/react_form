import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "./Form";
import ShowForm from "./ShowForm";
import Modal from "./Modal";
import NotesList from "./NotesList";

import "./App.css";

const App = () => {
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false); // Default modal opening state is false.

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value }); //Opening a 'contact' as whole and update with input data based on input section name
  };

  //Opens modal with the input data.
  const sendData = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  // Closes modal
  const closeHandler = (e) => {
    setShowModal(false);
    setContact({
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    });
  };

  const submitHandler = () => {
    axios.post("http://localhost:3001/notes", { ...contact });
    setShowModal(false);
    closeHandler();
  };

  return (
    <div className="app">
      <Form getValues={changeHandler} showModal={sendData} />
      <ShowForm {...contact} />
      {showModal && (
        <Modal
          {...contact}
          close={closeHandler}
          submitHandler={submitHandler}
        />
      )}
      <NotesList />
    </div>
  );
};
export default App;
