import React from 'react';
import { Percent, Zap, Eye, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Percent className="h-8 w-8 text-purple-600" />,
      title: "Zero platform fees",
      description: "100% of funds go directly to creators - we don't take a cut of your hard-earned money.",
      color: "from-purple-50 to-purple-100",
      highlight: "purple"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Instant transfers",
      description: "No waiting for payment processing - funds arrive in your wallet immediately.",
      color: "from-blue-50 to-blue-100",
      highlight: "blue" 
    },
    {
      icon: <Eye className="h-8 w-8 text-green-500" />,
      title: "Full transparency",
      description: "All funding is visible on-chain, giving backers confidence in the platform.",
      color: "from-green-50 to-green-100",
      highlight: "green"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Direct connection",
      description: "No middlemen between creators and supporters - build real relationships.",
      color: "from-orange-50 to-orange-100",
      highlight: "orange"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Blossom</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform offers unique advantages that make crowdfunding easier, more transparent, and more direct than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl bg-gradient-to-br ${benefit.color} border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-white rounded-lg shadow-sm">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 text-${benefit.highlight}-700`}>{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-8 text-white text-center max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Built on Solana</h3>
          <p className="mb-0">
            Leveraging Solana's lightning-fast blockchain for minimal transaction fees and maximum efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;