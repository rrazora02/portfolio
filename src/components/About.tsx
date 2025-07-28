import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Cloud, Rocket } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Focus',
      description: 'Deep learning, neural networks, and intelligent systems'
    },
    {
      icon: Cloud,
      title: 'MLOps & Cloud',
      description: 'AWS, Docker, Kubernetes for scalable ML pipelines'
    },
    {
      icon: Code,
      title: 'Full-Stack Dev',
      description: 'Python, JavaScript, backend systems, and APIs'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Building impactful solutions for real-world problems'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
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
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`prose prose-lg ${
              darkMode ? 'prose-invert' : ''
            } max-w-none`}>
              <p className={`text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I am <strong className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Rohan Rajora</strong>, an ardent enthusiast in the fields of Artificial Intelligence (AI), Machine Learning (ML), and MLOps, currently pursuing a Bachelor’s degree in Engineering, presently in my third year. My journey in the realm of technology is propelled by a profound interest in artificial intelligence and its capacity to address intricate real-world challenges.
              </p>

              <p className={`text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My expertise encompasses the development of machine learning algorithms, cloud computing technologies, and backend systems, all aimed at creating scalable and impactful solutions. My experience ranges from crafting predictive models to their deployment in production environments, utilizing contemporary MLOps methodologies.
              </p>

              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Outside of programming, I engage in reviewing the latest AI research literature, contribute to open-source projects, and participate in hackathons to explore the potential of technology further.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                    : 'bg-white/50 border-gray-200 hover:bg-white/70'
                } shadow-lg hover:shadow-xl`}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-3">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className={`font-semibold text-lg mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;