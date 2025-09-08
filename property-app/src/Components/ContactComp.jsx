import React, { useState } from "react";

const ContactComp = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg(" Pesan berhasil dikirim!");
    setForm({ name: "", email: "", message: "" }); // reset form

    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <>
      <div className="mx-auto w-full bg-[#FCFCFC] flex items-center justify-center h-full">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex justify-center items-center w-full mt-20">
            <h1 className="text-lg sm:text-4xl md:text-5xl text-center lg:text-start py-6 font-josefin font-semibold text-black">Contact Us</h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl p-6">
            <div className="max-w-md mx-auto p-4 w-full bg-white shadow-md rounded-lg">
              <div className="py-4">
                <h1 className="font-semibold text-red-300 text-xl">Send us a message</h1>
                <p className="font-normal text-lg">We would love to hear from you!</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-300 text-white py-2 rounded-md hover:bg-red-400 transition-colors duration-300">
                  Submit
                </button>
              </form>
              {successMsg && (
                <p className="text-green-600 text-center mt-4 flex items-center justify-center gap-2">
                  <img src="../src/assets/icon/check.png" alt="" className="w-5" />
                  {successMsg}
                </p>
              )}
            </div>

            <div className="max-w-md p-5 w-full bg-red-300 shadow-md rounded-lg mx-auto sm:ml-10 mt-10 sm:mt-0">
              <p>Hello! We are always here to help you.</p>
              <div className="flex gap-4 mt-4 w-full h-20 p-4 bg-red-200 rounded-lg items-center">
                <div>
                  <img src="../src/assets/icon/phone-call.png" alt="" className="w-10" />
                </div>
                <div>
                  <h1 className="text-bold text-lg">Phone</h1>
                  <h2>081314768879</h2>
                </div>
              </div>
              <div className="flex gap-4 mt-4 w-full h-20 p-4 bg-red-200 rounded-lg items-center hover:bg-red-400 transition-colors duration-300">
                <a href="https://api.whatsapp.com/send/?phone=081314768879&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full h-20">
                  <div>
                    <img src="../src/assets/icon/messenger.png" alt="" className="w-10" />
                  </div>
                  <div>
                    <h1>Whatsapp</h1>
                    <h2>081314768879</h2>
                  </div>
                </a>
              </div>
              <div className="flex gap-4 mt-4 w-full h-20 p-4 bg-red-200 rounded-lg items-center">
                <div>
                  <img src="../src/assets/icon/envelope.png" alt="" className="w-10" />
                </div>
                <div>
                  <h1>Email</h1>
                  <h2>property@gmail.com</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComp;
