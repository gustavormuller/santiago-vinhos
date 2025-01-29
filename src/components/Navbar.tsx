"use client";
import { useState, useEffect } from "react";
import ToggleMenu from "@/components/ui/ToggleMenu";
import Image from "next/image";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`flex px-5 lg:px-12 py-[3px] items-center justify-between bg-[#bb2343] fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Image
        src="/logo-cut.png"
        alt="Logo da Santiago Vinhos"
        width={85}
        height={70}
        className="lg:w-[100px]"
      />
      <div className="flex items-center lg:hidden">
        <ToggleMenu />
      </div>
      <div className="hidden lg:flex items-center text-[#F9DEE5] text-2xl font-medium font-ibarra">
        <a href="#inicio" className="mr-16 relative group">
          <span>Início</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F9DEE5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
        <a href="#rotulos" className="mr-16 relative group">
          <span>Rótulos</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F9DEE5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
        <a href="#historia" className="mr-16 relative group">
          <span>História</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F9DEE5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
        <a href="#contato" className="relative group">
          <span>Contato</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F9DEE5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
