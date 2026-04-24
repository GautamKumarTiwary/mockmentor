import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Star, ArrowRight, CheckCircle2, Shield } from 'lucide-react';

const courses = [
  {
    id: "descriptive-writing",
    title: "Descriptive Writing Course",
    desc: "Master the art of answer writing. Includes line-by-line evaluation by RBI Toppers, model answers, and live strategy sessions.",
    price: "₹3,999",
    originalPrice: "₹5,999",
    rating: "4.9",
    reviews: "840",
    features: ["Line-by-line Evaluation", "Model Answers", "Live Strategy Sessions"],
    tag: "Best Seller",
    path: "/courses/descriptive-writing"
  },
  {
    id: "elite-course",
    title: "Elite Course (Phase I + II)",
    desc: "Comprehensive coverage of Phase 1 and Phase 2. Includes recorded video lectures, detailed notes, and full-length mock tests.",
    price: "₹7,999",
    originalPrice: "₹12,999",
    rating: "4.8",
    reviews: "1.2k",
    features: ["Video Lectures", "Detailed PDF Notes", "Full-length Mocks"],
    tag: "Most Popular",
    path: "/courses/elite-course"
  },
  {
    id: "super-elite",
    title: "Super Elite Course",
    desc: "The ultimate preparation package. Elite Course + Descriptive Evaluation + Interview Guidance Program + 1-on-1 Mentorship.",
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: "5.0",
    reviews: "450",
    features: ["Everything in Elite", "Descriptive Evaluation", "1-on-1 Mentorship"],
    tag: "Premium",
    path: "/courses/super-elite"
  }
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      {/* Header */}
      <div className="bg-brand-900 text-white py-16 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Premium Courses</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Choose the right path for your RBI Grade B journey. Expertly crafted material, evaluated by toppers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col relative group"
            >
              {course.tag && (
                <div className="absolute top-4 right-4 bg-brand-100 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-200 z-10">
                  {course.tag}
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-brand-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{course.title}</h3>
                
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-slate-700">{course.rating}</span>
                  <span className="text-slate-500">({course.reviews} reviews)</span>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {course.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {course.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto border-t border-slate-100 bg-slate-50/50">
                <div className="flex items-end gap-2 mb-6 pt-6">
                  <span className="text-3xl font-extrabold text-slate-900">{course.price}</span>
                  <span className="text-lg text-slate-400 line-through mb-1">{course.originalPrice}</span>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => navigate(course.path)}
                    className="w-full text-center bg-white border-2 border-brand-600 text-brand-600 py-2.5 rounded-xl font-bold hover:bg-brand-50 transition-colors"
                  >
                    View Details
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white py-3 rounded-xl font-bold shadow-md transition-colors">
                    Purchase Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-brand-50 border border-brand-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Shield className="w-8 h-8 text-brand-600" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">Secure Checkout</h4>
              <p className="text-sm text-slate-600">All payments are 100% secure and encrypted.</p>
            </div>
          </div>
          <div className="flex gap-4">
            {/* Placeholder for payment logos */}
            <div className="h-8 w-12 bg-white rounded shadow-sm border border-slate-200"></div>
            <div className="h-8 w-12 bg-white rounded shadow-sm border border-slate-200"></div>
            <div className="h-8 w-12 bg-white rounded shadow-sm border border-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
