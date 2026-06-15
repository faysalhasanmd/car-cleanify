import Link from "next/link";

const PLACEHOLDER_IMG =
  "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/703948657_2221533985046315_2440977097828318730_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s960x960&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEDsdlH8zTBq_a1V3z70fz4WiTrpFlfbM5aJOukWV9sztupD2TlAKCSjLSH8wRh1owbTu35yl8m4dNdnREBPuf0&_nc_ohc=28nJaGaZ_NUQ7kNvwHI2y-L&_nc_oc=AdplhKIXk_mBlbrPcZ2-D8dGHXc3d-TOFDi_A5EoW4ucfxEP-M-raxBw-3jlW7jIQn8&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=90U6SZwzua_hOq0u-KF22w&_nc_ss=7b2a8&oh=00_Af8soo7MVmQDPkbr94lwVx2HL9XHGy71r1xyGld3SLewsw&oe=6A341253";
const Yamin_Rahman =
  "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/602328651_2066674237440305_4336700952911229709_n.jpg?stp=dst-jpg_tt6&cstp=mx2043x2048&ctp=s200x200&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEWrkjQjBdjKTzTPVDkLFTgSjyB_tnaN4JKPIH-2do3gurnSzY5jvGhFXrIuN-zY4tfsIod95e7NHbn3wVfPnCA&_nc_ohc=5HqNlyZO0gwQ7kNvwFKTTAD&_nc_oc=AdrHISnwpxbdGLTnL1fodDbZDX7BhRwY0IIO8MEq_LWomTp9noWQb0mkTF5dpZyleWg&_nc_zt=24&_nc_ht=scontent.fdac138-1.fna&_nc_gid=7AypCcyKakVAKinqld6Wyg&_nc_ss=7b2a8&oh=00_Af_s6KpRGJ7fRuHZef3vkS-_LIlgLtXa_L1_zSj7PqMG5g&oe=6A341173";
const Munna_Ahmed =
  "https://scontent.fdac138-2.fna.fbcdn.net/v/t1.6435-9/193154196_1437233153312135_1856539119628054907_n.jpg?stp=dst-jpg_tt6&cstp=mx1332x2015&ctp=s1332x2015&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGRf6jauI91f5vWBBjNSLIGt_HA4Fcw2S638cDgVzDZLqN2JrsJIc3cFEIRSuWr1gurEAga8ltdJb2hyyVAoGmt&_nc_ohc=IIN6FLlpSNoQ7kNvwFzMFZy&_nc_oc=Ado6z9cdveVOjKLqo1TW6SiEFR0Qghk-HEpcdBbfPdx_sqZvAkWWQvp585ppPXu66zg&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=I23lRalSSiys0kZv_3QHfw&_nc_ss=7b2a8&oh=00_Af-1w0olXYdT6IqZRZ0GDwhjCqVdkRt0IdQ49hTpL-Lu3Q&oe=6A55BAEB";
const Shakil_Khan =
  "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/653563017_1732226151099243_1649905540539909147_n.jpg?stp=dst-jpg_tt6&cstp=mx2040x2048&ctp=s206x206&_nc_cat=111&ccb=1-7&_nc_sid=7a06f5&_nc_eui2=AeHthupTiOwa1Wwl-qfRaRIZewLus3Ymw_l7Au6zdibD-ZSGiRqJ7TXHRkMX9o48BgNQlx6VWci9GQb-gbrZUt7z&_nc_ohc=jlFzKfnX438Q7kNvwGV7keb&_nc_oc=AdqET5agOackT69z89BUjid1jLEMLvyptQID9ZdG2HmEhktP7pHQOQdl3WdOSg6K1UI&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=gnDT46SLAJXbBndgye9a7w&_nc_ss=7b2a8&oh=00_Af-TnEKaYwOp3kStXg4gk52gArZ2H0V-5STUrEQjQQQ20w&oe=6A340315";

const team = [
  {
    name: "Faysal Hasan",
    role: "Founder & CEO",
    avatar: PLACEHOLDER_IMG,
    bio: "10+ years in automotive care. Started CarClean with a single bucket and a dream.",
  },
  {
    name: "Yamin Rahman",
    role: "Head of Operations",
    avatar: Yamin_Rahman,
    bio: "Ensures every job meets our quality standard before the team leaves your driveway.",
  },
  {
    name: "Munna Ahmed",
    role: "Customer Experience",
    avatar: Munna_Ahmed,
    bio: "Handles bookings, feedback, and makes sure every customer feels valued.",
  },
  {
    name: "Shakil Khan",
    role: "Senior Detailer",
    avatar: Shakil_Khan,
    bio: "Certified ceramic coating specialist with 6 years of hands-on detailing experience.",
  },
];

const values = [
  {
    icon: "🌿",
    title: "Eco-Friendly",
    desc: "We use biodegradable soaps and water-saving techniques to protect the environment.",
  },
  {
    icon: "✅",
    title: "Quality First",
    desc: "Every service goes through a final quality check before we consider the job done.",
  },
  {
    icon: "⏱️",
    title: "On Time, Every Time",
    desc: "We respect your schedule. Our team arrives within the booked time window.",
  },
  {
    icon: "💰",
    title: "Fair Pricing",
    desc: "Transparent pricing with no hidden charges. You see the price, you pay the price.",
  },
];

const milestones = [
  { year: "2021", event: "CarClean founded in Dhaka with a 3-person team." },
  {
    year: "2022",
    event: "Reached 500 customers. Launched interior detailing packages.",
  },
  {
    year: "2023",
    event: "Introduced ceramic coating. Expanded to 12+ staff members.",
  },
  {
    year: "2024",
    event: "5,000+ happy customers. Launched online booking platform.",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 leading-tight">
              We're Passionate About{" "}
              <span className="text-emerald-400">Clean Cars</span>
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              CarClean started in 2021 as a small doorstep car wash service in
              Dhaka. Today we serve thousands of customers across the city with
              a full range of professional detailing services — always with the
              same care and attention we put into that very first wash.
            </p>
            <Link href="/services">
              <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-xl transition-colors">
                Explore Our Services
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "5,000+", label: "Customers Served" },
              { value: "4.9 ★", label: "Average Rating" },
              { value: "12+", label: "Services Offered" },
              { value: "3 yrs", label: "In Business" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700"
              >
                <p className="text-2xl font-bold text-emerald-400">{value}</p>
                <p className="text-gray-400 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
            Why We Do What We Do
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            We believe a clean car isn't a luxury — it's a reflection of how you
            show up. Our mission is to make professional car care accessible,
            affordable, and effortless for everyone in Bangladesh. We bring the
            expertise to your doorstep so you can focus on what matters most.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-50 transition-all text-center"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">
              How We Got Here
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Journey</h2>
          </div>
          <div className="relative border-l-2 border-emerald-200 pl-8 space-y-10">
            {milestones.map(({ year, event }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[41px] top-0.5 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
                <p className="text-emerald-600 text-xs font-bold tracking-widest uppercase mb-1">
                  {year}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">
              The People Behind It
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(({ name, role, avatar, bio }) => (
              <div
                key={name}
                className="border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-50 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full mx-auto mb-4 overflow-hidden bg-emerald-100">
                  {avatar.startsWith("http") ? (
                    <img
                      src={avatar}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-emerald-700 font-bold text-xl">
                      {avatar}
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900">{name}</h3>
                <p className="text-emerald-600 text-xs font-medium mt-0.5 mb-3">
                  {role}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-emerald-600 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Ready to Experience CarClean?
          </h2>
          <p className="text-emerald-100 text-sm leading-relaxed mb-8">
            Join thousands of satisfied customers and give your car the care it
            deserves. Booking takes less than 2 minutes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services">
              <button className="px-7 py-3 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors text-sm">
                Book a Service
              </button>
            </Link>
            <Link href="/review">
              <button className="px-7 py-3 border border-white/30 hover:border-white/60 text-white font-medium rounded-xl transition-colors text-sm">
                Read Reviews
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
