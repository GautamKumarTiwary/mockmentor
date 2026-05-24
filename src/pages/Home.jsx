import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ChevronDown, CheckCircle, MessageCircle, CheckCircle2, FileText, Target, ArrowRight, X, Star } from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const superEliteDesc = `This course offers a comprehensive learning package designed to take you from foundational concepts to advanced-level preparation for RBI Phase 2.

You will get well-structured static notes covering:

* Economic & Social Issues (ESI)
* Finance & Management (FM)
* Ministry-wise Flagship Schemes

The program also includes chapter-wise Phase 2 MCQs for Finance and Management to strengthen conceptual clarity and exam readiness.

Additionally, you will receive:

* Fortnightly Current Affairs Magazines
* Fortnightly Current Affairs MCQs
* “Topics in News” coverage for important developments
* Descriptive writing practice on an exam-like interface
* Additional fodder material for answer enrichment and better presentation

This structured approach ensures complete preparation for both objective and descriptive sections of the examination.`;

  const eliteDesc = `The Elite Course offers complete RBI Phase 2 preparation with comprehensive coverage of both static and current affairs content, covering everything included in our flagship program except the descriptive writing module.

The course includes:

* Detailed static notes on Economic & Social Issues (ESI)
* Comprehensive Finance & Management (FM) study material
* Ministry-wise Flagship Schemes
* Chapter-wise Phase 2 MCQs for Finance & Management
* Fortnightly Current Affairs Magazines
* Fortnightly Current Affairs MCQs
* “Topics in News” coverage for important developments
* Additional fodder materials for value addition and conceptual clarity

Designed for aspirants who want strong conceptual preparation and extensive practice for the objective section, the Elite Course provides a structured and exam-oriented learning experience.`;

  const descriptiveDesc = `The RBI Grade B Descriptive Writing Programme is a specialized course designed to help aspirants excel in the descriptive section of RBI Grade B Phase 2 Examination. Since the descriptive paper carries significant weightage, mastering answer-writing techniques is essential to secure top scores and improve overall ranking.

This programme focuses on building strong conceptual clarity, structured answer-writing skills, and exam-oriented presentation techniques through continuous practice and expert mentorship.

What the Programme Covers:
* Complete guidance for ESI & FM Descriptive Writing
* Structured approach to essay, answer, and report writing
* Topic-wise descriptive practice questions
* Personalized feedback and evaluation
* Exam-like writing practice interface
* Value-added content and fodder material for enrichment
* Current affairs integration for descriptive answers
* Answer structuring techniques to maximize marks
* Mentorship sessions and strategy discussions`;

  const fortnightDesc = `The Fortnight GA & Current Affairs MCQ Package is designed for aspirants who want focused and exam-oriented current affairs preparation for RBI Grade B and other regulatory examinations.

This package exclusively covers fortnightly current affairs MCQs in a structured and section-wise format to help students stay updated with important developments and improve retention through regular practice.

### The Package Includes:

* **RBI & SEBI Circulars**
Important regulatory updates, notifications, policy changes, and circular-based MCQs.

* **Schemes & Reports**
Government schemes, indices, committees, national and international reports, and survey-based questions.

* **PIB in News**
Important PIB releases and key government initiatives relevant for Phase 2 preparation.

* **Miscellaneous Current Affairs**
Coverage of important banking, economy, finance, international affairs, appointments, summits, and other relevant updates.

### Key Features:

* Fortnightly updated MCQ practice sets
* Exam-oriented and concept-based questions
* Section-wise coverage for better revision
* Curated specifically for RBI Grade B preparation
* Helps in regular current affairs revision and retention

This package is ideal for aspirants looking to strengthen their current affairs preparation through consistent practice and targeted MCQ-based learning.`;

  const demoDesc = `The Demo Course is designed to give aspirants a complete overview of MockMentor’s premium learning ecosystem before enrolling in the full programme.

It provides access to selected premium resources and sample content across different sections, helping students understand the quality, structure, and approach followed in our courses.

### The Demo Course Includes:

* Sample Static Notes on ESI, Finance & Management
* Demo Current Affairs Magazines
* Selected Topic-wise MCQs
* Sample Descriptive Writing Content
* PIB & Current Affairs Coverage
* Fodder Material Samples
* Exam-oriented Practice Resources
* Preview of MockMentor’s Learning Interface

### Why Enroll in the Demo Course?

* Experience the quality of premium content before joining
* Understand the structure of RBI Grade B preparation
* Get clarity on descriptive and objective preparation strategy
* Explore MockMentor’s teaching and content approach
* Build confidence in your preparation journey

The Demo Course serves as the perfect starting point for aspirants who want to explore high-quality RBI Grade B preparation resources and experience MockMentor’s result-oriented approach firsthand.`;

  const renderCourseDesc = (text) => {
    return text.split('\n').map((line, idx) => {
      if (line.trim().startsWith('### ')) {
        return <h4 key={idx} className="font-bold text-lg mt-4 mb-2 text-slate-800">{line.replace('### ', '')}</h4>;
      } else if (line.trim().startsWith('* ')) {
        let content = line.replace('* ', '');
        if (content.includes('**')) {
          const parts = content.split('**');
          content = <>{parts[0]}<strong>{parts[1]}</strong>{parts[2]}</>;
        }
        return <li key={idx} className="ml-5 list-disc mb-1 text-slate-700">{content}</li>;
      } else if (line.trim().match(/^\d+\.\s/)) {
        let content = line.replace(/^\d+\.\s/, '');
        if (content.includes('**')) {
          const parts = content.split('**');
          content = <>{parts[0]}<strong>{parts[1]}</strong>{parts[2]}</>;
        }
        return <li key={idx} className="ml-5 list-decimal mb-1 text-slate-700">{content}</li>;
      } else if (line.trim() === '') {
        return <div key={idx} className="h-2"></div>;
      } else {
        let content = line;
        if (content.includes('**')) {
          const parts = content.split('**');
          content = <>{parts[0]}<strong>{parts[1]}</strong>{parts[2]}</>;
        }
        return <p key={idx} className="mb-2 text-slate-700 leading-relaxed">{content}</p>;
      }
    });
  };

  const courses = [
    {
      title: "RBI Grade B 2026 Super-Elite Course",
      validity: "365 Days Validity",
      price: "7,500",
      oldPrice: "10,000",
      discount: "25% OFF",
      img: "/super%20elite.png",
      url: "https://www.mockmentor.in/learn/RBI-Grade-B-2026-Super-elite",
      fullDesc: superEliteDesc
    },
    {
      title: "RBI Grade B 2026 Elite Course",
      validity: "365 Days Validity",
      price: "3,500",
      oldPrice: "5,000",
      discount: "30% OFF",
      img: "/elite.jpeg",
      url: "https://www.mockmentor.in/learn/RBI-Grade-B-2026-Full-Package",
      fullDesc: eliteDesc
    },
    {
      title: "RBI Grade B Descriptive Writing programme",
      validity: "365 Days Validity",
      price: "5,000",
      oldPrice: "6,000",
      discount: "17% OFF",
      img: "/descriptive.jpeg",
      url: "https://www.mockmentor.in/learn/Descriptive-writing",
      fullDesc: descriptiveDesc
    },
    {
      title: "Fortnight GA & Current Affairs MCQ Package",
      validity: "365 Days Validity",
      price: "1,999",
      oldPrice: "2,500",
      discount: "20% OFF",
      img: "/fortnight.jpeg",
      url: "https://www.mockmentor.in/learn/Fortnight-MCQs",
      fullDesc: fortnightDesc
    },
  ];

  const defaultReview = "I am incredibly grateful to MockMentor for their invaluable guidance. The structured study materials, comprehensive mock tests, and personalized interview guidance were exactly what I needed to clear the RBI Grade B exam. Highly recommended!";

  const officers = [
    {
      name: "Kumari Deeksha",
      rank: "Selected as RBI Grade B - Rank 2",
      prog: "(RBI course + Interview Program)",
      text: "2025 was my fourth attempt at the RBI Grade B examination, and by God’s grace, I secured AIR-2 this year. I started following MockMentor in 2024, and in 2025, I enrolled in their available courses for Phase 2 preparation. One of the biggest strengths of MockMentor was the exceptional quality of their content.",
      fullText: `2025 was my fourth attempt at the RBI Grade B examination, and by God’s grace, I secured AIR-2 this year. I started following MockMentor in 2024, and in 2025, I enrolled in their available courses for Phase 2 preparation.\n\nOne of the biggest strengths of MockMentor was the exceptional quality of their content. The current affairs magazines were extremely well-curated, concise, authentic, and highly exam-oriented. As a working aspirant with limited preparation time, having access to crisp and relevant material helped me prepare comprehensively in a very efficient manner. The return on investment was truly remarkable.\n\nThe fortnightly MCQs played a crucial role in ensuring consistent revision and keeping me aligned with the evolving exam pattern. I particularly found the Phase 2 MCQs to be highly underrated, as they helped me develop a holistic understanding of the syllabus and improve conceptual clarity. In fact, I scored 43 marks in Management, and MockMentor’s content contributed significantly to that achievement.\n\nI also extensively utilized their descriptive preparation resources, which proved immensely valuable. In Finance, Management, and ESI descriptive papers, I scored 35+ marks. The answer-writing guidance, practice material, and exam-oriented approach helped me improve both structure and presentation in descriptive papers.\n\nAdditionally, their interview guidance sessions were extremely insightful and helped me build confidence for the final stage of the examination.\n\nOverall, MockMentor’s content remained highly relevant, concise, and exam-focused throughout my preparation journey. For serious RBI aspirants, especially working professionals looking for efficient and high-quality preparation resources , MockMentor can be an invaluable companion in the RBI Grade B journey.`,
      img: "/deeksha_portrait_1779098675776.jpeg",
      badges: ['FM Desc: 39 (Highest)', 'FM Overall: 81.75 (Highest)']
    },
    {
      name: "Harshita Tiwari",
      rank: "Selected as RBI Grade B - Rank 7",
      prog: "(MCQ pack)",
      text: "I would like to sincerely thank MockMentor for their excellent MCQ course and highly curated highlighted Telegram content. The MCQs on current affairs, RBI & SEBI circulars, schemes, and reports, helped me strengthen my concepts and improve revision consistently. (Shared on YouTube on her own channel)",
      fullText: `I would like to sincerely thank MockMentor for their excellent MCQ course and highly curated highlighted Telegram content. The MCQs on current affairs, RBI & SEBI circulars, schemes, and reports, helped me strengthen my concepts and improve revision consistently. The highlighted content shared regularly on Telegram was extremely relevant and exam-oriented, which made preparation more focused and efficient.\n\n(Shared on YouTube on her own channel)`,
      img: "/harshita_portrait.jpeg"
    },
    {
      name: "Ranjini",
      rank: "Selected as RBI Grade B - Rank 10",
      prog: "(RBI course + Interview Program)",
      img: "/ranjini_portrait_1779098721645.jpeg"
    },
    {
      name: "Hari Vishal",
      rank: "Selected as RBI Grade B - Rank 11",
      prog: "(RBI course + Interview Program)",
      text: "Iam delighted to let you know that I have cleared RBI GR B 2025. I took Phase 2 course and interview from courses have immensely helped me to sail through this examination. Your Quality material, MCQ and Descriptive modules have helped me immensely.",
      fullText: `Dear Mockmentor Team,\n\nIam delighted to let you know that I have cleared RBI GR B 2025 (Roll -1202000561).\n\nI took Phase 2 course and interview t from courses have immensely helped me to sail through this examination. Your Quality material, MCQ and Descriptive modules have helped me immensely to improve my performance.\n\nMockMentors Interview Guidance have immensely helped to gain confidence and positivity and quality of guidance and Material is top notch and helped me through out.\n\nI Extend my heartfelt gratitude to Team and on a personal note to Rahul Sir. Rahul sir has helped, assisted and guided me at the critical moment. Beyond guidance, Rahul sir and Teams collective efforts to provide consultation boosted my confidence, positivity just before the interview.\n\nI Extend my heartfelt gratitude to MockMentor team and Specially Rahul Sir for assistance through out.\n\nYours truly\nHari Vishal\n(Roll No - 1202000561)`,
      img: "/hari_vishal_portrait_1779098769758.jpeg",
      badges: ['Phase 2: 205.75 (Highest)', 'ESI Desc: 36 (Highest)', 'ESI Obj: 29.5 (Highest)']
    },
    {
      name: "Himanshi Tulsiani",
      rank: "Selected as RBI Grade B - Rank 15",
      prog: "(RBI course + Interview Program)",
      text: "MockMentor’s contribution to my RBI Grade B preparation journey has been truly unparalleled. I joined the program right after the Phase 1 results, and it proved to be one of the most valuable decisions in my preparation.",
      fullText: `MockMentor’s contribution to my RBI Grade B preparation journey has been truly unparalleled. I joined the program right after the Phase 1 results, and it proved to be one of the most valuable decisions in my preparation.\n\nThe standout feature of the course was the descriptive writing section and its detailed evaluation. The questions were of exceptional quality, and I relied entirely on MockMentor for my descriptive practice. This significantly enhanced both my content and answer structuring skills.The objective section was equally impressive, with questions closely aligned to the actual exam level. It included scheme-based, report-based, and case study-oriented questions that mirrored the pattern and depth of the real examination. Also, on the telegram group the highlighted RBI circulars categorised as less important, important and very important were uploaded which added further depth.\n\nThe interview guidance program was another major highlight. Rahul Sir’s one-on-one discussion on my biodata was extremely insightful. He helped rationalize every aspect of my profile, even the smallest details, which ultimately made a significant difference during the interview.\n\nAdditionally, the support team was always approachable and prompt in resolving doubts. The three mock interviews conducted were comprehensive, featuring diverse and opinion-based questions that closely resembled the actual interview experience.\n\nI am extremely grateful to MockMentor for their guidance and support. I truly owe a significant part of my success to them and could not have imagined this journey without their mentorship.\n\nThank you so much! 🙏💐\nHimanshi`,
      img: "/himanshi_portrait_1779098692272.png",
      badges: ['FM Obj: 44 (Top Score)']
    },
    {
      name: "Saurabh Sharma",
      rank: "Selected as RBI Grade B - Rank 31",
      prog: "(RBI course + Interview Program)",
      text: "MockMentor (MM), you are beautiful. While checking some Telegram groups to find relevant newspapers for RBI, I came across a highlighted newspaper article shared by MM. It was nice, so I explored the channel and was amazed by the quality of the highlighted content.",
      fullText: `MockMentor (MM), you are beautiful.\n\nWhile checking some Telegram groups to find relevant newspapers for RBI, I came across a highlighted newspaper article shared by MM. It was nice, so I explored the channel and was amazed by the quality of the highlighted content available absolutely free of cost. I joined the channel and made a habit of regularly reading the articles.\n\nA few weeks later, MM introduced their GA MCQ package, and it had quality content. It helped a lot. The articles (newspapers, BS, RBI circulars), complemented with the AC magazine, were my one-stop solution for GA.\n\nLater, I joined the Phase 2 and Interview Guidance Program of MM, and it helped a lot. The quality of descriptive questions and comprehensive evaluation made learning interesting.\n\nThe interview guidance by Rahul Sir was in a positive direction. It helped in building confidence and getting content ready for the interview.\n\nOverall, MM made my journey smooth. I was able to read and retain better even with a full-time job.\n\nधन्यवाद। शुक्रिया। आभार。\n\nThanks & regards,\nSaurabh Sharma`,
      img: "/saurabh_portrait_1779098656404.jpeg",
      badges: ['ESI Obj: 29.25 (2nd Highest)']
    },
    {
      name: "Karthik Sankar",
      rank: "Selected as RBI Grade B - Rank 34",
      prog: "(Phase 2 course)",
      text: "I am delighted to share that I have been selected as an RBI Grade B Officer. I sincerely express my gratitude to Mockmentor for the support. I came across the Mockmentor channel around February 2025. Having appeared for three mains examinations prior to 2025, I found your content to be distinct and highly relevant.",
      fullText: `Sir,\n\nI am delighted to share that I have been selected as an RBI Grade B Officer. I sincerely express my gratitude to Mockmentor for the support.\n\nI came across the Mockmentor channel around February 2025. Having appeared for three mains examinations prior to 2025, I found your content to be distinct, highly relevant, and closely aligned with the requirements of the examination.\n\nThe curated coverage of newspapers, PIB updates, RBI and SEBI circulars, reports, and related content made preparation more structured and efficient. Since the important information was already highlighted, it became easier for me to study and prepare additional physical notes wherever required.\n\nI benefitted greatly from the content, which helped me secure decent marks in both the Phase I General Awareness section and the Phase II ESI objective section. Beyond objective preparation, the material was equally useful for descriptive answers. For e.g, speeches of the SEBI Chairman,directors shared through the channel helped me in attempting the 15-mark question on reforms in capital markets.\n\nI sincerely believe that your content offers informational richness for aspirants and adds value to their preparation.\n\nI am truly thankful to Mockmentor for being an integral part of my journey and contributing to my success.\n\nThanks and regards,\nSankar S.\n2862003939\nTotal Marks: 230.5`,
      img: "/karthik_portrait.jpeg"
    },
    {
      name: "Atithi Kumar",
      rank: "Selected as RBI Grade B - Rank 38 (First Attempt)",
      prog: "(Interview Program)",
      text: "RBI Grade B 2025 was my first attempt, and Team MockMentor played a very important role in making the entire journey smooth and well-guided. The Interview Guidance Programme gave me confidence, clarity, and the right direction throughout the preparation process.",
      fullText: `2025 was my first attempt at the RBI examination, and I enrolled in the Interview Guidance Program by Mock Mentor. Initially, I was quite insecure and had very little clarity regarding what to prepare and what to study for the interview.\n\nHowever, with the continuous support and guidance of Team Mock Mentor, the entire process became much more structured and manageable. They provided significant help in preparing my biodata in a cohesive and effective manner, which gave me much-needed confidence. The team also guided me towards relevant certification courses that played an important role in strengthening my interview preparation.\n\nWith their mentorship and support, I was able to score 57 Mark's in the interview. I am truly grateful to Team Mock Mentor for being a valuable partner throughout my interview journey.\n\nPhase 1 phase 2 ka kaam to smjh gya tha mai but aap na hote to shayd 2-3 bar khena pdd jta interview ka khel mujhe iski demand smjhne me aur ise kaise tackle Krna h ye clear krne me\n\nThankyou sir 🙃😁☺️❤️`,
      img: "/atithi_portrait_1779098738039.jpeg",
      badges: ['First Attempt']
    },
    {
      name: "Hari Jagan",
      rank: "Selected as RBI Grade B - Rank 53 (Highest in Phase 2)",
      prog: "(RBI course + Interview Program)",
      text: "MockMentor played an important role in this journey. The exam-focused Telegram content, weekly revision capsules, high-quality Phase 2 MCQs, and Interview Guidance Programme helped me stay focused, revise effectively, and prepare with confidence.",
      fullText: `I am selected in the RBI Grade B 2025 examination, and Mockmentor played a crucial role in this journey.\n\nMy Detailed Feedback about Mockmentor course and telegram channel for RBI Grade B exam 2025 :\n\nProgramme I used from it : Phase 2 and Interview\n\nMockmentor Materials in Telegram channel :\nHow about you read only the most important points of everything relevant to RBI from none other than its original source. Thatz what this platform does. I found this very unique and unmatched.\n\nThey highlight everything which is important from exam point of view from its original source.\n\nI read only highlighted portion from their posts except newspaper. Business Standard I read everything to grasp what is being said with full context (helped me to Tackle corporate banking question in Interview)\n\nI read and took note of  Every post they shared which includes PIB, Business standard newspapers, CIRCULARS of RBI & SEBI , SCHEMES etc\n\nI've gained a lot of confidence through revision by their "Weekly revision capsules".\n\nItz MCQ for phase 2 was best in the market especially for CA. I didn't do any Descriptive practice from there.\n\nMockmentor Shared list of Reports important for Phase 2 : Filtered the clutter for me.\n\nMockmentor Interview Guidance Programme : Gold\n\nTheir Interview guidance programme was Top Notch. Despite me not giving any mock interview there, Their\n\nDetailed questionnaire about each aspect of my profile was a goldmine for me and the list of things to cover for Interview for RBI such as Departmental questions based on my selection, working and functions PDF highlights were really good.\n\nTo be frank, I would have never known importance of department related questions without Mockmentor.\n\nAlso I was highly benefited from their private interview telegram Channel from my fellow Mates\n\nMockmentor support : Their personalized support system played a crucial role. Individual queries were addressed promptly, helping resolve critical doubts during preparation.\n\nI also found that Mockmentor materials have strong spillover benefits, helping in preparation for other exams as well.\n\nI am immensely grateful to the Mockmentor Telegram channel and Rahul sir for helping me ace this exam.\n\nI am truly delighted and will always remain thankful.\n\nBy : Hari Jegan Prathap S`,
      img: "/hari_jegan_portrait_1779098790015.jpeg"
    },
    {
      name: "Rajesh",
      rank: "Selected as RBI Grade B - Rank 57",
      prog: "(RBI course + Interview Program)",
      text: "Whoever has been asking me personally about which coaching to rely on, I told them to practice quant and reasoning from youtube and to rely blindly on mockmentor for the rest of the things sir.",
      fullText: `Whoever has been asking me personally about which coaching to rely on, I told them to practice quant and reasoning from youtube and to rely blindly on mockmentor for the rest of the things sir.`,
      img: "/rajesh_portrait_1779098806492.png"
    },
    {
      name: "Jay",
      rank: "Selected as RBI Grade B - Rank 70",
      prog: "(Interview Program)",
      text: "hello sir! thank you! Mockmentor helped me immensely during my preparation journey. Rahul Sir has been giving personalized attention to every inteview candidate on the call. We had long discussions, This type of mentorship I've never experienced...",
      fullText: `hello sir! thank you! Mockmentor helped me immensely during my preparation journey. Rahul Sir has been giving personalized attention to every inteview candidate on the call. We had long discussions, This type of mentorship I've never experienced. The tailor-made questions related to biodata were realy helpful. The highlighted material you shared was also super relevant for the interview. The valuable feedback I received in the mock interview is also much appreciated. Thanks Rahul Sir!`,
      img: "/jay_portrait_1779098621795.jpeg"
    },
    {
      name: "Raghav Manglik",
      rank: "Selected as RBI Grade B - Rank 71",
      prog: "(RBI course + Interview Program)",
      text: "I owe my success to your interview guidance sir. The quality of questions and your one on one support in vetting my DAF and also your patience in clearing my doubts even small ones really helped me...",
      fullText: `I owe my success to your interview guidance sir. The quality of questions and your one on one support in vetting my DAF and also your patience in clearing my doubts even small ones really helped me. MockMentor specifically for interview was a game changer for me.\n\nYou handholded me in every step. I sent my DAF to you I believe 5-6 times and you helped me create a strong document. You provided around 400 questions on the basis of my DAF related to my background, academic, job and also helped me connect with like minded people. \n\nSir, Today I think if I would have not came across you what would I have done. And to sum it up. I believe MockMentor has been my support system for interview preparation.`,
      img: "/raghav_portrait_1779098642377.jpeg"
    },
    {
      name: "Sajal Gupta",
      rank: "Selected as RBI Grade B - Rank 75",
      prog: "(RBI course + Interview Program)",
      img: "/sajal_portrait_1779098753254.jpeg"
    }
  ];

  const officers2024 = [
    {
      name: "Vicky Kumar",
      rank: "Selected as RBI Grade B - Rank 10",
      prog: "(RBI Interview Guidance Program)",
      img: "/Vicky.jpeg"
    },
    {
      name: "Pooja",
      rank: "Selected as RBI Grade B - Rank 24",
      prog: "(RBI Interview Guidance Program)",
      img: "/Pooja.jpeg"
    },
    {
      name: "Rahul Mohanani",
      rank: "Selected as RBI Grade B - Rank 26",
      prog: "(RBI Interview Guidance Program)",
      img: "/Rahul.jpeg"
    },
    {
      name: "Utkarsh Sachan",
      rank: "Selected as RBI Grade B - Rank 35",
      prog: "(RBI Interview Guidance Program)",
      img: "/Utkarsh.jpeg"
    },
    {
      name: "Vipul",
      rank: "Selected as RBI Grade B - Rank 44",
      prog: "(RBI Interview Guidance Program)"
    }
  ];

  const faqs = [
    {
      q: "What Mock Mentor offers?",
      a: "It’s a mock test platform for competitive examinations ranging from banking, insurance, and regulatory body exams."
    },
    {
      q: "Why only Mock Mentor?",
      a: "It offers mock tests on a fortnight basis every month, ensuring that all relevant MCQs are comprehensively covered. This makes the platform unique, focused, and purpose-driven."
    },
    {
      q: "What would be covered in quizzes?",
      a: "There are separate modules every month comprising:\n\n* PIB\n* RBI & SEBI Circulars\n* Schemes & Reports\n* Miscellaneous General Awareness (GA)"
    },
    {
      q: "What are the sources to be followed in order to excel in the actual exam and the mock test?",
      a: "Trusted by many toppers, the Mock Mentor Telegram channel is a one-stop solution for highlighted PDFs and curated content, making retention and revision much easier and more effective."
    },
    {
      q: "What is the level of questions in the mock test?",
      a: "The level of questions closely matches the actual examination pattern, which is the primary objective behind designing these mock tests.\n\nTo provide a clear and fair understanding, the mocks include:\n\n* One-liner questions\n* Multiple-statement questions\n* Paragraph-based questions\n* Story and situation-based questions\n\nThese are designed exactly as per current exam requirements."
    },
    {
      q: "What is the frequency of mock tests?",
      a: "Mock tests are published at the end of every fortnight."
    },
    {
      q: "How many questions will be covered every fortnight?",
      a: "Each fortnight includes **100 questions**, distributed as:\n\n* 25 questions from RBI & SEBI Circulars\n* 25 questions from PIB\n* 25 questions from Schemes & Reports\n* 25 questions from Miscellaneous General Awareness\n\nThis effectively means **200 questions every month**, covering almost every relevant update from the exam perspective."
    },
    {
      q: "How to effectively use the content and mocks?",
      a: "The content related to RBI & SEBI circulars, PIB, schemes & reports, and important newspaper clippings is shared daily on the Mock Mentor Telegram channel in a highlighted and concise format.\n\nThe highlighted content from original sources helps aspirants gain confidence that they are studying authentic and exam-relevant material while also making revision more efficient.\n\n### Step-by-step approach to utilize the content effectively:\n\n1. Read everything shared daily on the Telegram channel.\n2. Revise the content of each fortnight by the 15th and 30th of every month.\n3. Attempt the mock tests on the 15th and 30th/31st of every month.\n\nFollowing this simple strategy helps aspirants stay exam-ready after every 15 days, which is the core vision behind launching fortnightly mocks."
    },
    {
      q: "Isn’t the price too high?",
      a: "We don’t believe so, as long as we are delivering high-quality and exam-relevant content.\n\nOur philosophy regarding pricing is simple:\n\n* Either provide content completely free\n* Or price it according to the quality and value being delivered\n\n### What we provide:\n\n* High-Quality Highlighted Content Free of Cost\n* High-Quality Exam-Relevant Mock Tests Reasonably priced according to quality\n\nFor the RBI Grade B 2024 and 2025 batch, we also provided premium interview guidance that included:\n\n* 4 one-to-one mock interview sessions\n* Personalized mentorship\n* Profile-based question framing\n\nThe feedback received from toppers clearly reflected the value and effectiveness of the program."
    }
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
        <a 
          href="https://www.mockmentor.in/learn" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-[#4d868e] text-white px-8 py-3 rounded text-lg font-bold hover:bg-[#3d6f76] transition-colors shadow-md"
        >
          Explore Our Courses
        </a>
      </section>

      {/* 2. DIAGRAM SECTION */}
      <section className="py-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-16">
          Test your current affairs knowledge every fortnight!
        </h2>
        {/* MOBILE LAYOUT (Flexbox & CSS Borders) */}
        <div className="md:hidden max-w-3xl mx-auto relative py-4 w-full px-2">
          {/* Logo in background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-80">
            <img src="/logo.jpeg" alt="MockMentor Logo" className="h-8 object-contain" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-12 w-full mt-12">
            
            {/* Top Row */}
            <div className="flex w-full justify-between items-center z-20">
              <div className="bg-[#568d99] text-white font-bold py-2.5 px-2 rounded-full text-[10px] shadow-md text-center w-[45%] max-w-[220px]">
                PIB NEWS
              </div>
              <div className="bg-[#568d99] text-white font-bold py-2.5 px-2 rounded-full text-[10px] shadow-md text-center w-[45%] max-w-[220px]">
                RBI + SEBI CIRCULARS
              </div>
            </div>

            {/* Center Box */}
            <div className="bg-[#2d4a52] text-white font-bold py-3 px-6 rounded relative uppercase tracking-wider text-[11px] shadow-lg z-20">
              What's Included ?
            </div>

            {/* Bottom Row */}
            <div className="flex w-full justify-between items-center z-20">
              <div className="bg-[#568d99] text-white font-bold py-2.5 px-2 rounded-full text-[10px] shadow-md text-center w-[45%] max-w-[220px]">
                MISCELLANEOUS GA
              </div>
              <div className="bg-[#568d99] text-white font-bold py-2.5 px-2 rounded-full text-[10px] shadow-md text-center w-[45%] max-w-[220px]">
                SCHEMES + REPORTS
              </div>
            </div>

            {/* Connecting Dashed Lines using CSS */}
            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-0">
              {/* Top connectors */}
              <div className="w-[55%] h-[3.5rem] flex absolute top-[22%] -z-10">
                <div className="w-1/2 h-full border-b-2 border-l-2 border-dashed border-[#2d4a52] rounded-bl-3xl -mr-[1px]"></div>
                <div className="w-1/2 h-full border-b-2 border-r-2 border-dashed border-[#2d4a52] rounded-br-3xl -ml-[1px]"></div>
              </div>
              
              {/* Bottom connectors */}
              <div className="w-[55%] h-[3.5rem] flex absolute bottom-[22%] -z-10">
                <div className="w-1/2 h-full border-t-2 border-l-2 border-dashed border-[#2d4a52] rounded-tl-3xl -mr-[1px]"></div>
                <div className="w-1/2 h-full border-t-2 border-r-2 border-dashed border-[#2d4a52] rounded-tr-3xl -ml-[1px]"></div>
              </div>
            </div>

          </div>
        </div>

        {/* DESKTOP LAYOUT (Absolute Positioning & SVG) */}
        <div className="hidden md:flex max-w-4xl mx-auto relative h-[400px] items-center justify-center">
          {/* Logo in background top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-80">
            <img src="/logo.jpeg" alt="MockMentor Logo" className="h-10 object-contain" />
          </div>

          {/* Central Box */}
          <div className="z-10 bg-[#2d4a52] text-white font-bold py-4 px-8 rounded relative uppercase tracking-wider text-base shadow-lg">
            WHAT'S INCLUDED ?
          </div>

          {/* Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Top Left Line */}
            <path d="M 250 150 Q 250 200, 400 200" fill="none" stroke="#2d4a52" strokeWidth="2" strokeDasharray="6,6" />
            {/* Top Right Line */}
            <path d="M 650 150 Q 650 200, 500 200" fill="none" stroke="#2d4a52" strokeWidth="2" strokeDasharray="6,6" />
            {/* Bottom Left Line */}
            <path d="M 250 250 Q 250 200, 400 200" fill="none" stroke="#2d4a52" strokeWidth="2" strokeDasharray="6,6" />
            {/* Bottom Right Line */}
            <path d="M 650 250 Q 650 200, 500 200" fill="none" stroke="#2d4a52" strokeWidth="2" strokeDasharray="6,6" />
          </svg>

          {/* Nodes */}
          <div className="absolute top-[80px] left-[12%]">
            <div className="bg-[#568d99] text-white font-bold py-3 px-8 rounded-full text-sm shadow-md min-w-[220px] text-center">
              PIB NEWS
            </div>
          </div>
          <div className="absolute top-[80px] right-[12%]">
            <div className="bg-[#568d99] text-white font-bold py-3 px-8 rounded-full text-sm shadow-md min-w-[220px] text-center">
              RBI + SEBI CIRCULARS
            </div>
          </div>
          <div className="absolute bottom-[80px] left-[12%]">
            <div className="bg-[#568d99] text-white font-bold py-3 px-8 rounded-full text-sm shadow-md min-w-[220px] text-center">
              MISCELLANEOUS GA
            </div>
          </div>
          <div className="absolute bottom-[80px] right-[12%]">
            <div className="bg-[#568d99] text-white font-bold py-3 px-8 rounded-full text-sm shadow-md min-w-[220px] text-center">
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
                      <button onClick={() => setSelectedCourseDetails(course)} className="flex-1 border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-bold py-2 rounded-md transition-colors text-sm text-center">
                        View Details
                      </button>
                      <a href={course.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#488890] hover:bg-[#3a6d73] text-white font-bold py-2 rounded-md transition-colors text-sm text-center shadow-sm">
                        Buy Now
                      </a>
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
                <div className="mt-auto pt-4 flex items-center gap-3">
                  <button onClick={() => setSelectedCourseDetails({ title: 'Demo Course', fullDesc: demoDesc })} className="flex-1 border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-bold py-2 rounded-md transition-colors text-sm text-center">
                    View Details
                  </button>
                  <a href="https://www.mockmentor.in/learn/Demo-Course" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#488890] hover:bg-[#3a6d73] text-white font-bold py-2 rounded-md transition-colors text-sm text-center shadow-sm">
                    Enroll Free
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
            <div className="flex-1 flex flex-col group w-full max-w-lg relative mt-4 lg:mt-0">
              {/* Premium Floating Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black text-[11px] sm:text-xs uppercase tracking-widest py-1.5 px-6 rounded-full shadow-lg border-[3px] border-white flex items-center gap-1.5 whitespace-nowrap">
                  <Star className="w-3.5 h-3.5 fill-white text-white" /> MOST RECOMMENDED
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-2 border-amber-300 bg-white transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(251,_191,_36,_0.2)] relative flex-grow">
                <img src="/super_elite_compare.png" alt="Super Elite Course Comparison" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Our Officers</h2>
          <p className="text-center text-gray-500 mb-12">Celebrating the success of our students in RBI Grade B</p>

          <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2 pb-1">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-md text-sm">2025</span>
            Recent Selections
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mb-6 border-b pb-2 leading-relaxed">
            Our first batch of launched courses resulting in exceptional Phase 2 and overall scores.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 justify-center mb-16">
            {officers.map((officer, idx) => {
              const rankMatch = officer.rank.match(/Rank\s+(\d+)/i);
              const rankNum = rankMatch ? rankMatch[1] : null;
              
              return (
                <div key={idx} className="flex flex-col bg-[#ffeadd] rounded-xl overflow-hidden border-2 border-[#1c4897] shadow-lg w-full max-w-[160px] mx-auto transform hover:scale-105 transition-transform duration-300 relative group h-full">
                  {rankNum && (
                    <div className="absolute top-2 left-2 bg-blue-600 text-white font-black text-xs px-2 py-1 rounded shadow-md z-20 transform -rotate-2">
                      AIR {rankNum}
                    </div>
                  )}
                  <div className="h-[160px] w-full bg-white relative overflow-hidden border-b-2 border-white shrink-0">
                    <img src={officer.img} alt={officer.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 text-center flex flex-col justify-start flex-grow bg-gradient-to-b from-white to-[#fae6de]">
                    <h3 className="font-bold text-gray-900 text-[14px] leading-tight mb-1">{officer.name}</h3>
                    <p className="text-[10px] text-gray-800 font-semibold leading-tight mb-2 px-1">
                      {officer.prog.replace(/^\(|\)$/g, '')}
                    </p>

                    {officer.badges && officer.badges.length > 0 && (
                      <div className="flex flex-col gap-1.5 mb-3 items-center mt-1">
                        {officer.badges.map((badge, bIdx) => (
                          <span key={bIdx} className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-300 shadow-sm w-fit leading-tight">
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    {officer.text && (
                      <div className="mt-auto pt-1">
                        <button 
                          onClick={() => setSelectedFeedback(officer)}
                          className="text-blue-700 hover:text-blue-900 text-[11px] font-bold underline decoration-blue-400 underline-offset-2 transition-colors focus:outline-none inline-block w-fit mx-auto"
                        >
                          Read Feedback
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2 pb-1">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm">2024</span>
            Previous Year Stars
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mb-6 border-b pb-2 leading-relaxed">
            Our foundational year, where we only launched our flagship Interview Guidance Programme alongside highly-curated free Telegram content.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 justify-center">
            {officers2024.map((officer, idx) => {
              const rankMatch = officer.rank.match(/Rank\s+(\d+)/i);
              const rankNum = rankMatch ? rankMatch[1] : null;
              
              return (
                <div key={idx} className="flex flex-col bg-[#f8fbff] rounded-xl overflow-hidden border-2 border-[#1c4897] shadow-lg w-full max-w-[160px] mx-auto transform hover:scale-105 transition-transform duration-300 relative group h-full">
                  {rankNum && (
                    <div className="absolute top-2 left-2 bg-blue-600 text-white font-black text-xs px-2 py-1 rounded shadow-md z-20 transform -rotate-2">
                      AIR {rankNum}
                    </div>
                  )}
                  <div className="h-[160px] w-full bg-white relative overflow-hidden border-b-2 border-white shrink-0 flex items-center justify-center bg-blue-50">
                    {officer.img ? (
                      <img src={officer.img} alt={officer.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <span className="text-7xl font-black text-blue-200">{officer.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="p-3 text-center flex flex-col justify-start flex-grow bg-gradient-to-b from-white to-[#eef5ff]">
                    <h3 className="font-bold text-gray-900 text-[14px] leading-tight mb-1">{officer.name}</h3>
                    <p className="text-[10px] text-gray-800 font-semibold leading-tight mb-2 px-1">
                      {officer.prog.replace(/^\(|\)$/g, '')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/toppers" className="inline-block bg-[#488890] hover:bg-[#3a6d73] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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

      {/* 6B. OUR TRUSTED SOURCES */}
      <section className="py-20 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2d3748] mb-4">Preparation You Can Rely On</h2>
          <p className="text-slate-600 text-lg">We follow credible and authentic sources to bring you every relevant update.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white transform transition-transform hover:scale-[1.01] duration-500 bg-white">
            <img 
              src="/Mockmentor sources.jpeg" 
              alt="Mock Mentor Trusted Sources - PIB, RSTV, Live Mint, Business Standard" 
              className="w-full h-auto object-contain"
            />
          </div>
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
                  <span className="font-medium text-gray-800 text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
                    {renderCourseDesc(faq.a)}
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
      {/* Course Details Modal */}
      {selectedCourseDetails && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedCourseDetails(null)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-xl text-gray-900">{selectedCourseDetails.title}</h3>
              <button 
                onClick={() => setSelectedCourseDetails(null)}
                className="text-gray-400 hover:text-gray-700 bg-white hover:bg-gray-100 p-2 rounded-full transition-colors border border-gray-200 shadow-sm shrink-0 ml-4"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="text-[15px]">
                {renderCourseDesc(selectedCourseDetails.fullDesc)}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
