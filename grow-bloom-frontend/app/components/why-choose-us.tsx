import { Award, Sparkles, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Expert Professionals",
    description: "Our team consists of highly skilled and certified beauty experts.",
    bgColor: "bg-gradient-to-br from-pink-50 to-white",
    iconColor: "text-pink-400",
  },
  {
    icon: Sparkles,
    title: "Luxurious Ambiance",
    description: "Relax in our serene and elegantly designed salon environment.",
    bgColor: "bg-gradient-to-br from-purple-50 to-white",
    iconColor: "text-purple-400",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Tailored consultations and treatments to meet your unique needs.",
    bgColor: "bg-gradient-to-br from-green-50 to-white",
    iconColor: "text-green-400",
  },
  {
    icon: Shield,
    title: "Hygiene & Safety",
    description: "Adhering to the highest standards of cleanliness and client safety.",
    bgColor: "bg-gradient-to-br from-yellow-50 to-white",
    iconColor: "text-yellow-400",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white mx-auto max-w-7xl my-16 rounded-lg shadow-inner px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-purple-800">Why Choose Glow & Bloom?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We are dedicated to providing an unparalleled beauty experience, ensuring you leave feeling refreshed and
          beautiful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`flex flex-col items-center p-6 rounded-xl ${feature.bgColor} shadow-md hover:shadow-lg transition duration-300`}
              >
                <IconComponent className={`${feature.iconColor} mb-4`} size={48} />
                <h3 className="text-xl font-semibold mb-2 text-purple-800">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
