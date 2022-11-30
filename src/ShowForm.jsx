import React from "react";
import "./ShowForm.css";

const ShowForm = ({ firstname, lastname, phone, role, message }) => {
  return (
    <div className="show-form">
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
    </div>
  );
};

export default ShowForm;
