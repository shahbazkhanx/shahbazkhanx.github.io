import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import endura from "@/assets/projects/endura.jpeg";
import bloom from "@/assets/projects/bloom.jpeg";
import fusion from "@/assets/projects/fusion.jpeg";
import baskon from "@/assets/projects/baskon.jpeg";
import tactics from "@/assets/projects/tactics.jpeg";
import writer from "@/assets/projects/writer.jpeg";



export default function Projects() {
  const imageMap = {
    endura,
    bloom,
    fusion,
    baskon,
    tactics,
    writer,
  } as const;

  type ApiProject = {
    title: string;
    description: string;
    url: string;
    imageKey: keyof typeof imageMap;
    tech: string[];
  };

  type Project = {
    title: string;
    description: string;
    url: string;
    image: string;
    tech: string[];
  };

  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const pageSize = 3;
  const allProjectsRef = useRef<ApiProject[] | null>(null);

  const fetchProjects = async (pageToLoad: number) => {
    if (loading) return;
    setLoading(true);
    try {
      // Try server-side paginated API first
      const res = await fetch(`/api/projects?page=${pageToLoad}&pageSize=${pageSize}`);
      if (res.ok) {
        const data: { items: ApiProject[]; hasMore: boolean } = await res.json();
        const mapped = data.items.map((p) => ({
          title: p.title,
          description: p.description,
          url: p.url,
          image: imageMap[p.imageKey] ?? imageMap.endura,
          tech: p.tech,
        }));
        setProjects((prev) => [...prev, ...mapped]);
        setHasMore(data.hasMore);
        setPage(pageToLoad);
        return;
      }

      // Fallback for static hosting (e.g., GitHub Pages): fetch from public JSON and paginate client-side
      if (!allProjectsRef.current) {
        const fallbackRes = await fetch(`/projects.json`);
        if (!fallbackRes.ok) throw new Error("Failed to load projects.json");
        const list: ApiProject[] = await fallbackRes.json();
        allProjectsRef.current = list;
      }

      const all = allProjectsRef.current ?? [];
      const start = (pageToLoad - 1) * pageSize;
      const end = start + pageSize;
      const slice = all.slice(start, end);
      const mapped = slice.map((p) => ({
        title: p.title,
        description: p.description,
        url: p.url,
        image: imageMap[p.imageKey] ?? imageMap.endura,
        tech: p.tech,
      }));
      setProjects((prev) => [...prev, ...mapped]);
      setHasMore(end < all.length);
      setPage(pageToLoad);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Recent client websites focusing on performance, SEO optimization, and user experience
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="overflow-hidden h-full group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} website preview`} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                  >
                    Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          {hasMore && (
            <button
              onClick={() => fetchProjects(page + 1)}
              disabled={loading}
              className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Loading..." : "Load more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}