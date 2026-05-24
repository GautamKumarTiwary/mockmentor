import React from 'react';
import { BookOpen, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsAppIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const YoutubeIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.jpeg" alt="MockMentor Logo" className="h-10 object-contain" />
          </div>
          <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
            Your ultimate companion for RBI Grade B preparation. Get access to top-tier courses, descriptive writing evaluation, and expert mentorship.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.mockmentor.in" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-colors" title="Website"><Globe className="w-4 h-4"/></a>
            <a href="mailto:mockmentorofficial@gmail.com" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-colors" title="Email Us"><Mail className="w-4 h-4"/></a>
            <a href="https://wa.me/919431986819" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-500 hover:text-white transition-colors" title="WhatsApp Helpline"><WhatsAppIcon className="w-4 h-4"/></a>
            <a href="https://www.youtube.com/@MockMentor01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-colors" title="YouTube Channel"><YoutubeIcon className="w-4 h-4"/></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
            <li><Link to="/courses" className="hover:text-brand-400 transition-colors">All Courses</Link></li>
            <li><Link to="/free-resources" className="hover:text-brand-400 transition-colors">Free Resources</Link></li>
            <li><Link to="/toppers" className="hover:text-brand-400 transition-colors">Toppers & Results</Link></li>
            <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Legal & Info</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/terms" className="hover:text-brand-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/refund" className="hover:text-brand-400 transition-colors">Refund Policy</Link></li>
            <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
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
