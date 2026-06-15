import Link from "next/link";

const services = [
  {
    icon: "🚿",
    title: "Exterior Wash",
    desc: "Full exterior hand wash with premium soap, tire shine, and window cleaning.",
    price: "৳299",
  },
  {
    icon: "🪣",
    title: "Interior Detailing",
    desc: "Deep vacuum, wipe-down, seat cleaning, and dashboard polish.",
    price: "৳499",
  },
  {
    icon: "✨",
    title: "Full Detail",
    desc: "Complete inside-out service — wax, polish, odor removal included.",
    price: "৳899",
  },
  {
    icon: "🪟",
    title: "Ceramic Coating",
    desc: "Long-lasting paint protection that keeps your car looking new for years.",
    price: "৳2499",
  },
];

const testimonials = [
  {
    name: "Rafiq Ahmed",
    role: "Business Owner",
    text: "My car looked brand new after the full detail. The team was professional and on time.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Teacher",
    text: "Affordable and excellent quality. The ceramic coating is definitely worth it!",
    rating: 5,
  },
  {
    name: "Tanvir Hossain",
    role: "Engineer",
    text: "Booked online and they came right to my office parking. Super convenient!",
    rating: 4,
  },
];

const stats = [
  { value: "5,000+", label: "Happy Customers" },
  { value: "12+", label: "Services Offered" },
  { value: "4.9★", label: "Average Rating" },
  { value: "3 yrs", label: "In Business" },
];

const steps = [
  {
    step: "01",
    title: "Book Online",
    desc: "Choose a service and pick a time that works for you.",
  },
  {
    step: "02",
    title: "We Come To You",
    desc: "Our team arrives at your location with all equipment.",
  },
  {
    step: "03",
    title: "Spotless Result",
    desc: "Your car is cleaned and handed back in top condition.",
  },
];

const HomePage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_#10b981_0%,_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Professional Car Care
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Car Deserves
              <span className="text-emerald-400"> the Best</span> Clean
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Premium car washing and detailing services at your doorstep.
              Trusted by 5,000+ customers across Dhaka.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services">
                <button className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors text-sm">
                  Browse Services
                </button>
              </Link>
              <Link href="/aboutUs">
                <button className="px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-medium rounded-xl transition-colors text-sm">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-emerald-100 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
              From a quick wash to a full ceramic coating — we have every
              service your car needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon, title, desc, price }) => (
              <div
                key={title}
                className="group border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-50 transition-all"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {desc}
                </p>
                <p className="text-emerald-600 font-bold text-lg">
                  from {price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-xl transition-colors">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 font-bold text-lg flex items-center justify-center mx-auto mb-5">
                  {step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">
              Customer Love
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              What People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, rating }) => (
              <div
                key={name}
                className="border border-gray-100 rounded-2xl p-6 hover:border-emerald-100 hover:shadow-sm transition-all"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <span key={i} className="text-gray-200 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  "{text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm flex items-center justify-center">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {name}
                    </p>
                    <p className="text-xs text-gray-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6 bg-emerald-600 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Spotless Car?
          </h2>
          <p className="text-emerald-100 mb-8 text-sm leading-relaxed">
            Book a service today and let our experts take care of the rest. No
            hassle, just shine.
          </p>
          <Link href="/services">
            <button className="px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors text-sm">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
