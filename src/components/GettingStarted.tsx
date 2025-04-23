import React from 'react';
import { Wallet, ClipboardList, ThumbsUp } from 'lucide-react';

const GettingStarted: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Getting Started</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            New to decentralized funding? Follow these simple steps to get started with Fund my work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Creating a Wallet */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-purple-100 rounded-full text-purple-600 mb-4">
                <Wallet size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Create a Wallet</h3>
            </div>
            
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-purple-100 text-purple-700 h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                <span>Download Phantom or Solflare from your app store</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-purple-100 text-purple-700 h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                <span>Create a new wallet and save your recovery phrase securely</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-purple-100 text-purple-700 h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">3</span>
                <span>Add some SOL from an exchange or existing wallet</span>
              </li>
            </ol>
            
            <div className="mt-6 p-3 bg-purple-50 rounded-lg text-sm text-purple-700">
              <strong>Tip:</strong> Never share your recovery phrase with anyone, not even Fund my work!
            </div>
          </div>
          
          {/* Creating an Effective Proposal */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
                <ClipboardList size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Create an Effective Proposal</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 text-blue-500 mr-2">•</div>
                <span>Be clear about your goals and what you're building</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-blue-500 mr-2">•</div>
                <span>Include examples of your previous work</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-blue-500 mr-2">•</div>
                <span>Explain how the funds will be used</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-blue-500 mr-2">•</div>
                <span>Consider offering different funding tiers or rewards</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-blue-500 mr-2">•</div>
                <span>Use media (images, videos) to showcase your vision</span>
              </li>
            </ul>
            
            <div className="mt-6 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
              <strong>Tip:</strong> Update your proposal regularly to keep backers engaged.
            </div>
          </div>
          
          {/* Funding Projects */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-green-100 rounded-full text-green-600 mb-4">
                <ThumbsUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fund Projects</h3>
            </div>
            
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-green-100 text-green-700 h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                <span>Browse projects or search for topics you're interested in</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-green-100 text-green-700 h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                <span>Connect your wallet by clicking the "Connect Wallet" button</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-green-100 text-green-700 h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">3</span>
                <span>Select the amount you wish to contribute and confirm the transaction</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-green-100 text-green-700 h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold mr-2">4</span>
                <span>Follow the project for updates on progress</span>
              </li>
            </ol>
            
            <div className="mt-6 p-3 bg-green-50 rounded-lg text-sm text-green-700">
              <strong>Tip:</strong> Even small contributions help creators reach their goals!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;