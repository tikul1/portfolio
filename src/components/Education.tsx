import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'MSc in Data Analytics (IT)',
      institution: 'De Montfort University',
      location: 'Leicester, UK',
      period: 'Expected June 2025',
      status: 'In Progress',
      description: 'Advanced studies in data analytics, machine learning, and IT systems with focus on practical applications in business intelligence.',
      highlights: [
        'Data Mining and Machine Learning',
        'Business Intelligence Systems',
        'Statistical Analysis and Modeling',
        'Big Data Technologies'
      ]
    },
    {
      degree: 'MSc in Information Technology (IMS)',
      institution: 'Gujarat University',
      location: 'Gujarat, India',
      period: '2019',
      status: 'Completed',
      description: 'Comprehensive study of information technology systems, software development, and database management.',
      highlights: [
        'Software Engineering Principles',
        'Database Management Systems',
        'Network Security',
        'System Analysis and Design'
      ]
    },
    {
      degree: 'BE in Information Technology',
      institution: 'Kalol Institute of Technology',
      location: 'Gujarat, India',
      period: '2016',
      status: 'Completed',
      description: 'Foundation in computer science and information technology with emphasis on programming and system development.',
      highlights: [
        'Programming Fundamentals',
        'Data Structures and Algorithms',
        'Computer Networks',
        'Software Development Life Cycle'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="text-blue-600 mr-3" size={28} />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                        <div className="flex items-center space-x-1 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'In Progress' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 mb-2">
                      <span className="font-semibold text-lg text-blue-600">{edu.institution}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-gray-600 mb-4">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award size={18} className="mr-2 text-yellow-600" />
                    Key Areas of Study:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2 text-gray-700">
                        <span className="text-blue-500 text-sm">●</span>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;