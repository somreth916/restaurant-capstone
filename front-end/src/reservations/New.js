import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { formatAsTime } from "../utils/date-time";

export default function New() {
  
  const initialState = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 1,
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  function cancelBtn() {
    history.goBack();
  }

  function handleChange(e) {
    let value = e.target.value;
    if (e.target.name === "mobile_number") {
      const format = formatNumber(value);
      setFormData({...formData, [e.target.name]: format});
    } else if (e.target.name === "people") {
      value = parseInt(value);
      setFormData({...formData, [e.target.name]: value});
    } else {
      setFormData({...formData, [e.target.name]: value});
    }
  }

  function handleSubmit(e) {
    // e.preventDefault();
    
    if (validateDate()) {
      history.push(`/dashboard?date=${formData.reservation_date}`);
    }     
  }

  function formatNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const length = phoneNumber.length;
    if (length < 4) return phoneNumber;
    if (length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  function validateDate() {
    const reserveDate = new Date(formData.reservation_date);
    let reserveTime = Number(formData.reservation_time.slice(0, 2));
    reserveTime += Number(formData.reservation_time.slice(3)) / 60; //new Date(formData.reservation_time);
    const todaysDate = new Date();
    const foundErrors = [];

    if (reserveDate.getDay() === 1) {
      foundErrors.push({ message: "Reservations cannot be made on a Tuesday." });
    }
    if (reserveDate < todaysDate) {
      foundErrors.push({ message: "Reservations cannot be made in the past." });
    }

    if (reserveTime < 10.5 || reserveTime > 21.5) {
      foundErrors.push({ message: "Reservations cannot be made during outside restaurant hours." });
    }

    setErrors(foundErrors);
    if (foundErrors.length > 0) {
      return false;
    }
    return true;
  }

  const errorsCode = () => {
    return errors.map((error, idx) => <ErrorAlert key={idx} error={error} />);
  }

  return (
    <div className="container">
      <form>
        {errorsCode()}

        <label className="form-label" htmlFor="first_name">
          First Name:
        </label>
        <input
          className="form-control"
          name="first_name"
          id="first_name"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formData.first_name}
          required
        />

        <label className="form-label" htmlFor="last_name">
          Last Name:
        </label>
        <input
          className="form-control"
          name="last_name"
          id="last_name"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formData.last_name}
          required
        />

        <label className="form-label" htmlFor="mobile_number">
          Mobile Number:
        </label>
        <input
          className="form-control"
          name="mobile_number"
          id="mobile_number"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formData.mobile_number}
          required
        />

        <label className="form-label" htmlFor="reservation_date">
          Date of reservation:
        </label>
        <input
          className="form-control"
          name="reservation_date"
          id="reservation_date"
          type="date"
          onChange={(e) => handleChange(e)}
          value={formData.reservation_date}
          required
        />

        <label className="form-label" htmlFor="reservation_time">
          Time of reservation:
        </label>
        <input
          className="form-control"
          name="reservation_time"
          id="reservation_time"
          type="time"
          onChange={(e) => handleChange(e)}
          value={formData.reservation_time}
          required
        />

        <label className="form-label" htmlFor="people">
          Number of people:
        </label>
        <input
          className="form-control"
          name="people"
          id="people"
          type="number"
          onChange={(e) => handleChange(e)}
          value={formData.people}
          required
        />

        <button
          className="btn btn-primary m-1"
          type="submit"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
        <button
          className="btn btn-danger m-1"
          type="button"
          onClick={() => cancelBtn()}
        >
          Cancel
        </button>
      </form>
    </div> 
  );
}