"use client";

import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#experience", label: "Experience", id: "experience" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black z-50 border-b border-gray-800">
      <div className="max-w-[87.5rem] mx-auto px-[1rem] sm:px-[1.5rem] lg:px-[2rem]">
        <div className="flex justify-between items-center h-[4rem]">
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, "#home")}
            className="text-[1.5rem] font-bold text-white hover:text-gray-300 transition-colors"
          >
            AR
          </a>
          <div className="flex gap-[2rem]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;