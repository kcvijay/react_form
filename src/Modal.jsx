import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <section className="overlay">
      <div className="modal">
        <p>
          First Name: <span>{props.firstname}</span>
        </p>
        <p>
          Last Name: <span>{props.lastname}</span>
        </p>
        <p>
          Phone Name: <span>{props.phone}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>

        <h4>Would you like to send this detail?</h4>
        <div>
          <button className="primary-btn" onClick={props.hideModal}>
            Yes, I would like to send.
          </button>
          <button className="secondary-btn">
            No, I wouldn't like to send.
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
