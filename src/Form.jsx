import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <section className="form" onChange={props.getValues}>
      <h2>Please enter your details.</h2>
      <form>
        <div>
          <label htmlFor="firstname" className="firstname">
            First Name:
          </label>
          <input
            type="text"
            name="firstname"
            placeholder="For ex. John"
            required
          />
        </div>
        <div>
          <label htmlFor="lastname" className="lastname">
            Last Name:
          </label>
          <input
            type="text"
            name="lastname"
            placeholder="For ex. Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="phone">
            Phone No.:
          </label>
          <input
            type="number"
            name="phone"
            placeholder="For ex. 0401234560"
            required
          />
        </div>
        <div>
          <label htmlFor="role" className="role">
            Role:
          </label>
          <select name="role" id="role">
            <option>Pick a role..</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            max="1000"
            placeholder="Your message.."
            required
          ></textarea>
        </div>
        <div>
          <button className="primary-btn" onClick={props.showModal}>
            {" "}
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
