import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Header = ({ toggleMobileMenu, mobileMenuOpen, isActive }) => {
  return (
    <header className="bg-primary shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold font-serif text-white"
          >
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="h-10 w-10 object-contain rounded-full border border-accent"
            />
            <span>Bebaak Collective</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-medium transition-all duration-200 relative pb-1 ${
                    isActive(to)
                      ? "text-secondary-light underline underline-offset-4 decoration-2 decoration-secondary-light"
                      : "text-white hover:text-secondary"
                  }`}
                >
                  <span className="hover-underline">{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white bg-accent hover:bg-accent-dark focus:outline-none transition-all duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute py-4 w-full bg-primary/90 border-b-4 border-accent/40 left-0 backdrop-blur-md mt-3">
            <ul className="flex flex-col">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block py-2 px-4 font-medium transition-colors ${
                      isActive(to)
                        ? "text-secondary-light bg-accent-dark/10"
                        : "text-white hover:bg-secondary-light/20 hover:text-secondary-light"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
