import React from "react";
import "./ShowForm.css";

const ShowForm = (props) => {
  return (
    <div className="show-form">
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
    </div>
  );
};

export default ShowForm;
