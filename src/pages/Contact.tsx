 import React, { useState } from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import image1 from '/i1.jpg'
import image2 from '/i2.jpg'
function Contact() {
  // 🔹 Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // 🔹 Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
     
  const response = await fetch("https://formsubmit.co/ajax/info@archinestassociates.com", {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
      ...formData,
      
      _subject: `New Inquiry from ${formData.name}`, 
      _template: "box" 
    }),
  });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Top Banner Section */}
      <section
        className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${image2})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute inset-0 z-15 flex items-center justify-center pointer-events-none select-none overflow-hidden top-[-10%] sm:top-0">
         <h2
           className="text-[2rem] sm:text-[5rem] md:text-[7rem] lg:text-[13rem] font-black uppercase text-transparent opacity-20 "
           style={{
             WebkitTextStroke: '3px rgba(255, 255, 255, 0.8)',
           }}
         >
          CONTACT US
         </h2>
      </div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center drop-shadow-xl">
           CONTACT US
        </h1>
      </section>

      {/* Contact Section */}
      <section>
        <div
          className="relative min-h-screen flex items-center justify-center bg-cover bg-fixed bg-center p-20"
          style={{
            backgroundImage:
              `url(${image1})`,
          }}
        >
          <div className="absolute top-0 left-0 h-full w-full bg-black/30 z-0" />

          <div className="backdrop-blur-xl bg-black/40 rounded-2xl shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 p-10 relative z-10">
            {/* Contact Form */}
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <h2 className="text-3xl font-light text-white mb-2">
                Contact Us
              </h2>
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none"
              />
              <textarea
                required
                rows={4}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-fit px-7 py-3 rounded-lg  text-white shadow-md bg-emerald-600 hover:bg-[#19B3B1] transition"
              >
                Submit your application
              </button>
              {status && (
                <p className="text-sm text-white mt-2">{status}</p>
              )}
            </form>

            {/* Company Info */}
            <div className="flex flex-col gap-6 text-white/90 justify-center">
              <h3 className="text-2xl font-semibold mb-4">Company Info</h3>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Archinest Associates pvt Ltd 
2nd floor Medayil Building 
Kallambalam 695605</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+91 90378 13345</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <a href="mailto:info@archinestassociates.com" className="underline">
                  info@archinestassociates.com
                </a>
              </div>

              <div className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/archinest_associate?igsh=MTJvMWZpYnB2aGx4eA==" className="text-white/80 hover:text-white">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.facebook.com/p/Archinest-Associates-pvtltd-100063629691234/" className="text-white/80 hover:text-white">
                  <FaFacebookF size={24} />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Google Maps Section */}
<section className="w-full bg-gray-100 py-10 p-0">
  <div className="w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7307.559240570725!2d76.78774826577504!3d8.761370118883828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e996fd7b8bbf%3A0x6355bee8f140cb65!2sDream%20home%20Designers!5e0!3m2!1sen!2sin!4v1763547734552!5m2!1sen!2sin"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg shadow-lg w-full"
      title="Dream Home Designers Location"
    ></iframe>
  </div>
</section>

    </>
  );
}

export default Contact;
