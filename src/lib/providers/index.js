"use client";
import { SessionProvider } from "next-auth/react";
import BookingContextProvider from "@/context/booking.context"; // ← default export
import UserContextProvider from "@/context/user.context";
import React from "react";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <UserContextProvider>
        <BookingContextProvider>{children}</BookingContextProvider>
      </UserContextProvider>
    </SessionProvider>
  );
};

export default Providers;
