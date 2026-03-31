import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';
import './styles/index.css';
import './styles/App.css';

const App: React.FC = () => {
  useReveal();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
