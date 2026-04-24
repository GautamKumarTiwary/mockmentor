import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', hash: '#home' },
    { name: 'Courses', hash: '#courses' },
    { name: 'Descriptive Writing', hash: '#descriptive-writing' },
    { name: 'Free Resources', hash: '#free-resources' },
    { name: 'Toppers & Results', hash: '#toppers' }
  ];

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2">
                <div className="bg-brand-600 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">
                  Mock<span className="text-brand-600">Mentor</span>
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`/${link.hash}`}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="text-slate-600 hover:text-brand-600 font-medium text-sm transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`/${link.hash}`}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-600"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-3">
                <button 
                  onClick={() => { setIsOpen(false); setIsAuthModalOpen(true); }}
                  className="w-full text-center text-brand-600 border border-brand-200 bg-brand-50 py-2 rounded-lg font-medium"
                >
                  Login
                </button>
                <button 
                  onClick={() => { setIsOpen(false); setIsAuthModalOpen(true); }}
                  className="w-full text-center bg-brand-600 text-white py-2 rounded-lg font-medium shadow-md"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Navbar;
