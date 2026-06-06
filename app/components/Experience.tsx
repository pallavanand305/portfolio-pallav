'use client'

import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      company: 'Sayer',
      role: 'AI Engineer',
      duration: 'May 2026 – Present',
      location: 'Remote',
      current: true,
      description: 'Leading end-to-end AI platform development and maintenance',
      highlights: [
        'Building production-ready LLM applications with RAG architecture and vector databases',
        'Developing transformer-based models and fine-tuning LLMs for domain-specific tasks',
        'Designing distributed AI systems with microservices architecture',
        'Implementing MLOps pipelines with automated model deployment and monitoring',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Broadway Infotech',
      role: 'Software Engineer',
      duration: 'Oct 2024 – Apr 2026 (1 yr 6 mos)',
      location: 'Noida, On-site',
      current: false,
      description: 'Backend development and AI model integration',
      highlights: [
        'Developed high-performance APIs with FastAPI and Django',
        'Reduced API response time by 40% through optimization',
        'Integrated AI capabilities into production applications',
        'Managed scalable database systems (PostgreSQL, MongoDB, Redis)',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'Amazon',
      role: 'Machine Learning Engineer',
      duration: 'Aug 2021 – Sep 2024 (3 yrs 2 mos)',
      location: 'Hyderabad, On-site',
      current: false,
      description: 'Production ML systems serving millions of users',
      highlights: [
        'Designed and deployed ML models serving millions of users',
        'Built robust MLOps pipelines with 99.9% uptime',
        'Reduced inference costs by 35% through optimization',
        'Implemented automated model monitoring and retraining',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="experience" className="section-container bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
          Work Experience
        </h2>
        <p className="text-center text-gray-600 mb-12 animate-fade-in">
          4+ years building AI/ML systems at scale
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.role}
                  </h3>
                  <div className={`text-xl font-bold mb-2 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent inline-flex items-center gap-3`}>
                    {exp.company}
                    {exp.current && (
                      <span className="text-xs px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                  <FaCalendar className={`bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                  <FaMapMarkerAlt className={`bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 italic font-medium">{exp.description}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} flex-shrink-0 group-hover:scale-150 transition-transform`}></span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
