import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Search, ShoppingCart, Zap, BarChart } from 'lucide-react';

const BlogPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and strategies in web design, development, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">All Posts</button>
            <button className="bg-white text-gray-700 hover:bg-blue-100 px-6 py-2 rounded-full transition-colors duration-300">Web Design</button>
            <button className="bg-white text-gray-700 hover:bg-blue-100 px-6 py-2 rounded-full transition-colors duration-300">SEO</button>
            <button className="bg-white text-gray-700 hover:bg-blue-100 px-6 py-2 rounded-full transition-colors duration-300">E-commerce</button>
            <button className="bg-white text-gray-700 hover:bg-blue-100 px-6 py-2 rounded-full transition-colors duration-300">Digital Marketing</button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Design Post */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Web Design Trends"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-600">Web Design</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">The Future of Web Design: Trends for 2025</h3>
                <p className="text-gray-600 mb-4">Explore the upcoming trends that will shape the future of web design and user experience.</p>
                <Link to="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* SEO Post */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="SEO Strategies"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Search className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-600">SEO</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Essential SEO Strategies for 2024</h3>
                <p className="text-gray-600 mb-4">Learn the most effective SEO techniques to improve your website's visibility and rankings.</p>
                <Link to="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* E-commerce Post */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="E-commerce Growth"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-600">E-commerce</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Top Features Every E-commerce Website Needs</h3>
                <p className="text-gray-600 mb-4">Discover the essential features that make an e-commerce website successful.</p>
                <Link to="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Performance Post */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <span className="text-sm text-blue-600 mb-2 block">Performance</span>
                <h3 className="text-xl font-semibold mb-2">How to Optimize Your Website Speed</h3>
                <p className="text-gray-600 mb-4">Learn the best practices for improving your website's loading speed and performance.</p>
                <Link to="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Analytics Post */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <span className="text-sm text-blue-600 mb-2 block">Analytics</span>
                <h3 className="text-xl font-semibold mb-2">Understanding Web Analytics</h3>
                <p className="text-gray-600 mb-4">A comprehensive guide to using analytics for improving your website's performance.</p>
                <Link to="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Our Newsletter</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Subscribe to receive the latest insights, tips, and trends in web design and digital marketing.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-3 rounded-l-full focus:outline-none text-gray-900"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-r-full font-semibold transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;