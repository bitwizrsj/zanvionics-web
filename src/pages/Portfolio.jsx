import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hook/useInView';

const PortfolioHero = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section className="min-h-[70vh] bg-black relative flex items-center justify-center overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-500/20 to-transparent blur-[80px]" />
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-block bg-blue-900/30 border-b border-blue-400/50 px-6 py-2 mb-8">
            <span className="text-blue-300 text-sm font-bold tracking-widest uppercase">Success Stories</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Case Studies</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Real-world impact. Explore how we've helped UK businesses scale, automate, and dominate their industries through precision engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, isInView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.2 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="text-purple-400 hover:text-purple-300 transition-colors">
          View Case Study →
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Built automation dashboard",
      description: "Saved 15+ hours/week by automating repetitive patient data entry and administrative reporting workflows for a UK-based clinic.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "Automation API"]
    },
    {
      title: "Developed website for startup",
      description: "Built a fully responsive, modern website optimized for conversions, resulting in a 2x increase in qualified leads for a local UK business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "SEO"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    {
      number: "100+",
      label: "Projects Completed"
    },
    {
      number: "50+",
      label: "Happy Clients"
    },
    {
      number: "95%",
      label: "Client Satisfaction"
    },
    {
      number: "24/7",
      label: "Support"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  return (
    <div className="bg-black">
      <PortfolioHero />
      <Projects />
      <Stats />
    </div>
  );
}