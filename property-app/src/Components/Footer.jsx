import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer w-full h-full bg-black py-5">
        <div className="container mx-auto flex flex-col md:flex-row border-b-2 py-5 w-70 sm:w-full border-red-100 justify-between items-center text-white">
          <div className="flex justify-center items-center w-full md:w-fit">
            <h1 className="navbar-logo text-2xl sm:text-3xl font-bold text-white flex gap-1">
              <i className="fi fi-ss-house-chimney-blank gap-6 text-red-300"></i>
              Property
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 text-center justify-items-center text-white py-5">
            <div>
              <h1 className="text-2xl font-semibold text-white">Page</h1>
              <div className="flex flex-col gap-4 max-w-fit mt-4">
                <a href="/" className="text-white hover:text-red-300 transition-colors duration-300">
                  Home
                </a>
                <a href="/property" className="text-white hover:text-red-300 transition-colors duration-300">
                  Property
                </a>
                <a href="/contact" className="text-white hover:text-red-300 transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold mt-7 sm:mt-0 text-white">Propertiese</h1>
              <div className="flex flex-col gap-4 max-w-fit mt-4">
                <a href="/property" className="text-white hover:text-red-300 transition-colors duration-300">
                  Cluster Cendana
                </a>
                <a href="/property" className="text-white hover:text-red-300 transition-colors duration-300">
                  Cluster Agave
                </a>
                <a href="/property" className="text-white hover:text-red-300 transition-colors duration-300">
                  Cluster Orchid
                </a>
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold mt-7 sm:mt-0 text-white">Address</h1>
              <div className="flex flex-col gap-4 max-w-fit mt-4">
                <h1 className="text-white hover:text-red-300 transition-colors duration-300">
                  Residence City
                </h1>
                <h1 className="text-white hover:text-red-300 transition-colors duration-300">
                  Jl. Raya Residence No.1
                </h1>
                <h1 className="text-white hover:text-red-300 transition-colors duration-300">
                  Bogor, Jawa Barat
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between w-90 sm:w-full text-center py-5">
          <p className="text-center text-xs sm:text-base text-white">&copy; {new Date().getFullYear()} Property. All rights reserved.</p>
          <div className="sosial-icons flex items-center justify-center  gap-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/logo/facebook2.png" alt="" className="w-6 sm:w-10" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/logo/instagram.png" alt="" className="w-6 sm:w-10" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/logo/tiktok.png" alt="" className="w-6 sm:w-10" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
