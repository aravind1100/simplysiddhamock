import { useScrollAnimate } from "../hooks/useScrollAnimate";

const STEPS = [
  {
    icon: "🩺",
    n: "01",
    title: "Online Consultation",
    desc: "Connect with our doctors via phone or video call.",
  },
  {
    icon: "📝",
    n: "02",
    title: "Personalized Prescription",
    desc: "Receive a tailored Siddha treatment plan.",
  },
  {
    icon: "📦",
    n: "03",
    title: "Preparation & Packing",
    desc: "Medicines prepared and packed hygienically.",
  },
  {
    icon: "🚚",
    n: "04",
    title: "Courier / Delivery",
    desc: "Fast delivery to your doorstep.",
  },
];

export default function HowItWorks() {
  const ref = useScrollAnimate();

  return (
    <section className="bg-[#f5f3ef] py-16">
      <div className="max-w-300 mx-auto px-6" ref={ref}>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#1f472f] bg-[#1f472f]/10 px-4 py-1.5 rounded-full">
            Process
          </span>
          <h2 className="text-3xl font-semibold text-[#1f472f] mt-4 heading-font">
            Your Healing Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#1f472f]/20"></div>

          {/* Steps */}
          <div className="flex flex-col gap-10">
            {STEPS.map((s) => (
              <div key={s.n} className="flex items-start gap-6">

                {/* Icon + Number */}
                <div className="relative z-10 flex flex-col items-center">

                  {/* Circle Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-white text-xl shadow-md">
                    {s.icon}
                  </div>

                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-[#1f472f]/20 px-6 py-5 shadow-sm w-full">

                  <p className="text-sm text-[#1f472f] font-semibold mb-1">
                    {s.n}
                  </p>

                  <h3 className="text-lg font-semibold text-[#1f472f] mb-2">
                    {s.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}