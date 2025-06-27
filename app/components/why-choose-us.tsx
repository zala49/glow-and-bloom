import { Award, Sparkles, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Comfortable Place",
    description: "Our place is a calm and nice place where you can relax and feel good.",
    bgColor: "bg-gradient-to-br from-purple-50 to-white",
    iconColor: "text-purple-400",
  },
  {
    icon: Heart,
    title: "Care Just for You",
    description: "We talk with you to understand what you need, so every service is perfect for you.",
    bgColor: "bg-gradient-to-br from-green-50 to-white",
    iconColor: "text-green-400",
  },
  {
    icon: Shield,
    title: "Clean & Safe",
    description: "Your safety is important. We follow top rules for cleanliness and safety.",
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
          Come to Glow & Bloom because we promise you a great beauty experience. You'll always leave feeling good and looking amazing!
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
