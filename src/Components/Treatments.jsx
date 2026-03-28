import { useState } from "react";
import { useScrollAnimate } from "../hooks/useScrollAnimate.js";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const TREATMENTS = [
  {
    icon: "🩺",
    title: "Digestive Disorders",
    desc: "Restore gut health and digestive balance through herbal remedies and dietary guidance.",
    tags: ["Constipation", "Acid Reflux", "Fatty Liver", "IBS", "Gastritis"],
    color: "bg-orange-500",
  },
  {
    icon: "🫁",
    title: "Respiratory Disorders",
    desc: "Effective care for breathing issues using natural Siddha treatments.",
    tags: ["Cough & Cold", "Sinusitis", "Asthma", "Bronchitis", "Allergies"],
    color: "bg-blue-500",
  },
  {
    icon: "⚖️",
    title: "Lifestyle Disorders",
    desc: "Manage modern lifestyle diseases with holistic Siddha solutions.",
    tags: ["Metabolic Syndrome", "Obesity", "Hypertension"],
    color: "bg-green-600",
  },
  {
    icon: "🌸",
    title: "Women's Health",
    desc: "Specialized care for hormonal and reproductive health.",
    tags: ["PCOD/PCOS", "Thyroid", "Hormonal Issues", "Menstrual Disorders"],
    color: "bg-pink-500",
  },
  {
    icon: "💆",
    title: "Skin Disorders",
    desc: "Holistic treatment for chronic skin conditions.",
    tags: ["Psoriasis", "Eczema", "Vitiligo", "Acne"],
    color: "bg-purple-500",
  },
  {
    icon: "🧠",
    title: "Neurological Care",
    desc: "Natural remedies for mental and neurological well-being.",
    tags: ["Migraine", "Anxiety", "Sleep Disorders"],
    color: "bg-indigo-500",
  },
];

export default function Treatments() {
  const ref = useScrollAnimate();
  const [active, setActive] = useState(0);

  return (
    <section id="treatments" className="bg-[#eef2f0] py-8">
      <div className="max-w-300 mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1f472f] bg-[#1f472f]/10 px-4 py-1.5 rounded-full mb-4">
            Expertise
          </span>
          <h2 className="font-serif text-3xl font-semibold text-[#1f472f] mb-3 heading-font">
            Our Treatments
          </h2>
          <p className="text-[#718096] text-base max-w-xl mx-auto">
            Natural healing solutions rooted in ancient Siddha wisdom for modern
            health challenges.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {TREATMENTS.map((t, index) => {
            const isOpen = active === index;

            return (
              <div
                key={t.title}
                className="scroll-animate bg-white rounded-2xl border border-[#1f472f]/20 p-5 shadow-sm transition-all duration-300"
              >
                {/* Top Row */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setActive(isOpen ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 flex shrink-0 items-center justify-center rounded-xl ${t.color}`}
                    >
                      <span className="text-2xl leading-none block">
                        {t.icon}
                      </span>
                    </div>

                    {/* Title + Preview */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#1f472f]">
                        {t.title}
                      </h3>

                      <p className="text-sm text-gray-500 line-clamp-1">
                        {t.tags.join(", ")}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  {isOpen ? (
                    <FaChevronDown className="text-gray-500" />
                  ) : (
                    <FaChevronRight className="text-gray-500" />
                  )}
                </div>

                {/* Expand Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-[#718096] mb-4">{t.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#e9e3d9] text-[#1f472f] px-3 py-1 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
