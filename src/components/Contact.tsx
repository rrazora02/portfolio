import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, MessageSquare } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rohan.rajora@example.com',
      description: 'Drop me a line anytime',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: 'rohanrajora#1234',
      description: 'Let\'s chat on Discord',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '/in/rohan-rajora',
      description: 'Connect professionally',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: MessageSquare, href: '#', label: 'Discord', color: 'hover:text-purple-600' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50'
                        : 'bg-white/30 border-gray-200 hover:bg-white/50'
                    } shadow-lg hover:shadow-xl cursor-pointer`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {info.title}
                        </h4>
                        <p className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {info.description}
                        </p>
                        <p className={`font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    } ${link.color} shadow-lg hover:shadow-xl`}
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              darkMode
                ? 'bg-gray-800/30 border-gray-700'
                : 'bg-white/30 border-gray-200'
            } shadow-2xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        darkMode
                          ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-purple-500'
                          : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        darkMode
                          ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-purple-500'
                          : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-purple-500'
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                    placeholder="Let's work together"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
                      darkMode
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-purple-500'
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    formStatus === 'sending'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : formStatus === 'success'
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                  } text-white shadow-lg hover:shadow-xl`}
                >
                  {formStatus === 'sending' && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  )}
                  {formStatus === 'success' && <CheckCircle size={20} />}
                  {formStatus === 'error' && <AlertCircle size={20} />}
                  {formStatus === 'idle' && <Send size={20} />}
                  
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent!'}
                  {formStatus === 'error' && 'Try Again'}
                  {formStatus === 'idle' && 'Send Message'}
                </motion.button>
              </form>

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-600 text-center"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;