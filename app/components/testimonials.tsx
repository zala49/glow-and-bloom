import { Star, StarHalf } from "lucide-react"

const testimonials = [
  {
    name: "Anya Sharma",
    role: "Regular Client",
    avatar: "A",
    rating: 5,
    text: "Glow & Bloom is the best! Their nail art is super good, and everyone working there is so nice. I always leave feeling amazing!",
  },
  {
    name: "Priya Patel",
    role: "Happy Bride",
    avatar: "P",
    rating: 4.5,
    text: "They did my wedding makeup, and it was just perfect! They knew exactly what I wanted and made me look beautiful for my special day.",
  },
  {
    name: "Diya Patel",
    role: "Skincare Enthusiast",
    avatar: "D",
    rating: 5,
    text: "This facial made my skin glow and feel super soft. It's such a peaceful and relaxing place to visit. ",
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
              <p className="font-semibold text-purple-800">- {testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
