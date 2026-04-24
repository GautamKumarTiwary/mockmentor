import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle, CheckCircle2, ArrowRight, BookOpen, Clock, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const courseData = {
  "elite-course": {
    title: "Elite Course (Phase I + II)",
    desc: "The most comprehensive course for RBI Grade B preparation. Covers everything from scratch.",
    price: "₹7,999",
    features: [
      "400+ Hours of Video Lectures",
      "Detailed PDF Notes for ESI & FM",
      "15 Full-length Mock Tests for Phase 1",
      "10 Full-length Mock Tests for Phase 2",
      "Current Affairs Magazine (Monthly)",
      "Doubt Clearing Sessions"
    ],
    curriculum: [
      { title: "Phase 1: General Awareness", duration: "45 Hours" },
      { title: "Phase 1: Quant & Reasoning", duration: "60 Hours" },
      { title: "Phase 2: Economic & Social Issues", duration: "55 Hours" },
      { title: "Phase 2: Finance & Management", duration: "70 Hours" },
    ]
  },
  "super-elite": {
    title: "Super Elite Course",
    desc: "Ultimate preparation with personal mentorship and descriptive evaluation.",
    price: "₹14,999",
    features: [
      "Everything in Elite Course",
      "Line-by-line Descriptive Evaluation",
      "1-on-1 Mentorship Sessions",
      "Interview Guidance Program",
      "Priority Doubt Resolution",
      "Printed Study Material Delivery"
    ],
    curriculum: [
      { title: "Phase 1 & Phase 2 Core Syllabus", duration: "230 Hours" },
      { title: "Descriptive Answer Writing Strategy", duration: "20 Hours" },
      { title: "Mock Interviews & Personality Dev.", duration: "15 Hours" },
      { title: "Topper Interaction Sessions", duration: "10 Hours" },
    ]
  }
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Course not found</h2>
          <Link to="/courses" className="text-brand-600 hover:underline">Go back to courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-brand-500/20 border border-brand-400/30 text-brand-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Online Batch 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{course.title}</h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              {course.desc}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-brand-400" /> 6 Months Access</div>
              <div className="flex items-center gap-2"><Users className="w-5 h-5 text-brand-400" /> Limited Seats</div>
              <div className="flex items-center gap-2"><Award className="w-5 h-5 text-brand-400" /> Certificate</div>
            </div>
          </div>
          
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
              <div className="text-center mb-6">
                <p className="text-slate-500 text-sm font-medium mb-1">One-time payment</p>
                <div className="text-4xl font-extrabold text-slate-900">{course.price}</div>
              </div>
              <button className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-brand-600/30 transition-all transform hover:-translate-y-1 mb-4 flex items-center justify-center gap-2">
                Enroll Now <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-slate-500 font-medium">100% secure checkout via Razorpay</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What you'll learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-200 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm group-hover:text-brand-600 transition-colors">
                      <PlayCircle className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-800">{item.title}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-500 bg-white px-3 py-1 rounded-full shadow-sm">{item.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
            <h3 className="font-bold text-slate-900 mb-2">Have questions?</h3>
            <p className="text-sm text-slate-600 mb-4">Our academic counselors are here to help you choose the right path.</p>
            <button className="w-full bg-white text-brand-700 border border-brand-200 py-2.5 rounded-lg font-semibold hover:bg-brand-100 transition-colors">
              Request Callback
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetail;
