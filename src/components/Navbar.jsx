import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "hygiene", label: "Personal Hygiene" },
    { id: "sanitation", label: "Basic Sanitation" },
    { id: "videos", label: "Videos" },
    { id: "about", label: "About" },
  ];

  const scrollToSection = (id) => {
    setActive(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-green-500">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-green-400 font-bold text-lg tracking-widest">
          SwasthyaSetu
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-all duration-300 ${
                active === item.id
                  ? "text-green-400 border-b-2 border-green-400"
                  : "text-gray-300 hover:text-green-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-green-400 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-green-500 px-4 py-3 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left ${
                active === item.id
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}