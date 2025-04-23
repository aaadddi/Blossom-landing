import React from 'react';
import { Rocket, Trophy, Star } from 'lucide-react';

const EarlyAdopters: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <div className="flex items-center mb-6">
                  <Rocket className="h-8 w-8 mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold">Be Among the First</h2>
                </div>
                <p className="text-lg mb-6 text-purple-100">
                  Early adopters get special benefits and maximum visibility. Launch your project now and be featured on our homepage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Trophy className="h-6 w-6 mr-3 text-yellow-300 flex-shrink-0" />
                    <p className="text-purple-100">Featured placement for early proposals in our "Pioneers" section</p>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-6 w-6 mr-3 text-yellow-300 flex-shrink-0" />
                    <p className="text-purple-100">Early adopter badge that increases visibility and trust</p>
                  </div>
                  <div className="flex items-start">
                    <Rocket className="h-6 w-6 mr-3 text-yellow-300 flex-shrink-0" />
                    <p className="text-purple-100">Priority support and access to future premium features</p>
                  </div>
                </div>
                <button className="mt-8 bg-white text-purple-700 px-6 py-3 rounded-md hover:bg-purple-50 transition-colors font-semibold">
                  Launch Your Project
                </button>
              </div>
              
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Pioneers Showcase</h3>
                <div className="space-y-4">
                  {/* Empty placeholder cards for future projects */}
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 hover:bg-white/30 transition-colors cursor-pointer group">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mr-4">
                          <Star className="h-6 w-6 text-yellow-300 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex-1">
                          <div className="h-4 w-3/4 bg-white/20 rounded-md mb-2"></div>
                          <div className="h-3 w-1/2 bg-white/20 rounded-md"></div>
                        </div>
                        <div className="bg-purple-500/50 rounded-md px-3 py-1 text-white text-xs font-semibold">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <span className="text-purple-100 text-sm">Your project could be featured here!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopters;