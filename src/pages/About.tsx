import { useState } from "react";
import aboutus from '/about us.jpg'
const slides = [
    {
        title: "VISION",
        content:
            "To craft eco-friendly, world-class spaces that reflect the deepest desires of our clients We strive to shape every design and completed project into an ambiance that resonates with emotion, purpose, and lasting beauty"
    },
    {
        title: "MISSION",
        content:
            "To transform ideas into refined, elegant environments through sustainable and client-focused design solutions.We believe in collaborative creativity delivering personalized experiences where functionality meets aesthetic excellence, ensuring every project feels meaningful, thoughtful, and uniquely crafted.",
    },
];

function About() {
    const [index] = useState(0);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        `url(${aboutus})`,
                }}
            >
               <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  <div className="absolute inset-0 z-15 flex items-center justify-center pointer-events-none select-none overflow-hidden top-[-10%] sm:top-0">
         <h2
           className="text-[2rem] sm:text-[5rem] md:text-[7rem] lg:text-[11rem] font-black uppercase text-transparent opacity-20 "
           style={{
             WebkitTextStroke: '3px rgba(255, 255, 255, 0.8)',
           }}
         >
           WHO WE ARE
         </h2>
      </div>
<div className="relative z-10 text-center text-white px-4">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-xl">
       WHO WE ARE
    </h1>

   
</div>

            </section>

            {/* About Sections */}
            <section
                className="relative w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-16 bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: "url('/bg4.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xs"></div>

                {/* First Block */}
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                    <div className="flex-1 p-4 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-emerald-800">
                          
                            <span className="text-[#19B3B1]">Creating   <br /> Meaningful Environments</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-800 mt-4">
                           Rooted in thoughtful design, we shape spaces where elegance meets purpose. Through collaboration and meticulous attention to detail, we create environments that elevate living and leave a lasting impression.
                        </p>
                    </div>

                    <div className="flex-1 w-full max-w-md md:max-w-xl">
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://i.pinimg.com/1200x/b2/86/e9/b286e921900c2e1c5b6430a0dea8cadc.jpg"
                                alt="Design Studio Team"
                                className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 py-4 sm:py-6 bg-black/60 text-white text-center sm:text-left">
                                <div className="font-extrabold text-lg sm:text-xl mb-1">
                                    Dedicated to Design Excellence
                                </div>
                                <div className="font-medium text-sm sm:text-base">
                                    Collaborative & Innovative
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Block */}
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
                    <div className="flex-1 p-4 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                          Shaping Stories  <br />
                            <span className="text-amber-500">Through Spaces</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-800 mt-4">
                            We create spaces that speak with quiet elegance. Guided by purpose and refined design, we turn vision into environments that feel personal, balanced, and timeless. Every detail is crafted to enhance comfort, well-being, and the art of sophisticated living.
                        </p>
                    </div>
                    <div className="flex-1 w-full max-w-md md:max-w-xl">
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://i.pinimg.com/1200x/56/40/04/5640040aa9884168e6573b31e933aaa8.jpg"
                                alt="Design Studio"
                                className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section
                className="relative w-full py-12 sm:py-16 flex flex-col md:flex-row items-center justify-center gap-6 bg-cover bg-center px-4 sm:px-6 md:px-10"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/a9/2f/49/a92f49ba72809cef7d0f18cac20b333a.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full max-w-6xl">
                    {slides.map((s, i) => (
                        <div
                            key={i}
                            className="flex-1 min-w-[280px] sm:min-w-[320px] max-w-lg bg-emerald-950/70 text-white rounded-xl shadow-2xl px-6 sm:px-8 py-8 flex flex-col items-center text-center"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                                {s.title}
                            </h2>
                            <p className="text-base sm:text-lg font-medium leading-relaxed">
                                {s.content}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Client Testimonials Section */}
            <section
                className="relative min-h-screen w-full flex flex-col justify-center items-center bg-fixed bg-cover bg-center px-4 sm:px-8"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/93/18/12/931812d11428b647890a1a61916430b0.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

                <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center">
                    <div className="bg-black bg-opacity-50 rounded-xl px-6 sm:px-8 py-6 mb-6 mt-12 w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
                            Hear From Our Happy Clients
                        </h2>
                        <p className="text-white text-base sm:text-lg text-center">
                           Our clients trust us for our commitment to quality and thoughtful design. Here’s what they have shared about their experience working with us. We take pride in delivering excellence and building lasting relationships along the way.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4 mb-6 w-full">
                        <div className="bg-white rounded-xl overflow-hidden shadow-xl w-full sm:w-1/2">
                            <video
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-[220px] sm:h-[280px] object-cover bg-black"
                            >
                                <source src="/House_Interior_Design.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
