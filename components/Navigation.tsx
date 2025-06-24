"use client";

import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#art", label: "Art", id: "art" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, "#home")}
            className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            AR
          </a>
          <div className="flex space-x-8">
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