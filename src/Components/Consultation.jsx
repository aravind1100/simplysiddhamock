import { FaCheck, FaCalendarAlt } from "react-icons/fa";

export default function Consultation() {
  return (
    <section className="py-16 px-4 bg-linear-to-br from-[#eef2f0] to-[#f8faf9] flex justify-center">

      {/* Card */}
      <div className="w-full max-w-md rounded-3xl p-6 
      bg-white/70 backdrop-blur-lg border border-green-200 
      shadow-lg relative overflow-hidden">

        {/* Glow background */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#1f472f] text-center mb-3 heading-font">
          Video / Phone Consultation Available
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-sm text-center mb-6">
          E-prescription will be sent to patients following the consultation.
        </p>

        {/* Points */}
        <div className="flex flex-col gap-4 mb-8">

          {[
            "Expert Siddha practitioner with deep knowledge of holistic healing",
            "100% natural, side-effect-free treatments",
            "Personalized diet and lifestyle recommendations",
            "Convenient, private, and secure online consultation",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <FaCheck className="text-green-600 mt-1" />
              <p className="text-sm text-[#1f2937]">{item}</p>
            </div>
          ))}

        </div>

        {/* CTA Button */}
        <button
          className="w-full flex items-center justify-center gap-2 py-3 rounded-full 
          bg-linear-to-r from-[#1f472f] to-[#2e6b4a] text-white font-semibold 
          shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 
          transition-all duration-300"
        >
          <FaCalendarAlt />
          Book Appointment
        </button>

      </div>

    </section>
  );
}