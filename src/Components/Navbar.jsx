import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaLeaf,
  FaUserMd,
  FaNotesMedical,
  FaPhoneAlt,
  FaCalendar,
} from "react-icons/fa";

import logoIcon from "../assets/logo.png"; 
import BookingModal from "./BookingModal";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => setNavOpen(!navOpen);
  const closeMenu = () => setNavOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", name: "Home", icon: <FaHome /> },
    { id: "team", name: "About Us", icon: <FaLeaf /> },
    { id: "treatments", name: "Treatments", icon: <FaUserMd /> },
    { id: "consultation", name: "Consultation", icon: <FaNotesMedical /> },
    { id: "contact", name: "Contact US", icon: <FaPhoneAlt /> },
  ];

  return (
    <>
    <nav
      className={`fixed w-full h-20 flex justify-between items-center px-4 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* 🔥 Logo Section */}
      <div className="flex items-center min-w-full">
        <img src={logoIcon} alt="logo" className={scrolled ? "h-12 w-auto object-contain" : "mt-20 md:h-20 w-auto object-contain"} />
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={handleClick}
        className={`z-20 absolute left-5/6 cursor-pointer p-3 rounded-full transition-all ${
          navOpen ? "bg-green-600" : "bg-green-100"
        }`}
      >
        {!navOpen ? (
          <FaBars size={24} className="text-green-700" />
        ) : (
          <FaTimes size={24} className="text-white" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 right-4 w-56 rounded-xl shadow-2xl flex flex-col transition-all duration-800 z-40 ${
          navOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        } bg-white border border-gray-200 overflow-hidden`}
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className="flex items-center px-6 py-4 text-gray-700 hover:bg-green-50 transition-all duration-200 group"
              >
                <span className="mr-3 text-green-600 group-hover:text-green-700">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
        {/* Book Button */}
        <button
          onClick={() => {
            setModalOpen(true);
            closeMenu();
          }}
          className="flex items-center justify-center gap-2 flex-1 py-3 mx-5 my-5 rounded-full text-sm font-semibold text-[#1f472f] bg-[#e6f4ea] border border-[#1f472f]/20 shadow-sm hover:bg-[#d2ebda] active:scale-95 transition"
        >
          <FaCalendar className="text-sm" />
          Book Now
        </button>
      </div>
    </nav>
    <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;