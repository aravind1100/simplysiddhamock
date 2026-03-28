import { useEffect, useRef, useState } from "react";
import { FaHeart, FaUserMd, FaLeaf } from "react-icons/fa";

const Counter = ({ end, suffix = "+", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = end / (duration / 16);

          const counter = setInterval(() => {
            start += increment;

            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <h2 ref={ref} className="text-3xl font-bold text-[#1f472f]">
      {count}
      {suffix}
    </h2>
  );
};

const StatCard = ({ icon, value, label, suffix }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-2xl border border-[#1f472f]/20 px-6 py-8 w-25 h-40 shadow-sm hover:shadow-md transition">

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#e6f4ea] text-[#1f472f] text-xl mb-4">
        {icon}
      </div>

      {/* Counter */}
      <Counter end={value} suffix={suffix} />

      {/* Label */}
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full bg-[#eef2ec] py-12 flex justify-center">
      
      <div className="flex gap-4">

        <StatCard
          icon={<FaHeart />}
          value={500}
          label="Patients"
          suffix="+"
        />

        <StatCard
          icon={<FaUserMd />}
          value={5}
          label="Years Experience"
          suffix="+"
        />

        <StatCard
          icon={<FaLeaf />}
          value={100}
          label="Natural"
          suffix="%"
        />

      </div>

    </section>
  );
};

export default StatsSection;