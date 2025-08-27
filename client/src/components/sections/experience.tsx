import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer & Technical SEO",
      company: "Rankworks",
      period: "2023 - Present",
      location: "Remote",
      description: "As a Web Developer / Technical SEO Analyst at Rankworks, I specialize in building and optimizing web assets that drive measurable business growth. My work combines front-end development with strategic technical SEO to create a seamless user experience while ensuring maximum organic visibility. This blend of skills allows me to consistently deliver a competitive advantage and drive sustainable, long-term growth for our digital properties.",
      achievements: [
        "Lead technical SEO implementations for enterprise clients",
        "Developed custom WordPress solutions with advanced SEO features",
        "Improved Core Web Vitals scores by 40% across client portfolio",
        "Built and integrated automation scripts and tracking systems to enhance data accuracy and campaign performance"
      ]
    },
    {
      title: "SEO Manager",
      company: "RocketMedia360",
      period: "2022 - 2023",
      location: "Fort Worth, TX",
      description: "Managed comprehensive SEO strategies for 20+ client accounts with focus on organic growth.",
      achievements: [
        "Managed SEO strategies for 20+ client accounts",
        "Increased organic traffic by 150% on average across portfolio",
        "Implemented comprehensive technical SEO audits and solutions"
      ]
    },
    {
      title: "Social Media Manager",
      company: "Z-Tech Studio",
      period: "2019 - 2020",
      location: "Dallas, TX",
      description: "Developed and executed social media strategies for tech startups and emerging brands.",
      achievements: [
        "Developed social media strategies for tech startups",
        "Created content calendars and managed multiple brand accounts",
        "Achieved 200% increase in social engagement rates"
      ]
    },
    {
      title: "WordPress Developer",
      company: "EDS FZE",
      period: "2017 - 2019",
      location: "Dubai, UAE",
      description: "Built custom WordPress themes and plugins with focus on performance and user experience.",
      achievements: [
        "Built custom WordPress themes and plugins",
        "Optimized website performance and loading speeds",
        "Delivered 30+ successful web development projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12 mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
        </motion.div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-blue-400 font-medium mb-2">{exp.company}</h4>
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                  </div>
                  
                  <div className="md:ml-6 md:text-right md:min-w-[200px]">
                    <div className="flex items-center md:justify-end text-slate-400 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center md:justify-end text-slate-400 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-slate-700/50 pt-4">
                  <h5 className="text-sm font-medium text-slate-300 mb-3">Key Achievements:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-400 text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}