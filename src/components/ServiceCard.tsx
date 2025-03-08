import React, { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="text-blue-600 mb-4">
        {React.cloneElement(icon as React.ReactElement, { className: 'h-12 w-12' })}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      
      <p className="text-gray-600 flex-grow">{description}</p>
      
      <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;