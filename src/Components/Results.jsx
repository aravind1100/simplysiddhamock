import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import before1 from "../assets/before1.png";
import after1 from "../assets/after1.png";
import before2 from "../assets/before2.png";
import after2 from "../assets/after2.png";

const RESULTS = [
  {
    before: before1,
    after: after1,
    duration: "After 5 Months",
  },
  {
    before: before2,
    after: after2,
    duration: "After 4 Months",
  },
];

export default function Results() {
  return (
    <section className="scroll-animate bg-[#f5f3ef] py-16 px-4 flex flex-col items-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#1f472f] bg-[#1f472f]/10 px-4 py-1.5 rounded-full">
            Amazing Results
          </span>
      {/* Heading */}
       <h2 className="text-3xl font-semibold text-[#1f472f] mt-4 heading-font pb-5">
            Alopecia Treatment
          </h2>

      <p className="text-gray-600 text-center max-w-md mb-10">
        Treatment taken for months - witness the incredible transformation
      </p>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full max-w-md"
      >
        {RESULTS.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="scroll-animate relative rounded-2xl overflow-hidden shadow-md">

              {/* Images */}
              <div className="grid grid-cols-2">

                {/* Before */}
                <div className="relative">
                  <img
                    src={item.before}
                    alt="Before"
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    Before
                  </span>
                </div>

                {/* After */}
                <div className="relative">
                  <img
                    src={item.after}
                    alt="After"
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    After
                  </span>
                </div>

              </div>

              {/* Divider */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/70"></div>

              {/* Badge */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-4 py-1 rounded-full shadow">
                {item.duration}
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}