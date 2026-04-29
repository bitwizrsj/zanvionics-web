import React, { useState, useEffect } from 'react';

// Simple intersection observer hook
const useInView = (threshold = 0.1) => {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isInView];
};

const projects = [
  {
    title: "Built automation dashboard",
    description: "Saved 15+ hours/week by automating repetitive patient data entry and administrative reporting workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tags: ["Automation", "Healthcare", "Dashboards"],
    category: "Development"
  },
  {
    title: "Developed website for startup",
    description: "Built a fully responsive, modern website optimized for conversions, resulting in a 2x increase in qualified leads.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    tags: ["Web Design", "Web Development", "Startup"],
    category: "Design"
  }
];

const ProjectCard = ({ project, index }) => {
  const [ref, isInView] = useInView(0.2);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
  ref={ref}
  className={`group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 transition-all duration-700 ease-out hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/10 hover:scale-[1.02]
    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
  `}
  style={{ transitionDelay: `${index * 100}ms` }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Image Container */}
  <div className="relative h-48 overflow-hidden rounded-t-2xl">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />
    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>

  {/* Content */}
  <div className="p-6">
    {/* Moved category tags here */}
    <div className="mb-3 flex flex-wrap gap-2">
      {project.tags.map((tag, tagIndex) => (
        <span
          key={tagIndex}
          className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full border border-gray-700/50 transition-all duration-300 group-hover:bg-teal-600/20 group-hover:border-teal-500/30 group-hover:text-teal-300"
        >
          {tag}
        </span>
      ))}
    </div>

    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
      {project.title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
      {project.description}
    </p>
  </div>

  {/* Hover effects */}
  <div className="absolute inset-0 ring-1 ring-teal-500/0 group-hover:ring-teal-500/20 rounded-2xl transition-all duration-300" />

  {/* Bottom border animation */}
  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
</div>

  );
};

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg shadow-teal-500/25'
        : 'bg-gray-800/60 text-gray-400 border border-gray-700/50 hover:bg-gray-700/60 hover:text-gray-300 hover:border-gray-600/50'
    }`}
  >
    {label}
  </button>
);

export default function ProjectsSection() {
  const [headerRef, headerInView] = useInView(0.3);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Design', 'Development'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/5 via-black to-blue-900/5" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Case Studies</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          
          {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
              Our Latest Work
            </span>
          </h2> */}
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Discover real-world examples of how we've helped UK businesses scale and automate operations.
          </p>

          {/* Filter buttons */}
          {/* <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                isActive={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              />
            ))}
          </div> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${activeFilter}-${index}`} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}