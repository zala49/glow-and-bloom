import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 py-12 rounded-t-lg mx-auto max-w-7xl mb-4 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Glow & Bloom</h3>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-pink-400 transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-pink-400 transition duration-300">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#why-choose-us" className="hover:text-pink-400 transition duration-300">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition duration-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <div className="space-y-2 mb-4">
            <p className="flex items-center justify-center md:justify-start">
              <MapPin className="mr-2 text-pink-400" size={16} />
              Mahemdavad
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Phone className="mr-2 text-pink-400" size={16} />
              +91-8780997394
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Mail className="mr-2 text-pink-400" size={16} />
              zalapayal960@gmail.com
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <a href="https://www.instagram.com/payu_49/" target="_blank" className="hover:text-pink-400 transition duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
        &copy; 2023 Glow & Bloom. All rights reserved.
      </div> */}
    </footer>
  )
}
