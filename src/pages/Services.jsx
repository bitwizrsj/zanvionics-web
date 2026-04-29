import React, { useState, useEffect, useRef } from 'react';

// Simple intersection observer hook
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once in view
        }
      },
      {
        threshold: options.threshold || 0.2,
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView];
};


// Hero Section
const HeroSection = () => {
  const [ref, isInView] = useInView(0.3);

  return (
    <section className="min-h-[70vh] bg-black relative flex items-center justify-center overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-indigo-500/20 to-transparent blur-[80px]" />
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full text-center">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="inline-block bg-indigo-900/30 border-b border-indigo-400/50 px-6 py-2 mb-8">
            <span className="text-indigo-300 text-sm font-bold tracking-widest uppercase">Our Specialties</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white tracking-tight">
            Elegant <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          
          <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            From seamless web platforms to intelligent AI integrations, our UK-based team engineers success for forward-thinking enterprises.
          </p>
        </div>
      </div>
    </section>
  );
};

// Services Grid Section
const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [sectionRef, sectionInView] = useInView({ threshold: 0.2 });
 
  const services = [
    {
      id: 1,
      icon: "⚡",
      title: "Automation",
      description: "Streamline your workflows with custom automation tools, API integrations, and process optimization solutions tailored for UK businesses.",
      features: ["Workflow Automation", "API Integration", "Process Optimization", "Efficiency"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20"
    },
    {
      id: 2,
      icon: "🤖",
      title: "Data / AI",
      description: "Intelligent automation solutions that handle repetitive tasks, analyze data, and enhance user experiences with cutting-edge AI.",
      features: ["OpenAI API", "Data Analysis", "Custom Models", "Business Intelligence"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      id: 3,
      icon: "🌐",
      title: "Web Solutions",
      description: "High-performance web platforms built with modern frameworks. From landing pages to full-stack applications, we create scalable solutions.",
      features: ["Next.js", "React", "Scalable Platforms", "SEO Optimized"],
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-900/20 to-emerald-900/20"
    }
  ];

  const cardRefs = useRef(services.map(() => React.createRef()));
  const [cardInViews, setCardInViews] = useState(services.map(() => false));

  useEffect(() => {
    const observers = services.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardInViews(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );

      if (cardRefs.current[index]?.current) {
        observer.observe(cardRefs.current[index].current);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [services.length]);


  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We offer end-to-end digital services to accelerate your business growth and digital transformation
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={cardRefs.current[index]}
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 cursor-pointer ${
                cardInViews[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3
                  className={`text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
                >
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-6 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const [ref, isInView] = useInView(0.3);
  
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business goals, challenges, and requirements to create a tailored solution strategy.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our experts develop a comprehensive roadmap with clear milestones, timelines, and success metrics for your project.",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Development",
      description: "Using agile methodologies, we build your solution with regular updates and feedback loops to ensure perfect alignment.",
      icon: "⚒️"
    },
    {
      number: "04",
      title: "Launch",
      description: "We handle deployment, testing, and go-live processes, ensuring a smooth transition and optimal performance from day one.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery and exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 transform translate-x-4 -translate-y-1/2" />
              )}
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 text-center">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Technologies Section
const TechnologiesSection = () => {
  const [ref, isInView] = useInView(0.3);
  
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "C#", "Go", "PostgreSQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span> We Master
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              
              <div className="space-y-3">
                {category.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-200">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const [ref, isInView] = useInView(0.5);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Innovate?</span>
          </h2>
          
          <p className="text-gray-400 text-xl leading-relaxed mb-10">
            Let's discuss how our digital solutions can transform your business and drive unprecedented growth
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Book a Free 30-Min Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Services Page Component
export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TechnologiesSection />
      <CTASection />
    </div>
  );
}