import { Scissors, Sparkles, Leaf, Brush, Heart, Crown } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Hair Care & Styling",
    description:
      "From trendy cuts to vibrant colors and luxurious treatments, our stylists will give your hair the love it deserves.",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-400",
    linkColor: "text-pink-400",
  },
  {
    icon: Sparkles,
    title: "Manicures & Pedicures",
    description: "Express your style with stunning nail art, relaxing spa pedicures, and flawless manicures.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-400",
    linkColor: "text-purple-400",
  },
  {
    icon: Leaf,
    title: "Skincare & Facials",
    description:
      "Rejuvenate your skin with our personalized facials and advanced skincare treatments for a radiant glow.",
    bgColor: "bg-green-50",
    iconColor: "text-green-400",
    linkColor: "text-green-400",
  },
  {
    icon: Brush,
    title: "Professional Makeup",
    description: "From subtle day looks to glamorous evening transformations, our artists create your perfect look.",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-400",
    linkColor: "text-yellow-400",
  },
  {
    icon: Heart,
    title: "Body & Spa Treatments",
    description: "Indulge in relaxing massages, body wraps, and other spa services for ultimate tranquility.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400",
    linkColor: "text-blue-400",
  },
  {
    icon: Crown,
    title: "Bridal Beauty Packages",
    description: "Look absolutely stunning on your special day with our comprehensive bridal beauty packages.",
    bgColor: "bg-red-50",
    iconColor: "text-red-400",
    linkColor: "text-red-400",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white rounded-lg shadow-inner mx-auto max-w-7xl my-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-purple-800">Our Signature Services</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Indulge in a range of premium beauty treatments tailored to make you feel pampered, confident, and utterly
          beautiful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`${service.bgColor} p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2`}
              >
                <IconComponent className={`${service.iconColor} mx-auto mb-6`} size={48} />
                <h3 className="text-2xl font-semibold mb-3 text-purple-800">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                <a
                  href="#services"
                  className={`${service.linkColor} font-medium hover:underline flex items-center justify-center`}
                >
                  Learn More
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
