import { motion } from "framer-motion";
import { Search, Code, Settings, TrendingUp } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export default function Skills() {
  const skills = [
    {
      icon: Search,
      title: "Technical SEO",
      description: "Core Web Vitals, Structured Data, Schema, Crawling/Indexation",
      tools: ["Google Search Console", "Screaming Frog", "SEMrush", "Ahrefs"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web technologies and frameworks for scalable solutions",
      tools: ["HTML/CSS", "JavaScript", "PHP", "React"]
    },
    {
      icon: Settings,
      title: "CMS & Tools",
      description: "Content management systems and development tools",
      tools: ["WordPress", "WooCommerce", "Shopify", "Oxygen Builder"]
    },
    {
      icon: TrendingUp,
      title: "UX & CRO",
      description: "User experience optimization and conversion rate optimization",
      tools: ["Page Speed", "A/B Testing", "GTM", "GA4"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="p-6 h-full">
                <div className="text-3xl mb-4 text-blue-400">
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-2 py-1 bg-slate-800/50 rounded-md text-xs text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
