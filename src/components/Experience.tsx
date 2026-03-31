import React from 'react';
import { Server, Monitor, ShieldCheck, CloudLightning } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'IT Infrastructure Operations',
      icon: <Server className="text-accent-blue" />,
      description: 'Over 5 years of experience in IT Infrastructure and DevOps operations. Support daily infrastructure operations, platform reliability, service continuity, and operational efficiency.',
      tech: ['Physical Servers', 'Datacenter Ops', 'Reliability'],
    },
    {
      title: 'Virtualization Platform Administration',
      icon: <Monitor className="text-accent-purple" />,
      description: 'Operate and manage enterprise virtualization platforms to support stable and scalable workloads across on-premises environments.',
      tech: ['VMware vSphere', 'OLVM', 'Proxmox'],
    },
    {
      title: 'Storage and Data Protection',
      icon: <ShieldCheck className="text-accent-indigo" />,
      description: 'Manage external storage systems and data protection solutions to strengthen data resilience and operational continuity.',
      tech: ['NetApp', 'Rubrik', 'Backup Ops'],
    },
    {
      title: 'Cloud and Container Platform Support',
      icon: <CloudLightning className="text-accent-blue" />,
      description: 'Work with cloud and container environments, supporting cluster reliability and infrastructure scalability.',
      tech: ['GCP', 'Kubernetes', 'RKE'],
    },
  ];

  return (
    <section id="experience" className="section bg-black/20">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <p className="subtitle">Professional Background</p>
          <h2 className="title">Experience</h2>
        </div>

        <div className="grid grid-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`glass-card p-8 reveal delay-${(index + 1) * 100}`}>
              <div className="w-12 h-12 glass-card flex items-center justify-center mb-6">
                {exp.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{exp.title}</h3>
              <p className="text-text-secondary mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
