import React from 'react';
import { BookOpen, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-brand-600 p-1.5 rounded-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Mock<span className="text-brand-500">Mentor</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
            Your ultimate companion for RBI Grade B preparation. Get access to top-tier courses, descriptive writing evaluation, and expert mentorship.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-colors"><Globe className="w-4 h-4"/></a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-colors"><Mail className="w-4 h-4"/></a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-colors"><Phone className="w-4 h-4"/></a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-colors"><MapPin className="w-4 h-4"/></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
            <li><Link to="/courses" className="hover:text-brand-400 transition-colors">All Courses</Link></li>
            <li><Link to="/free-resources" className="hover:text-brand-400 transition-colors">Free Resources</Link></li>
            <li><Link to="/toppers" className="hover:text-brand-400 transition-colors">Toppers & Results</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-brand-400 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Mock Mentor. All rights reserved.</p>
        <p className="mt-2 md:mt-0 text-slate-600">Built with excellence for RBI Aspirants</p>
      </div>
    </footer>
  );
};

export default Footer;
