"use client"
import { useState } from "react"
import BookingModal from "./booking-model"

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section
        id="home"
        className="h-screen flex items-center justify-center text-center p-4 relative"
        style={{
          backgroundImage: "url(/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/50"></div>
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-purple-800 mb-6 animate-fade-in-down">
            <span className="block">Get Your Glow On!</span>
            <span className="block text-pink-400 text-4xl md:text-6xl mt-2 italic">At Glow & Bloom</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed animate-fade-in-up">
          Come on in! We're here to help you look and feel your best, just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-pink-400 text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-pink-500 transition duration-300 transform hover:scale-105 animate-bounce-in"
            >
              Book Your Appointment
            </button>
            <a
              href="#services"
              className="bg-transparent border-2 border-purple-800 text-purple-800 px-8 py-4 rounded-full text-xl font-bold shadow-md hover:bg-purple-800 hover:text-white transition duration-300 transform hover:scale-105 animate-bounce-in"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
