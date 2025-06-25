import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import WhyChooseUs from "./components/why-choose-us";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
