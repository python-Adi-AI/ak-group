import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

const courses = [
  {
    title: 'Full Stack Development',
    duration: '6 months',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60',
    topics: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: ['Live Projects', 'Job Support', 'Placement Assistance'],
    price: '₹45,000'
  },
  {
    title: 'Data Science & AI',
    duration: '4 months',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60',
    topics: ['Python', 'Machine Learning', 'Deep Learning', 'Data Analysis'],
    features: ['Industry Projects', 'Certification', 'Interview Prep'],
    price: '₹55,000'
  },
  {
    title: 'Cloud Computing',
    duration: '3 months',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
    topics: ['AWS', 'Azure', 'DevOps', 'Kubernetes'],
    features: ['Hands-on Labs', 'Real-time Projects', 'Job Assistance'],
    price: '₹40,000'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Featured Courses</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive training programs designed to enhance your skills and advance your career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge 
                    value={course.level}
                    severity={course.level === 'Advanced' ? 'danger' : 'info'}
                    className="absolute top-4 right-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{course.title}</h3>
                  <div className="flex items-center mb-4">
                    <i className="pi pi-clock mr-2 text-blue-500"></i>
                    <span className="text-gray-600 dark:text-gray-300">{course.duration}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 dark:text-gray-200">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 dark:text-gray-200">Features:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <i className="pi pi-check-circle text-green-500 mr-2"></i>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {course.price}
                    </span>
                    <Button 
                      label="Enroll Now" 
                      className="p-button-rounded p-button-primary"
                      icon="pi pi-arrow-right"
                      iconPos="right"
                    />
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

export default Courses;