import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import DescriptiveWriting from './pages/DescriptiveWriting';
import Toppers from './pages/Toppers';
import FreeResources from './pages/FreeResources';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/descriptive-writing" element={<DescriptiveWriting />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/toppers" element={<Toppers />} />
            <Route path="/free-resources" element={<FreeResources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
