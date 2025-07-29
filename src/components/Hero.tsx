import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";
import profileImg from '../assets/profile.jpg'; // ✅ Correct image import

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const blobs: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];

    for (let i = 0; i < 3; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: darkMode
          ? `hsla(${240 + Math.random() * 60}, 70%, 60%, 0.1)`
          : `hsla(${240 + Math.random() * 60}, 70%, 70%, 0.15)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < 0 || blob.x > canvas.width) blob.vx *= -1;
        if (blob.y < 0 || blob.y > canvas.height) blob.vy *= -1;

        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [darkMode]);

  const typewriterText = "AI/ML & MLOps Enthusiast";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div className="flex flex-col items-center justify-center mb-6">
            <motion.img
              src={profileImg} // ✅ Correct usage
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover mb-4 transition-transform duration-300"
              whileHover={{ scale: 1.08, boxShadow: '0 0 32px #7356f1' }}
              style={{ boxShadow: '0 4px 32px 0 #7356f1, 0 1.5px 8px 0 #7356f1' }}
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{ color: '#7356f1' }}
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
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <TypewriterText text={typewriterText} />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
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
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  } shadow-lg hover:shadow-xl`}
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
              className={`cursor-pointer ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
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
