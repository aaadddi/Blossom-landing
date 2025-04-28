import React from 'react';
import { Wallet, Twitter, Github, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center text-xl font-bold mb-4">
              <Wallet className="mr-2" size={24} />
              <span>Blossom</span>
            </div>
            <p className="text-gray-400 mb-4">
              A zero-fee, decentralized crowdfunding platform built on Solana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How it works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Create a proposal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wallet setup</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Join our community</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates about new features and projects.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button 
                type="submit" 
                className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Blossom. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;