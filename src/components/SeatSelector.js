import React from "react";
import Seat from "./Seat";
import "../SeatSelector.css";

function SeatSelector({ seats, bookedSeats, selectedSeats, onSeatSelect }) {
  return (
    <div className="seat-selector">
      {seats.map((seat) => (
        <Seat
          key={seat}
          number={seat}
          isBooked={bookedSeats.includes(seat)}
          isSelected={selectedSeats.includes(seat)}
          onSeatSelect={onSeatSelect}
        />
      ))}
    </div>
  );
}

export default SeatSelector;
