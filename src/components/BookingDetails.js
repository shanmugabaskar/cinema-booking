import React, { useState } from "react";
import "../BookingDetails.css";

function BookingDetails({
  bookingDetails,
  onBookSeats,
  selectedSeats,
  onRemoveBooking,
}) {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSeats.length > 0 && userName) {
      onBookSeats(userName);
      setUserName("");
    }
  };

  return (
    <div className="booking-details">
      <h2>Booked Seats</h2>
      {bookingDetails.length > 0 ? (
        <ul>
          {bookingDetails.map((detail) => (
            <li key={detail.seatNumber}>
              Seat {detail.seatNumber} booked by {detail.userName}
              <button onClick={() => onRemoveBooking(detail.seatNumber)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No seats booked.</p>
      )}
      {selectedSeats.length > 0 && (
        <form onSubmit={handleSubmit} className="booking-form">
          <h3>Book Selected Seats</h3>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit">Book</button>
        </form>
      )}
    </div>
  );
}

export default BookingDetails;
