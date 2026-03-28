import { FaCheckCircle } from "react-icons/fa";
import deliveryImg from "../assets/delivery.png"; 
export default function Delivery() {
  return (
    <section className="scroll-animate bg-[#eef2f0] py-16 px-4">

      <div className="max-w-275 mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* Image */}
        <div className="w-full">
         
        </div>

        {/* Content Card */}
        <div className="scroll-animate bg-white rounded-2xl border border-[#1f472f]/20 p-6 shadow-sm">
               {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#e6f4ea] flex items-center justify-center text-[#1f472f] text-xl">
              🚚
            </div>

            <h2 className="text-xl font-semibold text-[#1f472f] heading-font">
              Doorstep Delivery
            </h2>
          </div>
                  <img
            src={deliveryImg}
            alt="Doorstep Delivery"
            className="w-full h-87.5 object-cover rounded-2xl shadow-md  mb-4"
          />
       

          {/* Description */}
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            Prescribed medicines are prepared after consultation and delivered safely across India.
          </p>

          {/* Points */}
          <div className="flex flex-col gap-3 mb-5">
            {[
              "Secure & hygienic packing",
              "Trusted courier partners",
              "Tracking via WhatsApp",
              "Pan-India delivery",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600" />
                <p className="text-sm text-[#1f2937]">{item}</p>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-xs italic text-gray-500 leading-relaxed">
            Medicine delivery is available only after consultation. Delivery time may vary by location.
          </p>

        </div>

      </div>

    </section>
  );
}