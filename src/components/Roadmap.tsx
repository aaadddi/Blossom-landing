import React from 'react';
import { Vote, ListChecks, Globe } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      icon: <Vote className="h-8 w-8 text-purple-600" />,
      title: "Community Governance",
      description: "Introducing DAO-based governance where platform users can vote on new features and improvements.",
      timeframe: "Q3 2025",
      status: "Planned",
      color: "border-purple-200 bg-purple-50"
    },
    {
      icon: <ListChecks className="h-8 w-8 text-blue-500" />,
      title: "Milestones & Accountability",
      description: "Project milestones with escrow funding releases based on community verification of progress.",
      timeframe: "Q4 2025",
      status: "In Research",
      color: "border-blue-200 bg-blue-50"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "Ecosystem Integration",
      description: "Seamless integration with other Solana projects and broader blockchain ecosystem tools.",
      timeframe: "Q1 2026",
      status: "Early Planning",
      color: "border-green-200 bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Road Ahead</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're just getting started. Here's what we're building next to make Fund my work even better.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          {roadmapItems.map((item, index) => (
            <div key={index} className="mb-12 relative">
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                <div className={`border rounded-xl p-6 shadow-sm ${item.color}`}>
                  <div className="absolute hidden md:block top-6 w-8 h-8 rounded-full bg-white border-4 border-gray-200 
                    ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} transform z-10"></div>
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-white mr-4 shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">{item.timeframe}</span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-semibold text-gray-700 border border-gray-200">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">Have a feature you'd like to see? Let us know!</p>
          <button className="border-2 border-purple-600 text-purple-700 px-6 py-3 rounded-md hover:bg-purple-50 transition-colors font-semibold">
            Suggest a Feature
          </button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;