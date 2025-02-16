import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'primereact/card';

const team = [
  {
    name: 'Dr. Arun Kumar',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60',
    expertise: ['AI/ML', 'Enterprise Architecture', 'Project Management'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Priya Sharma',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60',
    expertise: ['Full Stack Development', 'Cloud Architecture', 'DevOps'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Rajesh Verma',
    role: 'Lead Data Scientist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60',
    expertise: ['Machine Learning', 'Deep Learning', 'Data Analytics'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Sneha Patel',
    role: 'UI/UX Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60',
    expertise: ['User Experience', 'Interface Design', 'Product Strategy'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 dark:text-white"
        >
          Our Expert Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full dark:bg-gray-700">
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <div className="absolute bottom-4 left-4 flex space-x-3">
                      <a href={member.social.linkedin} className="text-white hover:text-blue-400">
                        <i className="pi pi-linkedin text-xl"></i>
                      </a>
                      <a href={member.social.twitter} className="text-white hover:text-blue-400">
                        <i className="pi pi-twitter text-xl"></i>
                      </a>
                      <a href={member.social.github} className="text-white hover:text-blue-400">
                        <i className="pi pi-github text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;