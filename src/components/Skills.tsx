import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Globe, Server, Brain, Users, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Node.js', level: 92 },
        { name: 'SAS', level: 75 }
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Git/GitHub', level: 95 }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'TypeScript', level: 82 },
        { name: 'Next.js', level: 78 }
      ]
    },
    {
      title: 'Databases & Cloud',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MySQL', level: 95 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Elasticsearch', level: 75 }
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'GCP', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD Pipelines', level: 88 }
      ]
    },
    {
      title: 'Data Libraries',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Pandas', level: 88 },
        { name: 'NumPy', level: 85 },
        { name: 'Matplotlib', level: 82 },
        { name: 'XGBoost', level: 78 }
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem-Solving', icon: Brain },
    { name: 'Critical Thinking', icon: Target },
    { name: 'Data-Driven Decision-Making', icon: Database },
    { name: 'Teamwork', icon: Users },
    { name: 'Agile Methodology', icon: Target },
    { name: 'Project Management', icon: Users }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <skill.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 text-sm text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;