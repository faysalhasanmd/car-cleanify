import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {[...Array(10)].map((_, ind) => (
        <div
          key={ind}
          className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 flex flex-col justify-between animate-pulse"
        >
          {/* Image placeholder */}
          <div className="bg-slate-200 h-[300px] w-full" />

          <div className="p-4 flex flex-col gap-3 flex-1">
            {/* Title */}
            <div className="bg-slate-200 h-5 w-3/4 rounded-lg" />

            {/* Description lines */}
            <div className="bg-slate-200 h-3.5 w-full rounded-lg" />
            <div className="bg-slate-200 h-3.5 w-5/6 rounded-lg" />

            {/* Bottom row: price + button */}
            <div className="flex justify-between items-center mt-auto pt-2">
              <div className="bg-slate-200 h-5 w-16 rounded-lg" />
              <div className="bg-slate-200 h-9 w-24 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
