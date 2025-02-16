import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Rating } from 'primereact/rating';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Software Engineer at Google',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60',
    rating: 5,
    text: 'The project support and mentoring from AK Group were instrumental in landing my dream job. Their practical approach and industry-relevant guidance made all the difference.'
  },
  {
    name: 'Priya Patel',
    role: 'Data Scientist at Amazon',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
    rating: 5,
    text: 'Excellent training program in Data Science. The hands-on projects and job support helped me transition into a data science role smoothly.'
  },
  {
    name: 'Amit Kumar',
    role: 'Full Stack Developer at Microsoft',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
    rating: 5,
    text: 'The full stack development course was comprehensive and up-to-date with industry standards. The project-based learning approach was very effective.'
  },
  {
    name: 'Neha Singh',
    role: 'Cloud Architect at IBM',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60',
    rating: 5,
    text: 'Great experience with their cloud computing course. The practical exposure to real-world scenarios was invaluable for my career growth.'
  }
];

const Testimonials = () => {
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const testimonialTemplate = (testimonial: any) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4"
      >
        <Card className="h-full dark:bg-gray-800">
          <div className="flex flex-col items-center text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <Rating value={testimonial.rating} readOnly stars={5} cancel={false} className="mb-4" />
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
            <h3 className="text-xl font-semibold dark:text-white">{testimonial.name}</h3>
            <p className="text-blue-600 dark:text-blue-400">{testimonial.role}</p>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Success Stories</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our alumni who have successfully transformed their careers through our programs
          </p>
        </motion.div>

        <Carousel
          value={testimonials}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={testimonialTemplate}
          circular
          autoplayInterval={5000}
          className="custom-carousel"
        />
      </div>
    </section>
  );
};

export default Testimonials;