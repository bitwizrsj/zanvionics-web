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

const FeatureCard = ({ icon, title, description, index }) => {
  const [ref, isInView] = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`group relative bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transition-all duration-700 ease-out hover:border-teal-500/30 hover:bg-gray-800/40
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default function WhyUKSection() {
  const [headerRef, headerInView] = useInView(0.3);

  const features = [
    {
      icon: "🤝",
      title: "UK-based engagement",
      description: "Work directly with our team during UK business hours for smooth and synchronized collaboration."
    },
    {
      icon: "💷",
      title: "Cost-efficient global delivery",
      description: "Leverage global tech talent while enjoying local UK accountability, ensuring you get the best ROI."
    },
    {
      icon: "⚡",
      title: "Fast turnaround times",
      description: "Agile delivery processes mean your projects move quickly from concept to deployment without delays."
    },
    {
      icon: "💬",
      title: "Clear communication",
      description: "No language barriers or complex jargon. We provide clear, transparent updates every step of the way."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/5 via-black to-black" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="text-teal-300 text-sm font-medium">Why Choose Us</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why UK Clients Choose Us
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between local understanding and global execution to deliver top-tier technology solutions for UK businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
