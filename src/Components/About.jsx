import { useScrollAnimate } from '../hooks/useScrollAnimate'

const ELEMENTS = [
  { name: 'Earth', cls: 'earth-orb', tamizh: 'நிலம்' },
  { name: 'Water', cls: 'water-orb', tamizh: 'நீர்'  },
  { name: 'Fire',  cls: 'fire-orb',  tamizh: 'தீ'    },
  { name: 'Air',   cls: 'air-orb',   tamizh: 'காற்று' },
  { name: 'Space', cls: 'space-orb', tamizh: 'வெளி'  },
]

export default function About() {
  const ref = useScrollAnimate()

  return (
    <section id="about" className="bg-[#eef2f0] pt-16 ">
      <div className="max-w-1200px mx-auto px-6 " ref={ref}>
        {/* Header */}
        <div className="scroll-animate text-center mb-2">
          <span className=" inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#1f472f] bg-[rgba(31,71,47,0.15)] px-4 py-1.5 rounded-full mb-4">
            The Philosophy of Siddha
          </span>
          <h2 className="font-serif text-3xl font-semibold text-[#1f472f] leading-snug">
            Panchabootham — Five Elements
          </h2>
        </div>

        {/* Concept intro card */}
        <div className="scroll-animate bg-white rounded-2xl p-7 shadow-sm max-w-2xl mx-auto mt-1 mb-10 text-base leading-[1.9] text-[#2d3748]">
          <p className="mb-5">
            In Siddha medicine, the universe and the human body are composed of five
            fundamental elements: <strong className="text-[#1f472f]">Earth, Water, Fire, Air, and Space</strong>,
            known as <em>Panchabootham</em>.
          </p>
          <p className="mb-5">
            These elements influence the three vital humours: <strong className="text-[#1f472f]">Vatham, Pitham,
            and Kabam</strong>, which govern health and well-being.
          </p>
          {/* Tamil quote */}
          <div className="bg-[#253f30] text-white rounded-xl px-6 py-6 text-center mt-4">
            <p className="text-lg font-medium leading-relaxed mb-3">
              "அண்டத்தில் உள்ளதே பிண்டம் பிண்டத்தில் உள்ளதே அண்டம்"
            </p>
            <p className="italic opacity-75 text-sm">
              (What is in the Universe is in the Body; What is in the Body is in the Universe)
            </p>
          </div>
        </div>

        {/* Elements grid */}
        
      </div>
    </section>
  )
}
