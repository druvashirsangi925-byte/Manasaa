import React from "react";
import { motion } from "framer-motion";
import { Briefcase, FileText, Heart, Compass, MapPin } from "lucide-react";

const travelItems = [
  {
    icon: FileText,
    label: "🛂 Passport",
    title: "Visa & Passport",
    desc: "Ready to cross frontiers, unlock new avenues, and stamp a beautiful new chapter in your life."
  },
  {
    icon: Briefcase,
    label: "🧳 Suitcase",
    title: "Memories Packed",
    desc: "Stuffed with favorite sweaters, home-cooked spices, and a massive vault of memories to keep you warm."
  },
  {
    icon: Compass,
    label: "✈️ Flying High",
    title: "The Route",
    desc: "A journey bridging the land you love with the land of your rising aspirations."
  },
  {
    icon: Heart,
    label: "❤️ Core Love",
    title: "Core Connection",
    desc: "Though you reside in Europe, the bond of our friendship remains here, forever beats adjacent."
  }
];

const Journey = () => {
  return (
    <section id="journey" className="relative py-24 px-6 overflow-hidden z-10">
      {/* Decorative gradients */}
      <div className="absolute top-[20%] right-[15%] w-96 h-96 rounded-full bg-softgold/5 filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-germany-red/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-softgold text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <span>The Adventure</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white tracking-tight"
          >
            India ➜ Germany Journey
          </motion.h2>
        </div>

        {/* Map Layout Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Vector Component (Left/Top) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full relative aspect-[16/10] rounded-2xl border border-white/10 bg-deepnavy/50 backdrop-blur-md overflow-hidden p-6 shadow-2xl flex flex-col justify-between"
            >
              {/* Technical coordinate grids */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

              {/* Map Coordinates overlay */}
              <div className="flex justify-between text-[10px] text-gray-500 font-mono z-10">
                <span>N 52° 31' 12" / E 13° 24' 18"</span>
                <span>N 20° 59' 17" / E 78° 57' 46"</span>
              </div>

              {/* Map visuals */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Dashed curved flight path */}
                <svg className="absolute w-[80%] h-[60%] overflow-visible z-10" viewBox="0 0 400 200">
                  {/* Glowing background path */}
                  <path
                    d="M 50 150 Q 200 30 350 70"
                    fill="none"
                    stroke="rgba(234, 179, 8, 0.1)"
                    strokeWidth="4"
                    className="path-glow"
                  />
                  {/* Dashed flight path */}
                  <path
                    id="flight-path"
                    d="M 50 150 Q 200 30 350 70"
                    fill="none"
                    stroke="#EAB308"
                    strokeWidth="2"
                    strokeDasharray="6, 6"
                  />

                  {/* Flying Plane along path */}
                  <motion.g>
                    <animateMotion
                      dur="8s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="M 50 150 Q 200 30 350 70"
                    />
                    <polygon
                      points="0,-6 10,0 0,6 -2,0"
                      fill="#EAB308"
                      className="drop-shadow-[0_0_5px_#EAB308]"
                    />
                  </motion.g>
                </svg>

                {/* Hotspot 1: India */}
                <div className="absolute left-[10%] bottom-[20%] flex flex-col items-center z-20">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-softgold opacity-40" />
                    <div className="relative w-4 h-4 rounded-full bg-softgold border-2 border-white flex items-center justify-center shadow-lg" />
                  </div>
                  <span className="text-xs font-bold font-luxury text-gray-300 mt-2 bg-midnight/80 border border-white/5 px-2.5 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-softgold" /> India
                  </span>
                </div>

                {/* Hotspot 2: Germany */}
                <div className="absolute right-[10%] top-[30%] flex flex-col items-center z-20">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-germany-red opacity-40" />
                    <div className="relative w-4 h-4 rounded-full bg-germany-red border-2 border-white flex items-center justify-center shadow-lg" />
                  </div>
                  <span className="text-xs font-bold font-luxury text-gray-300 mt-2 bg-midnight/80 border border-white/5 px-2.5 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1">
                    <span>🇩🇪</span> Germany
                  </span>
                </div>
              </div>

              {/* Updated Text banner */}
              <div className="text-center font-cinematic italic text-softgold text-sm sm:text-base md:text-lg z-10 px-4 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)] leading-relaxed">
                "May your dreams take you farther than you ever imagined."
              </div>
            </motion.div>
          </div>

          {/* Travel hotspots Grid (Right/Bottom) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-4">
              {travelItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-xl glass-card border border-white/5 hover:border-softgold/30 hover:bg-white/5 transition-all duration-300 flex gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-softgold group-hover:bg-softgold group-hover:text-midnight transition-colors duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-luxury text-white mb-1 group-hover:text-softgold transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-xs text-gray-400 font-luxury leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;
