import React from 'react';
import { ExternalLink, Github, Layers, Shield, Database, Cloud, Terminal } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'VMware Infrastructure Management',
      category: 'Virtualization',
      icon: <Layers className="text-accent-blue" />,
      description: 'Managed virtualization environments across VMware, OLVM, and Proxmox to support stable and scalable enterprise workloads.',
      tech: ['ESXi', 'vCenter', 'vSAN'],
    },
    {
      title: 'Rubrik Backup Administration',
      category: 'Backup',
      icon: <Shield className="text-accent-purple" />,
      description: 'Supported backup and recovery operations using Rubrik to strengthen data protection and operational resilience.',
      tech: ['Rubrik', 'Disaster Recovery', 'SLA'],
    },
    {
      title: 'NetApp Storage Support',
      category: 'Storage',
      icon: <Database className="text-accent-indigo" />,
      description: 'Worked with NetApp storage systems to support archiving and storage management requirements.',
      tech: ['NetApp ONTAP', 'SAN/NAS', 'Archiving'],
    },
    {
      title: 'Kubernetes Cluster Operations',
      category: 'Kubernetes',
      icon: <Terminal className="text-accent-blue" />,
      description: 'Assisted with daily operations in GCP and Kubernetes environments, including cluster support and workload reliability.',
      tech: ['K8s', 'Helm', 'Prometheus'],
    },
    {
      title: 'GCP Infrastructure Support',
      category: 'Cloud',
      icon: <Cloud className="text-accent-purple" />,
      description: 'Managed and monitored infrastructure resources in Google Cloud Platform for high-availability services.',
      tech: ['GCE', 'GKE', 'IAM'],
    },
    {
      title: 'RKE Platform Management',
      category: 'DevOps',
      icon: <Layers className="text-accent-indigo" />,
      description: 'Supported container infrastructure using Rancher Kubernetes Engine (RKE) for platform operations and orchestration.',
      tech: ['RKE', 'Rancher', 'Docker'],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
          <div>
            <p className="subtitle">Selected Work</p>
            <h2 className="title">Projects & Operations</h2>
          </div>
          <p className="description mb-4">
            Highlights of infrastructure initiatives and platform operations management.
          </p>
        </div>

        <div className="grid grid-3 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className={`glass-card p-8 group reveal delay-${(index % 3 + 1) * 100}`}>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:scale-110">
                  {proj.icon}
                </div>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Github size={20} className="text-text-secondary hover:text-white cursor-pointer" />
                  <ExternalLink size={20} className="text-text-secondary hover:text-white cursor-pointer" />
                </div>
              </div>
              <span className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-2 block">{proj.category}</span>
              <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
              <p className="text-text-secondary text-sm mb-6 line-clamp-3">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold text-text-primary px-2 py-1 bg-white/5 border border-white/10 rounded uppercase">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
