import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold font-manrope tracking-tighter">
          <span className="text-gradient">IFA</span>.INFRA
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="/resume.pdf" className="btn btn-primary text-sm glow-accent">
            <Download size={16} />
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-nav transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 py-6 border-b' : 'max-h-0'}`}>
        <nav className="container flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-text-secondary hover:text-accent-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/resume.pdf" className="btn btn-primary justify-center">
            <Download size={18} />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
