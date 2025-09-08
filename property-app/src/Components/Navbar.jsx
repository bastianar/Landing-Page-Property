import { navlinks } from "../data/data";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar w-full py-5 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container w-full flex justify-between items-center mx-auto">
        <div className="flex justify-center w-full md:w-fit">
          <h1 className="navbar-logo text-3xl font-bold text-black flex gap-1">
            <i className="fi fi-ss-house-chimney-blank gap-6 text-red-300"></i>
            Property
          </h1>
        </div>
        <ul>
          <li className="hidden md:flex gap-5 items-center ">
            {navlinks.map((navlink) => {
              return (
                <NavLink
                  key={navlink.id}
                  to={navlink.path}
                  className={({ isActive }) =>
                    isActive
                      ? "after:content-[''] after:block  after:h-[2px] after:bg-red-300 after:w-full text-base font-semibold text-red-300"
                      : "after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-300 after:transition-all after:duration-300 hover:after:w-full text-base font-semibold hover:text-red-300 transition-all duration-300"
                  }
                >
                  {navlink.title}
                </NavLink>
              );
            })}
          </li>
        </ul>
      </div>
      <div className="md:hidden fixed top-1/2 left-2 transform -translate-y-1/2 z-50">
        <button onClick={toggleMenu} className="bg-red-300 shadow-md p-2 rounded-full">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Slide Menu - Mobile Only */}
      <div
        className={`
          md:hidden fixed top-1/2 left-0 max-h-fit w-3/4 rounded-2xl max-w-2xs bg-white shadow-lg p-6
          transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="flex flex-col gap-5 items-center">
          {navlinks.map((navlink) => {
            return (
              <NavLink
                key={navlink.id}
                to={navlink.path}
                className={({ isActive }) => (isActive ? "text-base font-semibold text-red-300" : "text-base font-semibold hover:text-red-300 transition-all duration-300")}
                onClick={() => setIsOpen(false)}
              >
                {navlink.title}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
