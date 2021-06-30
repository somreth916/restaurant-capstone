import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function New() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [people, setPeople] = useState("");

  const history = useHistory();

  function handleChange() {
    
  }

  function handleSubmit() {
    
  }

  return (
      <form>
        <label className="form-label" htmlFor="first_name">
          First Name:
        </label>
        <input
          className="form-control"
          name="first_name"
          id="first_name"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
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
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
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
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
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
          onChange={(e) => setReservationDate(e.target.value)}
          value={reservationDate}
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
          onChange={(e) => setReservationTime(e.target.value)}
          value={reservationTime}
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
          onChange={(e) => setPeople(e.target.value)}
          value={people}
          required
        />

        <button
          className="btn btn-primary m-1"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="btn btn-danger m-1"
          type="button"
          onClick={() => history.push("/dashboard/")}
        >
          Cancel
        </button>
      </form>
  );
}