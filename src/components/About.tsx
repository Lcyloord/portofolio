import React from 'react';
import { Mail, Linkedin, Github, FileText, Phone, ExternalLink, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="subtitle">About Me</p>
            <h2 className="title">Reliability & Efficiency</h2>
            <div className="space-y-6 text-text-secondary text-lg">
              <p>
                I am an IT Infrastructure and DevOps professional with more than five years of experience supporting enterprise environments across physical infrastructure, virtualization, storage, backup, and cloud platforms.
              </p>
              <p>
                My work focuses on maintaining reliable systems, optimizing operational efficiency, and supporting modern infrastructure across on-premises and cloud-native ecosystems.
              </p>
              <p>
                I enjoy building stable platforms, solving infrastructure challenges, and contributing to environments that demand reliability, scalability, and continuous improvement.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 reveal delay-300">
              <a href="/resume.pdf" className="btn btn-primary glow-accent">
                <FileText size={18} />
                Download CV
              </a>
            </div>
          </div>

          <div className="reveal delay-200">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="bento-grid">
              {/* Email */}
              <a href="#contact" className="bento-card email" style={{ minHeight: '180px', padding: '1.25rem' }}>
                <ExternalLink className="external-icon" size={20} strokeWidth={2} />
                <div className="bento-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '12px' }}>
                  <Mail size={24} strokeWidth={2.5} color="#1e3a8a" />
                </div>
                <div className="bento-card-content" style={{ marginTop: '1.5rem', paddingTop: '0' }}>
                  <h3 className="bento-title" style={{ fontSize: '1.1rem' }}>Email</h3>
                  <p className="bento-subtitle" style={{ fontSize: '0.85rem' }}>ikhsan.adzima@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ikhsan-fauzan-adzima-45550918b/" target="_blank" rel="noopener noreferrer" className="bento-card linkedin" style={{ minHeight: '180px', padding: '1.25rem' }}>
                <ExternalLink className="external-icon" size={20} strokeWidth={2} />
                <div className="bento-icon-wrapper" style={{ background: 'transparent', width: '48px', height: '48px', margin: 0, justifyContent: 'flex-start' }}>
                  <Linkedin size={36} strokeWidth={0} fill="white" />
                </div>
                <div className="bento-card-content" style={{ marginTop: '1.5rem', paddingTop: '0' }}>
                  <h3 className="bento-title" style={{ fontSize: '1.1rem' }}>LinkedIn</h3>
                  <p className="bento-subtitle" style={{ fontSize: '0.85rem' }}>Ikhsan Fauzan Adzima</p>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Lcyloord?tab=repositories" target="_blank" rel="noopener noreferrer" className="bento-card github" style={{ minHeight: '180px', padding: '1.25rem' }}>
                <ExternalLink className="external-icon" size={20} strokeWidth={2} />
                <div className="bento-card-header" style={{ gap: '0.5rem' }}>
                  <div className="bento-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%' }}>
                    <Github size={28} strokeWidth={0} fill="black" />
                  </div>
                  <span className="bento-btn-follow" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>Follow</span>
                </div>
                <div className="bento-card-content" style={{ marginTop: '1.5rem', paddingTop: '0' }}>
                  <h3 className="bento-title" style={{ fontSize: '1.1rem' }}>GitHub</h3>
                  <p className="bento-subtitle" style={{ fontSize: '0.85rem' }}>Lcyloord</p>
                </div>
              </a>

              {/* Phone */}
              <a href="https://wa.me/6285155107116" target="_blank" rel="noopener noreferrer" className="bento-card phone" style={{ minHeight: '180px', padding: '1.25rem' }}>
                <ExternalLink className="external-icon" size={20} strokeWidth={2} />
                <div className="bento-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '12px' }}>
                  <Phone size={24} strokeWidth={2.5} color="#059669" />
                </div>
                <div className="bento-card-content" style={{ marginTop: '1.5rem', paddingTop: '0' }}>
                  <h3 className="bento-title" style={{ fontSize: '1.1rem' }}>Phone</h3>
                  <p className="bento-subtitle" style={{ fontSize: '0.85rem' }}>+62 8515-5107-116</p>
                </div>
              </a>

              {/* Location */}
              <div className="bento-card location" style={{ minHeight: '180px', padding: '1.25rem', gridColumn: '1 / -1', background: 'linear-gradient(145deg, #4c1d95 0%, #2e1065 100%)' }}>
                <div className="bento-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '12px' }}>
                  <MapPin size={24} strokeWidth={2.5} color="#7c3aed" />
                </div>
                <div className="bento-card-content" style={{ marginTop: '1.5rem', paddingTop: '0' }}>
                  <h3 className="bento-title" style={{ fontSize: '1.1rem' }}>Location</h3>
                  <p className="bento-subtitle" style={{ fontSize: '0.85rem' }}>Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
