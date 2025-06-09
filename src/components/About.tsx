import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Expert in Node.js, Express.js, and API development'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Proficient in MySQL, PostgreSQL, and MongoDB'
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment',
      description: 'Experience with AWS, GCP, and CI/CD pipelines'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Reduced system latency by 40% and improved efficiency'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong teamwork and agile methodology experience'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Data-driven decision making and critical thinking'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about building secure, efficient, and robust backend solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm an innovative backend developer with 2+ years of experience in designing 
                high-performance APIs, scalable database architectures, and cloud-based deployments. 
                My expertise spans across Node.js, Express.js, MySQL, PostgreSQL, MongoDB, and CI/CD pipelines.
              </p>
              <p className="text-lg leading-relaxed">
                Throughout my career, I've successfully reduced system latency by 40% and enhanced 
                deployment efficiency by 35%. I'm passionate about building secure, efficient, 
                and robust backend solutions that drive business growth and improve user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                Currently pursuing my MSc in Data Analytics at De Montfort University, I combine 
                my development skills with data-driven insights to create comprehensive solutions 
                that meet modern business needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600">40%</div>
                <div className="text-gray-600">Latency Reduction</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600">35%</div>
                <div className="text-gray-600">Deployment Efficiency</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;