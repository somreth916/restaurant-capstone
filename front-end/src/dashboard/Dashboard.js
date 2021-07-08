import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import { previous, today, next } from "../utils/date-time";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState(null);

  const history = useHistory();

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <h4 className="mb-0">Reservations for {date}</h4>
      <ErrorAlert error={reservationsError} />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
					  <th scope="col">First Name</th>
					  <th scope="col">Last Name</th>
					  <th scope="col">Mobile Number</th>
					  <th scope="col">Time</th>
					  <th scope="col">People</th>
					  <th scope="col">Status</th>
					  <th scope="col">Seat Table</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

      <h4 className="mb-0">Tables</h4>
      <ErrorAlert error={tablesError} />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
					  <th scope="col">Table Name</th>
					  <th scope="col">Capacity</th>
					  <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      
			<button type="button" onClick={() => history.push(`/dashboard?date=${previous(date)}`)}>Previous</button>
			<button type="button" onClick={() => history.push(`/dashboard?date=${today()}`)}>Today</button>
			<button type="button" onClick={() => history.push(`/dashboard?date=${next(date)}`)}>Next</button>
    </main>
  );
}

export default Dashboard;
