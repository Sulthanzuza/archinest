import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import proj from '/projects.webp'
const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div
      className="relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          `url(${proj})`,
      }}
    >
         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  
      {/* Top Banner Section */}
      <section className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[480px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 z-15 flex items-center justify-center pointer-events-none select-none overflow-hidden top-[-10%] sm:top-0">
         <h2
           className="text-[2rem] sm:text-[4rem] md:text-[5rem] lg:text-[10rem] font-black uppercase text-transparent opacity-20 "
           style={{
             WebkitTextStroke: '3px rgba(255, 255, 255, 0.8)',
           }}
         >
           WHAT WE OFFER
         </h2>
      </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white text-2xl sm:text-4xl md:text-6xl font-bold text-center drop-shadow-xl px-4"
        >
         WHAT WE OFFER
        </motion.h1>
      </section>

      {/* Interiors Section */}
      <section
        id="interiors"
        className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] py-10 sm:py-12 md:py-16 bg-black overflow-hidden bg-fixed px-4 sm:px-6 lg:px-12"
        style={{
          backgroundImage: "url('/bg3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-20 z-0" />
        <div className="relative z-10 w-full md:w-1/2 backdrop-blur-sm bg-black/5 rounded-3xl shadow-2xl p-5 sm:p-8 border border-black/20 mb-8 md:mb-0 md:mr-6">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-black leading-snug">
            <br /> Designed with Heart,  <br /> Built for You
          </h2>
          <p className="text-sm sm:text-base text-black/75 font-medium leading-relaxed">
           Dreaming of a unique space? Share your ideas with us. At Archinest, we transform imagination into beautifully crafted interiors that feel meaningful, inviting, and authentically yours. Every element is thoughtfully curated to create a space that reflects your personality and enhances your everyday living.
          </p>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2 z-10">
          <img
            src="https://i.pinimg.com/1200x/b0/f2/d5/b0f2d50d7b704285ba51643b29e64ce4.jpg"
            alt="Interior Design"
            className="object-cover rounded-lg shadow-xl w-[90%] sm:w-[70%] md:w-[80%] max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Exteriors Section */}
      <section
        id="exteriors"
        className="relative flex flex-col md:flex-row-reverse items-center justify-center min-h-[80vh] py-10 sm:py-12 md:py-16 bg-black/30 overflow-hidden px-4 sm:px-6 lg:px-12"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <div className="relative z-10 w-full md:w-1/2 backdrop-blur-md bg-white/10 rounded-3xl shadow-2xl p-5 sm:p-8 border border-white/30 mb-8 md:mb-0 md:ml-6">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-white leading-snug">
            <br /> Crafted with Passion, <br />Designed for Impact
          </h2>
          <p className="text-sm sm:text-base text-white/75 font-medium leading-relaxed">
           Whether it’s a fresh façade or a special outdoor project, Archinest Associates works closely with you to design exteriors that stand out with elegance and purpose. Let’s build an outdoor environment that enhances your lifestyle and transforms the way you experience your space.
          </p>
        </div>
        <div className="flex justify-center md:justify-start w-full md:w-1/2 z-10">
          <img
            src="https://i.pinimg.com/1200x/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg"
            alt="Exterior Design"
            className="object-cover rounded-lg shadow-xl w-[90%] sm:w-[70%] md:w-[80%] max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Landscaping Section */}
      <section
        id="landscaping"
        className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] py-10 sm:py-12 md:py-16 bg-black overflow-hidden bg-fixed px-4 sm:px-6 lg:px-12"
        style={{
          backgroundImage: "url('/bg4.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-20 z-0" />
        <div className="relative z-10 w-full md:w-1/2 backdrop-blur-sm bg-black/5 rounded-3xl shadow-2xl p-5 sm:p-8 border border-black/20 mb-8 md:mb-0 md:mr-6">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-black leading-snug">
             <br />Elegant Outdoors,<br />   Thoughtfully Designed
          </h2>
          <p className="text-sm sm:text-base text-black/75 font-medium leading-relaxed">
           We shape outdoor environments with sophistication and purpose. Share your vision with us, and together we’ll create landscapes that offer beauty, balance, and timeless appeal. Every space we design is crafted to elevate your outdoor living experience and bring nature closer to your everyday life.
          </p>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2 z-10">
          <img
            src="https://i.pinimg.com/1200x/d2/97/ac/d297ac33f619089c1647920a99dc4db7.jpg"
            alt="Landscaping Design"
            className="object-cover rounded-lg shadow-xl w-[90%] sm:w-[70%] md:w-[80%] max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
