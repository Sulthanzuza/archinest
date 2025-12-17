import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaPhoneAlt, FaChevronDown } from "react-icons/fa";

const logoUrl = "/archinest logo white.png";

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'WHO WE ARE', path: '/who-we-are' },
  {
    name: 'WHAT WE OFFER', path: '/what-we-offer',
    subpages: [
      { name: 'Interiors', path: '/what-we-offer#interiors' },
      { name: 'Exteriors', path: '/what-we-offer#exteriors' },
      { name: 'Landscaping', path: '/what-we-offer#landscaping' },
    ]
  },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'REACH US', path: '/reach-us' }
];

const socialLinks = [
  { name: 'Facebook', url: "https://www.facebook.com/p/Archinest-Associates-pvtltd-100063629691234/", icon: <FaFacebookF /> },
  { name: 'Instagram', url: "https://www.instagram.com/archinest_associate?igsh=MTJvMWZpYnB2aGx4eA==", icon: <FaInstagram /> },
 
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string>("");
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setHoverDropdown(name);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setHoverDropdown(null);
    }, 200);
  };

  return (
    <header className="fixed w-[80%] px-3 top-0 z-50 text-white bg-black/20 backdrop-blur-lg rounded-[50px] shadow-xl border border-white/20 mx-auto mt-4 left-0 right-0 ">
      <div className=" mx-auto px-4 flex justify-between items-center h-[50px]">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logoUrl} alt="Archinest Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.subpages && handleMouseEnter(item.name)}
              onMouseLeave={() => item.subpages && handleMouseLeave()}
            >
              {!item.subpages ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "uppercase text-[#19B3B1] font-semibold tracking-wide "
                      : "uppercase text-white hover:text-[#19B3B1] transition tracking-wide "
                  }
                >
                  {item.name}
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "uppercase text-[#19B3B1] font-semibold tracking-wide"
                        : "uppercase text-white hover:text-[#19B3B1] transition tracking-wide"
                    }
                  >
                    <span className="uppercase text-white hover:text-[#19B3B1] transition tracking-wide font-semibold cursor-pointer block py-2 px-3 flex items-center gap-1">
                      {item.name}
                      <FaChevronDown className={`text-xs transition-transform duration-200 ${hoverDropdown === item.name ? 'rotate-180' : ''}`} />
                    </span>
                  </NavLink>
                  <div
                    className={`absolute left-0 mt-1 min-w-[200px] bg-transparent backdrop-blur-lg rounded-xl shadow-lg z-50 border border-white/10 transition-opacity duration-200 ${hoverDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                      }`}
                  >
                    {item.subpages.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.path}
                        className="block px-4 py-2 text-white hover:bg-white/10 transition rounded-lg"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Icon */}
        <div className="hidden md:flex items-center">
          <Link to="/reach-us" className=" bg-emerald-600 hover:bg-[#19B3B1] backdrop-blur rounded-full p-2 border border-white/10 flex items-center justify-center gap-1">
            <FaPhoneAlt /> Call Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-white hover:text-[#19B3B1] focus:outline-none focus:ring-2 focus:ring-[#19B3B1] rounded"
          >
            {mobileMenuOpen ? (
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden backdrop-blur-xl shadow-md rounded-b-3xl border-t border-white/10">
          <ul className="flex flex-col py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {!item.subpages ? (
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 uppercase text-[#19B3B1] font-semibold border-l-4 border-[#19B3B1] bg-white/5"
                        : "block px-4 py-2 uppercase text-white hover:bg-white/5"
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <>
                    <span
                      className="block px-4 py-2 uppercase text-white font-semibold cursor-pointer flex items-center justify-between"
                      onClick={() => setMobileDropdown(mobileDropdown === item.name ? "" : item.name)}
                    >
                      {item.name}
                      <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileDropdown === item.name ? 'rotate-180' : ''}`} />
                    </span>
                    {mobileDropdown === item.name && (
                      <ul className="ml-6 mt-1 rounded-xl backdrop-blur border border-white/10">
                        {item.subpages.map((sub) => (
                          <li key={sub.name}>
                            <NavLink
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-white hover:text-[#19B3B1] hover:bg-white/5"
                            >
                              {sub.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
            <li className="flex justify-center space-x-4 mt-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#19B3B1] hover:text-[#19B3B1] transition">
                  {link.icon}
                </a>
              ))}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
