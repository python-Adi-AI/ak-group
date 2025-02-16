import React from 'react';
import { Code, BookOpen, Users, Building2 } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Project Development',
    description: 'Tailored solutions for academic projects across various domains and technologies.'
  },
  {
    icon: BookOpen,
    title: 'Technical Training',
    description: 'Hands-on workshops and training sessions to enhance practical skills.'
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Guidance from industry experts to navigate project challenges effectively.'
  },
  {
    icon: Building2,
    title: 'Resource Provision',
    description: 'Access to necessary tools, software, and documentation for project completion.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;