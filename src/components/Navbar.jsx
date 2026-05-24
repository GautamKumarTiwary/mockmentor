import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-1">
              <img src="/logo.jpeg" alt="MockMentor Logo" className="h-8 md:h-10 object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/toppers" className="text-gray-700 bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
              Toppers & Results
            </Link>
            
            <Link to="/courses/descriptive-writing" className="text-gray-700 bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
              Descriptive Writing
            </Link>

            <a 
              href="https://www.mockmentor.in/learn/account/signin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 border border-blue-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors inline-block text-center"
            >
              SIGN IN
            </a>
            
            <a 
              href="https://www.mockmentor.in/learn/account/signup" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#488890] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#3a6d73] transition-colors shadow-sm inline-block text-center"
            >
              SIGN UP
            </a>
            
            <a 
              href="https://www.youtube.com/@MockMentor01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition-colors shadow-sm inline-block text-center"
            >
              YouTube
            </a>
            
            <a href="tel:9431986819" className="bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm flex items-center justify-center">
              Helpline No - 9431986819
            </a>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <a 
              href="https://www.mockmentor.in/learn/account/signin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 border border-blue-600 px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-blue-50 transition-colors"
            >
              SIGN IN
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sub-Navigation Pill Bar */}
      <div className="lg:hidden bg-white border-t border-gray-100 overflow-x-auto hide-scrollbar py-2.5 px-4 flex gap-2 items-center">
        <Link 
          to="/toppers" 
          className="inline-flex items-center bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
        >
          Toppers & Results
        </Link>
        <Link 
          to="/courses/descriptive-writing" 
          className="inline-flex items-center bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
        >
          Descriptive Answers & Notes
        </Link>
        <a 
          href="https://www.mockmentor.in/learn" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-100 active:bg-blue-200 transition-colors shrink-0"
        >
          Explore Courses
        </a>
        <a 
          href="https://wa.me/919431986819?text=Hello%20Mockmentor" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-emerald-100 active:bg-emerald-200 transition-colors shrink-0"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="w-3.5 h-3.5 mr-1"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp Chat
        </a>
        <a 
          href="https://www.youtube.com/@MockMentor01" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center bg-red-50 border border-red-200 text-red-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-red-100 active:bg-red-200 transition-colors shrink-0"
        >
          YouTube
        </a>
        <a 
          href="https://www.mockmentor.in/learn/account/signup" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center bg-[#eef7f8] border border-[#a2cfd5] text-[#2c5b61] px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-[#ddf0f2] active:bg-[#c9e7ea] transition-colors shrink-0"
        >
          SIGN UP
        </a>
        <a 
          href="tel:9431986819" 
          className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-100 active:bg-blue-200 transition-colors shrink-0"
        >
          Call Helpline
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <Link to="/toppers" className="text-center text-gray-700 bg-gray-50 border border-gray-200 py-2 rounded-md text-sm font-medium active:bg-gray-100 transition-colors">Toppers & Results</Link>
            <Link to="/courses/descriptive-writing" className="text-center text-gray-700 bg-gray-50 border border-gray-200 py-2 rounded-md text-sm font-medium active:bg-gray-100 transition-colors">Descriptive Writing</Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a 
              href="https://www.mockmentor.in/learn/account/signin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 border border-blue-600 py-2 rounded-md text-sm font-medium text-center block"
            >
              SIGN IN
            </a>
            <a 
              href="https://www.mockmentor.in/learn/account/signup" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#488890] text-white py-2 rounded-md text-sm font-medium shadow-sm hover:bg-[#3a6d73] text-center block"
            >
              SIGN UP
            </a>
          </div>
          <a 
            href="https://www.youtube.com/@MockMentor01" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium shadow-sm text-center block"
          >
            YouTube
          </a>
          <a href="tel:9431986819" className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium shadow-sm flex items-center justify-center">Helpline No - 9431986819</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
