import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  company, 
  rating, 
  image 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;