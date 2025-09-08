import { properties } from "../data/data";
import { useNavigate } from "react-router-dom";

const HomeComp = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-screen">
        <img src="src/assets/image/thumnail.jpg" alt="Background" className="absolute w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto h-full flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-josefin font-semibold text-white">Welcome to Properties</h1>
            <p className="text-base sm:text-xl md:text-3xl font-sans font-medium text-white mt-4 bg-red-300 p-4 rounded-4xl">Find your dream home with us</p>
          </div>
        </div>
      </div>

      <div className="content w-full bg-[#FCFCFC] h-screen flex items-center justify-center">
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row w-full max-w-7xl justify-between items-center">
            <h2 className="text-lg sm:text-4xl md:text-5xl text-center lg:text-start font-josefin font-semibold text-black">
              Trust Us With <br />
              Your Dream Home
            </h2>
            <p className="text-sm sm:text-xl md:text-2xl text-center lg:text-start font-sans font-medium text-[#626262] mt-4">
              Your dream home is no longer just a dream — <br />
              find and own it with us, a trusted platform with <br />
              hundreds of homes sold.
            </p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row w-full max-w-2xs sm:max-w-7xl justify-between items-center mt-10">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 lg:mt-0">
              <div className="bg-red-100 p-4 rounded-2xl shadow-md">
                <h1 className="text-lg sm:text-4xl font-josefin font-semibold">40+</h1>
                <p className="text-sm sm:text-lg font-sans font-normal">Satisfied Customer</p>
              </div>
              <div className="bg-red-300 p-4 rounded-2xl shadow-md">
                <h1 className="text-lg sm:text-4xl font-josefin font-semibold">100+</h1>
                <p className="text-sm sm:text-lg font-sans font-normal">Sold</p>
              </div>
              <div className="bg-red-100 p-4 rounded-2xl shadow-md">
                <h1 className="text-lg sm:text-4xl font-josefin font-semibold">05+</h1>
                <p className="text-sm sm:text-lg font-sans font-normal">Years of Experience</p>
              </div>
              <div className="bg-red-100 p-4 rounded-2xl shadow-md">
                <h1 className="text-lg sm:text-4xl font-josefin font-semibold">30+</h1>
                <p className="text-sm sm:text-lg font-sans font-normal">Project Delivered</p>
              </div>
            </div>
            <img src="src/assets/image/Rumah 5.jpg" alt="Home" className=" w-100 sm:w-120 lg:w-lg rounded-2xl" />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FCFCFC] h-screen flex items-center justify-center mt-0 sm:mt-[-100px]">
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <div className="text-center mb-10">
            <h1 className="text-lg sm:text-4xl md:text-5xl font-josefin font-semibold text-black">Our Services</h1>
            <p className="text-sm sm:text-xl md:text-2xl font-sans font-medium text-[#626262] mt-4">
              Buying a house from us is not only easy, <br />
              but also profitable thanks to the various special offers we provide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 w-full max-w-xs sm:max-w-7xl">
            <div className="bg-red-100 p-4 flex rounded-2xl shadow-md">
              <div className="flex p-5 items-center">
                <i className="fi fi-ts-data-processing text-3xl sm:text-6xl"></i>
              </div>
              <div>
                <h1 className="text-md sm:text-xl font-josefin font-semibold">Fast and Easy Process</h1>
                <p className="text-xs sm:text-lg font-sans font-normal">No hassle, no queues, no stress. We offer a quick and easy process so you can focus on what matters most—choosing the best home for your future.</p>
              </div>
            </div>
            <div className="bg-red-100 p-4 flex rounded-2xl shadow-md">
              <div className="flex p-5 items-center">
                <i className="fi fi-ts-shield-check text-3xl sm:text-6xl"></i>
              </div>
              <div>
                <h1 className="text-md sm:text-xl font-josefin font-semibold">Guaranteed Quality Houses</h1>
                <p className="text-xs sm:text-lg font-sans font-normal">
                  With our quality guarantee, you don't have to worry about the condition of the building or the documents. We ensure that the house you buy is ready to move in and free of problems.{" "}
                </p>
              </div>
            </div>
            <div className="bg-red-300 p-4 flex rounded-2xl shadow-md">
              <div className="flex p-5 items-center">
                <i className="fi fi-tr-hand-present text-3xl sm:text-6xl"></i>
              </div>
              <div>
                <h1 className="text-md sm:text-xl font-josefin font-semibold">Free Electronic Equipment</h1>
                <p className="text-xs sm:text-lg font-sans font-normal">Every home purchase comes with free electronic appliances such as air conditioners, refrigerators, or washing machines. Ready to use, at no additional cost!</p>
              </div>
            </div>
            <div className="bg-red-100 p-4 flex rounded-2xl shadow-md">
              <div className="flex p-5 items-center">
                <i className="fi fi-tr-cheap-stack text-3xl sm:text-6xl"></i>
              </div>
              <div>
                <h1 className="text-md sm:text-xl font-josefin font-semibold">Affordable Property</h1>
                <p className="text-xs sm:text-lg font-sans font-normal">Property investment is now more accessible. With affordable prices and a wide selection of strategic locations, now is the best time to own your own home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content w-full bg-[#FCFCFC] min-h-screen flex flex-col items-center justify-start">
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row w-full max-w-7xl justify-between items-center mt-15">
            <h2 className="text-lg sm:text-4xl md:text-5xl text-center lg:text-start font-josefin font-semibold text-black">
              Discover your <br />
              Perfect Property
            </h2>
            <p className="text-sm sm:text-xl md:text-2xl text-center lg:text-start font-sans font-medium text-[#626262] mt-4">
              Find the home you've always dreamed of. <br />
              Here, the perfect property is no longer hard to find.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-10 px-4 lg:px-8 w-full max-w-xs sm:max-w-7xl mt-20">
            {properties.map((property) => (
              <div key={property.id} className={`relative w-full h-60 bg-cover bg-center rounded-2xl shadow-md overflow-hidden group`} style={{ backgroundImage: `url(${property.image})` }}>
                <div
                  className="absolute lg:bottom-0 left-0 w-full
          transform translate-y-full group-hover:none sm:group-hover:translate-y-0
          transition-transform duration-500 ease-in-out"
                >
                  <div className="bg-black/70 text-white p-4">
                    <h3 className="text-xl font-josefin font-semibold">{property.title}</h3>
                    <p className="text-lg font-sans">{property.location}</p>
                    <p className="text-lg font-sans font-bold text-red-400">{property.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <button onClick={navigate.bind(null, "/property")} className="bg-red-100 text-black px-6 py-3 shadow-md cursor-pointer rounded-full font-sans font-semibold hover:bg-red-300 transition-colors duration-300">
              View All Properties
            </button>
          </div>
        </div>
      </div>

      <div className="w-80 sm:w-full mx-auto bg-[#FCFCFC] h-90 flex items-center justify-center">
        <div className="lg:w-[70rem] xl:w-[80rem] mx-auto bg-red-300 h-fit flex flex-col lg:flex-row justify-between items-center rounded-2xl p-10">
          <div>
            <h1 className="text-lg sm:text-4xl md:text-5xl font-josefin font-semibold text-black">Get in touch</h1>
            <p className="text-sm sm:text-xl md:text-2xl font-sans font-medium text-[#626262] mt-4">
              Have questions or need assistance? <br />
              Our team is here to help you find your dream home.
            </p>
          </div>
          <div className="flex flex-row lg:flex-col text-center w-full lg:w-50 justify-between items-center mt-6 lg:mt-0">
            <h1 className="text-sm sm:text-xl md:text-2xl font-sans font-medium text-[#626262]">Let's Contact Us</h1>
            <button onClick={navigate.bind(null, "/contact")} className="bg-black text-white  px-5 sm:px-6 py-3 text-sm sm:text-base cursor-pointer rounded-full font-sans font-semibold hover:bg-black/80 transition-colors duration-300 lg:mt-6">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComp;
