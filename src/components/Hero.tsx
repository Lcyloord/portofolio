import React from 'react';
import { Server, Cloud, Shield, Database, Layout } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white-02 select-none pointer-events-none tracking-tighter whitespace-nowrap">
        INFRASTRUCTURE
      </div>

      <div className="container relative z-10 grid md:grid-cols-2 items-center gap-16">
        <div className="reveal">
          <h1 className="title reveal delay-100">
            Hello, I'm <span className="text-gradient">Ikhsan Fauzan Adzima</span>
          </h1>
          <p className="subtitle reveal delay-200 mt-[-1rem] mb-6">IT Infrastructure & DevOps Engineer</p>

          <p className="description mb-8 reveal delay-300">
            I specialize in managing physical servers, virtualization platforms, storage systems, backup solutions, and cloud-native infrastructure. I build and support reliable, scalable, and efficient environments across on-premises and cloud platforms.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 reveal delay-400">
            <a href="#projects" className="btn btn-primary glow-accent">
              <Layout size={18} />
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 reveal delay-500">
            <div className="glass-card p-4 text-center">
              <p className="text-2xl font-bold text-accent-blue">5+</p>
              <p className="text-xs text-text-secondary uppercase">Years Exp</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-lg font-bold">VMware</p>
              <p className="text-xs text-text-secondary uppercase">Virtualization</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-lg font-bold">GCP</p>
              <p className="text-xs text-text-secondary uppercase">Cloud</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-lg font-bold">NetApp</p>
              <p className="text-xs text-text-secondary uppercase">Storage</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center reveal delay-300">
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
            {/* Glow Effect Background */}
            <div className="absolute inset-0 bg-accent-indigo opacity-20 blur-[120px] rounded-full animate-pulse"></div>

            {/* Rotating Tech Icons Circle */}
            <div className="absolute inset-0 border border-white/10 rounded-full spin-slow">
              <div
                className="absolute glass-card p-3 spin-slow-reverse"
                style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <Cloud className="text-accent-blue" size={24} />
              </div>
              <div
                className="absolute glass-card p-3 spin-slow-reverse"
                style={{ bottom: '0', left: '50%', transform: 'translate(-50%, 50%)' }}
              >
                <Database className="text-accent-purple" size={24} />
              </div>
              <div
                className="absolute glass-card p-3 spin-slow-reverse"
                style={{ left: '0', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <Server className="text-accent-indigo" size={24} />
              </div>
              <div
                className="absolute glass-card p-3 spin-slow-reverse"
                style={{ right: '0', top: '50%', transform: 'translate(50%, -50%)' }}
              >
                <Shield className="text-accent-blue" size={24} />
              </div>
            </div>

            {/* Profile Photo Circle */}
            <div className="absolute inset-12 lg:inset-16 rounded-full overflow-hidden border-2 border-white/10 glass-card p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
