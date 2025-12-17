import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, easeIn } from "framer-motion";
import heroImage from '/archinest hero.jpg'
const images = [
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1400",
    title: "Interior",
    content: "Stylish interiors designed for comfort and aesthetics.",
  },
  {
    url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=format&fit=crop&q=80&w=1400",
    title: "Exterior",
    content: "Striking exteriors that blend innovation and elegance.",
  },
  {
    url: "https://i.pinimg.com/1200x/69/b9/fc/69b9fc6e170970362b9d6aa9d41e516e.jpg",
    title: "Landscape",
    content: "Serene landscapes for tranquil outdoor experiences.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const backgroundImage =
    activeIndex !== null
      ? images[activeIndex].url
      : heroImage;

  const sectionRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start start", "end start"], // Bidirectional tracking
});

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.5,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};


  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 text-center h-[100vh] transition-all duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Smooth Zoom Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
          <div className="absolute inset-0 z-15 flex items-center justify-center pointer-events-none select-none overflow-hidden top-[-10%] sm:top-0">
         <h2
           className="text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[14rem] font-black uppercase text-transparent opacity-20 "
           style={{
             WebkitTextStroke: '3px rgba(255, 255, 255, 0.8)',
           }}
         >
           ARCHINEST
         </h2>
      </div>
      {/* Heading */}
         <motion.div
        className="absolute z-20 left-0 right-0 top-[45%] transform -translate-y-1/2 flex flex-col items-center justify-center px-4"
        style={{ opacity: textOpacity }}
        initial="hidden"
        animate="visible"
        variants={textContainerVariants}
      >
        {/* "Welcome to" - Elegant and Spaced */}
        <motion.p 
          variants={textItemVariants}
          className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-gray-200 mb-2"
        >
          Welcome to
        </motion.p>

        {/* "ARCHINEST" - Bold and Commanding */}
        <motion.h1 
          variants={textItemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white drop-shadow-2xl"
        >
          ARCHINEST
        </motion.h1>

        {/* Decorative Line */}
        <motion.div 
          variants={textItemVariants}
          className="w-16 sm:w-24 h-1 bg-emerald-500/80 mt-6 rounded-full"
        />
      </motion.div>

      {/* Image Cards */}
      <div
        className="
          absolute left-0 right-0 bottom-[-8%] sm:bottom-[-14%] md:bottom-[-10%] z-20 
          flex flex-wrap justify-center items-center gap-4
          px-4 md:px-8
        "
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className={`
              group relative cursor-pointer rounded-3xl overflow-hidden 
              transition-all duration-500 flex-shrink-0 
              bg-center bg-cover shadow-xl backdrop-blur-xl
              border border-white/20
              ${activeIndex === idx
                ? "w-[85vw] sm:w-[400px] h-[220px] z-20"
                : "w-[40vw] sm:w-[200px] h-[160px] opacity-90"}
            `}
            onClick={() => setActiveIndex(idx)}
            style={{
              backgroundImage: `url(${img.url})`,
            }}
            initial={{
              x: idx === 0 ? -300 : idx === 2 ? 300 : 0,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: easeIn, delay: 0.4 }}
          >
            {/* Overlay */}
            <div
              className={`
                absolute inset-0 flex flex-col justify-center items-center 
                text-center px-3 sm:px-6 transition-opacity duration-500 
                ${activeIndex === idx
                  ? "bg-black/60 opacity-100"
                  : "bg-black/0 opacity-0 group-hover:bg-black/30 group-hover:opacity-100"}
              `}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2">{img.title}</h2>
              {activeIndex === idx && (
                <p className="text-sm sm:text-base font-medium">{img.content}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
