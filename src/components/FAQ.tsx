import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "How does Fund my work make money if there are no fees?",
      answer: "We're focusing on building a strong community and platform first. In the future, we may introduce optional premium features, but the core functionality will always remain fee-free. Our goal is to create value for the ecosystem rather than extracting fees from creators."
    },
    {
      question: "Do I need technical knowledge to use the platform?",
      answer: "Very little! If you can use a smartphone app, you can use Fund my work. We've designed the platform to be beginner-friendly, with step-by-step guides for creating a wallet and setting up a project. Our support team is also available to help with any questions."
    },
    {
      question: "How do I know projects are legitimate?",
      answer: "While we cannot guarantee every project, we encourage backers to review the creator's profile, previous work, and social presence. The platform includes verification badges for creators who have completed identity verification, and all funding transactions are transparent on the blockchain."
    },
    {
      question: "What types of projects can be funded?",
      answer: "Almost anything legal and ethical! From open-source software to art projects, content creation to community initiatives. If you can explain your project and why it deserves funding, you can create a proposal."
    },
    {
      question: "Can I fund a project anonymously?",
      answer: "Yes! While your wallet address will be visible on the blockchain, you don't need to provide any personal information to fund a project. You can choose to remain pseudonymous or reveal your identity."
    },
    {
      question: "What happens if a project doesn't deliver?",
      answer: "Currently, all funding is direct and non-refundable, similar to a donation or grant. In the future, we plan to implement milestone-based funding with escrow, where funds are released as creators hit verified milestones."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, reach out to our team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                className="w-full text-left p-6 focus:outline-none flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                {activeIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-purple-600" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                }
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">Still have questions?</p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;