import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
              <p>Address: AK Group of Companies, Flat No. 302, Mahesh Enclave Apartments, Bahadurpally, Gandimaisamma, Hyderabad, Telangana, 500043 (near South Indian Bank, opposite)</p>

              </p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 83415 53216</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">accadamic.info2023@gmail.com</p>
              <p className="text-gray-600">pythonadi.k@gmail.com</p>
            </div>
          </div>

          <div className="mt-16">
            <iframe
              title="AK Group Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6607803493396!2d78.4906!3d17.5434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMyJzM2LjIiTiA3OMKwMjknMjYuNiJF!5e0!3m2!1sen!2sin!4v1635835824000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;