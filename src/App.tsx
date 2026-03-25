/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Trophy, 
  MapPin, 
  Phone, 
  Mail, 
  Youtube, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Users, 
  User, 
  Calendar, 
  Zap,
  Menu,
  X
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 bg-primary rounded-full border-2 border-secondary shadow-lg"></div>
    <div className="relative z-10 flex flex-col items-center justify-center">
      <Trophy className="text-secondary w-1/2 h-1/2" />
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-12 h-12" />
          <span className="text-white font-black text-2xl tracking-tighter uppercase leading-none border-l-2 border-secondary/30 pl-3">
            Star <span className="text-secondary">Cricket</span> Academy
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/90 hover:text-secondary font-medium transition-colors text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop" 
          alt="Cricket Stadium" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-6 tracking-tighter">
            Master Your Game at <br/>
            <span className="text-secondary">Star Cricket Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 font-light max-w-2xl mx-auto">
            Professional Coaching in Mumbai for Future Champions. Elevate your skills with elite training.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-secondary text-primary font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 rounded-sm w-full sm:w-auto"
            >
              Book Free Session
            </a>
            <a 
              href="#programs" 
              className="px-8 py-4 border-2 border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-sm w-full sm:w-auto"
            >
              View Programs
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-secondary rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Personal Coaching",
      price: "₹12,000",
      period: "Monthly",
      details: ["12 Sessions (3/week)", "1 Hour Duration", "One-on-One Training"],
      icon: <User className="w-8 h-8 text-secondary" />,
      featured: true
    },
    {
      title: "Ground/Group Coaching",
      price: "₹3,000",
      period: "Monthly",
      details: ["12 Sessions (3/week)", "2 Hours Duration", "Team Environment"],
      icon: <Users className="w-8 h-8 text-secondary" />,
      featured: false
    },
    {
      title: "Weekend Special",
      price: "₹2,500",
      period: "Monthly",
      details: ["Sat-Sun (8 Sessions)", "2 Hours Duration", "Intensive Training"],
      icon: <Calendar className="w-8 h-8 text-secondary" />,
      featured: false
    },
    {
      title: "Special Training",
      price: "",
      period: "",
      details: [
        "Single Personal Coaching: ₹1,500/-",
        "RoboArm Training: ₹1,200/-"
      ],
      icon: <Zap className="w-8 h-8 text-secondary" />,
      featured: false
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-4">Coaching Programs</h2>
          <div className="w-20 h-2 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-slate max-w-2xl mx-auto text-lg">
            We offer specialized training modules designed to cater to every level of aspiring cricketers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className={`p-8 border-t-4 relative flex flex-col ${program.featured ? 'border-secondary bg-primary text-white' : 'border-primary bg-gray-50 text-primary'} shadow-xl rounded-b-lg`}
            >
              <div className="mb-6">{program.icon}</div>
              <h3 className="text-xl font-bold uppercase mb-4">{program.title}</h3>
              
              {program.price && (
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black">{program.price}</span>
                  <span className={`text-sm ${program.featured ? 'text-white/60' : 'text-neutral-slate'}`}>/ {program.period}</span>
                </div>
              )}

              <ul className={`space-y-3 mb-8 ${!program.price ? 'mt-2' : ''}`}>
                {program.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium">
                    <ChevronRight className="w-4 h-4 text-secondary shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button className={`w-full py-3 font-bold uppercase tracking-widest text-sm transition-all ${program.featured ? 'bg-secondary text-primary hover:bg-white' : 'bg-primary text-white hover:bg-secondary hover:text-primary'}`}>
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Branches = () => {
  return (
    <section id="branches" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-6">Our Centers</h2>
            <p className="text-neutral-slate text-lg mb-8">
              Experience world-class facilities at our strategically located branches in Mumbai.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border-l-4 border-secondary">
                <MapPin className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-xl text-primary uppercase">Star Cricket Academy</h4>
                  <p className="text-neutral-slate">Borivali West, Mumbai</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border-l-4 border-secondary">
                <MapPin className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-xl text-primary">Star Cricket Academy Elite</h4>
                  <p className="text-neutral-slate">Kandivali West, Mumbai</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full h-[400px] bg-primary/10 rounded-2xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop" 
              alt="Cricket Nets" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: 'Personal Coaching'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you shortly.');
    setFormData({ name: '', phone: '', program: 'Personal Coaching' });
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Start Your Journey</h2>
          <p className="text-white/70">Fill out the form below and book your free introductory session today.</p>
        </div>

        <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-primary text-sm font-bold uppercase mb-2">Full Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-gray-100 border-none text-primary rounded-md focus:ring-2 focus:ring-secondary outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-primary text-sm font-bold uppercase mb-2">Phone Number</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-gray-100 border-none text-primary rounded-md focus:ring-2 focus:ring-secondary outline-none"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-primary text-sm font-bold uppercase mb-2">Selected Program</label>
              <select 
                value={formData.program}
                onChange={(e) => setFormData({...formData, program: e.target.value})}
                className="w-full px-4 py-3 bg-gray-100 border-none text-primary rounded-md focus:ring-2 focus:ring-secondary outline-none"
              >
                <option>Personal Coaching</option>
                <option>Ground/Group Coaching</option>
                <option>Weekend Special</option>
                <option>Special Training</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-secondary text-primary font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-md"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-14 h-14" />
              <span className="text-white font-black text-2xl tracking-tighter uppercase leading-none border-l-2 border-secondary/30 pl-3">
                Star <span className="text-secondary">Cricket</span> Academy
              </span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Empowering the next generation of cricketers with professional guidance and world-class facilities in the heart of Mumbai.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/70">
                <Phone size={18} className="text-secondary" />
                <span>+91 7977371794</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail size={18} className="text-secondary" />
                <span>starcricketacademy2021@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-secondary">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Youtube />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-center text-white/30 text-sm">
          <p>© {new Date().getFullYear()} Star Cricket Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const EventsAndOffers = () => {
  const [activeTab, setActiveTab] = useState<'events' | 'offers'>('events');

  const events = [
    {
      title: "Summer Camp 2026",
      date: "Starts April 15th",
      discount: "20% OFF",
      description: "Intensive 30-day training program for all age groups with expert coaches.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2073&auto=format&fit=crop"
    },
    {
      title: "Monsoon Indoor Camp",
      date: "Coming Soon",
      discount: "Early Bird: 15% OFF",
      description: "Don't let the rain stop you. Specialized indoor drills and fitness sessions.",
      image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Star Premier League",
      date: "Registration Open",
      discount: "Team Entry Discount",
      description: "Annual academy tournament. Showcase your talent and win exciting trophies.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop"
    }
  ];

  const offers: any[] = [
    {
      title: "New Year Membership",
      date: "Valid till March 31st",
      discount: "FLAT 30% OFF",
      description: "Get flat 30% off on annual memberships. Limited slots available.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const currentItems = activeTab === 'events' ? events : offers;

  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-2 block">Don't Miss Out</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Events and Offers</h2>
          </div>
          
          {/* Tabs */}
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            <button 
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'events' ? 'bg-secondary text-primary' : 'text-white/60 hover:text-white'}`}
            >
              Events
            </button>
            <button 
              onClick={() => setActiveTab('offers')}
              className={`px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'offers' ? 'bg-secondary text-primary' : 'text-white/60 hover:text-white'}`}
            >
              Offers
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentItems.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-secondary text-primary font-black px-3 py-1 rounded-full text-xs uppercase tracking-tighter shadow-lg">
                        {item.discount}
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 block">{item.date}</span>
                      <h3 className="text-xl font-bold text-white uppercase mb-3">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6">{item.description}</p>
                      <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:text-secondary transition-colors">
                        Learn More <ChevronRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white/5 rounded-3xl border border-dashed border-white/10">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                    <Trophy className="text-white/20 w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                  {activeTab === 'events' ? 'Coming Soon' : 'No Offer Now'}
                </h3>
                <p className="text-white/40 max-w-xs mx-auto font-medium uppercase tracking-widest text-[10px]">
                  {activeTab === 'events' ? 'New Tournaments & Camps arriving shortly' : 'Check back later for exclusive academy deals'}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <EventsAndOffers />
        <Branches />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
