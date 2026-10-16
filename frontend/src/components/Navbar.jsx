import { useState, useEffect } from "react";

// Links shown in the navbar. "href" must match the section id later.
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);     // mobile menu open/closed
  const [scrolled, setScrolled] = useState(false); // has the user scrolled

  // Watch scrolling to change navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-25 max-w-6xl items-center justify-between px-12">
        {/* 1. Logo */}
        <a href="#" className="text-2xl font-bold text-light">
          PM<span className="text-accent">.</span>
        </a>

        {/* 2. Center links (desktop only) */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/5 bg-card px-3 py-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-5 py-2 text-muted transition hover:text-light"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 3. Contact button desktop only */}
        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Contact Me
        </a>

        {/* 4. Hamburger button mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-light md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 5. Mobile menu (shows only when isOpen is true) */}
      {isOpen && (
        <div className="border-t border-white/5 bg-dark/95 px-6 py-6 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // close menu after click
                className="text-lg text-muted transition hover:text-light"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-2"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;