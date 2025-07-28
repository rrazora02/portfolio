import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }

    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Loading Screen
  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Loading Portfolio...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        {/* Background Pattern */}
        <div className="fixed inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-grid-pattern opacity-[0.02] ${
            darkMode ? 'invert' : ''
          }`} />
        </div>

        {/* Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-transparent via-purple-500/[0.02] to-blue-500/[0.02] pointer-events-none" />

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            <main>
              <Hero darkMode={darkMode} />
              <About darkMode={darkMode} />
              <Skills darkMode={darkMode} />
              <Projects darkMode={darkMode} />
              <Experience darkMode={darkMode} />
              <TechStack darkMode={darkMode} />
              <Contact darkMode={darkMode} />
            </main>
            
            <Footer darkMode={darkMode} />
          </motion.div>
        </AnimatePresence>

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 z-50 origin-left"
          style={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </>
  );
}

export default App;