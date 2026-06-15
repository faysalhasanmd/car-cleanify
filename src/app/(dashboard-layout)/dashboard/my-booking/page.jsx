"use client";
import { BookingContext } from "@/context/booking.context";
import { use } from "react";

const MyBookings = () => {
  const { bookings, removeBooking } = use(BookingContext);

  if (!bookings || bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 border border-dashed border-gray-300 dark:border-gray-600 rounded-xl">
        <span className="text-5xl text-gray-300 dark:text-gray-600">📭</span>
        <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
          No bookings found
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          You haven't booked any services yet.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-6">
        My Bookings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
          >
            <img
              src={booking.img}
              alt={booking.name}
              className="w-full h-44 object-cover"
            />

            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                {booking.name}
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span>⏱</span>
                <span>{booking.duration} mins</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                <span>📅</span>
                <span>
                  {new Date(booking.createdAt).toLocaleDateString("en-BD", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  ৳{booking.price.toLocaleString()}
                </span>
                <button
                  onClick={() => removeBooking(booking._id)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
