import React from "react";
import "./Modal.css";

const Modal = ({
  firstname,
  lastname,
  phone,
  role,
  message,
  close,
  submitHandler,
}) => {
  return (
    <section className="overlay">
      <div className="modal">
        <p>
          First Name: <span>{firstname}</span>
        </p>
        <p>
          Last Name: <span>{lastname}</span>
        </p>
        <p>
          Phone No.: <span>{phone}</span>
        </p>
        <p>
          Role: <span>{role}</span>
        </p>
        <p>
          Message: <span>{message}</span>
        </p>

        <h4>Would you like to send this detail?</h4>
        <div>
          <button className="primary-btn" onClick={submitHandler}>
            Yes, I would like to send.
          </button>
          <button className="secondary-btn" onClick={close}>
            No, I wouldn't like to send.
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
