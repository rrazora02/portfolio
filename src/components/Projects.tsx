import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Play } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const majorProjects = [
    {
      title: 'Movie Recommendation System',
      description: 'A comprehensive movie recommendation website built with Flask, utilizing machine learning algorithms for personalized recommendations.',
      longDescription: 'This project implements collaborative filtering and content-based filtering algorithms to provide accurate movie recommendations. Built with Flask for the backend, it uses Scikit-learn for ML models, Pandas for data manipulation, and NumPy for numerical computations. The system analyzes user preferences and movie metadata to suggest relevant films.',
      technologies: ['Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Python', 'HTML/CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'major'
    },
    {
      title: 'Breast Cancer Detection Model',
      description: 'ML-powered desktop application using Tkinter for early breast cancer detection with high accuracy predictive modeling.',
      longDescription: 'A comprehensive machine learning solution for breast cancer detection using various ML algorithms including SVM, Random Forest, and Neural Networks. The desktop application features an intuitive Tkinter GUI for easy interaction, data visualization capabilities, and detailed prediction reports with confidence scores.',
      technologies: ['Python', 'Tkinter', 'Scikit-learn', 'TensorFlow', 'Pandas', 'Matplotlib', 'NumPy'],
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'major'
    },
    {
      title: 'Bitcoin & Gold Price Predictor',
      description: 'Advanced time series forecasting model for cryptocurrency and precious metals price prediction using deep learning.',
      longDescription: 'This project implements LSTM networks and other time series forecasting techniques to predict Bitcoin and Gold prices. Features include real-time data fetching, technical indicators analysis, multiple model comparison, and interactive charts for visualization. The system provides confidence intervals and risk assessment for predictions.',
      technologies: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'Matplotlib', 'yfinance', 'Streamlit'],
      image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'major'
    }
  ];

  const minorProjects = [
    {
      title: 'Weather API App',
      description: 'Real-time weather application with location-based forecasts',
      technologies: ['Python', 'API Integration', 'Tkinter'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      category: 'minor'
    },
    {
      title: 'Number Memory Game',
      description: 'Interactive memory training game with progressive difficulty',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      category: 'minor'
    },
    {
      title: 'House Price Predictor',
      description: 'ML model for real estate price prediction',
      technologies: ['Python', 'Scikit-learn', 'Pandas'],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      category: 'minor'
    },
    {
      title: 'CLI Calculator',
      description: 'Advanced command-line calculator with scientific functions',
      technologies: ['Python', 'CLI'],
      image: 'https://images.pexels.com/photos/6424994/pexels-photo-6424994.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      category: 'minor'
    },
    {
      title: 'Name Reversing App',
      description: 'Simple utility app for text manipulation and reversal',
      technologies: ['Python', 'Tkinter'],
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      category: 'minor'
    }
  ];

  const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
        darkMode
          ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50'
          : 'bg-white/30 border-gray-200 hover:bg-white/50'
      } shadow-lg hover:shadow-2xl cursor-pointer`}
      onClick={() => project.category === 'major' && setSelectedProject(project)}
      style={{ perspective: '1000px' }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {project.category === 'major' && (
          <div className="absolute top-4 right-4 flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, '_blank');
              }}
            >
              <Github size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.demo, '_blank');
              }}
            >
              <ExternalLink size={16} />
            </motion.button>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className={`text-xl font-bold mb-3 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>
        
        <p className={`text-sm mb-4 line-clamp-3 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className={`px-3 py-1 text-xs rounded-full ${
                darkMode
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={`px-3 py-1 text-xs rounded-full ${
              darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
            }`}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {project.category === 'major' && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(project);
            }}
          >
            <Play size={16} />
            View Details
          </motion.button>
        )}

        {project.category === 'minor' && (
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, '_blank');
              }}
            >
              <Github size={16} />
              Code
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-blue-500/5 to-purple-500/5" />
      
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
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A showcase of my work in AI/ML, web development, and software engineering
          </p>
        </motion.div>

        {/* Major Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Major Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Minor Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Minor Projects
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {minorProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>

              <div className="p-8">
                <h3 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedProject.title}
                </h3>

                <p className={`text-lg mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className={`text-xl font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          darkMode
                            ? 'bg-gray-800 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(selectedProject.github, '_blank')}
                    className="flex-1 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github size={20} />
                    View Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(selectedProject.demo, '_blank')}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;