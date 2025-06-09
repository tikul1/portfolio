import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: 'February 2022',
      credentialUrl: '#',
      logo: '🎨',
      description: 'Comprehensive certification covering HTML5, CSS3, responsive design principles, and accessibility standards.'
    },
    {
      name: 'Legacy JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: 'March 2025',
      credentialUrl: '#',
      logo: '⚡',
      description: 'Advanced JavaScript programming, algorithms, data structures, and problem-solving techniques.'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{cert.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Award className="text-yellow-600 mr-2" size={20} />
                    <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-600 mb-3">
                    <span className="font-medium text-blue-600">{cert.issuer}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{cert.description}</p>
                  
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;