import React from 'react';
import { Code, Palette, Video, Building } from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: "Open-Source Software",
      description: "Get funded for building software that benefits the community.",
      examples: ["Web applications", "Mobile apps", "Plugins and tools", "Libraries"],
      color: "bg-purple-100",
      border: "border-purple-200",
      iconBg: "bg-purple-600"
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-500" />,
      title: "Creative Arts",
      description: "Fund your next artistic endeavor, digital or physical.",
      examples: ["Digital art", "Music production", "Physical artwork", "Photography"],
      color: "bg-blue-100",
      border: "border-blue-200",
      iconBg: "bg-blue-500"
    },
    {
      icon: <Video className="h-8 w-8 text-green-500" />,
      title: "Content Creation",
      description: "Get the equipment and resources you need for content creation.",
      examples: ["Video production", "Podcasting", "Streaming setup", "Educational content"],
      color: "bg-green-100",
      border: "border-green-200",
      iconBg: "bg-green-500"
    },
    {
      icon: <Building className="h-8 w-8 text-orange-500" />,
      title: "Community Projects",
      description: "Collectively fund projects that serve a broader community.",
      examples: ["Local initiatives", "Online communities", "Educational programs", "Public goods"],
      color: "bg-orange-100",
      border: "border-orange-200",
      iconBg: "bg-orange-500"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Can Fund</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fund my work supports a wide range of projects. Here are some examples of what you can fund or get funded for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`rounded-xl ${useCase.color} ${useCase.border} overflow-hidden hover:shadow-md transition-shadow duration-300`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg text-white ${useCase.iconBg} mr-3`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{useCase.description}</p>
                <div className="bg-white/60 rounded-lg p-4">
                  <span className="text-sm font-medium text-gray-700">Examples:</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {useCase.examples.map((example, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Don't see your project type? No problem! If you can explain it, you can fund it.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
            <a href="https://fundmywork-ngy3.vercel.app/">
              Start Your Project
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;