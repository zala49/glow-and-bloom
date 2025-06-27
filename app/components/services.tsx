import { Scissors, Sparkles, Leaf, Brush, Heart, Crown } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Hair Care & Styling",
    description:
      "Haircuts, coloring, and special treatments to give your hair a fresh, beautiful look.",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-400",
    linkColor: "text-pink-400",
  },
  {
    icon: Sparkles,
    title: "Manicures & Pedicures",
    description: "Pretty nails for hands and feet! Get a relaxing manicure, pedicure, or cool nail designs.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-400",
    linkColor: "text-purple-400",
  },
  {
    icon: Leaf,
    title: "Skincare & Facials",
    description:
      "Facials and skin treatments to make your skin clear and glowing.",
    bgColor: "bg-green-50",
    iconColor: "text-green-400",
    linkColor: "text-green-400",
  },
  {
    icon: Brush,
    title: "Professional Makeup",
    description: "Need makeup for an event or just for fun? Our artists will give you the perfect look, day or night.",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-400",
    linkColor: "text-yellow-400",
  },
  {
    icon: Heart,
    title: "Body & Spa Treatments",
    description: "Relaxing massages and body treatments to help you de-stress and feel good.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400",
    linkColor: "text-blue-400",
  },
  {
    icon: Crown,
    title: "Bridal Beauty Packages",
    description: "Look amazing on your wedding day! We have full beauty packages to make sure you shine.",
    bgColor: "bg-red-50",
    iconColor: "text-red-400",
    linkColor: "text-red-400",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white rounded-lg shadow-inner mx-auto max-w-7xl my-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-purple-800">What We Do for You</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Find easy beauty services here that will make you feel relaxed, confident, and beautiful.
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
                {/* <a
                  href="#services"
                  className={`${service.linkColor} font-medium hover:underline flex items-center justify-center`}
                >
                  Learn More
                </a> */}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
