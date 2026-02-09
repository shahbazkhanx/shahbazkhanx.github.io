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
  const loadedPagesRef = useRef<Set<number>>(new Set());
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty("--x", `${x}px`);
      spotlightRef.current.style.setProperty("--y", `${y}px`);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.width / 2;
    const y = rect.height / 2;
    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty("--x", `${x}px`);
      spotlightRef.current.style.setProperty("--y", `${y}px`);
    }
  };

  const fetchProjects = async (pageToLoad: number) => {
  if (loading) return;
  if (loadedPagesRef.current.has(pageToLoad)) return;
    setLoading(true);
    try {
      // Try server-side paginated API first
      const res = await fetch(`/api/projects?page=${pageToLoad}&pageSize=${pageSize}`);
      const ct = res.headers.get("content-type") || "";
      if (res.ok && ct.includes("application/json")) {
        const data: { items: ApiProject[]; hasMore: boolean } = await res.json();
        const mapped = data.items.map((p) => ({
          title: p.title,
          description: p.description,
          url: p.url,
          image: imageMap[p.imageKey] ?? imageMap.endura,
          tech: p.tech,
        }));
        setProjects((prev) => (pageToLoad === 1 ? mapped : [...prev, ...mapped]));
        setHasMore(data.hasMore);
        setPage(pageToLoad);
        loadedPagesRef.current.add(pageToLoad);
        return;
      }

      // Fallback for static hosting (e.g., GitHub Pages): fetch from public JSON and paginate client-side
      if (!allProjectsRef.current) {
        const cacheBust = Date.now();
        const fallbackRes = await fetch(`/projects.json?v=${cacheBust}`);
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
      setProjects((prev) => (pageToLoad === 1 ? mapped : [...prev, ...mapped]));
      setHasMore(end < all.length);
      setPage(pageToLoad);
      loadedPagesRef.current.add(pageToLoad);
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
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-16"
    >
      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
      {/* Cursor spotlight that follows the mouse within the section */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(200px 200px at var(--x) var(--y), rgba(59,130,246,0.10), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400/90 max-w-2xl mx-auto">
            Recent client websites focusing on performance, SEO optimization, and user experience
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isHero = index === 0;
            const colSpan = isHero ? "lg:col-span-2" : "";
            const imgHeight = isHero ? "h-64 md:h-72 lg:h-80" : "h-48";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className={colSpan}
              >
                <div className="relative group rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 blur-xl transition" />
                  <GlassCard hover className="relative overflow-hidden h-full rounded-2xl border border-white/10 bg-slate-900/60">
                    <div className={`relative overflow-hidden ${isHero ? "" : ""}`}>
                      <img 
                        src={project.image} 
                        alt={`${project.title} website preview`} 
                        className={`w-full ${imgHeight} object-cover transition-transform duration-500 group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* subtle shine */}
                      <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 [mask-image:linear-gradient(90deg,transparent,black,transparent)] animate-[shine_1.6s_ease-in-out]" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium"
                      >
                        Visit Website <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-center mt-12">
          {hasMore && (
            <button
              onClick={() => fetchProjects(page + 1)}
              disabled={loading}
              className="relative inline-flex items-center justify-center px-6 py-2 rounded-md text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="absolute -inset-[1px] rounded-md bg-gradient-to-r from-blue-500 to-fuchsia-500 opacity-60 blur group-hover:opacity-80" aria-hidden />
              <span className="relative z-10">
                {loading ? "Loading..." : "Load more"}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}