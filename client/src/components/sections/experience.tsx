import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer & Technical SEO",
      company: "Rankworks",
      period: "2023 - Present",
      achievements: [
        "Lead technical SEO implementations for enterprise clients",
        "Developed custom WordPress solutions with advanced SEO features",
        "Improved Core Web Vitals scores by 40% across client portfolio"
      ],
      side: "right"
    },
    {
      title: "SEO Manager",
      company: "RocketMedia360",
      period: "2022 - 2023",
      achievements: [
        "Managed SEO strategies for 20+ client accounts",
        "Increased organic traffic by 150% on average across portfolio",
        "Implemented comprehensive technical SEO audits and solutions"
      ],
      side: "left"
    },
    {
      title: "Social Media Manager",
      company: "Z-Tech Studio",
      period: "2019 - 2020",
      achievements: [
        "Developed social media strategies for tech startups",
        "Created content calendars and managed multiple brand accounts",
        "Achieved 200% increase in social engagement rates"
      ],
      side: "right"
    },
    {
      title: "WordPress Developer",
      company: "EDS FZE",
      period: "2017 - 2019",
      achievements: [
        "Built custom WordPress themes and plugins",
        "Optimized website performance and loading speeds",
        "Delivered 30+ successful web development projects"
      ],
      side: "left"
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative flex items-center md:justify-center"
                initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
                <div className={`ml-12 md:ml-0 md:w-5/12 ${exp.side === 'right' ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                  <GlassCard hover className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-blue-400 font-medium mb-2">{exp.company}</h4>
                    <p className="text-slate-400 text-sm mb-4">{exp.period}</p>
                    <div className="text-slate-300 text-sm space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
