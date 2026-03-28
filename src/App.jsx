import { useState } from "react";
import { useScrollAnimate } from "./hooks/useScrollAnimate";
import About from "./Components/About";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import Treatments from "./Components/Treatments";
import VideoSection from "./Components/VideoSection";
import WhatsAppButton from "./Components/WhatsAppButton";
import BookingModal from "./Components/BookingModal";
import Results from "./Components/Results";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import { FaPhoneAlt } from "react-icons/fa";
import Delivery from "./Components/Delivery";
import Consultation from "./Components/Consultation";
import WhatWeProvide from "./Components/WhatWeProvide";

const App = () => {
   const [open, setOpen] = useState(false);
   useScrollAnimate();
  return (
    <>
      <div className="min-h-screen w-full bg-linear-to-br from-green-50 via-white to-emerald-50 selection:bg-green-200">
      <Navbar />
       <div className="pt-45">
    <Hero />
        </div>
        <VideoSection />
        <Cta />
        <About />
       <div className="flex justify-center px-6 mt-6">
  <button
    onClick={() => setOpen(true)}
    className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-full 
    text-white font-semibold text-sm 
    bg-linear-to-r from-[#46cf7d] to-[#2e6b4a] 
    shadow-lg hover:shadow-xl 
    hover:scale-105 active:scale-95 
    transition-all duration-300 overflow-hidden"
  >
    {/* Glow effect */}
    <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300"></span>

    {/* Icon */}
    <span className="text-lg "><FaPhoneAlt /></span>

    {/* Text */}
    Talk to a Doctor Now
  </button>
</div>
       
         <BookingModal isOpen={open} onClose={() => setOpen(false)} />
        <Team />
        <HowItWorks />
        <Consultation />
        <Treatments />
        <WhatWeProvide />
        <Results />
        <Delivery />
        <Testimonials />
        <FAQ />
        <Footer />
        <WhatsAppButton />
        </div>
    </>
  );
};

export default App;