import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Infrastructure',
      skills: ['Physical Servers', 'Datacenter Operations', 'System Administration', 'Infrastructure Monitoring', 'Hardware Lifecycle'],
    },
    {
      title: 'Virtualization',
      skills: ['VMware vSphere', 'ESXi / vCenter', 'OLVM', 'Proxmox VE', 'Resource Management'],
    },
    {
      title: 'Storage & Data Protection',
      skills: ['NetApp Storage', 'Rubrik Backup', 'Backup Administration', 'Archiving Solutions', 'Data Resilience'],
    },
    {
      title: 'Cloud & Containers',
      skills: ['Google Cloud Platform (GCP)', 'Kubernetes (K8s)', 'Rancher (RKE)', 'Container Operations', 'Cloud IAM'],
    },
    {
      title: 'DevOps & Operations',
      skills: ['Infrastructure Support', 'Platform Reliability', 'Troubleshooting', 'Performance Tuning', 'High Availability'],
    },
  ];

  return (
    <section id="skills" className="section bg-black/20">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <p className="subtitle">Technical Stack</p>
          <h2 className="title">Core Skills</h2>
        </div>

        <div className="grid grid-3 gap-6">
          {skillCategories.map((cat, index) => (
            <div key={index} className={`glass-card p-8 reveal delay-${(index % 3 + 1) * 100}`}>
              <h3 className="text-xl font-bold mb-6 text-accent-blue">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg hover:border-accent-indigo transition-colors cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></div>
                    <span className="text-sm font-medium text-text-secondary hover:text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
