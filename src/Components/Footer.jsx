import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import logoIcon from "../assets/logo.png";

export default function Footer() {
  const [showBtn, setShowBtn] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScrollY && currentScroll > 100) {
        // scrolling up + not at top
        setShowBtn(true);
      } else {
        // scrolling down
        setShowBtn(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <footer className="bg-[#e9e3d9] text-[#1f472f] py-10 relative">
        <div className="max-w-225 mx-auto px-6 text-center">

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <img
              src={logoIcon}
              alt="logo"
              className="w-full h-20 object-contain"
            />
          </div>

          {/* Nav Links */}
          <div className="flex justify-center flex-wrap gap-6 text-sm mb-6">
            {["About", "Services", "Process", "Testimonials"].map((item) => (
              <a key={item} href="#" className="hover:underline">
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 text-sm mb-8">
            <div className="flex items-center justify-center gap-3">
              <FaPhoneAlt />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaEnvelope />
              <a href="mailto:contact@simplysiddha.com">
                contact@simplysiddha.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mb-8">
            {[FaInstagram, FaFacebookF, FaYoutube].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1f472f]/30 hover:bg-[#1f472f] hover:text-white transition"
              >
                <Icon />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#1f472f]/20 pt-4 text-xs text-[#1f472f]/70">
            © 2026 Simply Siddha | All rights reserved
          </div>
        </div>
      </footer>

      {/* Go To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 left-2 bg-[#1f472f] text-white p-3 rounded-full shadow-lg 
        hover:bg-[#163826] hover:scale-110 transition-all duration-300
        ${showBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <FaArrowUp />
      </button>
    </>
  );
}