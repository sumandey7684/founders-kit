"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
            >
              ⚙️ Founders Kit
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("resources")}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Categories
            </button>
            <a
              href="https://github.com/avinash201199/founders-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
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
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => scrollToSection("resources")}
              className="block w-full text-left text-gray-700 hover:text-primary-600 py-2"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="block w-full text-left text-gray-700 hover:text-primary-600 py-2"
            >
              Categories
            </button>
            <a
              href="https://github.com/avinash201199/founders-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 hover:text-primary-600 py-2"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
