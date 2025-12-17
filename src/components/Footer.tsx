import { section } from 'framer-motion/client';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="flex items-center gap-6 bg-emerald-600 shadow-lg px-10 py-7 w-full mx-auto">
        {/* Icon */}
        <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 bg-emerald-700 text-white rounded-full text-2xl">
          <FaPhoneAlt />
        </div>
        <div className="flex flex-col justify-center w-80">
          <div className="text-2xl font-bold mb-2 text-white">Connect With Us</div>
          <div className="text-4xl font-medium mb-2 text-white">+91 90378 13345</div>
        </div>
        <div className="flex-1">
          <p className="text-white text-base">
            Plan ahead and secure your spot! Book your schedule with us to discuss your project and take the first step towards turning your ideas into reality. Let's create something extraordinary together!
          </p>
        </div>
      </div>

      {/* Top */}
      <div className="w-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between p-10 gap-4">
        {/* Logo and About */}
        <div className="flex-1 flex flex-col items-center md:items-start md:mb-0 px-10 ">
          <img src="/archinest logo white.png" alt="Logo" className="w-[70%] mb-2" />
        </div>
        {/* Offices */}
        <div className="flex-2 flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-16 w-full items-center justify-center">
            {/* Office 1 */}
            <div className="mb-8 md:mb-0">
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🏢</span>
                <div className="font-semibold text-lg"> OFFICE</div>
                <div className="text-center text-gray-300 text-sm mb-2">
                  Archinest Associates pvt Ltd 
2nd floor Medayil Building 
Kallambalam 695605<br />
                  
                </div>
                <a
                  href="https://maps.app.goo.gl/AcX3kKAntygwf54h6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 border rounded-lg hover:bg-white hover:text-black transition"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About/desc (hidden on mobile) */}
        <div className="flex-2 flex flex-col items-center">
          <p className="mt-4 max-w-md text-gray-300 text-sm leading-relaxed px-10">
            At Archinest Associates Pvt Ltd, imagination blends seamlessly with precision. Established in 2020 by a passionate designer, We are dedicated to creating personalized interior concepts that capture each client's individuality. 
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-700 mx-16" />

      {/* Bottom grid */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm px-12">
      
        {/* Quick Links */}
        <div className="md:col-span-1 text-center md:text-left">
          <div className="font-bold text-lg mb-2">Quick Links</div>
          <ul>
            <li className="mb-1 hover:underline"><a href="/who-we-are">Who We Are</a></li>
            <li className="mb-1 hover:underline"><a href="/projects">Projects</a></li>
           
            <li className="mb-1 hover:underline"><a href="/reach-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
       {/* Services */}
        <div className="text-center md:text-left">
          <div className="font-bold text-lg mb-2">Services</div>
          <ul>
            <li className="mb-1 hover:underline">
              <a href="/what-we-offer#interiors">Interiors</a>
            </li>
            <li className="mb-1 hover:underline">
              <a href="/what-we-offer#exteriors">Exteriors</a>
            </li>
            <li className="mb-1 hover:underline">
              
              <a href="/what-we-offer#landscaping">Landscaping</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <div className="font-bold text-lg mb-2">Get In Touch</div>
          <div className="flex items-center justify-center md:justify-start mb-1">
            <FaPhoneAlt className="mr-2" /> 9037813345 
          </div>
          <div className="flex items-center justify-center md:justify-start mb-1">
            <FaWhatsapp className="mr-2" /> +91 90378 13345
          </div>
          <div className="flex items-center justify-center md:justify-start mb-1">
            <FaEnvelope className="mr-2" /> info@archinest.com
          </div>
          {/* Socials */}
          <div className="flex space-x-3 mt-3 justify-center md:justify-start">
            <a href="https://www.facebook.com/p/Archinest-Associates-pvtltd-100063629691234/" className="p-2 bg-emerald-700 rounded-full hover:bg-white hover:text-black transition"><FaFacebookF /></a>
            <a href="https://www.instagram.com/archinest_associate?igsh=MTJvMWZpYnB2aGx4eA==" className="p-2 bg-emerald-700 rounded-full hover:bg-white hover:text-black transition"><FaInstagram /></a>
            </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-8 pt-4 border-t border-gray-800 mx-16">
        Copyright © {new Date().getFullYear()} Archinest | Powered By <a className='text-cyan-500' href="https://www.aieera.com">Aieera</a>
      </div>
    </footer>
  );
}

export default Footer;
