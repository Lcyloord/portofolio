import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/60">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-bold font-manrope mb-1">Ikhsan Fauzan Adzima</h4>
          <p className="text-sm text-text-secondary">IT Infrastructure & DevOps Engineer</p>
        </div>
        
        <p className="text-xs text-text-secondary flex items-center gap-1.5 order-3 md:order-2">
          Built with <Heart size={14} className="text-accent-purple" /> and a passion for resilient infrastructure.
        </p>
        
        <p className="text-sm text-text-secondary order-2 md:order-3">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
