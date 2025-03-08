import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ShoppingCart, 
  Search, 
  RefreshCw, 
  Headphones, 
  Shield, 
  Database, 
  Smartphone, 
  Zap, 
  BarChart, 
  ArrowRight 
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive web design and development solutions tailored to your business needs.
              From custom websites to e-commerce platforms, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of web design and development services to help your business thrive online.
              Each service is customized to meet your specific requirements and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code />}
              title="Custom Website Development"
              description="Stunning, tailor-made websites that perfectly align with your brand identity and business goals. We focus on creating unique designs that stand out from the competition."
            />
            
            <ServiceCard 
              icon={<ShoppingCart />}
              title="E-commerce Solutions"
              description="Build, manage, and grow your online store with our comprehensive e-commerce development services. We create secure, user-friendly shopping experiences that drive sales."
            />
            
            <ServiceCard 
              icon={<Database />}
              title="CMS Development"
              description="WordPress, Shopify, and more. We build flexible content management systems that are easy to maintain and update, giving you full control over your website content."
            />
            
            <ServiceCard 
              icon={<RefreshCw />}
              title="Website Redesign & Optimization"
              description="Give your site a fresh, modern look while improving its performance and user experience. We analyze your current site and implement strategic improvements."
            />
            
            <ServiceCard 
              icon={<Search />}
              title="SEO & Digital Marketing"
              description="Improve visibility and attract more customers with our comprehensive SEO and digital marketing services. We help you rank higher in search results and reach your target audience."
            />
            
            <ServiceCard 
              icon={<Headphones />}
              title="Maintenance & Support"
              description="Ongoing technical support and regular updates to keep your website secure and performing at its best. We provide reliable support to ensure your site runs smoothly."
            />
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core offerings, we provide specialized services to address specific needs and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Smartphone />}
              title="Mobile App Development"
              description="Create powerful, user-friendly mobile applications that extend your web presence to iOS and Android platforms. We build responsive, feature-rich apps that engage users."
            />
            
            <ServiceCard 
              icon={<Zap />}
              title="Performance Optimization"
              description="Speed up your website loading times and improve overall performance. We optimize code, images, and server configurations to deliver lightning-fast experiences."
            />
            
            <ServiceCard 
              icon={<Shield />}
              title="Security Audits & Implementation"
              description="Protect your website and customer data with comprehensive security measures. We identify vulnerabilities and implement robust security protocols to keep your site safe."
            />
            
            <ServiceCard 
              icon={<BarChart />}
              title="Analytics & Reporting"
              description="Gain valuable insights into your website's performance and user behavior. We set up tracking tools and provide regular reports to help you make data-driven decisions."
            />
            
            <ServiceCard 
              icon={<Code />}
              title="API Development & Integration"
              description="Connect your website with third-party services and systems through custom API development. We create seamless integrations that enhance your site's functionality."
            />
            
            <ServiceCard 
              icon={<Database />}
              title="Database Design & Optimization"
              description="Create efficient, scalable database structures that support your website's functionality. We optimize queries and ensure data integrity for reliable performance."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured, collaborative approach to ensure your project is completed efficiently and meets all requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-800">Discovery & Planning</h3>
              <p className="text-gray-600">We start by understanding your business, goals, and requirements to create a detailed project plan.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-800">Design & Prototyping</h3>
              <p className="text-gray-600">We create wireframes and design mockups for your approval before moving to development.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-800">Development & Testing</h3>
              <p className="text-gray-600">Our developers build your website with clean code and thorough testing at every stage.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-800">Launch & Support</h3>
              <p className="text-gray-600">We deploy your website and provide ongoing maintenance and support to ensure continued success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Contact us today to discuss your requirements and get a free quote. Our team is ready to help you create a stunning website that drives results.
            </p>
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 text-xl flex items-center mx-auto">
                Get a Free Quote
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;