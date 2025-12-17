import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectDetails: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === title
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  if (!project) {
    return (
      <div className="p-10 pt-[120px] text-center text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
        <button
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const images = project.images ?? [project.image];
  const mainImage = images[0];

  return (

    <>
      <section
        className="relative min-h-screen flex flex-col justify-center items-start bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url('${mainImage}')` // Replace with your hero/kitchen background image
        }}
      >
        {/* Overlay for brightness and subtle contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

        <div className="relative z-10 px-12 py-26 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-white/85 text-lg mb-6 md:max-w-[28rem]">
            {project.description}
          </p>
      
        </div>

       
        <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center bg-transparent">
          <div className="glass-bar grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-7xl px-8 py-4 items-end">
            {/* Card Item Example
            <div className="backdrop-blur-lg bg-white/15 border border-white/30 rounded-lg px-5 py-3 text-white/95 shadow-md flex flex-col h-24">
              <span className="font-semibold mb-1">Burton Str.</span>
              <span className="text-xs">Bamboo, oak and granite—a natural experience</span>
            </div>
            <div className="backdrop-blur-lg bg-white/15 border border-white/30 rounded-lg px-5 py-3 text-white/95 shadow-md flex flex-col h-24">
              <span className="font-semibold mb-1">Alfreton Road</span>
              <span className="text-xs">Who says concrete is boring? Take a look at this kitchen</span>
            </div>
            <div className="backdrop-blur-lg bg-white/15 border border-white/30 rounded-lg px-5 py-3 text-white/95 shadow-md flex flex-col h-24">
              <span className="font-semibold mb-1">Grove Avenue</span>
              <span className="text-xs">Building a kitchen in a 200 ft living space</span>
            </div>
            <div className="backdrop-blur-lg bg-white/15 border border-white/30 rounded-lg px-5 py-3 text-white/95 shadow-md flex flex-col h-24">
              <span className="font-semibold mb-1">Newcastle Dr</span>
              <span className="text-xs">Have you ever seen a waterfall in a kitchen? Here it is</span>
            </div> */}


          </div>
        </div>
      </section>

      <section className='bg-cover bg-center bg-fixed'
        style={{ backgroundImage: `url('/bg4.jpg')` }}>
        <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none" />
        <div className="mx-auto p-12 ">

          <h2 className='text-4xl text-center'>Project Gallery</h2>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6"
          >
            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`${project.title} ${i + 1}`}
                className="h-40 w-full object-cover rounded-lg cursor-pointer hover:scale-105 hover:shadow-xl transition"
                onClick={() => {
                  setCurrIndex(i);
                  setLightboxOpen(true);
                }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
              >
                {/* Close */}
                <button
                  className="absolute top-8 right-8 text-white bg-gray-800/70 hover:bg-gray-900/80 rounded-full p-3 text-2xl"
                  onClick={() => setLightboxOpen(false)}
                >
                  <FaTimes />
                </button>

                {/* Prev */}
                <button
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-gray-800/70 hover:bg-gray-900/80 rounded-full p-3 text-2xl"
                  onClick={() => setCurrIndex((currIndex - 1 + images.length) % images.length)}
                >
                  <FaChevronLeft />
                </button>

                {/* Image */}
                <motion.img
                  key={currIndex}
                  src={images[currIndex]}
                  alt="Gallery"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
                />

                {/* Next */}
                <button
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-gray-800/70 hover:bg-gray-900/80 rounded-full p-3 text-2xl"
                  onClick={() => setCurrIndex((currIndex + 1) % images.length)}
                >
                  <FaChevronRight />
                </button>
              </motion.div>
            )}
          </AnimatePresence>


        </div>
      </section>






    </>



  );
};

export default ProjectDetails;
