import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";
import doc3 from "../assets/doc3.png";
import StatsSection from "./StatsSection";

const DOCTORS = [
  {
    name: "Dr. Sangeetha",
    qual: "BSMS",
    reg: "Reg No: 4521/A",
    bio: "Founder of Simply Siddha Integrated Healthcare with 5+ years of experience in treating chronic digestive and lifestyle disorders through authentic Siddha practices.",
    tags: ["Digestive Health", "Lifestyle Disorders"],
    img: doc1,
  },
  {
    name: "Dr. Preethi",
    qual: "BSMS, MD",
    reg: "Reg No: 6429/A",
    bio:" With 5 years of experience, she provides compassionate care for children’s respiratory health and women’s wellness through authentic Siddha medicine, focusing on safe, holistic, and root-cause healing",
    tags: ["Women's Health", "Respiratory Care"],
    img: doc2,
  },
  {
    name: "Dr. Jayapradheeban",
    qual: "MBBS",
    reg: "Reg No: 161540",
    bio: "A clinical consultant with over 5 years of experience, providing comprehensive care for common medical problems, chronic conditions, and acute illnesses. Focused on accurate diagnosis, safe treatment, and clear patient guidance.",
    tags: ["Patient Care"],
    img: doc3,
  },
];

export default function Team() {
  return (
    <section id="team" className="scroll-animate py-16 bg-white">
      <div className="max-w-1200px mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#1f472f] bg-[#1f472f]/10 px-6 py-2 rounded-full mb-4">
            Our Team
          </div>
         
            <StatsSection />
          
          
          <h2 className="text-3xl font-semibold text-[#1f472f] mt-4 heading-font">
            Meet the Experts
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1.1} // shows slight next card
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
        >
          {DOCTORS.map((doc) => (
            <SwiperSlide key={doc.name}>
              
              <div className="scroll-animate relative h-120 rounded-xl overflow-hidden shadow-md group">

                {/* Image */}
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                {/* Top Info */}
                <div
  className={`absolute top-4 right-0 text-white border border-white/40 bg-white/10 backdrop-blur px-3 py-1 text-xs rounded`}
>
  <p className="text-sm font-semibold">{doc.qual}</p>
  <p className="text-xs opacity-80">{doc.reg}</p>
</div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white ">

                  <h3 className="text-lg font-semibold">{doc.name}</h3>
                  <div className="w-full border text-gray-400"></div>
                  <p className="text-sm opacity-90 mt-1 line-clamp-6">
                    {doc.bio}
                  </p>

                  {/* Specialties */}
                  {doc.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {doc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/40 bg-white/10 backdrop-blur px-3 py-1 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

              </div>

            </SwiperSlide >
          ))}
        </Swiper>

      </div>
    </section>
  );
}