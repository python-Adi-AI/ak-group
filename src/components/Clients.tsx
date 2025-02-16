import React from 'react';

const clients = [
  {
    name: 'Write4U',
    description: 'Content development company specializing in generative AI',
    website: 'WRITE4UINDIA.COM'
  },
  {
    name: 'SS Planners and Constructions',
    description: 'GHMC licensed engineers and architects',
    website: 'SSPLANNERSANDCONSTRUCTIONS.COM'
  },
  {
    name: 'Rakesh Builders',
    description: 'Residential and commercial construction',
    website: 'BUILDERS.99ACRES.COM'
  },
  {
    name: 'S2S Projects',
    description: 'Modern construction solutions',
    website: 'S2SPROJECTS.COM'
  }
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Esteemed Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {client.name}
              </h3>
              <p className="text-gray-600 mb-4">{client.description}</p>
              <a
                href={`https://${client.website.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                {client.website}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;