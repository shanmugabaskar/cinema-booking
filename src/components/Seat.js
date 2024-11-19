import React from "react";
import "../Seat.css";

function Seat({ number, isBooked, isSelected, onSeatSelect }) {
  return (
    <div
      className={`seat ${isBooked ? "booked" : isSelected ? "selected" : ""}`}
      onClick={() => onSeatSelect(number)}
    >
      {number}
    </div>
  );
}

export default Seat;
