import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ArrowRight, CheckCircle2, Star, BookOpen, Award, Download, FileText, ChevronRight, PenTool, Zap, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [selectedTopper, setSelectedTopper] = useState(null);

  const toppersList = [
    { 
      name: "Priya Sharma", 
      rank: "AIR 5", 
      text: "The personalized mentorship kept me focused when I was completely lost in Phase 2 prep.",
      fullStrategy: "I started my preparation 8 months before the exam. My primary focus was on Descriptive Writing because I realized early on that objective scores can only take you so far. Mock Mentor's line-by-line evaluation was a game changer. I used their FM cheat sheet every morning for 15 minutes. For the interview, I attended 3 mock panels which completely removed my hesitation.",
      img: "https://i.pravatar.cc/150?img=5" 
    },
    { 
      name: "Rahul Verma", 
      rank: "AIR 12", 
      text: "Their mock tests are notoriously difficult, but they make the actual RBI exam feel like a breeze.",
      fullStrategy: "I was a working professional, so time was my biggest constraint. The Elite Course's crisp PDFs saved me hundreds of hours. I strictly solved Mock Mentor's mock tests on weekends. I was initially scoring around 40% but their detailed solutions helped me identify my weak spots in Quant. For ESI, I just stuck to their monthly current affairs compilations.",
      img: "https://i.pravatar.cc/150?img=11" 
    },
    { 
      name: "Neha Gupta", 
      rank: "AIR 21", 
      text: "Line-by-line descriptive evaluation was the sole reason my score jumped by 20 marks.",
      fullStrategy: "My objective scores were always good, but I struggled with structuring my answers in Phase 2. The mentors taught me the 'Introduction-Body-Conclusion-Way Forward' approach. I submitted 20+ answers for evaluation and the feedback was brutal but extremely necessary. I highly recommend the Super Elite course for anyone serious about clearing in their first attempt.",
      img: "https://i.pravatar.cc/150?img=9" 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white scroll-mt-16">
        <div className="absolute inset-0 bg-dot-pattern opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-100 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 z-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide uppercase mb-8 shadow-soft-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Admissions Open for 2025
              </div>
              
              <h1 className="text-6xl md:text-[5rem] font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
                Clear RBI Grade B<br />
                <span className="text-gradient">With Certainty.</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                The most rigorous, topper-recommended platform. We don't just provide material—we force you to write, evaluate your answers, and prepare you for the interview.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button onClick={() => {
                  document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
                }} className="group flex items-center justify-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-brand-glow hover:bg-brand-700 hover:scale-[1.02] transition-all">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-3 bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-brand-600 hover:text-brand-600 transition-all">
                  <PlayCircle className="w-5 h-5" />
                  Watch Strategy
                </button>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-[3px] border-white shadow-sm object-cover" src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Student" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm font-bold text-slate-800">Joined by 10,000+ aspirants</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              {/* Complex Floating Elements Video Card */}
              <div className="relative z-10 w-full max-w-lg mx-auto aspect-[4/5] md:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-[2.5rem] rotate-3 scale-105 opacity-20 blur-xl"></div>
                <div className="absolute inset-0 bg-white rounded-[2rem] shadow-soft-xl border border-white/50 overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Study Group" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl cursor-pointer group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-10 h-10 text-white fill-white/20" />
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-soft-xl border border-slate-100 flex items-center gap-3 z-20"
                >
                  <div className="bg-green-100 p-2 rounded-xl text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Success Rate</p>
                    <p className="text-lg font-black text-slate-900">4x Higher</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-8 bg-slate-900 p-5 rounded-2xl shadow-soft-xl border border-slate-700 flex items-center gap-4 z-20"
                >
                  <div className="bg-brand-500 p-3 rounded-xl text-white"><PenTool className="w-6 h-6" /></div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Evaluations Done</p>
                    <p className="text-xl font-black text-white">50,000+</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. COURSES SECTION */}
      <section id="courses" className="py-24 bg-slate-50 relative border-t border-slate-200/60 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Ecosystem of Excellence.</h2>
              <p className="text-lg text-slate-600 font-medium">Stop hunting for notes. We provide a single, unified platform covering Phase I, Phase II, and Interview preparation.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Super Elite - Large Bento Span */}
            <div className="lg:col-span-7 bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden group shadow-soft-xl border border-slate-800 flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="inline-flex self-start bg-brand-500/20 border border-brand-400/30 text-brand-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Premium Package
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black mb-4">Super Elite Course</h3>
              <p className="text-slate-400 text-lg mb-8 max-w-md">The ultimate preparation ecosystem. Phase I + II coverage, personalized descriptive evaluation, and 1-on-1 interview mentorship.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg">
                {["400+ Hrs Video", "Descriptive Checking", "Interview Guidance", "Printed Materials"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" /> {feat}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-end justify-between border-t border-slate-800 pt-8">
                <div>
                  <p className="text-slate-500 font-medium mb-1 line-through">₹24,999</p>
                  <p className="text-4xl font-black text-white">₹14,999</p>
                </div>
                <button onClick={() => navigate('/courses/super-elite')} className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2">
                  Enroll Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Elite Course - Small Bento Span */}
            <div className="lg:col-span-5 bg-white rounded-[2rem] p-8 md:p-10 shadow-soft-xl border border-slate-200 flex flex-col group hover:border-brand-300 transition-colors">
              <div className="inline-flex self-start bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Core Foundation
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-3">Elite Course</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Comprehensive coverage of Phase I and Phase II with recorded lectures, detailed PDFs, and Mock Tests.</p>
              
              <ul className="space-y-4 mb-10 text-slate-700 font-medium">
                <li className="flex gap-3"><BookOpen className="w-5 h-5 text-brand-600" /> Complete Phase 1 & 2 Video Course</li>
                <li className="flex gap-3"><FileText className="w-5 h-5 text-brand-600" /> Detailed PDF Notes</li>
                <li className="flex gap-3"><Zap className="w-5 h-5 text-brand-600" /> 25+ Full-Length Mock Tests</li>
              </ul>

              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <p className="text-2xl font-black text-slate-900">₹7,999</p>
                </div>
                <button onClick={() => navigate('/courses/elite-course')} className="text-brand-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DESCRIPTIVE WRITING SECTION */}
      <section id="descriptive-writing" className="py-24 bg-white relative border-t border-slate-200/60 overflow-hidden scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Side (Mock UI / Paper) */}
            <div className="relative order-2 lg:order-1 h-[500px]">
              <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
              
              {/* Base Paper */}
              <motion.div 
                whileInView={{ rotate: -2, scale: 1.02 }}
                viewport={{ once: true }}
                className="absolute top-10 left-10 right-10 bottom-10 bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-sm border border-slate-200 p-8 flex flex-col font-serif"
              >
                <div className="border-b-2 border-brand-600 pb-4 mb-6 flex justify-between items-end">
                  <h4 className="text-xl font-bold text-slate-800">Q. Impact of CBDC on Indian Banking</h4>
                  <span className="text-red-600 font-bold text-2xl font-sans">14<span className="text-base text-slate-400">/20</span></span>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                  <p>Central Bank Digital Currency (CBDC) is a digital form of fiat currency. <span className="bg-yellow-100 text-yellow-900 px-1">While UPI is a payment interface, CBDC is money itself.</span></p>
                  <p>The introduction of E-Rupee will have profound implications...</p>
                </div>
                
                {/* Floating Feedback Tag */}
                <div className="absolute top-32 -right-12 bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-slate-700 w-64 font-sans transform rotate-3">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    <p className="text-xs font-medium">Good distinction between UPI and CBDC. Add points on 'anonymity feature' for value addition.</p>
                  </div>
                  <p className="text-[10px] text-slate-400 text-right">- Evaluated by Diksha (AIR 14)</p>
                </div>
              </motion.div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                <PenTool className="w-8 h-8 text-brand-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">The Descriptive <br/>Writing Edge.</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                Phase II is make-or-break. Our flagship evaluation system gives you line-by-line feedback from previous year toppers. We don't just score you; we tell you exactly how to write like an AIR 1.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                  "Detailed feedback on Intro, Body & Conclusion.",
                  "Vocabulary and structural corrections.",
                  "Value addition points for every specific answer.",
                  "Access to evaluated sheets of Selected Candidates."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-brand-100 p-1 rounded-full mt-1 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    </div>
                    <span className="text-slate-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => navigate('/courses/descriptive-writing')} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-600 transition-colors shadow-lg">
                Explore Descriptive Hub
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FREE RESOURCES SECTION */}
      <section id="free-resources" className="py-24 bg-slate-50 relative border-t border-slate-200/60 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Open Access Library.</h2>
              <p className="text-lg text-slate-600 font-medium">High yield material, absolutely free. Start your prep right now.</p>
            </div>
            <button onClick={() => navigate('/free-resources')} className="bg-white border border-slate-200 text-slate-800 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-sm">
              View All Resources
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="lg:col-span-2 bg-brand-600 rounded-[2rem] p-8 text-white relative overflow-hidden group hover:shadow-brand-glow transition-all cursor-pointer">
              <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:scale-110 transition-transform duration-500">
                <FileText className="w-64 h-64" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Must Read</span>
                  <h3 className="text-3xl font-black mb-2">RBI Circulars 2024 Summary</h3>
                  <p className="text-brand-100 font-medium">Complete compilation of crucial circulars from Jan to Dec.</p>
                </div>
                <div className="mt-12 flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
                  Download PDF <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-soft-xl hover:border-brand-300 transition-colors cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">FM Formula Cheat Sheet</h4>
                <p className="text-sm text-slate-500 font-medium">All finance formulas in 5 pages.</p>
              </div>
              <Download className="w-6 h-6 text-slate-300 mt-8 group-hover:text-brand-600 transition-colors" />
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-soft-xl hover:border-brand-300 transition-colors cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">PYQ Memory Based 2023</h4>
                <p className="text-sm text-slate-500 font-medium">Phase 1 Questions & Detailed Sol.</p>
              </div>
              <Download className="w-6 h-6 text-slate-300 mt-8 group-hover:text-brand-600 transition-colors" />
            </div>

          </div>
        </div>
      </section>

      {/* 5. TOPPERS & RESULTS SECTION */}
      <section id="toppers" className="py-24 bg-slate-900 text-white border-y border-slate-800 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Our Hall of Fame</h2>
            <p className="text-slate-400 text-lg">Consistent results, year after year. Meet the Mock Mentor alumni.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppersList.map((topper, i) => (
              <div key={i} className={`bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors ${i === 1 ? 'md:translate-y-8' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <img src={topper.img} alt={topper.name} className="w-16 h-16 rounded-2xl object-cover" />
                  <div>
                    <h4 className="font-bold text-lg">{topper.name}</h4>
                    <span className="inline-block bg-brand-500 text-white px-2 py-0.5 rounded text-xs font-bold mt-1">{topper.rank}</span>
                  </div>
                </div>
                <p className="text-slate-300 font-medium leading-relaxed italic mb-6">"{topper.text}"</p>
                
                <button 
                  onClick={() => setSelectedTopper(topper)}
                  className="text-brand-400 font-bold flex items-center gap-2 hover:text-white transition-colors"
                >
                  Read Full Strategy <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGY MODAL */}
      <AnimatePresence>
        {selectedTopper && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTopper(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={selectedTopper.img} alt={selectedTopper.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{selectedTopper.name}</h3>
                    <span className="text-brand-600 font-bold text-sm bg-brand-50 px-2 py-1 rounded-md">{selectedTopper.rank}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTopper(null)}
                  className="p-2 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 overflow-y-auto">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-brand-600" />
                  Preparation Strategy
                </h4>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
                    {selectedTopper.fullStrategy}
                  </p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h4 className="text-md font-bold text-slate-900 mb-4">Courses Enrolled</h4>
                  <div className="flex gap-3">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-slate-500" /> Elite Course
                    </span>
                    <span className="bg-brand-50 text-brand-700 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
                      <PenTool className="w-4 h-4 text-brand-500" /> Descriptive Evaluation
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Home;
