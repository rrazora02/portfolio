import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Add icon imports

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'R', level: 75 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Django', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'OpenCV', level: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Jenkins', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 85 }
      ]
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 }
      ]
    }
  ];

  const skillIconMap: Record<string, string> = {
    'Python': '/python.png',
    'JavaScript': '/java-script.png',
    'HTML/CSS': '', // handled separately
    'R': '/icons8-r-50.png',
    'TensorFlow': '/icons8-tensorflow-48.png',
    'PyTorch': '/icons8-pytorch-50.png',
    'Django': '/icons8-django-50.png',
    'Node.js': '/icons8-node-js-50.png',
    'Scikit-learn': '',
    'OpenCV': '/icons8-opencv-50.png',
    'Docker': '/icons8-docker-logo-50.png',
    'Kubernetes': '/icons8-kubernetes-50.png',
    'Git/GitHub': '/icons8-github-50.png',
    'Jenkins': '/icons8-jenkins-48.png',
    'VS Code': '/icons8-visual-studio-code-2019-50.png',
    'Linux': '/icons8-kali-linux-48.png',
    'AWS': '/icons8-aws-logo-48.png',
    'MongoDB': '/icons8-mongodb-50.png',
    'MySQL': '/icons8-mysql-logo-50.png',
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5" />
      
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
            Skills & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A comprehensive overview of my technical skills and proficiency levels across various technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className={`p-8 rounded-2xl backdrop-blur-sm border ${
                darkMode
                  ? 'bg-gray-800/30 border-gray-700'
                  : 'bg-white/30 border-gray-200'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <h3 className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl cursor-pointer ${
                      darkMode
                        ? 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500'
                        : 'bg-white/50 border-gray-300 text-gray-700 hover:bg-white/70 hover:border-purple-500'
                    }`}
                  >
                    {skill.name === 'HTML/CSS' ? (
                      <>
                        <img src="/icons8-html-5-48.png" alt="HTML5" className="w-6 h-6 inline-block mr-1 align-middle" />
                        <img src="/icons8-css-logo-48.png" alt="CSS3" className="w-6 h-6 inline-block mr-2 align-middle" />
                        HTML/CSS
                      </>
                    ) : skillIconMap[skill.name] ? (
                      <>
                        <img src={skillIconMap[skill.name]} alt={skill.name} className="w-6 h-6 inline-block mr-2 align-middle" />
                        {skill.name}
                      </>
                    ) : skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Soft Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Communication', 'English Speaking', 'Teamwork', 'Adaptability', 'Problem Solving', 'Leadership'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500'
                    : 'bg-white/50 border-gray-300 text-gray-700 hover:bg-white/70 hover:border-purple-500'
                } shadow-lg hover:shadow-xl`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;