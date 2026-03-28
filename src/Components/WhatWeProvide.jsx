import resultImg from "../assets/result.png";

export default function WhatWeProvide() {
  return (
    <section className="bg-[#eef2f0] py-16 px-4">

      {/* Container */}
      <div className="max-w-225 mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#1f472f] mb-4 heading-font">
          What We Provide
        </h2>

        <p className="text-gray-600 text-sm mb-10 max-w-md mx-auto">
          Authentic Siddha care with personalized treatment, expert consultation, and trusted results.
        </p>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden 
        hover:shadow-lg transition duration-300">

          {/* Image */}
          <img
            src={resultImg}
            alt="Results"
            className="w-full h-90 object-cover"
          />

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-semibold text-[#1f472f] mb-2">
              Proven Treatment Results
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Experience visible improvements through personalized Siddha treatments focused on root-cause healing and long-term wellness.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}