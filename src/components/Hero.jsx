import React from "react";
import { motion } from "framer-motion";
import { Plane, ArrowRight, Heart } from "lucide-react";
import FloatingImage from "./FloatingImage";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-16 z-10">
      
      {/* Background Moon Overlay */}
      <div className="absolute top-10 right-10 md:top-20 md:right-24 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-white via-amber-100 to-amber-200/30 shadow-[0_0_50px_rgba(251,191,36,0.2)] filter blur-[2px] pointer-events-none opacity-80" />

      {/* Cloud Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] w-72 h-20 bg-white/5 rounded-full filter blur-xl animate-cloud-drift-slow" />
        <div className="absolute top-[45%] w-96 h-28 bg-white/3 rounded-full filter blur-2xl animate-cloud-drift-fast" />
      </div>

      {/* Jet Plane flying from India to Germany on load */}
      <motion.div
        initial={{ x: "-10vw", y: "70vh", rotate: -25, opacity: 0 }}
        animate={{ x: "110vw", y: "-20vh", rotate: -15, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 13, ease: "linear", repeat: Infinity, repeatDelay: 5 }}
        className="absolute pointer-events-none z-10 text-white/40 flex flex-col items-center"
      >
        <Plane className="w-10 h-10 text-softgold drop-shadow-[0_0_10px_#EAB308] rotate-90" />
        <span className="text-[10px] uppercase tracking-widest text-softgold font-semibold mt-1">Germany Bound ✈️</span>
      </motion.div>

      {/* Main Grid Wrapper */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Typography & Actions */}
        <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-softgold text-xs font-semibold tracking-wider uppercase mb-6 shadow-md"
          >
            <span>🇮🇳</span>
            <span className="text-white/40">to</span>
            <span>🇩🇪</span>
            <span>A New Adventure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-cinematic font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Happy Journey, <br />
            <span className="bg-gradient-to-r from-softgold via-amber-200 to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(234,179,8,0.15)]">
              Manasaaa ✈️🇩🇪
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl font-luxury text-gray-300 font-medium mb-4 max-w-xl"
          >
            New country. New dreams. A beautiful new chapter.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base text-gray-400 mb-8 max-w-md leading-relaxed font-light font-luxury"
          >
            Wishing you happiness, success, and endless beautiful moments in Germany.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-softgold to-amber-500 text-midnight font-bold hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] transition-all duration-300 active:scale-95 group font-luxury cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-midnight transition-transform group-hover:scale-125 duration-300" />
              Special Message
            </button>
            
            <button
              onClick={() => scrollToSection("journey")}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 active:scale-95 group font-luxury cursor-pointer"
            >
              Your Journey
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right: Floating Portrait Cluster */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center mt-12 lg:mt-0 relative min-h-[360px] md:min-h-[450px] w-full">
          
          {/* Mobile representation: Grid format */}
          <div className="grid grid-cols-2 gap-4 w-full md:hidden">
            <FloatingImage
              src="/images/her1.jpg"
              alt="Manasaaa Portrait"
              rotation="rotate-[-2deg]"
              duration={5}
              delay={0}
              aspectRatio="aspect-[4/5]"
            />
            <FloatingImage
              src="/images/her2.jpg"
              alt="Manasaaa Smiling"
              rotation="rotate-[3deg]"
              duration={6}
              delay={1}
              aspectRatio="aspect-[4/5]"
            />
            <div className="col-span-2 flex justify-center">
              <FloatingImage
                src="/images/her3.jpg"
                alt="Manasaaa Walking"
                rotation="rotate-[-1deg]"
                duration={7}
                delay={2}
                className="w-[70%]"
                aspectRatio="aspect-[16/10]"
              />
            </div>
          </div>

          {/* Desktop representation: Scattered Overlay cards */}
          <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
            {/* Image 1: Top Left */}
            <FloatingImage
              src="/images/her1.jpg"
              alt="Manasaaa Main"
              className="absolute left-[5%] top-[5%] w-[240px] pointer-events-auto"
              rotation="rotate-[-5deg]"
              duration={8}
              delay={0}
            />

            {/* Image 2: Bottom Right */}
            <FloatingImage
              src="/images/her2.jpg"
              alt="Manasaaa Smiling"
              className="absolute right-[8%] bottom-[5%] w-[200px] pointer-events-auto"
              rotation="rotate-[6deg]"
              duration={7}
              delay={1.5}
            />

            {/* Image 3: Top Right/Center */}
            <FloatingImage
              src="/images/her3.jpg"
              alt="Manasaaa Outdoor"
              className="absolute right-[2%] top-[10%] w-[190px] pointer-events-auto"
              rotation="rotate-[-3deg]"
              duration={9}
              delay={3}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
