'use client'

import { FaLinkedin, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-300 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Pallav Anand
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-300">
              AI Engineer specializing in LLMs, GenAI, RAG, MLOps, and cloud infrastructure. 
              Building production-ready AI systems from concept to deployment.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/pallav-a-6b7122408/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-purple-400 transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-purple-400 transition-colors duration-300">
                  Publications
                </a>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-4">Core Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Large Language Models (LLMs)</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>RAG Systems & Vector Databases</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>MLOps & Production ML</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>AWS Cloud Architecture</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Backend Development (Python)</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Kubernetes & Docker</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} Pallav Anand. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              Built with <FaHeart className="text-red-500 w-4 h-4 animate-pulse" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
