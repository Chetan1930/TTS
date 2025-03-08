import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Rocket, 
  Smartphone, 
  Search, 
  Shield, 
  Headphones, 
  CheckCircle, 
  ShoppingCart, 
  Palette, 
  RefreshCw, 
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-yellow-300">TTS</span> – Transforming Ideas into Stunning Websites
            </h1>
            <p className="text-xl mb-8">Custom, Scalable, and Performance-Driven Web Solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-yellow-300" />
                <span>Creative Web Design</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-yellow-300" />
                <span>SEO-Optimized</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-yellow-300" />
                <span>Mobile Responsive</span>
              </div>
            </div>
            <p className="text-lg mb-8">📞 Get Your Free Consultation Today!</p>
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Web Development Team" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Build a Website Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Build a Website That Works for You</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At TTS, we craft visually appealing, high-performance websites designed to engage your audience and drive business growth. 
              Whether you need a professional business site, a robust e-commerce platform, or a customized solution, we've got you covered!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Code className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bespoke Web Design</h3>
              <p className="text-gray-600">Custom-tailored websites that perfectly represent your brand identity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ShoppingCart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-commerce & CMS Development</h3>
              <p className="text-gray-600">Powerful online stores and content management systems.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Search className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SEO & Performance Optimization</h3>
              <p className="text-gray-600">Boost your visibility and reach more potential customers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast & Secure Hosting</h3>
              <p className="text-gray-600">Reliable hosting solutions with top-notch security features.</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-800 mb-6">🎯 Let's Create Something Extraordinary!</p>
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center mx-auto">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose TTS Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose TTS?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <Palette className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customized for Your Brand</h3>
              <p className="text-gray-600">Every website is unique and tailored to your business needs.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Friendly & Mobile Responsive</h3>
              <p className="text-gray-600">Optimized for seamless browsing on all devices.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO-Optimized for Better Visibility</h3>
              <p className="text-gray-600">Higher search rankings and organic traffic.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Security & Speed</h3>
              <p className="text-gray-600">Reliable hosting with top-notch security.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <Headphones className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Support & Maintenance</h3>
              <p className="text-gray-600">Keeping your website updated and running smoothly.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround Time</h3>
              <p className="text-gray-600">Get your website up and running quickly without compromising quality.</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl font-semibold text-gray-800 mb-6">🌟 Ready to Elevate Your Online Presence?</p>
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center mx-auto">
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code />}
              title="Custom Website Development"
              description="Stunning, tailor-made websites that perfectly align with your brand identity and business goals."
            />
            
            <ServiceCard 
              icon={<ShoppingCart />}
              title="E-commerce Solutions"
              description="Build, manage, and grow your online store with our comprehensive e-commerce development services."
            />
            
            <ServiceCard 
              icon={<Code />}
              title="CMS Development"
              description="WordPress, Shopify, and more. We build flexible content management systems that are easy to maintain."
            />
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl font-semibold text-gray-800 mb-6">🔍 Explore Our Full-Service Offerings</p>
            <Link to="/services">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center mx-auto">
                See All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Work & Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in delivering world-class web solutions. Check out some of our latest projects:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Business Websites"
              description="Clean, professional, and engaging websites for businesses of all sizes."
              category="Business"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="E-commerce Platforms"
              description="Secure and scalable online stores with seamless checkout experiences."
              category="E-commerce"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Creative Portfolios"
              description="Showcasing unique artistic expressions through stunning portfolio websites."
              category="Creative"
            />
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl font-semibold text-gray-800 mb-6">📂 Want to See More?</p>
            <Link to="/portfolio">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center mx-auto">
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="TTS delivered exactly what we needed – a sleek and high-performing website. Our customer engagement has increased significantly!"
              author="Sarah Johnson"
              company="Bright Solutions Inc."
              rating={5}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            
            <TestimonialCard 
              quote="Highly professional team! Our website is now lightning-fast and SEO-friendly. We've seen a boost in leads."
              author="Michael Chen"
              company="Innovate Tech"
              rating={5}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl font-semibold text-gray-800 mb-6">📢 Join Our Happy Clients!</p>
            <Link to="/testimonials">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center mx-auto">
                Read More Reviews
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 Turn Your Ideas into a Powerful Online Presence</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our expert team at TTS is ready to design and develop the perfect website for your business. Let's create something impactful together!
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-3 text-yellow-300" />
              <span className="text-lg">Call Us: (555) 123-4567</span>
            </div>
            
            <div className="flex items-center">
              <Mail className="h-6 w-6 mr-3 text-yellow-300" />
              <span className="text-lg">Email: info@ttswebdesign.com</span>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-yellow-300" />
              <span className="text-lg">Visit: www.ttswebdesign.com</span>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 text-xl flex items-center mx-auto">
                Get Started Now!
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;