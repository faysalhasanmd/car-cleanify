import React from "react";
import Link from "next/link";
import BookingButton from "../component/BookingButton";

export function generateStaticParams() {
  return [
    { slug: "6730abf866a012cf8bbd6db0" },
    { slug: "6730ac4166a012cf8bbd6db8" },
    { slug: "6730ac1b66a012cf8bbd6db4" },
    { slug: "6730ab9966a012cf8bbd6da4" },
    { slug: "66d1b378878f84fdc5cd1e3b" },
    { slug: "66d1b165878f84fdc5cd1e2c" },
  ];
}

const getSingleServices = async (id) => {
  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`,
    // { cache: "no-store" },
  );
  const data = await res.json();
  return data;
};

const ServiceDetails = async ({ params }) => {
  const { slug } = await params;
  const { data: service } = await getSingleServices(slug);

  const features = [
    "High-pressure underbody rinse",
    "Rust & corrosion prevention",
    "Chassis & suspension clean",
    "Wheel well treatment",
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 group transition-colors"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Back to services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <div>
              {/* Image Container with hover zoom */}
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm mb-6 aspect-[16/9] bg-slate-100 group">
                <img
                  src={service?.img}
                  alt={service?.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                />
              </div>

              {/* Badges */}
              <div className="flex gap-2 flex-wrap mb-4">
                {service?.isFeatured && (
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                    ★ Featured
                  </span>
                )}
                <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>

              <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
                {service?.name}
              </h1>
              <p className="text-xs font-medium text-slate-400">
                Last updated{" "}
                {new Date(service?.updatedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Price
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  ৳ {service?.price?.toLocaleString()}
                </p>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Duration
                </p>
                <p className="text-2xl font-bold text-slate-900 flex items-baseline gap-1">
                  {service?.duration}
                  <span className="text-sm font-medium text-slate-400">
                    min
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight">
                About this service
              </h2>
              <div
                className="prose prose-sm prose-slate max-w-none text-slate-600 leading-relaxed
                  prose-headings:font-semibold prose-headings:text-slate-800
                  prose-p:mb-4 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: service?.description }}
              />
            </div>
          </div>

          {/* Right sticky column */}
          <div className="lg:sticky lg:top-6 space-y-4">
            {/* Booking Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl shadow-slate-200/40">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Total price
              </p>
              <p className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                ৳ {service?.price?.toLocaleString()}
              </p>
              <p className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md mb-6">
                ⏱ Est. {service?.duration} minutes
              </p>

              <div className="border-t border-slate-100 pt-5 mb-6">
                <p className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                  What's included
                </p>
                <ul className="flex flex-col gap-3">
                  {features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <BookingButton service={service}></BookingButton>

              <p className="text-center text-xs font-medium text-slate-400 mt-4 flex items-center justify-center gap-1">
                🔒 Secure booking · Free cancellation
              </p>
            </div>

            {/* Support Widget */}
            <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">
                🎧
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Need help?</p>
                <p className="text-xs font-medium text-slate-500">
                  Contact our support team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
