"use client";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    role: "Business Owner",
    avatar: "R",
    service: "Full Detail",
    rating: 5,
    date: "2024-12-10",
    text: "Absolutely amazing service! My car looks better than the day I bought it. The team was punctual, professional, and thorough. The ceramic coating is absolutely worth every taka.",
    helpful: 12,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Teacher",
    avatar: "N",
    service: "Interior Detailing",
    rating: 5,
    date: "2024-11-25",
    text: "I had the interior detailing done and I'm blown away. Every corner was spotless. Staff were very polite and careful with my belongings. Will definitely come back!",
    helpful: 9,
  },
  {
    id: 3,
    name: "Tanvir Hossain",
    role: "Software Engineer",
    avatar: "T",
    service: "Exterior Wash",
    rating: 4,
    date: "2024-11-18",
    text: "Great experience overall. They came right to my office parking which was super convenient. Minor issue with one spot near the trunk but they fixed it immediately when I pointed it out.",
    helpful: 6,
  },
  {
    id: 4,
    name: "Sadia Islam",
    role: "Doctor",
    avatar: "S",
    service: "Ceramic Coating",
    rating: 5,
    date: "2024-10-30",
    text: "Worth every penny! The ceramic coating has made maintenance so much easier. Three months in and the car still beads water perfectly. Highly professional team.",
    helpful: 15,
  },
  {
    id: 5,
    name: "Karim Uddin",
    role: "Entrepreneur",
    avatar: "K",
    service: "Full Detail",
    rating: 4,
    date: "2024-10-15",
    text: "Very thorough job on the full detail. The engine bay cleaning was something I didn't expect but was a great bonus. Took a bit longer than estimated but quality was excellent.",
    helpful: 8,
  },
  {
    id: 6,
    name: "Farzana Akter",
    role: "Banker",
    avatar: "F",
    service: "Exterior Wash",
    rating: 3,
    date: "2024-09-22",
    text: "Service was decent. The exterior wash was done well but I had to wait about 20 minutes past the scheduled time. Customer support was responsive when I complained.",
    helpful: 4,
  },
  {
    id: 7,
    name: "Mahbub Rahman",
    role: "Journalist",
    avatar: "M",
    service: "Interior Detailing",
    rating: 5,
    date: "2024-09-10",
    text: "My car had a terrible smell from a coffee spill and they completely eliminated it! The interior looks and smells brand new. Exceptional odor removal service.",
    helpful: 11,
  },
  {
    id: 8,
    name: "Tahmina Begum",
    role: "Homemaker",
    avatar: "T",
    service: "Full Detail",
    rating: 4,
    date: "2024-08-28",
    text: "Really happy with the full detail package. The kids had made a real mess inside and now it's spotless. Reasonable pricing for the quality of work done.",
    helpful: 7,
  },
  {
    id: 9,
    name: "Imran Chowdhury",
    role: "Architect",
    avatar: "I",
    service: "Ceramic Coating",
    rating: 5,
    date: "2024-08-05",
    text: "The ceramic coating application was flawless. You can see the depth in the paint now. They also did paint correction before applying which made a huge difference.",
    helpful: 13,
  },
];

const services = [
  "All Services",
  "Exterior Wash",
  "Interior Detailing",
  "Full Detail",
  "Ceramic Coating",
];
const ratings = [
  "All Ratings",
  "5 Stars",
  "4 Stars",
  "3 Stars",
  "2 Stars",
  "1 Star",
];

const StarRating = ({ rating, size = "sm" }) => {
  const s = size === "lg" ? "text-lg" : "text-sm";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`${s} ${i <= rating ? "text-yellow-400" : "text-gray-200"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const avgRating = (
  reviews.reduce((a, r) => a + r.rating, 0) / reviews.length
).toFixed(1);
const ratingCounts = [5, 4, 3, 2, 1].map((r) => ({
  stars: r,
  count: reviews.filter((rev) => rev.rating === r).length,
}));

const ReviewPage = () => {
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("All Services");
  const [ratingFilter, setRatingFilter] = useState("All Ratings");
  const [sort, setSort] = useState("newest");

  const filtered = reviews
    .filter((r) => {
      const matchSearch =
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.text.toLowerCase().includes(search.toLowerCase()) ||
        r.service.toLowerCase().includes(search.toLowerCase());
      const matchService =
        serviceFilter === "All Services" || r.service === serviceFilter;
      const matchRating =
        ratingFilter === "All Ratings" ||
        r.rating === parseInt(ratingFilter[0]);
      return matchSearch && matchService && matchRating;
    })
    .sort((a, b) => {
      if (sort === "newest") return new Date(b.date) - new Date(a.date);
      if (sort === "oldest") return new Date(a.date) - new Date(b.date);
      if (sort === "highest") return b.rating - a.rating;
      if (sort === "lowest") return a.rating - b.rating;
      if (sort === "helpful") return b.helpful - a.helpful;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">
            Customer Feedback
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">
            What Our Customers Say
          </h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Real reviews from real customers. We take pride in every wash,
            detail, and coating we deliver.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Overall Score */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
            <p className="text-6xl font-bold text-gray-900">{avgRating}</p>
            <StarRating rating={Math.round(avgRating)} size="lg" />
            <p className="text-gray-400 text-sm mt-2">
              {reviews.length} total reviews
            </p>
          </div>

          {/* Rating Breakdown */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:col-span-2">
            <p className="text-sm font-semibold text-gray-700 mb-4">
              Rating Breakdown
            </p>
            <div className="space-y-2.5">
              {ratingCounts.map(({ stars, count }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-10 shrink-0">
                    {stars} ★
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full transition-all"
                      style={{ width: `${(count / reviews.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-6 text-right shrink-0">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search */}
            <div className="relative lg:col-span-1">
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search reviews..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 bg-gray-50"
              />
            </div>

            {/* Service Filter */}
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 bg-gray-50 text-gray-700"
            >
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            {/* Rating Filter */}
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 bg-gray-50 text-gray-700"
            >
              {ratings.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 bg-gray-50 text-gray-700"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
        </div>

        {/* Result Count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filtered.length}
            </span>{" "}
            of {reviews.length} reviews
          </p>
          {(search ||
            serviceFilter !== "All Services" ||
            ratingFilter !== "All Ratings") && (
            <button
              onClick={() => {
                setSearch("");
                setServiceFilter("All Services");
                setRatingFilter("All Ratings");
              }}
              className="text-xs text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Review Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-50 transition-all flex flex-col"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center shrink-0">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-400">{review.role}</p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                {/* Service Badge */}
                <span className="inline-block self-start text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg mb-3">
                  {review.service}
                </span>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  "{review.text}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50">
                  <p className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    {review.helpful} found helpful
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-medium text-gray-600">No reviews found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
