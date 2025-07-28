import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = () => {
  const typewriterText = "AI/ML & MLOps Enthusiast";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rohan Rajora
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-textAlt">
              <TypewriterText text={typewriterText} />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-textAlt"
          >
            3rd Year Engineering Student passionate about building impactful AI/ML solutions.
            Specializing in machine learning, cloud technologies, and MLOps to create real-world applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <a
              href="/Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-backgroundAlt border border-border text-text rounded-full font-semibold hover:bg-background transition-all duration-300 flex items-center gap-2"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <Download size={20} />
              Download Resume
            </a>

            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/rrazora02', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/rohan-rajora-981874324/', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Contact' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Contact' ? '_blank' : undefined}
                  rel={label !== 'Contact' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full transition-all duration-300 bg-backgroundAlt border border-border text-text hover:bg-background shadow-lg hover:shadow-xl"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer text-textAlt"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block"
      >
        |
      </motion.span>
    </span>
  );
};

export default Hero;