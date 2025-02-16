import React from 'react';

const technologies = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C/C++', 'JavaScript', '.NET', 'Android']
  },
  {
    category: 'Data Science',
    items: ['Data Analytics', 'Machine Learning', 'AI', 'Deep Learning']
  },
  {
    category: 'Web Development',
    items: ['Full-Stack', 'UI/UX Design', 'React.js', 'Mobile Apps']
  },
  {
    category: 'Enterprise',
    items: ['Pega Systems', 'Salesforce', 'SAP', 'Cloud Computing']
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600">
            At AK Group of Companies, we specialize in providing comprehensive development
            and support for academic projects, catering to students pursuing MCA, B.Tech,
            and other technical degrees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {tech.category}
              </h3>
              <ul className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;