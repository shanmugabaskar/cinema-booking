import React, { useState } from "react";
import SeatSelector from "./components/SeatSelector";
import BookingDetails from "./components/BookingDetails";
import "./App.css";

function App() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState([]);
  const seats = Array.from({ length: 50 }, (_, i) => i + 1);

  const handleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleBookSeats = (userName) => {
    const newBookedSeats = selectedSeats.filter(
      (seat) => !bookedSeats.includes(seat)
    );
    setBookedSeats([...bookedSeats, ...newBookedSeats]);
    setBookingDetails([
      ...bookingDetails,
      ...newBookedSeats.map((seat) => ({ seatNumber: seat, userName })),
    ]);
    setSelectedSeats([]);
  };

  const handleRemoveBooking = (seatNumber) => {
    setBookedSeats(bookedSeats.filter((seat) => seat !== seatNumber));
    setBookingDetails(
      bookingDetails.filter((detail) => detail.seatNumber !== seatNumber)
    );
  };

  return (
    <div className="App">
      <h1>Cinema Booking System</h1>
      <SeatSelector
        seats={seats}
        bookedSeats={bookedSeats}
        selectedSeats={selectedSeats}
        onSeatSelect={handleSeatSelection}
      />
      <BookingDetails
        bookingDetails={bookingDetails}
        onBookSeats={handleBookSeats}
        selectedSeats={selectedSeats}
        onRemoveBooking={handleRemoveBooking}
      />
    </div>
  );
}

export default App;
