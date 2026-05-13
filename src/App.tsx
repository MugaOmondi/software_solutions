import { motion } from "motion/react";
import { 
  Rocket, 
  Bot, 
  Workflow, 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Database,
  Monitor,
  ShoppingBag,
  Ticket,
  Dumbbell,
  GraduationCap,
  Store,
  ChevronRight,
  Share2
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <div className="font-display text-2xl font-bold tracking-tight text-primary">
            Hekima Hub
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Web Design", "Software Systems", "Consultancy", "Branding"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-mono font-medium text-secondary hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="#about" className="text-sm font-mono font-medium text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full">
              About Us
            </a>
          </div>

          <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-mono font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            Get Started
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-7 space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span 
                variants={fadeIn}
                className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full text-xs font-mono font-bold text-primary tracking-widest uppercase"
              >
                Our Mission
              </motion.span>
              <motion.h1 
                variants={fadeIn}
                className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight"
              >
                Empowering businesses to transform operations through <span className="text-primary italic">modern IT solutions</span>.
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                className="text-lg text-on-surface-variant max-w-xl leading-relaxed"
              >
                At Hekima Hub, we believe wisdom and technology go hand in hand. We catalyze growth by engineering digital systems that aren't just powerful, but purposeful.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-display font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                  Get a free Quote
                </button>
                <button className="px-8 py-4 rounded-xl border border-outline hover:bg-surface-container transition-all font-display font-bold">
                  Explore Services
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden ambient-shadow relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyDyW8ijobs_mSNOA8TVyM9w1SGFeE-MoLymrxQWgVkl9e7IZWz2UJH7n3R6Z5VOerCl3Ow6IyEvZoArs8O3_4Oln7E1vqxcTnCfLYCcTvY4Kry8PjGz1tA2t1yY8tmjaV6VgVptG5ECNwAsEwtsHPdBYx-q_X4Sqi16BgYRDBPzWUVWjsbP5TTMFTr2MImKAv85dwhUzUMRCdNCu7rKXpcYoKpzTkNAComInOKX6x2lddO2gDiYQkgZqlxZsgFg8V0SEOvq1hBsKa" 
                  alt="Modern IT Infrastructure" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-6 rounded-2xl hidden md:block animate-bounce shadow-2xl">
                <Rocket className="text-white w-10 h-10" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marquee Ticker */}
        <div className="bg-inverse-surface py-8 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-24 items-center">
            {["Website Design", "Custom Software Systems", "IT Consultancy", "Branding & Digital Presence", "Cloud Infrastructure", "Website Design", "Custom Software Systems", "IT Consultancy", "Branding & Digital Presence", "Cloud Infrastructure"].map((item, index) => (
              <span key={index} className="text-background/20 font-display text-2xl font-bold uppercase tracking-widest leading-none">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Standard Section */}
        <section className="bg-surface-container-low py-32 px-6 md:px-16 overflow-hidden" id="about">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">The Hekima Standard</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white p-12 rounded-2xl border border-outline-variant ambient-shadow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Scalability</span>
                  <h3 className="font-display text-3xl font-bold mt-4 mb-6">Future-Proof Architectures</h3>
                  <p className="text-on-surface-variant leading-relaxed">We don't just build for today. Every line of code and every design choice is made with global infrastructure and exponential growth in mind.</p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="h-1 flex-1 bg-surface-container rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary" 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-primary">85% OPTIMIZATION</span>
                </div>
              </div>

              <div className="bg-primary p-12 rounded-2xl text-white flex flex-col justify-between shadow-2xl shadow-primary/20">
                <Zap className="w-10 h-10 mb-8" />
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">Precision Design</h3>
                  <p className="opacity-80">Microscopic data points and mono-spaced accents meet professional corporate aesthetics.</p>
                </div>
              </div>

              <div className="bg-white p-12 rounded-2xl border border-outline-variant ambient-shadow">
                <Shield className="text-primary w-10 h-10 mb-6" />
                <h3 className="font-display text-2xl font-bold mb-4">Seamless Integration</h3>
                <p className="text-on-surface-variant">Our solutions integrate directly into your existing ecosystem without disrupting the flow of your business operations.</p>
              </div>

              <div className="md:col-span-2 bg-inverse-surface p-12 rounded-2xl relative overflow-hidden group">
                <div className="relative z-10 text-inverse-on-surface">
                  <h3 className="font-display text-2xl font-bold mb-4">Empowering Global Success</h3>
                  <p className="max-w-md opacity-70">From Nairobi to the world, Hekima Hub is the engine behind dozens of successful digital transformations across three continents.</p>
                </div>
                <Globe className="absolute -bottom-12 -right-12 w-64 h-64 text-white/5 font-thin" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto" id="services">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-widest">Our Core Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Tailored Solutions for Your Business</h2>
            <p className="text-on-surface-variant text-lg">We build high-performance systems and platforms designed to streamline your operations and grow your revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "School Management", icon: GraduationCap, desc: "Total control over student records, grading, and administrative workflows." },
              { title: "Band Event Ticketing", icon: Ticket, desc: "Seamless event booking and secure digital ticketing for high-capacity events." },
              { title: "Gym Systems", icon: Dumbbell, desc: "Membership tracking, schedule management, and automated subscription billing." },
              { title: "POS Systems", icon: Store, desc: "Fast, reliable point-of-sale solutions with real-time inventory and sales analytics." },
              { title: "ERP Systems", icon: Bot, desc: "Unified enterprise platforms that manage everything from HR to supply chain." },
              { title: "E-commerce Platforms", icon: ShoppingBag, desc: "High-conversion online stores with integrated payment and logistics." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                className="p-8 bg-white border border-outline-variant rounded-2xl ambient-shadow flex flex-col items-start gap-4 hover:border-primary/50 transition-colors"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="p-4 bg-primary/5 rounded-xl text-primary">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{service.desc}</p>
                <button className="mt-4 flex items-center gap-2 text-primary font-bold text-sm group">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-surface-container py-32 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-primary font-mono text-sm font-bold uppercase tracking-widest">Meet the Innovators</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Driven by Technical Prowess</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  name: "Hague Ozwara", 
                  role: "Chief Architect & Creative Lead",
                  desc: "Information Technology practitioner and Computer Science expert. Excels in infrastructural and architectural design, Software Systems, and IT strategy."
                },
                { 
                  name: "Edgar Omondi", 
                  role: "Lead Consultant & Support Head",
                  desc: "Specialist in System analysis and design, Information system audit, and professional issues in IT Operation."
                }
              ].map((member, i) => (
                <div key={i} className="group p-10 rounded-2xl bg-white border border-outline-variant ambient-shadow hover:border-primary/30 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="inline-block p-3 bg-primary/5 rounded-xl text-primary mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl font-bold">{member.name}</h4>
                      <p className="text-primary font-mono text-sm font-bold uppercase mt-1 tracking-wider">{member.role}</p>
                    </div>
                    <div className="h-px w-12 bg-primary/20 group-hover:w-full transition-all duration-500" />
                    <p className="text-on-surface-variant leading-relaxed text-sm lg:text-base opacity-80">
                      {member.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto" id="contact">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-mono text-sm font-bold uppercase tracking-widest block mb-4">Contact Us</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Let's start your <br/>digital transformation.</h2>
                <p className="text-lg text-on-surface-variant">Ready to revolutionize your business infrastructure? Reach out to us today.</p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Visit Us", val: "Nairobi, Kenya" },
                  { icon: Mail, label: "Email Us", val: "hubhekima@gmail.com" },
                  { icon: Phone, label: "Call Us", val: "+254 794 213 071" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold">{item.label}</h4>
                      <p className="text-on-surface-variant">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-outline-variant ambient-shadow">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-on-surface-variant">Full Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-on-surface-variant">Email Address</label>
                    <input type="email" className="w-full px-4 py-4 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase text-on-surface-variant">Subject</label>
                  <input type="text" className="w-full px-4 py-4 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase text-on-surface-variant">Message</label>
                  <textarea rows={4} className="w-full px-4 py-4 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary transition-all"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-xl font-display font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-16 mb-20 max-w-7xl mx-auto">
          <div className="bg-primary p-16 rounded-3xl text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Ready to revolutionize <br/>your business infrastructure?</h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-10 py-4 rounded-full font-display font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  Get in Touch
                </button>
                <button className="bg-white/10 border border-white/30 px-10 py-4 rounded-full font-display font-bold hover:bg-white/20 transition-all">
                  Our Case Studies
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-inverse-surface text-inverse-on-surface pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5 space-y-6">
              <div className="font-display text-2xl font-bold text-primary">Hekima Hub</div>
              <p className="opacity-60 max-w-sm leading-relaxed">
                Smart IT Solutions for Global Infrastructure. We bridge the gap between established reliability and future software innovation.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-all group">
                  <Mail className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-all group">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Solutions</h5>
              <ul className="space-y-4 text-sm opacity-60">
                <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Software Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IT Consulting</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Company</h5>
              <ul className="space-y-4 text-sm opacity-60">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Newsletter</h5>
              <p className="text-sm opacity-60">Stay updated with the latest in tech.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/10 border-none rounded-lg px-4 py-3 text-sm flex-1 focus:ring-1 focus:ring-primary"
                />
                <button className="bg-primary p-3 rounded-lg hover:bg-primary-container transition-all">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-xs font-mono opacity-40 uppercase tracking-widest">
              © 2024 Hekima Hub. Smart IT Solutions for Global Infrastructure. Nairobi, Kenya.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
