import React, { useState, useEffect } from 'react';
import { Wallet, Menu, X, ArrowRight, PlusCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center text-purple-700 font-bold text-xl">
              <Wallet className="mr-2" size={24} />
              <span>Fund my work</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-700 transition-colors">How it works</a>
            <a href="#benefits" className="text-gray-700 hover:text-purple-700 transition-colors">Benefits</a>
            <a href="#use-cases" className="text-gray-700 hover:text-purple-700 transition-colors">Use Cases</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-700 transition-colors">FAQ</a>
            {/* <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center">
              <Wallet size={18} className="mr-2" />
              Connect Wallet
            </button> */}

            <a 
                href="https://fundmywork-ngy3.vercel.app/" 
              >
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center group">
                <PlusCircle size={20} className="mr-2" />
                Get Started
                <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
              </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-purple-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a 
                href="#benefits" 
                className="text-gray-700 hover:text-purple-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#use-cases" 
                className="text-gray-700 hover:text-purple-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Use Cases
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-purple-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center">
                <Wallet size={18} className="mr-2" />
                Connect Wallet
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;