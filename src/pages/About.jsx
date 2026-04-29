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

// Hero Section
const HeroSection = () => {
  const [ref, isInView] = useInView(0.3);

  return (
    <section className="min-h-[70vh] bg-black relative flex items-center justify-center overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-teal-500/20 to-transparent blur-[80px]" />
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full text-center">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="inline-block bg-teal-900/30 border-b border-teal-400/50 px-6 py-2 mb-8">
            <span className="text-teal-300 text-sm font-bold tracking-widest uppercase">Who We Are</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
            Digital <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Architects</span>
          </h1>
          
          <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            We're a UK-based collective of passionate creators, engineers, and strategists. We don't just build software; we engineer ecosystems that empower UK businesses to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const [ref, isInView] = useInView(0.5);
  
  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "30+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "💬" }
  ];

  return (
    <section className="py-20 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Story Section
const StorySection = () => {
  const [ref, isInView] = useInView(0.3);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="inline-block bg-teal-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-teal-300 text-sm font-medium">Our Journey</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From Vision to <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Reality</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded in 2019, we started as a small team of passionate developers and designers 
              who believed technology could solve complex business challenges. What began as a 
              vision has grown into a trusted partner for businesses worldwide.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Today, we combine cutting-edge technology with creative thinking to deliver 
              solutions that not only meet requirements but exceed expectations. Our journey 
              is driven by one simple belief: great digital experiences create lasting impact.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-300">Innovation-first approach to every project</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Client success is our primary measure of success</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-300">Continuous learning and adaptation</span>
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-900/60 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-teal-400 mb-2">2019</div>
                    <div className="text-gray-400 text-sm">Company Founded</div>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2021</div>
                    <div className="text-gray-400 text-sm">Team Expansion</div>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-teal-400 mb-2">2023</div>
                    <div className="text-gray-400 text-sm">AI Integration</div>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2025</div>
                    <div className="text-gray-400 text-sm">Global Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection = () => {
  const [ref, isInView] = useInView(0.3);
  
  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe the best results come from working closely with our clients as true partners."
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We're committed to delivering the highest quality in everything we create and every service we provide."
    },
    {
      icon: "🔒",
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices are the foundation of all our relationships."
    }
  ];

  return (
    <section className="py-20 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Core Values</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            These principles guide every decision we make and every solution we create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-teal-500/30 transition-all duration-500 hover:scale-105 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-6 text-center">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  const [ref, isInView] = useInView(0.3);
  
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Visionary leader with 10+ years in tech innovation"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Tech expert specializing in scalable architectures"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Creative director with award-winning design portfolio"
    },
    {
      name: "Emily Watson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Operations expert ensuring seamless project delivery"
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
            Meet Our <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The talented individuals behind every successful project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-teal-500/30 transition-all duration-500 hover:scale-105 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-teal-400 font-medium mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
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
    <section className="py-20 bg-gradient-to-br from-teal-900/20 via-black to-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-blue-600/5" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Work Together?</span>
          </h2>
          
          <p className="text-gray-400 text-xl leading-relaxed mb-10">
            Let's transform your ideas into powerful digital solutions that drive real results
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
              Book a Free 30-Min Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Page Component
export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <StatsSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <CTASection />

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
    </div>
  );
}