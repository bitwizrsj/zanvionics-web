import React from 'react';
import { Link } from 'react-router-dom';

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Animated particles/dots */}
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white opacity-20 rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                    }}
                />
            ))}

            {/* Connecting lines */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={`line-${i}`}
                    className="absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${50 + Math.random() * 100}px`,
                        height: '1px',
                        transform: `rotate(${Math.random() * 180}deg)`,
                        animation: `pulse ${3 + Math.random() * 2}s infinite`
                    }}
                />
            ))}

            {/* Glowing orbs - Updated to match logo colors */}
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-xl animate-pulse" />
            <div className="absolute top-40 right-1/3 w-24 h-24 bg-blue-500 rounded-full opacity-15 blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-green-400 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
    );
};

export default function AIAutomationLanding() {
    return (
        <div className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden">
            <AnimatedBackground />

            {/* Main content */}
            <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
                {/* New badge - Updated colors */}
                <div className="inline-flex items-center gap-2 bg-teal-600/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-4 py-2 mb-8">
                    <span className="bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        UK-based
                    </span>
                    <span className="text-white text-sm">UK-based technology company</span>
                </div>

                {/* Main heading - Updated gradient */}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Helping UK Businesses{' '}
                    <br />
                    <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                        Automate Operations & Scale Efficiently
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                    UK-based delivery with global expertise across AI, web, and automation solutions.
                </p>

                {/* CTA buttons - Updated colors */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/contact">
                    <button className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-2">
                        Book a Free 30-Min Consultation
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>

            {/* Floating elements - Updated to match logo colors */}
            <div className="absolute top-1/4 left-12 w-2 h-2 bg-teal-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/3 right-16 w-1 h-1 bg-blue-500 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '1.5s' }} />
            <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-green-500 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2.5s' }} />

            {/* Gradient overlay with logo-inspired colors */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-transparent to-blue-900/10 pointer-events-none" />
        </div>
    );
}