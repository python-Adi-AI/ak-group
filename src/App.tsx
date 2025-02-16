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
            <div className="container mx-auto px-4 text-center">
              <p>© 2025 AK Group of Companies. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </ThemeContext.Provider>
    </PrimeReactProvider>
  );
}

export default App;