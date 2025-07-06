import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    
    { label: "About Me", id: "#About" },
    
    { label: "My Gallery", id: "#TheatreGallery" },
      { label: "Videos", id: "#VideoGallery" },
    { label: "Highlights", id: "#Highlights" },
    { label: "Contact", id: "#Footer" },
  ];

  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
     <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <span className="text-2xl font-bold text-black tracking-wider">
          🎭 Portfolio
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-black tracking-wide">
          {navItems.map((item) => (
            <a
              href={item.id}
              key={item.label}
              className="hover:text-yellow-300 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </ul>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden text-black">
          {menu ? (
            <RiCloseLine size={30} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <RiMenu2Line size={30} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-[#1a1a1a] px-6 pb-4 shadow-md rounded-b-lg animate-slide-down">
          <ul className="flex flex-col gap-4 font-medium text-white">
            {navItems.map((item) => (
              <a
                href={item.id}
                key={item.label}
                onClick={closeMenu}
                className="hover:text-yellow-300 transition duration-300"
              >
                {item.label}
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
