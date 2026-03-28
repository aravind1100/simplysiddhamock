import { useState } from "react";
import { FaPhoneAlt, FaCalendar } from "react-icons/fa";
import BookingModal from "./BookingModal";

const Cta = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className="w-full flex justify-center px-4 mt-6">
      <div className="w-full max-w-md flex flex-col gap-4">
         {/* Book Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-[#1f472f] bg-[#e6f4ea] border border-[#1f472f]/20 shadow-sm
          hover:bg-[#d2ebda] hover:shadow-md hover:-translate-y-0.5
          active:scale-95 transition-all duration-300"
        >
          <FaCalendar className="text-sm" />
          Book Now
        </button>
        {/* Call Button */}
        <a
          href="tel:+919999999999"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-white bg-[#1f472f] shadow-md
          hover:bg-[#163826] hover:shadow-lg hover:-translate-y-0.5
          active:scale-95 transition-all duration-300"
        >
          <FaPhoneAlt className="text-sm" />
          Consult Us
        </a>

       

      </div>
    </div>
    <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Cta;