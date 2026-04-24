import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const Toppers = () => {
  const toppers = [
    { name: "Priya Sharma", rank: "AIR 5", year: "2024", feedback: "Mock Mentor's descriptive evaluation was a game changer for me. The line-by-line feedback helped me increase my score by 15 marks.", img: "https://i.pravatar.cc/150?img=5" },
    { name: "Rahul Verma", rank: "AIR 12", year: "2024", feedback: "The Elite course provided everything I needed. The mock tests are exactly at the level of the actual RBI Grade B exam.", img: "https://i.pravatar.cc/150?img=11" },
    { name: "Neha Gupta", rank: "AIR 21", year: "2024", feedback: "I am extremely grateful to the mentors here. The interview guidance program boosted my confidence immensely.", img: "https://i.pravatar.cc/150?img=9" },
    { name: "Amit Kumar", rank: "AIR 34", year: "2023", feedback: "Best platform for ESI and FM preparation. Crisp notes, to-the-point lectures, and amazing mentorship.", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Sneha Reddy", rank: "AIR 45", year: "2023", feedback: "I cleared RBI in my first attempt. Mock Mentor's structured approach saved me a lot of time.", img: "https://i.pravatar.cc/150?img=20" },
    { name: "Vikram Singh", rank: "AIR 56", year: "2023", feedback: "The super elite course is worth every penny. Personal mentorship kept me accountable throughout my journey.", img: "https://i.pravatar.cc/150?img=33" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Hall of Fame</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Meet our shining stars who cracked RBI Grade B. Read their journey and feedback.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 group-hover:text-brand-50 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={topper.img} alt={topper.name} className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{topper.name}</h3>
                  <div className="flex gap-2 items-center mt-1">
                    <span className="bg-brand-100 text-brand-700 px-2 py-0.5 rounded text-xs font-bold">
                      {topper.rank}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">Batch {topper.year}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed relative z-10 mb-6">
                "{topper.feedback}"
              </p>

              <button className="text-brand-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Read Full Strategy <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toppers;
