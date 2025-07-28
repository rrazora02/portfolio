import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, MessageSquare, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageSquare, href: '#', label: 'Discord' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={`relative py-16 ${
      darkMode 
        ? 'bg-gray-900 border-t border-gray-800' 
        : 'bg-gray-50 border-t border-gray-200'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-teal-500/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Rohan Rajora
              </h3>
              <p className={`text-lg leading-relaxed max-w-md ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                AI/ML & MLOps Enthusiast passionate about building impactful solutions 
                with cutting-edge technology. Always learning, always building.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  } shadow-lg hover:shadow-xl`}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-lg font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className={`transition-all duration-300 ${
                      darkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Get In Touch
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <p className={`${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                rohan.rajora@example.com
              </p>
              <p className={`${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Available for freelance work
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`pt-8 border-t ${
            darkMode ? 'border-gray-800' : 'border-gray-200'
          } flex flex-col md:flex-row items-center justify-between gap-4`}
        >
          <div className={`flex items-center gap-2 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>© 2024 Rohan Rajora. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={16} fill="currentColor" />
            </motion.div>
            <span>and lots of ☕</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-full transition-all duration-300 ${
              darkMode
                ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            } shadow-lg hover:shadow-xl`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              darkMode ? 'bg-white/10' : 'bg-gray-400/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;