import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ChevronDown, CheckCircle, MessageCircle, CheckCircle2, FileText, Target, ArrowRight, X } from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const courses = [
    {
      title: "RBI Grade B 2026 Super-Elite Course",
      validity: "Valid Till Dec 31, 2026",
      price: "7,500",
      oldPrice: "10,000",
      discount: "25% OFF",
      img: "/super%20elite.png",
      url: "https://www.mockmentor.in/learn/RBI-Grade-B-2026-Super-elite",
    },
    {
      title: "RBI Grade B 2026 Elite Course",
      validity: "Valid Till Dec 31, 2026",
      price: "3,500",
      oldPrice: "5,000",
      discount: "30% OFF",
      img: "/elite.jpeg",
      url: "https://www.mockmentor.in/learn/RBI-Grade-B-2026-Full-Package",
    },
    {
      title: "RBI Grade B Descriptive Writing programme",
      validity: "365 Days Validity",
      price: "5,000",
      oldPrice: "6,000",
      discount: "17% OFF",
      img: "/descriptive.jpeg",
      url: "https://www.mockmentor.in/learn/Descriptive-writing",
    },
    {
      title: "Fortnight GA & Current Affairs MCQ Package",
      validity: "Valid Till Dec 31, 2026",
      price: "1,999",
      oldPrice: "2,500",
      discount: "20% OFF",
      img: "/fortnight.jpeg",
      url: "https://www.mockmentor.in/learn/Fortnight-MCQs",
    },
  ];

  const officers = [
    {
      name: "Kumari Deeksha",
      rank: "Selected as RBI Grade B - Rank 2",
      prog: "(RBI course + Interview Program)",
      text: "Hello Team MockMentor, Discovering MockMentor has been one of the best decisions in my RBI preparation journey. Your fortnightly MCQs, magazines, Phase 2 objective MCQ package, and descriptive content were exceptionally accurate and highly relevant. The precise and well-curated content made my RBI preparation much easier.",
      fullText: `2025 was my fourth attempt at the RBI examination, and by God’s grace, I secured AIR-2 this year. I started following Mock Mentor in 2024, and in 2025, I enrolled in their courses available at the time.\n\nOne of the biggest strengths of Mock Mentor was the quality of their content, the magazines were extremely well-curated, crisp, authentic and highly exam-focused. As a working aspirant with limited preparation time, the concise and relevant material helped me prepare comprehensively in a very efficient manner. The return on investment was truly exceptional.\n\nThe fortnightly MCQs played an important role in helping me revise consistently and stay aligned with the exam requirements. I particularly found the Phase 2 MCQs to be highly underrated, as they helped me build a holistic understanding of the syllabus. In fact, I scored 43 marks in Management, and Mock Mentor’s content played a significant role in that achievement.\n\nI also extensively used their descriptive preparation resources, which proved immensely helpful. In Finance, Management, and ESI descriptive papers, I scored 35+ marks. Overall, the content remained highly relevant, concise, and exam-oriented throughout my preparation journey. For any serious RBI aspirant, especially working professionals, Mock Mentor can be a very valuable companion in the preparation process.`,
      img: "/deeksha_portrait_1779098675776.jpeg"
    },
    {
      name: "Hari Jagan",
      rank: "Selected as RBI Grade B - Rank 53 (Highest in Phase 2)",
      prog: "(RBI course + Interview Program)",
      text: "MockMentor played an important role in this journey. The exam-focused Telegram content, weekly revision capsules, high-quality Phase 2 MCQs, and Interview Guidance Programme helped me stay focused, revise effectively, and prepare with confidence. The personalized support and curated resources made a real difference in my preparation.",
      fullText: `I am selected in the RBI Grade B 2025 examination, and Mockmentor played a crucial role in this journey.\n\nMy Detailed Feedback about Mockmentor course and telegram channel for RBI Grade B exam 2025 :\n\nProgramme I used from it : Phase 2 and Interview\n\nMockmentor Materials in Telegram channel :\nHow about you read only the most important points of everything relevant to RBI from none other than its original source. Thatz what this platform does. I found this very unique and unmatched.\n\nThey highlight everything which is important from exam point of view from its original source.\n\nI read only highlighted portion from their posts except newspaper. Business Standard I read everything to grasp what is being said with full context (helped me to Tackle corporate banking question in Interview)\n\nI read and took note of  Every post they shared which includes PIB, Business standard newspapers, CIRCULARS of RBI & SEBI , SCHEMES etc\n\nI've gained a lot of confidence through revision by their "Weekly revision capsules".\n\nItz MCQ for phase 2 was best in the market especially for CA. I didn't do any Descriptive practice from there.\n\nMockmentor Shared list of Reports important for Phase 2 : Filtered the clutter for me.\n\nMockmentor Interview Guidance Programme : Gold\n\nTheir Interview guidance programme was Top Notch. Despite me not giving any mock interview there, Their\n\nDetailed questionnaire about each aspect of my profile was a goldmine for me and the list of things to cover for Interview for RBI such as Departmental questions based on my selection, working and functions PDF highlights were really good.\n\nTo be frank, I would have never known importance of department related questions without Mockmentor.\n\nAlso I was highly benefited from their private interview telegram Channel from my fellow Mates\n\nMockmentor support : Their personalized support system played a crucial role. Individual queries were addressed promptly, helping resolve critical doubts during preparation.\n\nI also found that Mockmentor materials have strong spillover benefits, helping in preparation for other exams as well.\n\nI am immensely grateful to the Mockmentor Telegram channel and Rahul sir for helping me ace this exam.\n\nI am truly delighted and will always remain thankful.\n\nBy : Hari Jegan Prathap S`,
      img: "/hari_jegan_portrait_1779098790015.jpeg"
    },
    {
      name: "Atithi Kumar",
      rank: "Selected as RBI Grade B - Rank 38 (First Attempt)",
      prog: "(Interview Program)",
      text: "RBI Grade B 2025 was my first attempt, and Team MockMentor played a very important role in making the entire journey smooth and well-guided. The Interview Guidance Programme gave me confidence, clarity, and the right direction throughout the preparation process.",
      fullText: `2025 was my first attempt at the RBI examination, and I enrolled in the Interview Guidance Program by Mock Mentor. Initially, I was quite insecure and had very little clarity regarding what to prepare and what to study for the interview.\n\nHowever, with the continuous support and guidance of Team Mock Mentor, the entire process became much more structured and manageable. They provided significant help in preparing my biodata in a cohesive and effective manner, which gave me much-needed confidence. The team also guided me towards relevant certification courses that played an important role in strengthening my interview preparation.\n\nWith their mentorship and support, I was able to score 57 Mark's in the interview. I am truly grateful to Team Mock Mentor for being a valuable partner throughout my interview journey.`,
      img: "/atithi_portrait_1779098738039.jpeg"
    }
  ];

  const faqs = [
    "What Mock Mentor offers?",
    "Why only Mock Mentor?",
    "What would be covered in quizzes?",
    "What are the sources to be followed in order to excel in actual exam and the mock test?",
    "What is the level of questions in the mock test?",
    "What is the frequency of mock tests?"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pt-16 md:pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#f2fff7] py-16 text-center px-4 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4 tracking-tight">
          Welcome to Mock Mentor
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-2 font-medium">
          Where true aspirants meet true mentors
        </p>
        <p className="text-sm md:text-base text-gray-500 mb-8">
          A Mock Test platform trusted by toppers for its transparency, authenticity, and integrity.
        </p>
        <button className="bg-[#4d868e] text-white px-8 py-3 rounded text-lg font-bold hover:bg-[#3d6f76] transition-colors shadow-md">
          Explore Our Courses
        </button>
      </section>

      {/* 2. DIAGRAM SECTION */}
      <section className="py-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-16">
          Test your current affairs knowledge every fortnight!
        </h2>
        
        <div className="max-w-4xl mx-auto relative h-[400px] flex items-center justify-center">
          {/* Logo in background top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-80">
            <img src="/logo.jpeg" alt="MockMentor Logo" className="h-8 md:h-10 object-contain" />
          </div>

          {/* Central Box */}
          <div className="z-10 bg-[#2d4a52] text-white font-bold py-3 px-6 rounded relative uppercase tracking-wider text-sm md:text-base">
            What's Included ?
          </div>

          {/* Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Top Left Line */}
            <path d="M 250 150 Q 250 200, 420 200" fill="none" stroke="#2d4a52" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#arrow)" />
            {/* Top Right Line */}
            <path d="M 650 150 Q 650 200, 480 200" fill="none" stroke="#2d4a52" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#arrow)" />
            {/* Bottom Left Line */}
            <path d="M 250 250 Q 250 200, 420 200" fill="none" stroke="#2d4a52" strokeWidth="2" strokeDasharray="6,6" />
            {/* Bottom Right Line */}
            <path d="M 650 250 Q 650 200, 480 200" fill="none" stroke="#2d4a52" strokeWidth="2" strokeDasharray="6,6" />
            
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#2d4a52" />
              </marker>
            </defs>
          </svg>

          {/* Nodes */}
          <div className="absolute top-[80px] left-[15%] md:left-[20%]">
            <div className="bg-[#568d99] text-white font-bold py-3 px-8 rounded-full text-sm shadow-md">
              PIB NEWS
            </div>
          </div>
          <div className="absolute top-[80px] right-[15%] md:right-[20%]">
            <div className="bg-[#568d99] text-white font-bold py-3 px-8 rounded-full text-sm shadow-md">
              RBI + SEBI CIRCULARS
            </div>
          </div>
          <div className="absolute bottom-[80px] left-[15%] md:left-[20%]">
            <div className="bg-[#568d99] text-white font-bold py-3 px-8 rounded-full text-sm shadow-md">
              MISCELLANEOUS GA
            </div>
          </div>
          <div className="absolute bottom-[80px] right-[15%] md:right-[20%]">
            <div className="bg-[#568d99] text-white font-bold py-3 px-8 rounded-full text-sm shadow-md">
              SCHEMES + REPORTS
            </div>
          </div>
        </div>
      </section>

      {/* 3. YOUTUBE SECTION */}
      <section className="py-16 bg-[#f8fbff] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#4285F4]">
            Cover RBI Circulars <span className="text-[#EA4335]">from YouTube</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/djDwxTe-YjI" 
                title="Mock Mentor Video 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/uLV3sBEvcVU" 
                title="Mock Mentor Video 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR COURSES SECTION */}
      <section className="py-20 px-4 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col">
                <div className="h-48 bg-gray-100 relative">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-emerald-600 font-bold tracking-widest uppercase bg-white/80 px-2 rounded">
                    Mock Mentor
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight">{course.title}</h3>
                  <div className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                    <span className="w-3 h-3 inline-block rounded-full border border-gray-400"></span>
                    {course.validity}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-bold text-xl text-gray-900">₹ {course.price}</span>
                      <span className="text-sm text-gray-400 line-through">₹ {course.oldPrice}</span>
                      <span className="text-xs font-bold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded">{course.discount}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <a href={course.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors text-sm text-center">
                        BUY NOW
                      </a>
                      <Link to={`/courses/${idx}`} className="text-red-500 hover:text-red-600 font-bold text-sm underline underline-offset-2">
                        details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Demo Course Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-100 relative">
                <img src="/demo.jpeg" alt="Demo Course" className="w-full h-full object-cover" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-emerald-600 font-bold tracking-widest uppercase bg-white/80 px-2 rounded">
                  Mock Mentor
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-800 text-lg mb-2">Demo Course</h3>
                <div className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                  <span className="w-3 h-3 inline-block rounded-full border border-gray-400"></span>
                  365 Days Validity
                </div>
                <div className="mt-auto pt-4">
                  <a href="https://www.mockmentor.in/learn/Demo-Course" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors text-sm text-center">
                    ENROLL FOR FREE
                  </a>
                </div>
              </div>
            </div>
            
            {/* Empty placeholders to match grid from screenshot */}
            <div className="bg-gray-100 rounded-lg border border-gray-200 p-5 flex flex-col gap-4">
               <div className="h-32 bg-gray-200 rounded"></div>
               <div className="h-6 bg-gray-200 rounded w-3/4"></div>
               <div className="h-10 bg-gray-200 rounded mt-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4B. COURSE COMPARISON */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-16 tracking-tight">Compare Our Flagship Programs</h2>
          
          <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto items-center lg:items-stretch">
            
            {/* Elite Course Image Card */}
            <div className="flex-1 flex flex-col group w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-200 bg-white transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] relative flex-grow">
                <img src="/elite_compare.png" alt="Elite Course Comparison" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
              <div className="mt-6 flex justify-center">
                <a href="https://www.mockmentor.in/learn/RBI-Grade-B-2026-Full-Package" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden w-full max-w-sm rounded-xl p-[1px] group shadow-md hover:shadow-lg transition-shadow">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <div className="relative bg-white group-hover:bg-transparent transition-colors duration-300 rounded-xl px-8 py-4 flex items-center justify-center gap-2">
                    <span className="font-extrabold text-blue-900 group-hover:text-white transition-colors duration-300 text-lg">ENROLL NOW - ELITE</span>
                    <ArrowRight className="w-5 h-5 text-blue-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
              </div>
            </div>

            {/* Super Elite Course Image Card */}
            <div className="flex-1 flex flex-col group w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-amber-200 bg-white transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(251,_191,_36,_0.15)] relative flex-grow">
                <img src="/super_elite_compare.png" alt="Super Elite Course Comparison" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                
                {/* Premium Badge */}
                <div className="absolute -top-1 -right-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-400 blur-[8px] opacity-80 rounded-full"></div>
                    <div className="bg-gradient-to-br from-amber-300 to-yellow-600 text-white font-black text-[10px] uppercase tracking-widest py-1.5 px-4 rounded-bl-xl shadow-lg relative border border-yellow-300/50">
                      Most Recommended
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <a href="https://www.mockmentor.in/learn/RBI-Grade-B-2026-Super-elite" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden w-full max-w-sm rounded-xl p-[1px] group shadow-md hover:shadow-lg transition-shadow">
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 opacity-100 transition-opacity duration-300"></span>
                  <div className="relative bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 transition-colors duration-300 rounded-xl px-8 py-4 flex items-center justify-center gap-2 shadow-inner border border-yellow-400/50">
                    <span className="font-extrabold text-white text-lg drop-shadow-sm">ENROLL NOW - SUPER ELITE</span>
                    <ArrowRight className="w-5 h-5 text-white drop-shadow-sm" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR OFFICERS / TESTIMONIALS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Officers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officers.map((officer, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <img src={officer.img} alt={officer.name} className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{officer.name}</h4>
                    <p className="text-xs font-bold text-gray-800">{officer.rank}</p>
                    <p className="text-[10px] text-gray-500">{officer.prog}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-4 flex-grow leading-relaxed">
                  {officer.text}
                </p>
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedFeedback(officer)}
                    className="text-blue-600 font-bold text-xs underline decoration-blue-600 underline-offset-2 hover:text-blue-800 focus:outline-none"
                  >
                    detailed feedback
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/toppers" className="inline-block bg-blue-600 text-white font-bold py-3.5 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View All Toppers & Result Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE MOCK MENTOR */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2d3748] mb-8">Why Choose Mock Mentor?</h2>
          <ul className="text-left space-y-4 text-gray-600 font-medium mb-10 max-w-3xl mx-auto text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-gray-800 mt-2 shrink-0"></span>
              Our platform is built on a thorough analysis of previous year's questions to create highly exam relevant mock tests.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-gray-800 mt-2 shrink-0"></span>
              MCQs on a fortnightly basis that covers all the important news for every 2 weeks.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-gray-800 mt-2 shrink-0"></span>
              Crafted by experts with in-depth subject knowledge and experience to ensure high-quality, well-researched and exam-oriented content.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-gray-800 mt-2 shrink-0"></span>
              One stop solution for Regulatory, banking and insurance exams.
            </li>
          </ul>
          <a href="https://t.me/Mockmentor" target="_blank" rel="noopener noreferrer" className="bg-[#0088cc] hover:bg-[#0077b3] text-white px-8 py-3 rounded-md font-bold transition-colors inline-flex items-center gap-2 shadow-md">
            JOIN US ON TELEGRAM
          </a>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a202c] mb-10">Frequently Asked Questions by You</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-md overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800 text-sm md:text-base">{faq}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
                    This is a placeholder answer for the frequently asked question.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Modal */}
      {selectedFeedback && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedFeedback(null)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-4">
                <img src={selectedFeedback.img} alt={selectedFeedback.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{selectedFeedback.name}</h3>
                  <p className="text-sm font-semibold text-emerald-600">{selectedFeedback.rank}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedFeedback(null)}
                className="text-gray-400 hover:text-gray-700 bg-white hover:bg-gray-100 p-2 rounded-full transition-colors border border-gray-200 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
                {(selectedFeedback.fullText || selectedFeedback.text).split('\n').map((para, i) => (
                  para.trim() ? <p key={i}>{para}</p> : <div key={i} className="h-1"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
