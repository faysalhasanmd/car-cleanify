import Link from "next/link";
import React from "react";

const DashboardSidebar = () => {
  return (
    <div className="w-[200px] h-screen bg-lime-100 fixed left-0 top-0">
      <h1 className="text-3xl font-bold">Car-Cleaning</h1>
      <Link href={"/"}>
        <img
          className="h-[80px] ml-[25%] w-[100px] text-center rounded-full"
          src="https://img.freepik.com/premium-vector/vector-car-logo-design_714931-342.jpg?semt=ais_hybrid&w=740&q=80"
        />
      </Link>
      <div className="flex flex-col gap-3 mt-3 text-center">
        <Link className="bg-lime-500" href={"/dashboard/profile"}>
          Profile
        </Link>
        <Link className="bg-lime-500" href={"/dashboard/my-booking"}>
          Booking
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
