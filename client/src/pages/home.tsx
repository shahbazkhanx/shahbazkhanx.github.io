import { useEffect, useRef } from "react";
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  const cursorBlobRef = useRef<HTMLDivElement>(null);
  const cursorBlobSecondaryRef = useRef<HTMLDivElement>(null);
  const cursorBlobTertiaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorBlobRef.current) {
        cursorBlobRef.current.style.left = `${clientX}px`;
        cursorBlobRef.current.style.top = `${clientY}px`;
      }
      
      if (cursorBlobSecondaryRef.current) {
        cursorBlobSecondaryRef.current.style.left = `${clientX - 50}px`;
        cursorBlobSecondaryRef.current.style.top = `${clientY - 50}px`;
      }
      
      if (cursorBlobTertiaryRef.current) {
        cursorBlobTertiaryRef.current.style.left = `${clientX + 30}px`;
        cursorBlobTertiaryRef.current.style.top = `${clientY + 30}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Set page title and meta description
    document.title = "Shahbaz Khan - Web Developer & Technical SEO Specialist";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Technical SEO Specialist with 8+ years of experience building fast, optimized websites. Expertise in React, WordPress, SEO strategy, and conversion optimization.');
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Technical SEO Specialist with 8+ years of experience building fast, optimized websites. Expertise in React, WordPress, SEO strategy, and conversion optimization.";
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Shahbaz Khan - Web Developer & Technical SEO Specialist';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Building SEO-first, conversion-optimized websites with clean, scalable code. 8+ years of experience in web development and technical SEO.';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);
  }, []);

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50" />
      <div className="fixed inset-0 bg-gradient-radial" />
      
      {/* GitHub-style cursor-following blur effects */}
      <div className="github-bg">
        <div ref={cursorBlobRef} className="cursor-blob"></div>
        <div ref={cursorBlobSecondaryRef} className="cursor-blob-secondary"></div>
        <div ref={cursorBlobTertiaryRef} className="cursor-blob-tertiary"></div>
      </div>
      
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 glass-card border-t relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-slate-400">&copy; 2025 Shahbaz Khan. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="mailto:shahbazali.khan@hotmail.com" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Send email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/shahbazalikhan3364" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/dk_ysfzai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Instagram profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
