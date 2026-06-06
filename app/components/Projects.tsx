'use client'

import { FaRocket, FaCog, FaChartLine, FaCode } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      icon: FaCog,
      title: 'Production ML Systems',
      company: 'Amazon',
      description: 'Large-scale ML pipelines serving millions of users with automated deployment',
      achievements: [
        '99.9% model uptime',
        '35% reduction in inference costs',
        '50% faster model training',
        'Automated retraining workflows',
      ],
      technologies: ['SageMaker', 'MLflow', 'Airflow', 'PySpark', 'XGBoost', 'TensorFlow'],
    },
    {
      icon: FaCode,
      title: 'High-Performance APIs',
      company: 'Broadway Infotech',
      description: 'Scalable backend systems integrating AI models with microservices architecture',
      achievements: [
        '40% API latency reduction',
        '99.8% API uptime',
        '10,000+ requests/min handled',
        '60% database query optimization',
      ],
      technologies: ['FastAPI', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
    },
    {
      icon: FaChartLine,
      title: 'Financial ML Research',
      company: 'CISES 2025',
      description: 'Published research on stock market forecasting using ensemble models and LSTM',
      achievements: [
        '2 papers published at CISES 2025',
        '12-18% accuracy improvement',
        'Hybrid ensemble framework',
        'LSTM time-series architecture',
      ],
      technologies: ['XGBoost', 'LightGBM', 'LSTM', 'PyTorch', 'Scikit-learn', 'Pandas'],
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Production systems, research, and scalable solutions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="card p-6 sm:p-8 hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <span className="text-primary-600 font-semibold">
                      {project.company}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
