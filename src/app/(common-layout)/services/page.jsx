import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import ServicesSearching from "./component/ServicesSearching";

// Fetching configuration abstracted for cleaner code
const getAllServices = async (searchParams) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://car-washing-system-cleanify-server.vercel.app";
  const queryParams = new URLSearchParams(searchParams).toString();

  try {
    const res = await fetch(`${baseUrl}/api/v1/services?${queryParams}`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch services: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Data fetching error:", error);
    return { data: [] };
  }
};

const ServicePage = async ({ searchParams }) => {
  const getParams = await searchParams;
  const allData = await getAllServices({ ...getParams });
  const services = allData?.data || [];

  return (
    <div className="bg-slate-50 min-h-screen w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Our Premium <span className="text-blue-600">Car Care Services</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto font-normal">
          Give your vehicle the professional treatment it deserves. Choose from
          our wide range of expert washing and detailing services.
        </p>
      </div>

      {/* Filter/Search Component Container */}
      <div className="max-w-7xl mx-auto mb-12">
        <ServicesSearching />
      </div>

      {/* Services Grid */}
      {services.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out border border-slate-100 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Banner Section */}
              <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  sizes="(max-w-7xl) 33vw"
                  priority={service.isFeatured}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {service.isFeatured && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    Featured
                  </span>
                )}

                <span className="absolute bottom-4 right-4 bg-slate-900/70 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Clock size={14} className="text-slate-200" />
                  {service.duration} Mins
                </span>
              </div>

              {/* Card Body content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {service.name}
                  </h3>

                  <div
                    className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 prose prose-slate"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>

                {/* Card Footer actions */}
                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-widest font-bold mb-0.5">
                      Investment
                    </span>
                    <span className="text-2xl font-extrabold text-slate-900">
                      ৳{service.price.toLocaleString()}
                    </span>
                  </div>

                  <Link
                    href={`/services/${service?._id}`}
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 shadow-sm"
                  >
                    Book Appointment
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="max-w-7xl mx-auto text-center py-20 border-2 border-dashed border-slate-200 rounded-2xl bg-white">
          <p className="text-slate-400 text-base font-medium">
            No premium services match your current selection.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
