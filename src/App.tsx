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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-border border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            className="text-2xl font-bold text-text"
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
      <div className="min-h-screen transition-colors duration-300 bg-background text-text">
        {/* Background Pattern */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        </div>

        {/* Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-transparent via-border/[0.02] to-border/[0.02] pointer-events-none" />

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <TechStack />
              <Contact />
            </main>
            
            <Footer />
          </motion.div>
        </AnimatePresence>

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-border z-50 origin-left"
          style={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </>
  );
}

export default App;