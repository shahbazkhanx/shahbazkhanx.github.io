import { Nav } from '@/components/Nav';
import { Reveal } from '@/components/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiLinkedin, FiMail, FiExternalLink, FiChevronRight, FiMapPin, FiPhone } from 'react-icons/fi';
import { SiWordpress, SiWoo, SiPhp, SiMysql, SiJavascript, SiHtml5, SiReact } from 'react-icons/si';
import { Code2 } from 'lucide-react';

import heroBg from '@assets/generated_images/hero-bg.jpg';
import imgAffari from '@assets/project-affari.png';
import imgEntouragex from '@assets/project-entouragex.png';
import imgMyriadmarine from '@assets/project-myriadmarine.png';
import imgStyrosolutions from '@assets/project-styrosolutions.png';
import imgEnduraphysio from '@assets/project-enduraphysio.png';

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
      <div className="bg-noise"></div>
      <Nav />
      
      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y: heroY }}
            className="absolute inset-0 z-0 opacity-40"
          >
            {/* We use an img tag with object-cover if heroBg resolves, or fallback CSS */}
            {heroBg ? (
              <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-background via-background to-primary/10"></div>
            )}
            <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </motion.div>

          <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20">
            <div className="max-w-4xl">
              <Reveal delay={0.2} direction="up">
                <p className="font-mono text-primary mb-4 tracking-wide">Hi, my name is</p>
              </Reveal>
              
              <Reveal delay={0.3} direction="up">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-2 tracking-tighter">
                  Shahbaz Khan.
                </h1>
              </Reveal>
              
              <Reveal delay={0.4} direction="up">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-muted-foreground mb-8 tracking-tighter">
                  Crafting high-performance digital platforms.
                </h2>
              </Reveal>
              
              <Reveal delay={0.5} direction="up">
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                  I'm a Senior Web Developer with 7+ years of experience specializing in custom WordPress and WooCommerce development. I build fast, modular, and conversion-optimized websites.
                </p>
              </Reveal>
              
              <Reveal delay={0.6} direction="up">
                <div className="flex flex-wrap items-center gap-6">
                  <a 
                    href="#projects" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(255,165,0,0.15)] hover:shadow-[0_0_30px_rgba(255,165,0,0.3)]"
                  >
                    Check out my work
                  </a>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 hover:text-primary transition-colors">
                      <FiLinkedin size={24} />
                    </a>
                    <a href="mailto:shahbazali.khan@hotmail.com" className="p-3 hover:text-primary transition-colors">
                      <FiMail size={24} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 relative">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono"><span className="text-primary">01.</span> About Me</h2>
                <div className="h-[1px] bg-border flex-grow max-w-[300px]"></div>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <Reveal delay={0.2}>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Hello! My name is Shahbaz and I enjoy creating things that live on the internet. My interest in web development started back in 2013 when I decided to try editing custom PHP scripts — turns out hacking together custom layouts taught me a lot about HTML & CSS!
                  </p>
                  <p>
                    Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive, and highly-performant digital experiences for a variety of clients across Canada and Dubai.
                  </p>
                  <p>
                    I leverage modern AI tools to expedite code generation, automate boilerplate tasks, and debug complex scripts — significantly increasing development throughput while maintaining clean, modular architecture.
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={0.4} direction="left">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-sm transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>
                  <div className="absolute inset-0 border-2 border-primary rounded-sm transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>
                  <div className="relative z-10 bg-card border border-border p-8 rounded-sm h-full shadow-2xl">
                    <h3 className="font-mono text-primary mb-6">Quick Facts</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <FiMapPin className="text-muted-foreground" />
                        <span>Dollard-des-Ormeaux, QC, Canada</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FiPhone className="text-muted-foreground" />
                        <span>(514) 553-8831</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FiMail className="text-muted-foreground" />
                        <span>shahbazali.khan@hotmail.com</span>
                      </li>
                    </ul>
                    
                    <div className="mt-8 pt-8 border-t border-border">
                      <h4 className="text-sm font-mono text-muted-foreground mb-4">Education</h4>
                      <p className="font-semibold">BS, Computer Science</p>
                      <p className="text-sm text-muted-foreground">NCBA&E, Lahore (2015)</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-32 relative bg-card/30">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono"><span className="text-primary">02.</span> Technical Arsenal</h2>
                <div className="h-[1px] bg-border flex-grow max-w-[300px]"></div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: 'WordPress', icon: SiWordpress },
                { name: 'WooCommerce', icon: SiWoo },
                { name: 'PHP', icon: SiPhp },
                { name: 'MySQL', icon: SiMysql },
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'HTML5', icon: SiHtml5 },
                { name: 'CSS3', icon: Code2 },
                { name: 'React', icon: SiReact },
              ].map((skill, i) => (
                <Reveal key={skill.name} delay={0.1 * (i % 5)}>
                  <div className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all group h-full min-h-[110px]">
                    <skill.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-mono text-sm">{skill.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-16">
              <Reveal>
                <h3 className="font-mono text-primary mb-6">Core Competencies</h3>
              </Reveal>
              <Reveal>
                <div className="flex flex-wrap gap-3">
                {[
                  "Theme Development", "Plugin Development", "Oxygen Builder", "Elementor", 
                  "RESTful APIs", "AJAX", "JSON", "Responsive Design", "Mobile-First Design", 
                  "Performance Optimization", "Cache Optimization", "Site Debugging", 
                  "Log Analysis", "Git", "SSH", "GTM", "Analytics", "AI Integration"
                ].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-mono rounded-sm border border-border">
                      {skill}
                    </span>
                ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-32 relative">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono"><span className="text-primary">03.</span> Where I've Worked</h2>
                <div className="h-[1px] bg-border flex-grow max-w-[300px]"></div>
              </div>
            </Reveal>

            <div className="space-y-24">
              {[
                {
                  company: "Rankworks",
                  location: "Pointe-Claire, Canada",
                  title: "Web Developer",
                  date: "Nov 2023 – Jul 2026",
                  bullets: [
                    "Customized WordPress theme files and extended WooCommerce functionality using hooks, filters, and ACF to meet project requirements while minimizing plugin reliance.",
                    "Developed responsive layouts with Oxygen Builder and Elementor, complemented by manual CSS/HTML for tailored UI components.",
                    "Leveraged AI tools to expedite code generation, automate boilerplate tasks, and debug complex scripts — significantly increasing development throughput."
                  ]
                },
                {
                  company: "RocketMedia360",
                  location: "Montréal, Canada",
                  title: "Web Developer",
                  date: "Aug 2022 – Nov 2023",
                  bullets: [
                    "Developed full sites from scratch using Avada and Flatsome with manual theme integration.",
                    "Created manual media queries and CSS overrides to ensure consistent UX across all device breakpoints.",
                    "Conducted acceptance testing on new features and resolved functional issues on WPBakery and Divi sites."
                  ]
                },
                {
                  company: "EDS FZE",
                  location: "Dubai, UAE",
                  title: "Web Developer",
                  date: "Jun 2017 – Mar 2022",
                  bullets: [
                    "Modified legacy WordPress themes and built custom plugin features via ACF by editing PHP and JS.",
                    "Customized complex website layouts using WPBakery and Divi.",
                    "Maintained MySQL databases, managed indexing, and implemented security patches."
                  ]
                }
              ].map((job, i) => (
                <Reveal key={job.company} delay={0.2}>
                  <div className="relative pl-8 md:pl-0">
                    <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                      <div className="md:col-span-1 mb-4 md:mb-0 mt-1">
                        <p className="font-mono text-sm text-muted-foreground">{job.date}</p>
                        <p className="font-mono text-xs text-muted-foreground/60 mt-1">{job.location}</p>
                      </div>
                      <div className="md:col-span-3 relative">
                        {/* Mobile Timeline Line */}
                        <div className="absolute left-[-2rem] top-2 bottom-[-4rem] w-px bg-border md:hidden"></div>
                        <div className="absolute left-[-2.25rem] top-2 w-2 h-2 rounded-full bg-primary md:hidden ring-4 ring-background"></div>
                        
                        <h3 className="text-xl font-bold mb-1">
                          {job.title} <span className="text-primary">@ {job.company}</span>
                        </h3>
                        <ul className="mt-4 space-y-4">
                          {job.bullets.map((bullet, j) => (
                            <li key={j} className="flex items-start gap-3 text-muted-foreground">
                              <FiChevronRight className="mt-1 flex-shrink-0 text-primary" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-32 relative bg-card/30">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono"><span className="text-primary">04.</span> Selected Work</h2>
                <div className="h-[1px] bg-border flex-grow max-w-[300px]"></div>
              </div>
            </Reveal>

            <div className="space-y-32">
              {[
                {
                  title: "Affari",
                  url: "mobilieraffari.com",
                  image: imgAffari,
                  desc: "High-performance, modular WordPress architecture for a premium furniture brand. Focused on showcasing products through a clean, image-heavy interface without sacrificing load times.",
                  tags: ["WordPress", "Custom Theme", "Performance Optimization"]
                },
                {
                  title: "EntourageX",
                  url: "entouragex.com",
                  image: imgEntouragex,
                  desc: "Custom-integrated WooCommerce platform for trade show services. Features complex pricing logic, tailored checkout flows, and B2B functionality.",
                  tags: ["WooCommerce", "ACF", "PHP"]
                },
                {
                  title: "Myriad Marine",
                  url: "myriadmarine.com",
                  image: imgMyriadmarine,
                  desc: "Custom theme implementation focusing on dynamic content management. Built a flexible modular system for the client to easily update services and portfolios.",
                  tags: ["WordPress", "Dynamic Content", "CSS3"]
                },
                {
                  title: "Styro Solutions",
                  url: "styrosolutions.com",
                  image: imgStyrosolutions,
                  desc: "Conversion-optimized interface built with Oxygen Builder. Streamlined the user journey to increase quote requests while maintaining strict brand guidelines.",
                  tags: ["Oxygen Builder", "UI/UX", "Conversion"]
                },
                {
                  title: "Endura Physio",
                  url: "enduraphysio.com",
                  image: imgEnduraphysio,
                  desc: "Robust, service-oriented, speed-optimized WooCommerce-ready site tailored for a physiotherapy clinic. Includes booking integration and patient resources.",
                  tags: ["WooCommerce", "Speed Optimization", "Integration"]
                }
              ].map((project, i) => (
                <Reveal key={project.title} delay={0.1}>
                  <div className={`relative grid md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    
                    {/* Project Screenshot */}
                    <div className={`col-span-12 md:col-span-7 relative group ${i % 2 === 1 ? 'md:order-2 md:col-start-6' : 'md:col-start-1'}`}>
                      <a href={`https://${project.url}`} target="_blank" rel="noreferrer" className="block relative h-[300px] md:h-[400px] w-full bg-secondary rounded-sm overflow-hidden border border-border">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                        <img
                          src={project.image}
                          alt={`${project.title} website screenshot`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      </a>
                    </div>

                    {/* Project Content */}
                    <div className={`col-span-12 md:col-span-6 relative z-20 ${i % 2 === 1 ? 'md:order-1 md:col-start-1 md:pr-12' : 'md:col-start-7 md:pl-12'}`}>
                      <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 hover:text-primary transition-colors">
                        <a href={`https://${project.url}`} target="_blank" rel="noreferrer">{project.title}</a>
                      </h3>
                      
                      <div className={`bg-card border border-border p-6 rounded-sm shadow-xl mb-6 text-muted-foreground ${i % 2 === 1 ? 'md:mr-[-4rem]' : 'md:ml-[-4rem]'}`}>
                        <p>{project.desc}</p>
                      </div>

                      <ul className={`flex flex-wrap gap-4 font-mono text-sm text-muted-foreground mb-8 ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
                        {project.tags.map(tag => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>

                      <div className={`flex items-center gap-4 ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
                        <a href={`https://${project.url}`} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
                          <FiExternalLink size={20} />
                          <span className="font-mono text-sm">Visit Site</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-32 relative">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center justify-center gap-4 mb-16">
                <div className="h-[1px] bg-border flex-grow max-w-[100px]"></div>
                <h2 className="text-2xl md:text-3xl font-bold font-mono text-center">Certifications & Accolades</h2>
                <div className="h-[1px] bg-border flex-grow max-w-[100px]"></div>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Advanced PHP & MySQL", issuer: "Careers Institute", year: "2013" },
                { title: "Email Marketing", issuer: "HubSpot", year: "2023" },
                { title: "LinkedIn Marketing Strategy", issuer: "LinkedIn", year: "2022" },
                { title: "Google Ads Fundamentals", issuer: "Google", year: "2018" },
              ].map((cert, i) => (
                <Reveal key={cert.title} delay={0.1 * i}>
                  <div className="p-6 bg-card border border-border rounded-sm h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                    <div>
                      <h3 className="font-bold mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <div className="mt-6 font-mono text-primary text-sm">{cert.year}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 mb-32 relative text-center">
          <div className="container mx-auto px-6 md:px-12 max-w-2xl">
            <Reveal delay={0.1}>
              <p className="font-mono text-primary mb-4">05. What's Next?</p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Get In Touch</h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-muted-foreground mb-12">
                I'm currently looking for new opportunities to build incredible digital experiences. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <a 
                href="mailto:shahbazali.khan@hotmail.com"
                className="inline-block px-8 py-4 bg-transparent border border-primary text-primary font-mono rounded-sm hover:bg-primary/10 transition-colors"
              >
                Say Hello
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-border">
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            Built by Shahbaz Khan
          </p>
          <p className="font-mono text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
