import React from 'react';
import { ClipboardEdit, Share2, Coins, Wallet } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Blossom makes it easy to get your projects funded directly by the community in just three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">1</div>
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-purple-100 rounded-full text-purple-600 mb-4">
                <ClipboardEdit size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Create a proposal</h3>
              <p className="text-gray-600">Describe your project, set your funding goal, and add details about what you're building.</p>
            </div>
            
            {/* Mockup of proposal form */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="space-y-2">
                <div className="h-6 bg-gray-100 rounded-md w-1/2"></div>
                <div className="h-4 bg-gray-100 rounded-md w-3/4"></div>
                <div className="h-20 bg-gray-100 rounded-md w-full"></div>
                <div className="h-8 bg-purple-100 rounded-md w-1/3"></div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">2</div>
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Share2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Share with community</h3>
              <p className="text-gray-600">Share your proposal with your network and the wider Solana community.</p>
            </div>
            
            {/* Social sharing visualization */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex justify-center space-x-3">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs">T</div>
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">D</div>
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">I</div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">W</div>
              </div>
              <div className="mt-3 h-10 flex items-center justify-center border border-gray-200 rounded-md text-xs text-gray-500 px-2 overflow-hidden">
                https://fundmywork.sol/your-amazing-project
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">3</div>
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-green-100 rounded-full text-green-600 mb-4">
                <Coins size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Receive funding directly</h3>
              <p className="text-gray-600">Funds go directly to your wallet with no platform fees or delays.</p>
            </div>
            
            {/* SOL tokens flowing visualization */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex flex-col items-center">
                <div className="w-16 h-8 bg-purple-600 rounded-t-lg flex items-center justify-center text-white text-xs font-semibold">SOL</div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-purple-600"></div>
                <div className="my-2 h-10 flex flex-col items-center justify-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mb-1 animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full mb-1 animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-200"></div>
                </div>
                <div className="mt-1 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white">
                  <Wallet size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;