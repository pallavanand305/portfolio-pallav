'use client'

import { FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-20">
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Pallav Anand
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-primary-600 font-semibold mb-6">
            AI Engineer
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8 px-4">
            Specializing in LLMs, GenAI, RAG, MLOps & Cloud Infrastructure
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 px-4">
            4+ years building production ML systems at <span className="font-semibold">Amazon</span> and tech companies
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
            <span className="badge bg-primary-100 text-primary-700">Ex-Amazon ML Engineer</span>
            <span className="badge bg-green-100 text-green-700">AWS ML Certified</span>
            <span className="badge bg-purple-100 text-purple-700">CKAD Certified</span>
            <span className="badge bg-blue-100 text-blue-700">Published Researcher</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4">
            <a
              href="https://www.linkedin.com/in/pallav-a-6b7122408/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <FaLinkedin /> View LinkedIn Profile
            </a>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="inline-flex flex-col items-center text-gray-500 hover:text-primary-600 animate-bounce"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FaChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
