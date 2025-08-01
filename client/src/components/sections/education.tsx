import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassCard hover className="p-8 text-center">
            <div className="text-4xl text-blue-400 mb-4">
              <GraduationCap className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Bachelor of Science</h3>
            <h4 className="text-xl text-blue-400 mb-2">Computer Science & Digital Marketing</h4>
            <p className="text-slate-400 mb-2">National College of Business Administration, Lahore</p>
            <p className="text-slate-500">2011 - 2015</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
