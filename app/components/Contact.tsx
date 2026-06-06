'use client'

import { FaLinkedin, FaRocket, FaCheck, FaClock } from 'react-icons/fa'

export default function Contact() {
  const capabilities = [
    'End-to-End AI Platform Development',
    'LLM & RAG System Integration',
    'Production MLOps & Deployment',
    'Cloud Infrastructure (AWS/K8s)',
    'High-Performance Backend APIs',
    'Research-Backed Solutions',
  ]

  return (
    <section id="contact" className="section-container bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Full-Stack AI Engineering for Your Next Project
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-lg flex-shrink-0">
                  <FaCheck className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 font-medium text-sm leading-relaxed">
                  {capability}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-white relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-block mb-6 animate-bounce">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <FaRocket className="w-12 h-12 text-white" />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Available for Your AI Projects
            </h3>
            
            <p className="text-lg sm:text-xl mb-6 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Specialized in building production-ready AI systems from concept to deployment. 
              5+ years of experience with <span className="font-bold">Amazon</span> and high-growth startups.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="text-sm text-white/80">System Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">8+</div>
                <div className="text-sm text-white/80">Certifications</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://www.linkedin.com/in/pallav-a-6b7122408/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-3 group"
              >
                <FaLinkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>View LinkedIn Profile</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/80">
              <FaClock className="w-4 h-4" />
              <span className="text-sm">Remote • Flexible with Global Teams</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-semibold">TECH STACK</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'LangChain', 'AWS', 'Kubernetes', 'FastAPI', 'PostgreSQL', 'Pinecone', 'Docker'].map((tech, i) => (
              <span
                key={i}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
