import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookText, FileText, Newspaper, Download, Search } from 'lucide-react';

const FreeResources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'notes', name: 'Handwritten Notes' },
    { id: 'ca', name: 'Current Affairs' },
    { id: 'pyq', name: 'Previous Year Papers' },
  ];

  const resources = [
    { title: "RBI Grade B 2024 Phase 1 PYQ (Memory Based)", category: "pyq", type: "PDF", size: "2.4 MB", icon: FileText },
    { title: "January 2025 Current Affairs Compilation", category: "ca", type: "PDF", size: "5.1 MB", icon: Newspaper },
    { title: "Important Government Schemes 2025 (Updated)", category: "notes", type: "PDF", size: "3.8 MB", icon: BookText },
    { title: "Finance Management Formula Cheat Sheet", category: "notes", type: "PDF", size: "1.2 MB", icon: FileText },
    { title: "RBI Circulars Summary - Q4 2024", category: "ca", type: "PDF", size: "4.5 MB", icon: Newspaper },
    { title: "Descriptive English Vocab List", category: "notes", type: "PDF", size: "800 KB", icon: BookText },
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      {/* Header */}
      <div className="bg-brand-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Free Study Material</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Kickstart your preparation with our high-quality free resources. Download PDFs, notes, and PYQs instantly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sticky top-24">
            <h3 className="font-bold text-slate-900 mb-4 px-2">Categories</h3>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat.id 
                      ? 'bg-brand-50 text-brand-700' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredResources.map((res, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between hover:border-brand-300 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-brand-50 p-3 rounded-xl text-brand-600 group-hover:scale-110 transition-transform">
                    <res.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm line-clamp-1 mb-1">{res.title}</h4>
                    <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                      <span className="bg-slate-100 px-2 py-0.5 rounded">{res.type}</span>
                      <span>{res.size}</span>
                    </div>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-brand-600 p-2 hover:bg-brand-50 rounded-lg transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FreeResources;
