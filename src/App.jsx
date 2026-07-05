import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ParticlesBackground from "./components/ParticlesBackground";
import BackgroundPhotos from "./components/BackgroundPhotos";
import BackgroundGlows from "./components/BackgroundGlows";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Journey from "./components/Journey";
import Letter from "./components/Letter";
import Quotes from "./components/Quotes";
import Goodbye from "./components/Goodbye";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Mouse Glow Position Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-midnight text-white selection:bg-softgold selection:text-midnight">
      {/* Cinematic Loading Intro */}
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}

      {/* Main Layout (Reveals after Loading Screen finishes) */}
      {!isLoading && (
        <>
          {/* Main Background Layers */}
          <BackgroundGlows />
          <ParticlesBackground />
          <BackgroundPhotos />
          
          {/* Custom Cursor Glow Layer */}
          <div className="cursor-glow pointer-events-none" />

          {/* Core Navigation */}
          <Navbar />

          {/* Sections List */}
          <main className="relative flex flex-col">
            <Hero />
            
            {/* Divider lines between pages for premium touch */}
            <div className="h-[1px] w-[80%] mx-auto bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <About />

            <div className="h-[1px] w-[80%] mx-auto bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <Gallery />

            <div className="h-[1px] w-[80%] mx-auto bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <Journey />

            <div className="h-[1px] w-[80%] mx-auto bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <Letter />

            <div className="h-[1px] w-[80%] mx-auto bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <Quotes />

            <div className="h-[1px] w-[80%] mx-auto bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <Goodbye />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
