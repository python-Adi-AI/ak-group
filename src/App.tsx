import React, { useState, createContext } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Team from './components/Team';
import Technologies from './components/Technologies';
import SEO from './components/SEO';

export const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <PrimeReactProvider>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <SEO 
          title="AK Group - Academic & Project Support Services"
          description="Leading provider of academic project support, job training, and technology consulting services in Hyderabad. Expert guidance in AI, Web Development, Data Science, and more."
          keywords="academic projects, job support, technology training, Hyderabad, software development, AI/ML, web development"
        />
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
          <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main>
            <Hero />
            <About />
            <Services />
            <Technologies />
            <Team />
            <Clients />
            <Contact />
          </main>
          <footer className={`${isDark ? 'bg-gray-800' : 'bg-gray-900'} text-white py-8`}>
  <div className="container mx-auto px-4 text-center space-y-4">
    <p>© 2025 AK Group of Companies. All rights reserved.</p>
    <div className="flex justify-center space-x-6">
      <a 
        href="https://wa.me/8341553216" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-green-500 hover:text-green-400"
        aria-label="WhatsApp"
      >
        <i className="pi pi-whatsapp text-2xl"></i>
      </a>
      <a 
        href="https://instagram.com/adi019471" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-pink-500 hover:text-pink-400"
        aria-label="Instagram"
      >
        <i className="pi pi-instagram text-2xl"></i>
      </a>
      <a 
        href="https://linkedin.com/in/Adi@s019471" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:text-blue-400"
        aria-label="LinkedIn"
      >
        <i className="pi pi-linkedin text-2xl"></i>
      </a>
    </div>
    <p className="text-sm">Contact us: <a href="tel:+918341553216" className="underline">+91 8341553216</a></p>
  </div>
</footer>

        </div>
      </ThemeContext.Provider>
    </PrimeReactProvider>
  );
}

export default App;