import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hook/useInView';

export default function ContactSection() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Get In Touch</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-400 max-w-lg">
              Ready to transform your business with cutting-edge technology solutions? 
              Contact us today and let's discuss how we can help you achieve your goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">📍</span>
                <span>85 Great Portland Street, First Floor, London, United Kingdom, W1W 7LT</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">📧</span>
                <span>info@zanvionics.com</span>
              </div>
              {/* <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">📞</span>
                <span>+1 (555) 123-4567</span>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00B4A8] hover:bg-[#007399] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Book a Free 30-Min Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}