import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'Indian Roosters Restaurant Group',
      location: 'Leicester, United Kingdom',
      period: 'June 2024 – February 2025',
      website: 'indianrooster.uk',
      description: 'Analyzing sales and order data from multiple branches to identify trends and optimize operations.',
      achievements: [
        'Analyzed sales/order data from multiple branches to identify top-performing items and trends',
        'Used Python & Excel for pricing optimization → +15% profit, reduced food waste',
        'Built Power BI dashboards for performance tracking',
        'Designed weekly KPI reports for delivery and cost efficiency'
      ],
      technologies: ['Python', 'Excel', 'Power BI', 'Data Analysis', 'KPI Reporting']
    },
    {
      title: 'Associate Software Developer',
      company: 'Atoz Infoway',
      location: 'Remote',
      period: 'March 2023 – January 2024',
      website: 'atozinfoway.com',
      description: 'Developed scalable web applications and optimized system performance for various clients.',
      achievements: [
        'Developed a food delivery app with Node.js & PostgreSQL (↓ order processing time by 40%)',
        'Built a CRM for pharmacies → +50% customer tracking efficiency',
        'Optimized websites (↑ site speed by 30%) using SQL queries',
        'Automated CI/CD pipelines → 35% faster deployments'
      ],
      technologies: ['Node.js', 'PostgreSQL', 'SQL', 'CI/CD', 'CRM Development']
    },
    {
      title: 'Software Developer Intern',
      company: 'WebEarl Technologies',
      location: 'Remote',
      period: 'June 2016 – June 2017',
      website: 'webearl.com',
      description: 'Developed dynamic web applications and implemented modern development practices.',
      achievements: [
        'Developed dynamic web apps using Laravel, React.js, Node.js, MySQL, and PostgreSQL',
        'Created REST APIs for improved system scalability',
        'Applied Git version control, CI/CD, and cloud deployment techniques'
      ],
      technologies: ['Laravel', 'React.js', 'Node.js', 'MySQL', 'PostgreSQL', 'REST APIs', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-600 mb-2">
                          <div className="flex items-center space-x-1">
                            <Briefcase size={16} />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          {exp.website && (
                            <a
                              href={`https://${exp.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              <ExternalLink size={16} />
                              <span>{exp.website}</span>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-600 mt-2 md:mt-0">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <TrendingUp size={18} className="mr-2 text-green-600" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-gray-700">
                              <span className="text-green-500 mt-1.5 text-sm">●</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;