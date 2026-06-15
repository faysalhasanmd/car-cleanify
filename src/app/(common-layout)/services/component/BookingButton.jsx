"use client";
import { BookingContext } from "@/context/booking.context";
import React, { use } from "react";

const BookingButton = ({ service }) => {
  const { bookings, addBooking, removeBooking } = use(BookingContext);
  const isAlreadyBooking = bookings.find((b) => b._id === service?._id);
  console.log(isAlreadyBooking, bookings);
  return (
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-xl hover:shadow-blue-600/20 transition-all text-sm"
      onClick={() =>
        isAlreadyBooking ? removeBooking(service?._id) : addBooking(service)
      }
    >
      {service.isDeleted
        ? "Service Unavailable"
        : isAlreadyBooking
          ? "Un Book This Service"
          : "Book This Service"}
    </button>
  );
};

export default BookingButton;
