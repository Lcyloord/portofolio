import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    // Construct email parameters
    const subject = `Portfolio Contact from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Open default mail client
    window.location.href = `mailto:ikhsan.adzima@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section relative bg-[#0a0c10] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>

      <div className="container relative z-10 reveal">
        <div className="text-center mb-16">
          <h2 className="title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-4">
            Have a project in mind or want to discuss infrastructure solutions?
            Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column - Info */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-5 h-5 bg-red-600 rounded-sm transform -skew-x-12"></div>
                  <div className="w-5 h-5 bg-gray-200 rounded-sm transform -skew-x-12 mix-blend-multiply"></div>
                </div>
                <span className="text-3xl font-bold tracking-widest text-white ml-2 uppercase">IKHSAN<sup className="text-sm font-normal opacity-70">&reg;</sup></span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                I am an IT Infrastructure and DevOps professional with more than five years of experience supporting enterprise environments.
                Available for consultations, projects, or full-time opportunities. Send me a message through this form!
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 blur-3xl"></div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-text-secondary ml-1">First Name</label>
                  <input type="text" placeholder="First Name" className="form-input w-full" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-text-secondary ml-1">Last Name</label>
                  <input type="text" placeholder="Last Name" className="form-input w-full" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-text-secondary ml-1">Email Address</label>
                <input type="email" placeholder="Youremail@example.com" className="form-input w-full" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-text-secondary ml-1">Message</label>
                <textarea placeholder="How can I help you?" rows={5} className="form-input resize-none w-full block" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full justify-center py-4 mt-4 glow-accent">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

