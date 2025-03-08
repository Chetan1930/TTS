import React from 'react';

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  image, 
  title, 
  description, 
  category 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center">
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;