"use client"

import { useState } from "react"
import BookingModal from "./booking-model"

export default function CallToAction() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section className="bg-purple-800 text-white py-16 mx-auto max-w-7xl my-16 rounded-lg shadow-xl text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Ready to Glow?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Book your appointment today and embark on your journey to ultimate beauty and relaxation.
        </p>
        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-pink-400 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-lg hover:bg-pink-500 transition duration-300 transform hover:scale-105"
        >
          Schedule Your Visit Now!
        </button>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
