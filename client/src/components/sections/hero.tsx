import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";


export default function Hero() {
  const handleResumeDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/api/resume';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <motion.div 
              className="relative"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={profileImage} 
                alt="Shahbaz Khan - Web Developer" 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[var(--glass-border)] backdrop-blur-sm shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
            </motion.div>
          </div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shahbaz Khan
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web Developer & Technical SEO Specialist
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building SEO-first, conversion-optimized websites with clean, scalable code.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={handleResumeDownload}
              className="group relative px-8 py-4 glass-card-hover text-white font-medium"
            >
              <Download className="inline-block w-5 h-5 mr-2" />
              Download Resume
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 text-slate-300 hover:text-blue-400 font-medium transition-colors duration-300 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
