import { Star, StarHalf } from "lucide-react"

const testimonials = [
  {
    name: "Anya Sharma",
    role: "Regular Client",
    avatar: "A",
    rating: 5,
    text: "Glow & Bloom is my absolute favorite! The nail art is incredible, and the staff are so sweet and professional. Always leave feeling fabulous!",
  },
  {
    name: "Priya Singh",
    role: "Happy Bride",
    avatar: "P",
    rating: 4.5,
    text: "Got my bridal makeup done here, and it was perfect! They understood exactly what I wanted and made me look stunning on my big day.",
  },
  {
    name: "Diya Patel",
    role: "Skincare Enthusiast",
    avatar: "D",
    rating: 5,
    text: "The facial left my skin glowing and feeling so soft. The ambiance is so relaxing, it's truly a peaceful escape.",
  },
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex justify-center text-yellow-500 mb-2">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
      {hasHalfStar && <StarHalf size={16} fill="currentColor" />}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-pink-50 mx-auto max-w-7xl my-16 rounded-lg shadow-inner px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-purple-800">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from the girls who love their Glow & Bloom experience!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-purple-800 text-white flex items-center justify-center text-2xl font-bold border-4 border-pink-200 shadow-md">
                  {testimonial.avatar}
                </div>
              </div>
              <p className="text-gray-800 text-lg italic mb-4">"{testimonial.text}"</p>
              <StarRating rating={testimonial.rating} />
              <p className="font-semibold text-purple-800">- {testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
