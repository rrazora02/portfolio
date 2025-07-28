import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award, FileText, Calendar, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      type: 'internship',
      title: 'ML Engineer Intern',
      company: 'Code Craft',
      duration: '2024',
      description: 'Built and optimized machine learning models for predictive analysis and automated pipeline development. Worked with cross-functional teams to deploy ML solutions in production environments.',
      achievements: [
        'Developed predictive models with 92% accuracy',
        'Automated ML pipeline reducing processing time by 40%',
        'Collaborated on 3 major client projects'
      ],
      icon: Briefcase
    }
  ];

  const certifications = [
    {
      title: 'EXIN BCS AI Certificate',
      issuer: 'EXIN',
      year: '2024',
      description: 'Comprehensive certification covering AI fundamentals, machine learning algorithms, and ethical AI practices.',
      icon: Award
    }
  ];

  const research = [
    {
      title: 'A Review on the Role of Machine Learning in Enhancing Cybersecurity: Techniques, Challenges, and Applications',
      status: 'Yet to be published',
      description: 'Comprehensive review paper examining the intersection of machine learning and cybersecurity, analyzing current techniques, identifying challenges, and proposing future applications.',
      keywords: ['Machine Learning', 'Cybersecurity', 'Threat Detection', 'AI Security'],
      icon: FileText
    }
  ];

  const achievements = [
    {
      title: 'Google Cloud Sprint 2.0',
      type: 'Hackathon',
      year: '2024',
      description: 'Participated in Google Cloud focused development sprint',
      icon: Award
    },
    {
      title: 'CodeRad 4.0',
      type: 'Hackathon',
      year: '2024',
      description: 'Competitive programming and development challenge',
      icon: Award
    },
    {
      title: 'Innovation Sprint Hackathon',
      type: 'Competition',
      year: '2024',
      description: '4th Place - Innovative solution development competition',
      position: '4th Place',
      icon: Award
    },
    {
      title: 'EXIN Certified AI Professional',
      type: 'Certification',
      year: '2024',
      description: 'Professional certification in artificial intelligence',
      icon: Award
    }
  ];

  const timeline = [
    {
      year: '1st Year',
      title: 'Foundation Building',
      description: 'Mastered Python fundamentals and web technologies (HTML/CSS)',
      technologies: ['Python', 'HTML', 'CSS', 'Programming Basics']
    },
    {
      year: '2nd Year',
      title: 'ML & Development',
      description: 'Dove deep into machine learning, APIs, and built first projects',
      technologies: ['Machine Learning', 'APIs', 'Data Science', 'Project Development']
    },
    {
      year: '3rd Year',
      title: 'Advanced Systems',
      description: 'Full-stack ML projects, cloud technologies, and MLOps practices',
      technologies: ['MLOps', 'Cloud Computing', 'Full-Stack', 'DevOps']
    }
  ];

  const SectionCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
        darkMode
          ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50'
          : 'bg-white/30 border-gray-200 hover:bg-white/50'
      } shadow-lg hover:shadow-xl`}
    >
      {children}
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-teal-500/5" />
      
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
            Experience & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {/* Experience Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <Briefcase className="text-purple-600" size={28} />
              Professional Experience
            </motion.h3>
            
            {experiences.map((exp, index) => (
              <SectionCard key={exp.title} delay={0.3 + index * 0.1}>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <exp.icon className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className={`text-xl font-bold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.title}
                        </h4>
                        <p className="text-purple-600 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className={`text-sm flex items-center gap-2 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <Award className="text-blue-600" size={28} />
              Certifications
            </motion.h3>
            
            {certifications.map((cert, index) => (
              <SectionCard key={cert.title} delay={0.5 + index * 0.1}>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className={`text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {cert.title}
                      </h4>
                      <div className="text-sm text-gray-500">{cert.year}</div>
                    </div>
                    <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                    <p className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          {/* Research Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <FileText className="text-teal-600" size={28} />
              Research & Publications
            </motion.h3>
            
            {research.map((paper, index) => (
              <SectionCard key={paper.title} delay={0.7 + index * 0.1}>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center flex-shrink-0">
                    <paper.icon className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {paper.title}
                    </h4>
                    <div className="text-teal-600 font-semibold mb-3">
                      Status: {paper.status}
                    </div>
                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {paper.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className={`px-3 py-1 text-xs rounded-full ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          {/* Achievements & Hackathons */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <Award className="text-orange-600" size={28} />
              Achievements & Hackathons
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50'
                      : 'bg-white/30 border-gray-200 hover:bg-white/50'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="text-white" size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`font-bold mb-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {achievement.title}
                        {achievement.position && (
                          <span className="ml-2 text-orange-600 text-sm">
                            ({achievement.position})
                          </span>
                        )}
                      </h4>
                      <div className="text-sm text-orange-600 font-medium mb-2">
                        {achievement.type} • {achievement.year}
                      </div>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Learning Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <Calendar className="text-green-600" size={28} />
              Learning Timeline
            </motion.h3>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-teal-600" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
                    className="relative flex items-start gap-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-sm text-center leading-tight">
                        {item.year}
                      </span>
                    </div>
                    
                    <div className={`flex-1 p-6 rounded-xl backdrop-blur-sm border ${
                      darkMode
                        ? 'bg-gray-800/30 border-gray-700'
                        : 'bg-white/30 border-gray-200'
                    } shadow-lg`}>
                      <h4 className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`mb-4 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
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
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;