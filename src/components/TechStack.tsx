import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TechStackProps {
  darkMode: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const techCategories = [
    {
      title: 'Languages',
      technologies: [
        { name: 'Python', icon: '🐍', color: 'from-green-400 to-blue-500' },
        { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-500' },
        { name: 'HTML/CSS', icon: '🌐', color: 'from-orange-400 to-red-500' },
        { name: 'R', icon: '📊', color: 'from-blue-400 to-purple-500' }
      ]
    },
    {
      title: 'AI/ML Frameworks',
      technologies: [
        { name: 'TensorFlow', icon: '🔥', color: 'from-orange-400 to-red-500' },
        { name: 'PyTorch', icon: '⚡', color: 'from-red-400 to-pink-500' },
        { name: 'Scikit-learn', icon: '🤖', color: 'from-blue-400 to-teal-500' },
        { name: 'OpenCV', icon: '👁️', color: 'from-green-400 to-blue-500' },
        { name: 'NumPy', icon: '🔢', color: 'from-blue-400 to-purple-500' },
        { name: 'Pandas', icon: '🐼', color: 'from-purple-400 to-pink-500' }
      ]
    },
    {
      title: 'Web Development',
      technologies: [
        { name: 'Django', icon: '🎸', color: 'from-green-400 to-teal-500' },
        { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-lime-500' },
        { name: 'Flask', icon: '🌶️', color: 'from-gray-400 to-gray-600' },
        { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      technologies: [
        { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-500' },
        { name: 'Kubernetes', icon: '☸️', color: 'from-blue-400 to-purple-500' },
        { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
        { name: 'Jenkins', icon: '🔧', color: 'from-gray-400 to-blue-500' }
      ]
    },
    {
      title: 'Development Tools',
      technologies: [
        { name: 'VS Code', icon: '💻', color: 'from-blue-400 to-purple-500' },
        { name: 'Git/GitHub', icon: '🔀', color: 'from-gray-400 to-black' },
        { name: 'Jupyter', icon: '📓', color: 'from-orange-400 to-red-500' },
        { name: 'Anaconda', icon: '🐍', color: 'from-green-400 to-teal-500' },
        { name: 'Linux', icon: '🐧', color: 'from-gray-400 to-black' }
      ]
    },
    {
      title: 'Databases',
      technologies: [
        { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-teal-500' },
        { name: 'MySQL', icon: '🐬', color: 'from-blue-400 to-orange-500' },
        { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-400 to-purple-500' }
      ]
    }
  ];

  const TechCard: React.FC<{ tech: any; index: number; categoryIndex: number }> = ({ tech, index, categoryIndex }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.05 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
        darkMode
          ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50'
          : 'bg-white/30 border-gray-200 hover:bg-white/50'
      } shadow-lg hover:shadow-xl cursor-pointer group`}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative z-10 text-center">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {tech.icon}
        </div>
        <h3 className={`font-semibold text-sm ${
          darkMode ? 'text-white' : 'text-gray-900'
        } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${tech.color} group-hover:bg-clip-text transition-all duration-300`}>
          {tech.name}
        </h3>
      </div>

      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5`}
        initial={false}
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
      
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
            Tech <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className={`text-2xl font-bold mb-8 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              
              <div className={`grid gap-4 ${
                category.technologies.length <= 4 
                  ? 'grid-cols-2 md:grid-cols-4' 
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
              } max-w-6xl mx-auto`}>
                {category.technologies.map((tech, index) => (
                  <TechCard 
                    key={tech.name} 
                    tech={tech} 
                    index={index} 
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                darkMode ? 'bg-white/10' : 'bg-gray-400/20'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;