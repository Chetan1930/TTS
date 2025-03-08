import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Don't just take our word for it. See what our clients have to say about working with TTS.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud of the relationships we've built and the results we've delivered for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <TestimonialCard 
              quote="TTS delivered exactly what we needed – a sleek and high-performing website. Our customer engagement has increased significantly since the launch!"
              author="Sarah Johnson"
              company="Bright Solutions Inc."
              rating={5}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            
            <TestimonialCard 
              quote="Highly professional team! Our website is now lightning-fast and SEO-friendly. We've seen a 40% boost in leads since working with TTS."
              author="Michael Chen"
              company="Innovate Tech"
              rating={5}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The e-commerce platform TTS built for us has transformed our business. Sales have increased by 65% in just three months!"
              author="Emily Rodriguez"
              company="Urban Threads"
              rating={5}
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            
            <TestimonialCard 
              quote="Working with TTS was a pleasure from start to finish. They understood our vision and delivered a website that perfectly represents our brand."
              author="David Wilson"
              company="Nexus Innovations"
              rating={5}
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            
            <TestimonialCard 
              quote="The team at TTS went above and beyond to ensure our website was not only beautiful but also functional and user-friendly."
              author="Jennifer Lee"
              company="Wellness Center"
              rating={5}
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear directly from our clients about their experience working with TTS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 text-center p-8">
                  <p className="text-lg font-semibold">Video Testimonial</p>
                  <p>Client: Global Consulting Group</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Global Consulting Group</h3>
              <p className="text-gray-600 mb-4">
                "TTS helped us create a professional website that has significantly improved our online presence and lead generation."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">Robert Thompson</p>
                  <p className="text-gray-600 text-sm">CEO, Global Consulting Group</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 text-center p-8">
                  <p className="text-lg font-semibold">Video Testimonial</p>
                  <p>Client: Eco Alliance</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Eco Alliance</h3>
              <p className="text-gray-600 mb-4">
                "The website TTS created for our non-profit has helped us reach more supporters and increase donations by 45%."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">Lisa Martinez</p>
                  <p className="text-gray-600 text-sm">Director, Eco Alliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our web solutions have helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Client Success Story" 
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Gourmet Delivery: 200% Increase in Online Orders</h3>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Before working with TTS, our website was outdated and difficult to navigate. The new e-commerce platform they built for us has completely transformed our business. Online orders have increased by 200% in the first six months, and customer feedback has been overwhelmingly positive."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                      alt="Client" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">James Anderson</p>
                      <p className="text-gray-600 text-sm">Founder, Gourmet Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Client Success Story" 
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tech Academy: 75% Increase in Course Enrollments</h3>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "TTS created an educational platform that exceeded our expectations. The intuitive course management system and student dashboard have made a significant impact on our business. Course enrollments have increased by 75%, and student satisfaction scores have improved dramatically."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                      alt="Client" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Rebecca Kim</p>
                      <p className="text-gray-600 text-sm">Director, Tech Academy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Contact us today to discuss how we can help you achieve your digital goals and create a website that drives results.
            </p>
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 text-xl flex items-center mx-auto">
                Get Started
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;