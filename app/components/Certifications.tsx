'use client'

import { FaAward, FaCheckCircle } from 'react-icons/fa'

export default function Certifications() {
  const certifications = [
    {
      name: 'AWS Certified Machine Learning – Specialty',
      issuer: 'Amazon Web Services',
      date: 'Sep 2024',
      featured: true,
    },
    {
      name: 'Certified Kubernetes Application Developer (CKAD)',
      issuer: 'CNCF (Cloud Native Computing Foundation)',
      date: 'Apr 2025',
      featured: true,
    },
    {
      name: 'DeepLearning.AI LLM / GenAI',
      issuer: 'DeepLearning.AI',
      date: 'Jun 2024',
      featured: true,
    },
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'May 2022',
      featured: false,
    },
    {
      name: 'GIAC Python Coder (GPYC)',
      issuer: 'GIAC Certifications',
      date: '',
      featured: false,
    },
    {
      name: 'GitHub Professional Certificate',
      issuer: 'GitHub',
      date: '',
      featured: false,
    },
    {
      name: 'Atlassian Agile Project Management',
      issuer: 'Atlassian',
      date: '',
      featured: false,
    },
  ]

  const education = [
    {
      degree: 'Master of Technology (M.Tech)',
      field: 'Computer Science Engineering',
      institution: 'Galgotias University',
      duration: 'Aug 2023 – Aug 2025',
    },
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science',
      institution: 'KIIT (Kalinga Institute of Industrial Technology)',
      duration: 'Jun 2016 – Jun 2020',
    },
  ]

  return (
    <section id="certifications" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Certifications
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Industry-recognized credentials demonstrating expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`card p-6 ${
                  cert.featured
                    ? 'border-2 border-primary-200 bg-primary-50'
                    : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${
                    cert.featured ? 'bg-primary-600' : 'bg-gray-400'
                  } text-white p-3 rounded-lg flex-shrink-0`}>
                    <FaAward className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {cert.name}
                      {cert.featured && (
                        <FaCheckCircle className="inline-block ml-2 text-primary-600 w-4 h-4" />
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                    {cert.date && (
                      <p className="text-sm text-gray-500">{cert.date}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-2">
                      {edu.field}
                    </p>
                    <p className="text-gray-700">{edu.institution}</p>
                  </div>
                  <div className="text-gray-600 sm:text-right">
                    {edu.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
