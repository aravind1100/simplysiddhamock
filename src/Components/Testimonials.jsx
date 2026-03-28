import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    name: "Arun Venkatesh",
    text: "What I liked most is the time and care given during consultation. The doctor genuinely listens and treats the root cause instead of just symptoms.",
    time: "6 months ago",
    initial: "A",
  },
  {
    name: "Divya Krishnan",
    text: "Very effective treatment. I could see improvements within a few weeks.",
    time: "8 months ago",
    initial: "D",
  },
  {
    name: "Rahul Kumar",
    text: "Professional approach and clear guidance. Medicines worked really well.",
    time: "5 months ago",
    initial: "R",
  },
];

export default function Testimonials() {
  return (
    <section className="scroll-animate bg-[#eef2f0] py-16 px-4">
        
      {/* Header */}
          <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1f472f] bg-[#1f472f]/10 px-4 py-1.5 rounded-full mb-4">
            Expertise
          </span>
        <h2 className="text-3xl font-serif text-[#1f472f] heading-font">
          What Our Patients Say
        </h2>
      </div>

      {/* Slider Wrapper */}
      <div className="relative max-w-md mx-auto">

        {/* Custom Buttons */}
        <button className="swiper-button-prev-custom absolute -left-2.5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:scale-110 transition">
          <FaChevronLeft />
        </button>

        <button className="swiper-button-next-custom absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:scale-110 transition">
          <FaChevronRight />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1.1}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>

              {/* Card */}
              <div className="scroll-animate bg-[#1f472f] text-white rounded-2xl p-6 shadow-lg relative h-80 flex flex-col">

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-lg font-bold mb-4">
                  {t.initial}
                </div>

                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed mb-4 line-clamp-4">
                  “{t.text}”
                </p>

                {/* Footer */}
                <div className="mt-auto">
                  <p className="font-semibold">– {t.name}</p>
                  <p className="text-xs opacity-70">{t.time}</p>
                </div>

                {/* Corner Design */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 clip-path-triangle"></div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}