import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Clock, 
  Zap, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TTS</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're a team of passionate web designers and developers dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, TTS began with a simple mission: to help businesses succeed online through exceptional web design and development. What started as a small team of passionate designers has grown into a full-service digital agency serving clients across various industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that great websites are more than just beautiful designs—they're powerful business tools that drive growth and deliver results. This philosophy guides everything we do, from our design process to our client relationships.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have helped hundreds of businesses transform their online presence and achieve their digital goals. Our team continues to grow, but our commitment to quality, innovation, and client satisfaction remains unchanged.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="TTS Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At TTS, we're guided by a clear mission and a strong set of values that define who we are and how we work.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with innovative web solutions that drive growth, enhance brand visibility, and deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600">
                We strive to be more than just service providers—we aim to be trusted partners in our clients' digital success, offering strategic guidance and technical expertise at every step.
              </p>
            </div>
            
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Heart className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Excellence</h4>
                    <p className="text-gray-600">We're committed to delivering the highest quality in everything we do.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Innovation</h4>
                    <p className="text-gray-600">We embrace new technologies and creative approaches to solve complex problems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Integrity</h4>
                    <p className="text-gray-600">We operate with honesty, transparency, and ethical business practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Client Focus</h4>
                    <p className="text-gray-600">We prioritize our clients' needs and goals in everything we do.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our talented team of designers, developers, and digital strategists work together to create exceptional web experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">David Mitchell</h3>
                <p className="text-blue-600 mb-4">Founder & Creative Director</p>
                <p className="text-gray-600">
                  With over 15 years of experience in web design, David leads our creative vision and strategy.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">Lead Developer</p>
                <p className="text-gray-600">
                  Sarah specializes in front-end development and creating seamless user experiences.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Michael Chen</h3>
                <p className="text-blue-600 mb-4">UX/UI Designer</p>
                <p className="text-gray-600">
                  Michael brings creativity and user-centered design principles to every project.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Emily Rodriguez</h3>
                <p className="text-blue-600 mb-4">Digital Marketing Specialist</p>
                <p className="text-gray-600">
                  Emily helps clients maximize their online presence through strategic marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose TTS?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional value and results for every client we work with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Award-Winning Design</h3>
              <p className="text-gray-600">
                Our designs have been recognized for their creativity, innovation, and effectiveness.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Experienced Team</h3>
              <p className="text-gray-600">
                Our team brings years of expertise across various industries and technologies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Timely Delivery</h3>
              <p className="text-gray-600">
                We respect deadlines and ensure your project is completed on time, every time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Performance-Driven</h3>
              <p className="text-gray-600">
                We focus on creating websites that not only look great but also perform exceptionally.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Results-Oriented</h3>
              <p className="text-gray-600">
                We measure success by the results we deliver for our clients' businesses.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Client-Focused</h3>
              <p className="text-gray-600">
                We build lasting relationships based on trust, communication, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Let's discuss how we can help you achieve your digital goals and create a website that drives results.
            </p>
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 text-xl flex items-center mx-auto">
                Get in Touch
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;