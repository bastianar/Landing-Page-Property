import { properties } from "../data/data";
import { useNavigate } from "react-router-dom";

import thumbnail from "../assets/image/thumnail.jpg";
import rumah5 from "../assets/image/Rumah 5.jpg";

const stats = [
  { value: "40+", label: "Satisfied Customer", accent: false },
  { value: "100+", label: "Sold", accent: true },
  { value: "05+", label: "Years of Experience", accent: false },
  { value: "30+", label: "Project Delivered", accent: false },
];

const services = [
  {
    icon: "fi fi-ts-data-processing",
    title: "Fast and Easy Process",
    description: "No hassle, no queues, no stress. We offer a quick and easy process so you can focus on what matters most—choosing the best home for your future.",
    accent: false,
  },
  {
    icon: "fi fi-ts-shield-check",
    title: "Guaranteed Quality Houses",
    description: "With our quality guarantee, you don't have to worry about the condition of the building or the documents. We ensure that the house you buy is ready to move in and free of problems.",
    accent: false,
  },
  {
    icon: "fi fi-tr-hand-present",
    title: "Free Electronic Equipment",
    description: "Every home purchase comes with free electronic appliances such as air conditioners, refrigerators, or washing machines. Ready to use, at no additional cost!",
    accent: true,
  },
  {
    icon: "fi fi-tr-cheap-stack",
    title: "Affordable Property",
    description: "Property investment is now more accessible. With affordable prices and a wide selection of strategic locations, now is the best time to own your own home.",
    accent: false,
  },
];

const HomeComp = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[32rem] w-full">
        <img src={thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-josefin text-3xl font-semibold text-white sm:text-5xl md:text-6xl">Welcome to Properties</h1>
          <p className="mt-4 rounded-4xl bg-red-300 p-4 font-sans text-base font-medium text-white sm:text-xl md:text-3xl">Find your dream home with us</p>
        </div>
      </section>

      {/* About */}
      <section className="w-full bg-[#FCFCFC] px-4 py-16 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <h2 className="text-center font-josefin text-2xl font-semibold text-black sm:text-4xl md:text-5xl lg:text-start">
              Trust Us With <br />
              Your Dream Home
            </h2>
            <p className="text-center font-sans text-sm font-medium text-[#626262] sm:text-xl md:text-2xl lg:text-start">
              Your dream home is no longer just a dream — <br className="hidden sm:block" />
              find and own it with us, a trusted platform with <br className="hidden sm:block" />
              hundreds of homes sold.
            </p>
          </div>

          <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
            <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:w-auto">
              {stats.map((stat) => (
                <div key={stat.label} className={`rounded-2xl p-4 shadow-md sm:p-6 ${stat.accent ? "bg-red-300" : "bg-red-100"}`}>
                  <h3 className="font-josefin text-2xl font-semibold sm:text-4xl">{stat.value}</h3>
                  <p className="font-sans text-sm font-normal sm:text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
            <img src={rumah5} alt="Rumah contoh" className="w-full max-w-lg rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full bg-[#FCFCFC] px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="font-josefin text-2xl font-semibold text-black sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 font-sans text-sm font-medium text-[#626262] sm:text-xl md:text-2xl">
              Buying a house from us is not only easy, <br className="hidden sm:block" />
              but also profitable thanks to the various special offers we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {services.map((service) => (
              <div key={service.title} className={`flex items-center gap-3 rounded-2xl p-4 shadow-md sm:gap-4 sm:p-6 ${service.accent ? "bg-red-300" : "bg-red-100"}`}>
                <i className={`${service.icon} shrink-0 text-4xl sm:text-6xl`} aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-josefin text-base font-semibold sm:text-xl">{service.title}</h3>
                  <p className="mt-1 font-sans text-xs font-normal sm:text-base">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="w-full bg-[#FCFCFC] px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <h2 className="text-center font-josefin text-2xl font-semibold text-black sm:text-4xl md:text-5xl lg:text-start">
              Discover your <br />
              Perfect Property
            </h2>
            <p className="text-center font-sans text-sm font-medium text-[#626262] sm:text-xl md:text-2xl lg:text-start">
              Find the home you've always dreamed of. <br className="hidden sm:block" />
              Here, the perfect property is no longer hard to find.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <div key={property.id} className="group relative h-64 overflow-hidden rounded-2xl shadow-md">
                <img src={property.image} alt={property.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Mobile/tablet: info selalu terlihat. Desktop (lg): muncul saat hover */}
                <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4 text-white transition-transform duration-500 ease-in-out lg:translate-y-full lg:group-hover:translate-y-0">
                  <h3 className="font-josefin text-lg font-semibold sm:text-xl">{property.title}</h3>
                  <p className="font-sans text-sm sm:text-lg">{property.location}</p>
                  <p className="font-sans text-sm font-bold text-red-400 sm:text-lg">{property.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button onClick={() => navigate("/property")} className="cursor-pointer rounded-full bg-red-100 px-6 py-3 font-sans font-semibold text-black shadow-md transition-colors duration-300 hover:bg-red-300">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full bg-[#FCFCFC] px-4 pb-16 sm:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl bg-red-300 p-6 sm:p-10 lg:flex-row">
          <div>
            <h2 className="font-josefin text-2xl font-semibold text-black sm:text-4xl md:text-5xl">Get in touch</h2>
            <p className="mt-4 font-sans text-sm font-medium text-[#626262] sm:text-xl md:text-2xl">
              Have questions or need assistance? <br className="hidden sm:block" />
              Our team is here to help you find your dream home.
            </p>
          </div>
          <div className="flex w-full flex-row items-center justify-between gap-4 text-center lg:w-auto lg:flex-col">
            <p className="font-sans text-sm font-medium text-[#626262] sm:text-xl md:text-2xl">Let's Contact Us</p>
            <button onClick={() => navigate("/contact")} className="cursor-pointer rounded-full bg-black px-5 py-3 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-black/80 sm:px-6 sm:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComp;
