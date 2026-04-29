import React, { useState, useEffect } from "react";

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

const ServiceCard = ({ icon, title, description, features, index, isActive, onHover }) => {
  const [ref, isInView] = useInView(0.3);

  return (
    <div
      ref={ref}
      className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transition-all duration-700 ease-out cursor-pointer
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${isActive ? 'border-teal-500/50 shadow-2xl shadow-teal-500/20 scale-105' : 'hover:border-gray-600/70 hover:shadow-xl hover:shadow-gray-900/20 hover:scale-102'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-600/5 rounded-2xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Icon */}
      <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-600/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${isActive ? 'shadow-lg shadow-teal-500/30' : ''}`}>
        <div className="text-2xl">{icon}</div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300
                ${isActive 
                  ? 'bg-teal-600/30 text-teal-200 border border-teal-500/30' 
                  : 'bg-gray-800/60 text-gray-400 border border-gray-700/50 group-hover:bg-gray-700/60 group-hover:text-gray-300'
                }`}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Hover effect lines */}
      {/* <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 transition-all duration-500 group-hover:w-full" />
      <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-teal-500 to-blue-600 transition-all duration-500 group-hover:w-full" /> */}
    </div>
  );
};

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-teal-400/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState(null);
  const [headerRef, headerInView] = useInView(0.3);

  const services = [
    {
      icon: "⚡",
      title: "Automation",
      description: "Streamline your workflows with custom automation tools, API integrations, and process optimization solutions tailored for UK businesses.",
      features: ["Workflow Automation", "API Integration", "Process Optimization", "Efficiency"]
    },
    {
      icon: "🤖",
      title: "Data / AI",
      description: "Intelligent automation solutions that handle repetitive tasks, analyze data, and enhance user experiences with cutting-edge AI.",
      features: ["OpenAI API", "Data Analysis", "Custom Models", "Business Intelligence"]
    },
    {
      icon: "🌐",
      title: "Web Solutions",
      description: "High-performance web platforms built with modern frameworks. From landing pages to full-stack applications, we create scalable solutions.",
      features: ["Next.js", "React", "Scalable Platforms", "SEO Optimized"]
    }
  ];

  return (
    <section className="min-h-screen bg-black relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/5 via-black to-blue-900/5" />
      <FloatingParticles />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">Our Services</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We design, develop, and implement solutions that transform ideas into powerful digital experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
              Book a Free 30-Min Consultation
            </button>
          </div>
        </div>
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