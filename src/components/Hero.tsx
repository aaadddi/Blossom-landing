import React from 'react';
import { Wallet, PlusCircle, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Blossom: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Community-Powered</span> Project Funding
            </h1>
            <p className="text-xl text-gray-600">
              Zero fees. Direct funding. Built on Solana.
            </p>
            
            {/* Launch Metrics */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Launch metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-purple-700">0</p>
                  <p className="text-sm text-gray-600">Active Proposals (Be the first!)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-700">$0</p>
                  <p className="text-sm text-gray-600">Funded so far</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-700">0%</p>
                  <p className="text-sm text-gray-600">Platform fees</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-3xl p-8 shadow-xl">
              <div className="relative">
                {/* Interactive Funding Flow Visualization */}
                <div className="aspect-square relative bg-white rounded-2xl p-6 shadow-inner overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 p-4">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="bg-gray-100/40 rounded-lg"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Central Project Hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl rotate-45 animate-pulse-slow"></div>
                      <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                        <Wallet className="w-10 h-10 text-white" />
                      </div>
                      {/* Ripple Effect */}
                      <div className="absolute inset-0 -m-2 border-2 border-purple-400/30 rounded-2xl rotate-45 animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Animated Connection Lines */}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                      style={{
                        top: `${25 + i * 15}%`,
                        left: `${20 + i * 10}%`,
                        transform: `rotate(${45 + i * 30}deg)`,
                        animation: `pulse 2s ${i * 0.5}s infinite`
                      }}
                    ></div>
                  ))}
                  
                  {/* Community Wallets */}
                  <div className="absolute left-8 top-12 bg-white p-3 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                    <Wallet className="text-purple-500 w-6 h-6" />
                  </div>
                  <div className="absolute right-12 top-8 bg-white p-3 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                    <Wallet className="text-blue-500 w-6 h-6" />
                  </div>
                  <div className="absolute left-10 bottom-16 bg-white p-3 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                    <Wallet className="text-green-500 w-6 h-6" />
                  </div>
                  <div className="absolute right-8 bottom-12 bg-white p-3 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                    <Wallet className="text-orange-500 w-6 h-6" />
                  </div>
                  
                  {/* Floating SOL Tokens */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold animate-float"
                      style={{
                        top: `${30 + i * 20}%`,
                        left: `${40 + i * 15}%`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    >
                      SOL
                    </div>
                  ))}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -left-4 -top-4 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;