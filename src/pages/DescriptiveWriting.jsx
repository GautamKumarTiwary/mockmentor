import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, User, Award, FileQuestion, ArrowRight } from 'lucide-react';

const DescriptiveWriting = () => {
  const [activeTab, setActiveTab] = useState('toppers');

  const toppers = [
    { name: "Diksha", rank: "AIR 14", score: "78/100", img: "https://i.pravatar.cc/150?img=47" },
    { name: "Saurav", rank: "AIR 25", score: "75/100", img: "https://i.pravatar.cc/150?img=11" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-600/20 rounded-2xl mb-6">
            <FileText className="w-10 h-10 text-brand-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Descriptive Writing Hub</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to master descriptive answer writing for RBI Grade B. From topper copies to live evaluations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
          {[
            { id: 'toppers', label: 'Topper Answers', icon: Award },
            { id: 'evaluation', label: 'Evaluation System', icon: CheckCircle2 },
            { id: 'practice', label: 'Practice Material', icon: FileQuestion }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-brand-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">
          
          {activeTab === 'toppers' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Answers by Selected Candidates</h2>
                <p className="text-slate-600">Download and analyze how RBI Grade B Toppers structure their answers.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {toppers.map((topper, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all">
                    <img src={topper.img} alt={topper.name} className="w-24 h-24 rounded-2xl object-cover shadow-sm" />
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-bold text-slate-900">{topper.name}</h3>
                      <div className="flex items-center justify-center sm:justify-start gap-3 mt-2 mb-4">
                        <span className="bg-brand-100 text-brand-700 px-2.5 py-0.5 rounded font-bold text-sm">{topper.rank}</span>
                        <span className="text-slate-500 text-sm font-medium">Score: {topper.score}</span>
                      </div>
                      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 hover:text-brand-600 hover:border-brand-200 px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'evaluation' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Unique Evaluation Methodology</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    We don't just give marks. We provide detailed, line-by-line feedback on your structure, content, vocabulary, and relevance to the prompt.
                  </p>
                  <ul className="space-y-4">
                    {["Detailed feedback on Intro, Body & Conclusion", "Grammar and Vocabulary corrections", "Value addition points provided for every answer", "Score comparison with Toppers"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <div className="bg-brand-100 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Sample Evaluated Copy</h3>
                  <div className="aspect-[3/4] bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center flex-col gap-4">
                    <FileText className="w-12 h-12 text-slate-300" />
                    <button className="bg-brand-600 text-white px-5 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-brand-700">
                      <Download className="w-4 h-4" />
                      View Sample Format
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'practice' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Question Banks & Model Answers</h2>
                <p className="text-slate-600">Access our curated list of probable questions for the upcoming exam.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "FM Expected Questions 2025",
                  "ESI Current Affairs Essay Topics",
                  "Previous Year Questions (Solved)",
                  "Model Essays for English Descriptive"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 group-hover:bg-brand-100 p-2 rounded-lg transition-colors">
                        <FileQuestion className="w-5 h-5 text-slate-600 group-hover:text-brand-600" />
                      </div>
                      <span className="font-medium text-slate-800">{item}</span>
                    </div>
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DescriptiveWriting;
