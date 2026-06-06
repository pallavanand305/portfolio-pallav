'use client'

import { FaBriefcase, FaGraduationCap, FaAward, FaBook } from 'react-icons/fa'

export default function About() {
  const stats = [
    { icon: FaBriefcase, label: 'Years Experience', value: '4+', color: 'from-purple-500 to-pink-500' },
    { icon: FaAward, label: 'Certifications', value: '8+', color: 'from-blue-500 to-cyan-500' },
    { icon: FaBook, label: 'Publications', value: '2', color: 'from-green-500 to-emerald-500' },
    { icon: FaGraduationCap, label: 'Degrees', value: 'M.Tech', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section id="about" className="section-container bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
          About Me
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 mb-12 animate-slide-up">
          <p className="text-lg leading-relaxed mb-6">
            I'm a <strong className="text-purple-600">Full-Stack AI Engineer</strong> with 4+ years of experience building production-grade 
            AI/ML systems that serve millions of users. Currently leading AI platform development at <strong className="text-blue-600">Sayer</strong>, 
            I combine Big Tech engineering rigor from my 3+ years at <strong className="text-orange-600">Amazon</strong> with agility from tech companies.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            My expertise spans the complete AI product lifecycle—from architecture design and model development 
            to MLOps pipelines, cloud infrastructure, and production monitoring. I specialize in integrating 
            <strong className="text-purple-600"> Large Language Models</strong>, building <strong className="text-blue-600">RAG systems</strong>, and deploying 
            scalable AI applications on <strong className="text-orange-600">AWS</strong> and <strong className="text-cyan-600">Kubernetes</strong>.
          </p>

          <p className="text-lg leading-relaxed">
            As a <strong className="text-green-600">published researcher</strong> at CISES 2025 with multiple certifications 
            (AWS ML Specialty, CKAD, DeepLearning.AI GenAI), I stay current with cutting-edge AI techniques 
            while maintaining a strong focus on building production-ready systems that work reliably at scale.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-slide-up border border-gray-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-1 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
