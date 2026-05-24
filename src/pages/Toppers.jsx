import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

const Toppers = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [activeTab, setActiveTab] = useState('performance');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultReview = "I am incredibly grateful to MockMentor for their invaluable guidance. The structured study materials, comprehensive mock tests, and personalized interview guidance were exactly what I needed to clear the RBI Grade B exam. Highly recommended!";

  const deekshaReview = `2025 was my fourth attempt at the RBI examination, and by God’s grace, I secured AIR-2 this year. I started following Mock Mentor in 2024, and in 2025, I enrolled in their courses available at the time.\n\nOne of the biggest strengths of Mock Mentor was the quality of their content, the magazines were extremely well-curated, crisp, authentic and highly exam-focused. As a working aspirant with limited preparation time, the concise and relevant material helped me prepare comprehensively in a very efficient manner. The return on investment was truly exceptional.\n\nThe fortnightly MCQs played an important role in helping me revise consistently and stay aligned with the exam requirements. I particularly found the Phase 2 MCQs to be highly underrated, as they helped me build a holistic understanding of the syllabus. In fact, I scored 43 marks in Management, and Mock Mentor’s content played a significant role in that achievement.\n\nI also extensively used their descriptive preparation resources, which proved immensely helpful. In Finance, Management, and ESI descriptive papers, I scored 35+ marks. Overall, the content remained highly relevant, concise, and exam-oriented throughout my preparation journey. For any serious RBI aspirant, especially working professionals, Mock Mentor can be a very valuable companion in the preparation process.`;  const atithiReview = `2025 was my first attempt at the RBI examination, and I enrolled in the Interview Guidance Program by Mock Mentor. Initially, I was quite insecure and had very little clarity regarding what to prepare and what to study for the interview.\n\nHowever, with the continuous support and guidance of Team Mock Mentor, the entire process became much more structured and manageable. They provided significant help in preparing my biodata in a cohesive and effective manner, which gave me much-needed confidence. The team also guided me towards relevant certification courses that played an important role in strengthening my interview preparation.\n\nWith their mentorship and support, I was able to score 57 Mark's in the interview. I am truly grateful to Team Mock Mentor for being a valuable partner throughout my interview journey.\n\nPhase 1 phase 2 ka kaam to smjh gya tha mai but aap na hote to shayd 2-3 bar khena pdd jta interview ka khel mujhe iski demand smjhne me aur ise kaise tackle Krna h ye clear krne me\n\nThankyou sir 🙃😁☺️❤️`;
  
  const hariJaganReview = `I am selected in the RBI Grade B 2025 examination, and Mockmentor played a crucial role in this journey.\n\nMy Detailed Feedback about Mockmentor course and telegram channel for RBI Grade B exam 2025 :\n\nProgramme I used from it : Phase 2 and Interview\n\nMockmentor Materials in Telegram channel :\nHow about you read only the most important points of everything relevant to RBI from none other than its original source. Thatz what this platform does. I found this very unique and unmatched.\n\nThey highlight everything which is important from exam point of view from its original source.\n\nI read only highlighted portion from their posts except newspaper. Business Standard I read everything to grasp what is being said with full context (helped me to Tackle corporate banking question in Interview)\n\nI read and took note of  Every post they shared which includes PIB, Business standard newspapers, CIRCULARS of RBI & SEBI , SCHEMES etc\n\nI've gained a lot of confidence through revision by their "Weekly revision capsules".\n\nItz MCQ for phase 2 was best in the market especially for CA. I didn't do any Descriptive practice from there.\n\nMockmentor Shared list of Reports important for Phase 2 : Filtered the clutter for me.\n\nMockmentor Interview Guidance Programme : Gold\n\nTheir Interview guidance programme was Top Notch. Despite me not giving any mock interview there, Their\n\nDetailed questionnaire about each aspect of my profile was a goldmine for me and the list of things to cover for Interview for RBI such as Departmental questions based on my selection, working and functions PDF highlights were really good.\n\nTo be frank, I would have never known importance of department related questions without Mockmentor.\n\nAlso I was highly benefited from their private interview telegram Channel from my fellow Mates\n\nMockmentor support : Their personalized support system played a crucial role. Individual queries were addressed promptly, helping resolve critical doubts during preparation.\n\nI also found that Mockmentor materials have strong spillover benefits, helping in preparation for other exams as well.\n\nI am immensely grateful to the Mockmentor Telegram channel and Rahul sir for helping me ace this exam.\n\nI am truly delighted and will always remain thankful.\n\nBy : Hari Jegan Prathap S`;

  const karthikReview = `Sir,\n\nI am delighted to share that I have been selected as an RBI Grade B Officer. I sincerely express my gratitude to Mockmentor for the support.\n\nI came across the Mockmentor channel around February 2025. Having appeared for three mains examinations prior to 2025, I found your content to be distinct, highly relevant, and closely aligned with the requirements of the examination.\n\nThe curated coverage of newspapers, PIB updates, RBI and SEBI circulars, reports, and related content made preparation more structured and efficient. Since the important information was already highlighted, it became easier for me to study and prepare additional physical notes wherever required.\n\nI benefitted greatly from the content, which helped secure decent marks in both the Phase I General Awareness section and the Phase II ESI objective section. Beyond objective preparation, the material was equally useful for descriptive answers. For e.g, speeches of the SEBI Chairman,directors shared through the channel helped me in attempting the 15-mark question on reforms in capital markets.\n\nI sincerely believe that your content offers informational richness for aspirants and adds value to their preparation.\n\nI am truly thankful to Mockmentor for being an integral part of my journey and contributing to my success.\n\nThanks and regards,\nSankar S.\n2862003939\nTotal Marks: 230.5`;

  const himanshiReview = `MockMentor’s contribution to my RBI Grade B preparation journey has been truly unparalleled. I joined the program right after the Phase 1 results, and it proved to be one of the most valuable decisions in my preparation.\n\nThe standout feature of the course was the descriptive writing section and its detailed evaluation. The questions were of exceptional quality, and I relied entirely on MockMentor for my descriptive practice. This significantly enhanced both my content and answer structuring skills.The objective section was equally impressive, with questions closely aligned to the actual exam level. It included scheme-based, report-based, and case study-oriented questions that mirrored the pattern and depth of the real examination. Also, on the telegram group the highlighted RBI circulars categorised as less important, important and very important were uploaded which added further depth.\n\nThe interview guidance program was another major highlight. Rahul Sir’s one-on-one discussion on my biodata was extremely insightful. He helped rationalize every aspect of my profile, even the smallest details, which ultimately made a significant difference during the interview.\n\nAdditionally, the support team was always approachable and prompt in resolving doubts. The three mock interviews conducted were comprehensive, featuring diverse and opinion-based questions that closely resembled the actual interview experience.\n\nI am extremely grateful to MockMentor for their guidance and support. I truly owe a significant part of my success to them and could not have imagined this journey without their mentorship.\n\nThank you so much! 🙏💐\nHimanshi`;

  const saurabhReview = `MockMentor (MM), you are beautiful.\n\nWhile checking some Telegram groups to find relevant newspapers for RBI, I came across a highlighted newspaper article shared by MM. It was nice, so I explored the channel and was amazed by the quality of the highlighted content available absolutely free of cost. I joined the channel and made a habit of regularly reading the articles.\n\nA few weeks later, MM introduced their GA MCQ package, and it had quality content. It helped a lot. The articles (newspapers, BS, RBI circulars), complemented with the AC magazine, were my one-stop solution for GA.\n\nLater, I joined the Phase 2 and Interview Guidance Program of MM, and it helped a lot. The quality of descriptive questions and comprehensive evaluation made learning interesting.\n\nThe interview guidance by Rahul Sir was in a positive direction. It helped in building confidence and getting content ready for the interview.\n\nOverall, MM made my journey smooth. I was able to read and retain better even with a full-time job.\n\nधन्यवाद। शुक्रिया। आभार。\n\nThanks & regards,\nSaurabh Sharma`;

  const hariVishalReview = `Dear Mockmentor Team,\n\nIam delighted to let you know that I have cleared RBI GR B 2025 (Roll -1202000561).\n\nI took Phase 2 course and interview t from courses have immensely helped me to sail through this examination. Your Quality material, MCQ and Descriptive modules have helped me immensely to improve my performance.\n\nMockMentors Interview Guidance have immensely helped to gain confidence and positivity and quality of guidance and Material is top notch and helped me through out.\n\nI Extend my heartfelt gratitude to Team and on a personal note to Rahul Sir. Rahul sir has helped, assisted and guided me at the critical moment. Beyond guidance, Rahul sir and Teams collective efforts to provide consultation boosted my confidence, positivity just before the interview.\n\nI Extend my heartfelt gratitude to MockMentor team and Specially Rahul Sir for assistance through out.\n\nYours truly\nHari Vishal\n(Roll No - 1202000561)`;

  const raghavReview = `I owe my success to your interview guidance sir. The quality of questions and your one on one support in vetting my DAF and also your patience in clearing my doubts even small ones really helped me. MockMentor specifically for interview was a game changer for me.\n\nYou handholded me in every step. I sent my DAF to you I believe 5-6 times and you helped me create a strong document. You provided around 400 questions on the basis of my DAF related to my background, academic, job and also helped me connect with like minded people. \n\nSir, Today I think if I would have not came across you what would I have done. And to sum it up. I believe MockMentor has been my support system for interview preparation.`;

  const jayReview = `hello sir! thank you! Mockmentor helped me immensely during my preparation journey. Rahul Sir has been giving personalized attention to every inteview candidate on the call. We had long discussions, This type of mentorship I've never experienced. The tailor-made questions related to biodata were realy helpful. The highlighted material you shared was also super relevant for the interview. The valuable feedback I received in the mock interview is also much appreciated. Thanks Rahul Sir!`;

  const harshitaReview = `I would like to sincerely thank MockMentor for their excellent MCQ course and highly curated highlighted Telegram content. The MCQs on current affairs, RBI & SEBI circulars, schemes, and reports, helped me strengthen my concepts and improve revision consistently. The highlighted content shared regularly on Telegram was extremely relevant and exam-oriented, which made preparation more focused and efficient.\n\n(Shared on YouTube on her own channel)`;

  const rajeshReview = `Whoever has been asking me personally about which coaching to rely on, I told them to practice quant and reasoning from youtube and to rely blindly on mockmentor for the rest of the things sir.`;

  const toppersData = [
    { name: 'Kumari Deeksha', rank: 2, program: 'RBI course + Interview Program', img: '/deeksha_portrait_1779098675776.jpeg', fullText: deekshaReview, badges: ['FM Desc: 39 (Highest)', 'FM Overall: 81.75 (Highest)'] },
    { name: 'Harshita Tiwari', rank: 7, program: 'MCQ pack', img: '/harshita_portrait.jpeg', fullText: harshitaReview },
    { name: 'Ranjini', rank: 10, program: 'RBI course + Interview Program', img: '/ranjini_portrait_1779098721645.jpeg', fullText: defaultReview },
    { name: 'Hari Vishal', rank: 11, program: 'RBI course + Interview Program', img: '/hari_vishal_portrait_1779098769758.jpeg', fullText: hariVishalReview, badges: ['Phase 2: 205.75 (Highest)', 'ESI Desc: 36 (Highest)', 'ESI Obj: 29.5 (Highest)'] },
    { name: 'Himanshi Tulsiani', rank: 15, program: 'RBI course + Interview Program', img: '/himanshi_portrait_1779098692272.png', fullText: himanshiReview, badges: ['FM Obj: 44 (Top Score)'] },
    { name: 'Saurabh Sharma', rank: 31, program: 'RBI course + Interview Program', img: '/saurabh_portrait_1779098656404.jpeg', fullText: saurabhReview, badges: ['ESI Obj: 29.25 (2nd Highest)'] },
    { name: 'Karthik Sankar', rank: 34, program: 'Phase 2 course', img: '/karthik_portrait.jpeg', fullText: karthikReview },
    { name: 'Atithi Kumar', rank: 38, program: 'Interview Program', img: '/atithi_portrait_1779098738039.jpeg', fullText: atithiReview, badges: ['First Attempt'] },
    { name: 'Hari Jagan', rank: 53, program: 'RBI course + Interview Program', img: '/hari_jegan_portrait_1779098790015.jpeg', fullText: hariJaganReview },
    { name: 'Rajesh', rank: 57, program: 'RBI course + Interview Program', img: '/rajesh_portrait_1779098806492.png', fullText: rajeshReview },
    { name: 'Jay', rank: 70, program: 'Interview Program', img: '/jay_portrait_1779098621795.jpeg', fullText: jayReview },
    { name: 'Raghav Manglik', rank: 71, program: 'RBI course + Interview Program', img: '/raghav_portrait_1779098642377.jpeg', fullText: raghavReview },
    { name: 'Sajal Gupta', rank: 75, program: 'RBI course + Interview Program', img: '/sajal_portrait_1779098753254.jpeg' },
  ];

  const toppersData2024 = [
    { name: "Vicky Kumar", rank: 10, program: "RBI Interview Guidance Program", img: "/Vicky.jpeg" },
    { name: "Pooja", rank: 24, program: "RBI Interview Guidance Program", img: "/Pooja.jpeg" },
    { name: "Rahul Mohanani", rank: 26, program: "RBI Interview Guidance Program", img: "/Rahul.jpeg" },
    { name: "Utkarsh Sachan", rank: 35, program: "RBI Interview Guidance Program", img: "/Utkarsh.jpeg" },
    { name: "Vipul", rank: 44, program: "RBI Interview Guidance Program" }
  ];

  const strategyData = [
    { name: 'Kumari Deeksha', rank: 2, img: '/deeksha_portrait_1779098675776.jpeg', notesUrl: 'https://drive.google.com/file/d/1YkRNSCITsYTajbLU9VS66zzA--oRDrlz/view?usp=drive_link', isDescriptive: true, badges: ['FM Desc: 39 (Highest)', 'Interview: 58 (2nd Highest)'] },
    { name: 'Himanshi Tulsiani', rank: 15, img: '/himanshi_portrait_1779098692272.png', notesUrl: 'https://drive.google.com/file/d/1XN91bhHP2XuZeOSsKTFX9uGjCNwgCy6P/view?usp=drive_link', isDescriptive: true, badges: ['FM Obj: 44 (Top Score)'] },
    { name: 'Saurabh Sharma', rank: 31, img: '/saurabh_portrait_1779098656404.jpeg', notesUrl: 'https://drive.google.com/file/d/1Uyn-Po2biy-ehlBHqakZB1PVdVAOlYaO/view?usp=drive_link', isDescriptive: true, badges: ['ESI Obj: 29.25 (2nd Highest)'] },
    { name: 'Hari Jagan', rank: 53, img: '/hari_jegan_portrait_1779098790015.jpeg', notesUrl: 'https://drive.google.com/drive/folders/14U19auYxO3eNdP222zaHKYudBOeW41R4?usp=drive_link' },
  ];

  const TopperCard = ({ topper }) => (
    <div className="flex flex-col bg-[#ffeadd] rounded-xl overflow-hidden border-2 border-[#1c4897] shadow-lg w-full max-w-[160px] mx-auto transform hover:scale-105 transition-transform duration-300 relative group h-full">
      <div className="absolute top-2 left-2 bg-blue-600 text-white font-black text-xs px-2 py-1 rounded shadow-md z-20 transform -rotate-2">
        AIR {topper.rank}
      </div>
      <div className="h-[160px] w-full bg-white relative overflow-hidden border-b-2 border-white shrink-0 flex items-center justify-center bg-blue-50">
        {topper.img ? (
          <img src={topper.img} alt={topper.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-7xl font-black text-blue-200">{topper.name.charAt(0)}</span>
        )}
      </div>
      <div className="p-3 text-center flex flex-col justify-start flex-grow bg-gradient-to-b from-white to-[#fae6de]">
        <h3 className="font-bold text-gray-900 text-[14px] leading-tight mb-1">{topper.name}</h3>
        <p className="text-[10px] text-gray-800 font-semibold leading-tight mb-2 px-1">{topper.program}</p>
        
        {topper.badges && topper.badges.length > 0 && (
          <div className="flex flex-col gap-1.5 mb-3 items-center mt-1">
            {topper.badges.map((badge, idx) => (
              <span key={idx} className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-300 shadow-sm w-fit leading-tight">
                {badge}
              </span>
            ))}
          </div>
        )}

        {topper.fullText && (
          <div className="mt-auto pt-1">
            <button 
              onClick={() => setSelectedReview(topper)}
              className="text-blue-700 hover:text-blue-900 text-[11px] font-bold underline decoration-blue-400 underline-offset-2 transition-colors focus:outline-none inline-block w-fit mx-auto"
            >
              Read Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fffcf5] pt-28 pb-20 relative overflow-hidden">
      
      {/* Background radial subtle gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-orange-50 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 relative">
          <div className="flex justify-center items-center gap-1 mb-2">
            <h2 className="text-3xl md:text-5xl font-black text-[#69d7b4] tracking-tight uppercase">MOCK MENTOR</h2>
            <span className="text-xl md:text-3xl font-black text-gray-800">'s</span>
          </div>
          
          <div className="relative inline-block mt-4">
            {/* Sparkle SVG simulation */}
            <div className="absolute -top-12 -left-8 md:-top-16 md:-left-12 text-[#f58426]">
              <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-10 h-16 md:w-16 md:h-24">
                <path d="M20 0 L25 25 L40 30 L25 35 L20 60 L15 35 L0 30 L15 25 Z" />
              </svg>
            </div>
            
            <div className="relative border-2 border-blue-600 rounded-lg px-8 py-4 bg-white shadow-lg inline-block z-10">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-script text-4xl text-gray-900 whitespace-nowrap" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Toppers of
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#13496f] tracking-tighter">
                RBI Grade B 2025
              </h1>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 border-2 ${activeTab === 'performance' ? 'bg-[#1c4897] text-white border-[#1c4897] shadow-lg transform scale-105' : 'bg-white text-[#1c4897] border-[#1c4897] hover:bg-blue-50 shadow-sm'}`}
          >
            Performance & Results
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 border-2 ${activeTab === 'strategy' ? 'bg-[#1c4897] text-white border-[#1c4897] shadow-lg transform scale-105' : 'bg-white text-[#1c4897] border-[#1c4897] hover:bg-blue-50 shadow-sm'}`}
          >
            Descriptive answers and Notes
          </button>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === 'performance' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-2 flex justify-center items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-md text-sm">2025</span>
              Recent Selections
            </h3>
            <p className="text-center text-xs md:text-sm text-slate-500 mb-8 max-w-xl mx-auto leading-relaxed">
              Our first batch of launched courses resulting in exceptional Phase 2 and overall scores.
            </p>
            {/* Grid Section 2025 */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-[1100px] mx-auto mb-16">
              {toppersData.map((topper, idx) => (
                <div key={idx} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-auto md:max-w-[160px] md:min-w-[160px] flex items-stretch">
                  <TopperCard topper={topper} />
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-center text-gray-800 mb-2 flex justify-center items-center gap-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm">2024</span>
              Previous Year Stars
            </h3>
            <p className="text-center text-xs md:text-sm text-slate-500 mb-8 max-w-xl mx-auto leading-relaxed">
              Our foundational year, where we only launched our flagship Interview Guidance Programme alongside highly-curated free Telegram content.
            </p>
            {/* Grid Section 2024 */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-[1100px] mx-auto">
              {toppersData2024.map((topper, idx) => (
                <div key={idx} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-auto md:max-w-[160px] md:min-w-[160px] flex items-stretch">
                  <TopperCard topper={topper} />
                </div>
              ))}
            </div>


          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Download Toppers Strategy & Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategyData.map((topper, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#1c4897]">
                  <div className="relative shrink-0">
                    <img src={topper.img} alt={topper.name} className="w-20 h-20 rounded-full object-cover border-2 border-[#1c4897]" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                      AIR {topper.rank}
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:items-start w-full text-center sm:text-left mt-2 sm:mt-0">
                    <div className="flex flex-col sm:flex-row items-center gap-2 mb-1 flex-wrap justify-center sm:justify-start">
                      <h4 className="font-bold text-xl text-gray-900">{topper.name}</h4>
                      {topper.badges && topper.badges.map((badge, idx) => (
                        <span key={idx} className="bg-emerald-100 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded-full border border-emerald-200">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 font-medium mb-4">
                      {topper.isDescriptive ? 'Evaluated Descriptive Answers' : 'Detailed Strategy & Preparation Notes'}
                    </p>
                    <a href={topper.notesUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full sm:w-auto bg-[#e6f4f1] text-[#0d7d6b] hover:bg-[#0d7d6b] hover:text-white border border-[#b2e2d9] hover:border-[#0d7d6b] px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 group">
                      <Download className="w-4 h-4 text-[#0d7d6b] group-hover:text-white transition-colors" /> {topper.isDescriptive ? 'View Descriptive Answers' : 'View Strategy Notes'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Review Modal */}
      {selectedReview && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedReview(null)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-4">
                <img src={selectedReview.img} alt={selectedReview.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{selectedReview.name}</h3>
                  <p className="text-sm font-semibold text-blue-600">AIR {selectedReview.rank} • {selectedReview.program}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedReview(null)}
                className="text-gray-400 hover:text-gray-700 bg-white hover:bg-gray-100 p-2 rounded-full transition-colors border border-gray-200 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
                {selectedReview.fullText.split('\n').map((para, i) => (
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

export default Toppers;
