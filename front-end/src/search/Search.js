import React, { useState } from "react";
import ReservationRow from "../dashboard/ReservationRow";
import { listReservations } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

export default function Search() {
    const [mobileNumber, setMobileNumber] = useState("");
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    function handleChange({ target }) {
	    setMobileNumber(target.value);
    }

    // Makes an API call on form submit
    function handleSubmit(e) {
	    e.preventDefault();
        const abortController = new AbortController();

	    setError(null);

	    listReservations({ mobile_number: mobileNumber }, abortController.signal)
		    .then(setReservations)
		    .catch(setError);

	    return () => abortController.abort();
    }

    const searchResultsJSX = () => {
        return reservations.length > 0 ? (
          reservations.map((reservation) => (
            <ReservationRow
              key={reservation.reservation_id}
              reservation={reservation}
            />
          ))
        ) : (
          <tr>
            <td>No reservations found</td>
          </tr>
        );
      };

	return (
        <div>
            <form>
                <ErrorAlert error={error} />
    
                <label htmlFor="mobile_number">Enter a customer's phone number:</label>
                <input 
                    name="mobile_number"
                    id="mobile_number"
                    type="tel"
                    onChange={handleChange}
                    value={mobileNumber}
                    required
                />
    
                <button type="submit" onClick={handleSubmit}>Find</button>
            </form>
                
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>People</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Cancel</th>
                        <th>Seat</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResultsJSX()}
                </tbody>
            </table>
        </div>
    );
}