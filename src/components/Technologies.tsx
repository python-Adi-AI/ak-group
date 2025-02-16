import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'primereact/card';

const technologies = [
  {
    name: 'Web Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    tools: ['React', 'Angular', 'Vue.js', 'Node.js', 'Django']
  },
  {
    name: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&auto=format&fit=crop&q=60',
    tools: ['React Native', 'Flutter', 'Android', 'iOS', 'Kotlin']
  },
  {
    name: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    tools: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas']
  },
  {
    name: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60',
    tools: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
  },
  {
    name: 'DevOps',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=60',
    tools: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus']
  },
  {
    name: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60',
    tools: ['Ethereum', 'Solidity', 'Web3.js', 'Smart Contracts', 'DApps']
  }
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 dark:text-white"
        >
          Our Technology Stack
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full dark:bg-gray-800"
                header={
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                        {tech.name}
                      </h3>
                    </div>
                  </div>
                }
              >
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;