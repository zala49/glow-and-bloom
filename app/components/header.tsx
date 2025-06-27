"use client"

import { useState } from "react"
import { Gem, Menu, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50 rounded-b-lg mx-auto max-w-7xl mt-4">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Gem className="text-pink-400 text-3xl" size={32} />
          <a href="#home" className="text-3xl font-bold text-purple-800">
            Glow & Bloom
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#home" className="text-gray-700 hover:text-pink-400 transition duration-300">
              Home
            </a>
          </li>
          <li className="relative group">
            <a href="#services" className="text-gray-700 hover:text-pink-400 transition duration-300 flex items-center">
              Services <ChevronDown className="ml-1" size={16} />
            </a>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 px-4 rounded-lg mt-2 w-48 text-base">
              <li>
                <a href="#services" className="block py-2 hover:text-pink-400">
                  Hair Care
                </a>
              </li>
              <li>
                <a href="#services" className="block py-2 hover:text-pink-400">
                  Nail Art
                </a>
              </li>
              <li>
                <a href="#services" className="block py-2 hover:text-pink-400">
                  Skincare & Facials
                </a>
              </li>
              <li>
                <a href="#services" className="block py-2 hover:text-pink-400">
                  Makeup
                </a>
              </li>
              <li>
                <a href="#services" className="block py-2 hover:text-pink-400">
                  Spa & Relaxation
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#why-choose-us" className="text-gray-700 hover:text-pink-400 transition duration-300">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-pink-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Book Now Button */}
        <a
          href="#contact"
          className="bg-pink-400 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-500 transition duration-300 transform hover:scale-105 hidden md:block"
        >
          Book Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white mt-4 mx-6 rounded-lg shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            <li>
              <a href="#home" className="text-gray-700 hover:text-pink-400 transition duration-300">
                Home
              </a>
            </li>
            <li className="w-full text-center">
              <button
                className="text-gray-700 hover:text-pink-400 transition duration-300 w-full py-2 flex items-center justify-center"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services <ChevronDown className="ml-1" size={16} />
              </button>
              {isMobileServicesOpen && (
                <ul className="bg-gray-50 mt-2 py-2 rounded-lg text-base">
                  <li>
                    <a href="#services" className="block py-2 hover:text-pink-400">
                      Hair Care
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block py-2 hover:text-pink-400">
                      Nail Art
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block py-2 hover:text-pink-400">
                      Skincare & Facials
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block py-2 hover:text-pink-400">
                      Makeup
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block py-2 hover:text-pink-400">
                      Spa & Relaxation
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#testimonials" className="text-gray-700 hover:text-pink-400 transition duration-300">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#why-choose-us" className="text-gray-700 hover:text-pink-400 transition duration-300">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-pink-400 transition duration-300">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-pink-400 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-500 transition duration-300"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
