import Image from "next/image";
import logo from "../public/PHOTO-2025-09-14-13-46-48.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="VBARDS Logo" width={100} height={100} />
            <h1 className="text-2xl font-bold text-blue-700">VBARDS PRECISION INDUSTRIES</h1>
          </div>
          <nav className="space-x-6 font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#quality" className="hover:text-blue-600">Quality</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">VBARDS Precision Industries</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Delivering world-class CNC machining, milling, and fabrication services for aerospace, automotive, and industrial needs.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center mb-8">About Us</h3>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          VBARDS PRECISION INDUSTRIES specializes in high-quality CNC machining with state-of-the-art equipment and skilled engineers. 
          Our mission is to provide reliable, precise, and cost-effective manufacturing solutions that empower industries worldwide.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-3">CNC Milling</h4>
              <p>High precision milling with 3, 4, and 5-axis machines for complex geometries.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-3">CNC Turning</h4>
              <p>Accurate and efficient turning solutions for shafts, rods, and custom components.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-3">Fabrication & Assembly</h4>
              <p>Comprehensive metal fabrication and component assembly for end-to-end solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-16 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center mb-8">Quality Commitment</h3>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          We adhere to ISO quality standards with strict inspections at every stage. 
          Our precision machining ensures reliability and durability for mission-critical applications.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
          <p className="mb-6">Have a project or need a quote? Reach out to us today.</p>
          <a
            href="mailto:info.vbards@vbards.in"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} VBARDS PRECISION INDUSTRIES. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
