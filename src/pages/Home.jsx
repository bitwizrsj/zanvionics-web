import React from 'react';
import AIAutomationLanding from "./home/Hero";
import { Brands } from "./home/Brands";
import ServicesSection from "./home/Services";
import WhyUKSection from "./home/WhyUK";
import TopProjects from "./home/TopProjects";
import TopBlogs from "./home/TopBlogs";
import Testimonials from "./home/Testimonials";
import ContactSection from "./home/Contact";
import CareersSection from "./home/Careers";

function Home() {
  return (
    <div className="bg-black">
      <AIAutomationLanding />
      {/* <Brands /> */}
      <ServicesSection />
      <WhyUKSection />
      <TopProjects />
      {/* <TopBlogs /> */}
      <Testimonials />
      <CareersSection />
      <ContactSection />
    </div>
  );
}

export default Home;