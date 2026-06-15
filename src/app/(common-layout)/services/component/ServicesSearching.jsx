"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ServicesSearching = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const handleSubmitFunc = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search?.value;
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("searchTerm", searchTerm);
    } else {
      params.delete("searchTerm");
    }
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmitFunc}>
        <div>
          <input
            name="search"
            type="text"
            placeholder="search here"
            className="py-2 px-2 bg-lime-200 font-black shadow w-[70%] rounded-l-2xl"
          />
          <button className="cursor-pointer py-2 px-2 bg-lime-400 rounded-r-2xl">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServicesSearching;
