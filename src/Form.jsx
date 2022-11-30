import React from "react";
import "./Form.css";

const Form = ({
  getValues,
  firstname,
  lastname,
  phone,
  message,
  showModal,
}) => {
  return (
    <section className="form">
      <h2>Please enter your details.</h2>
      <form>
        <div>
          <label htmlFor="firstname" className="firstname">
            First Name:
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="For ex. John"
            onChange={getValues}
            value={firstname}
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
            id="lastname"
            placeholder="For ex. Doe"
            onChange={getValues}
            value={lastname}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="phone">
            Phone No.:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="For ex. 040-123-4560"
            onChange={getValues}
            value={phone}
            required
          />
        </div>
        <div>
          <label htmlFor="role" className="role">
            Role:
          </label>
          <select
            name="role"
            id="role"
            defaultValue="choice"
            onChange={getValues}
          >
            <option value="choice" disabled>
              Pick a role..
            </option>
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
            placeholder="Your message..(max 1000 characters)"
            onChange={getValues}
            value={message}
            required
          ></textarea>
        </div>
        <div>
          <label></label>
          <button className="primary-btn" onClick={showModal}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
