import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our collection of successful projects and see how we've helped businesses transform their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">All Projects</button>
            <button className="bg-white text-gray-700 hover:bg-blue-100 px-6 py-2 rounded-full transition-colors duration-300">Business</button>
            <button className="bg-white text-gray-700 hover:bg-blue-100 px-6 py-2 rounded-full transition-colors duration-300">E-commerce</button>
            <button className="bg-white text-gray-700 hover:bg-blue-100 px-6 py-2 rounded-full transition-colors duration-300">Creative</button>
            <button className="bg-white text-gray-700 hover:bg-blue-100 px-6 py-2 rounded-full transition-colors duration-300">Non-profit</button>
            <button className="bg-white text-gray-700 hover:bg-blue-100 px-6 py-2 rounded-full transition-colors duration-300">Education</button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Global Consulting Group"
              description="A professional website for a business consulting firm with custom appointment scheduling."
              category="Business"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Urban Threads"
              description="A modern e-commerce platform for a fashion retailer with advanced filtering and payment options."
              category="E-commerce"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Studio Visage"
              description="A stunning portfolio website for a photography studio showcasing their creative work."
              category="Creative"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Eco Alliance"
              description="A comprehensive website for an environmental non-profit with donation integration."
              category="Non-profit"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Gourmet Delivery"
              description="A food delivery service with real-time order tracking and customer reviews."
              category="E-commerce"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Tech Academy"
              description="An educational platform with course management and student progress tracking."
              category="Education"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Nexus Innovations"
              description="A corporate website for a tech company with interactive product demonstrations."
              category="Business"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Wellness Center"
              description="A health and wellness center website with online booking and membership management."
              category="Business"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Literary Society"
              description="A digital platform for a literary organization with event calendar and member resources."
              category="Non-profit"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Join our growing list of satisfied clients and let us help you build a website that drives results.
            </p>
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 text-xl flex items-center mx-auto">
                Start Your Project
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;