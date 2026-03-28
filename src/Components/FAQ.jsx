import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const FAQS = [
  {
    q: "What is the Siddha system of medicine?",
    a: "Siddha is one of the oldest traditional systems of medicine in India that focuses on holistic healing using herbs, diet, and lifestyle practices.",
  },
  {
    q: "What are the ailments that can be treated in Siddha Medicine?",
    a: "Siddha medicine can treat digestive issues, respiratory disorders, lifestyle diseases, skin problems, and more through natural methods.",
  },
  {
    q: "Are there any side-effects in taking Siddha medicines?",
    a: "When prescribed by qualified practitioners, Siddha medicines are generally safe and focus on natural healing with minimal side effects.",
  },
  {
    q: "Is a specific diet regimen needed when taking Siddha medicines?",
    a: "Yes, diet plays an important role in Siddha treatment to enhance effectiveness and support faster recovery.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="scroll-animate bg-[#eef2f0] py-16 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#1f472f] heading-font">
          Frequently Asked Questions (FAQ)
        </h2>
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto flex flex-col gap-4">

        {FAQS.map((item, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className="scroll-animate bg-[#b5e9b6] rounded-lg px-5 py-4 shadow-sm transition"
            >
              {/* Question */}
              <div
                onClick={() => setActive(isOpen ? null : index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="text-sm font-medium text-[#1f2937]">
                  {item.q}
                </p>

                <FaChevronRight
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}