'use client'

import { FaBrain, FaCode, FaCloud, FaDatabase, FaCogs, FaNetworkWired } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      icon: FaBrain,
      title: 'AI & Machine Learning',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        'LLMs (GPT-4, Claude, Llama)',
        'LangChain & LlamaIndex',
        'RAG Systems',
        'HuggingFace Transformers',
        'Vector Databases (Pinecone)',
        'Fine-tuning (LoRA, PEFT)',
        'Ensemble Models (XGBoost)',
        'LSTM & Deep Learning',
      ],
    },
    {
      icon: FaCode,
      title: 'Backend Development',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        'Python (Expert)',
        'FastAPI',
        'Django & Flask',
        'REST APIs',
        'GraphQL',
        'WebSocket',
        'Authentication (JWT, OAuth)',
        'JavaScript/TypeScript',
      ],
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        'AWS (SageMaker, EC2, EKS)',
        'Docker & Kubernetes',
        'Terraform',
        'CI/CD (GitHub Actions)',
        'Prometheus & Grafana',
        'CloudWatch',
        'Infrastructure as Code',
        'Microservices',
      ],
    },
    {
      icon: FaDatabase,
      title: 'Databases',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradient: 'from-orange-500 to-red-500',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Pinecone (Vector DB)',
        'ChromaDB',
        'FAISS',
        'DynamoDB',
        'Query Optimization',
      ],
    },
    {
      icon: FaCogs,
      title: 'MLOps',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradient: 'from-red-500 to-pink-500',
      skills: [
        'MLflow',
        'Apache Airflow',
        'Model Deployment',
        'A/B Testing',
        'Model Monitoring',
        'Feature Stores',
        'Databricks',
        'Experiment Tracking',
      ],
    },
    {
      icon: FaNetworkWired,
      title: 'System Design',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      gradient: 'from-indigo-500 to-purple-500',
      skills: [
        'Distributed Systems',
        'Microservices Architecture',
        'System Design',
        'Load Balancing',
        'Event-Driven Architecture',
        'API Gateway',
        'Message Queues',
        'Scalability Patterns',
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
          Full-stack AI expertise from model development to production deployment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-50 text-gray-700 rounded-full hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 transition-all duration-300 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Key Strengths */}
        <div className="mt-12 p-8 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl shadow-2xl animate-slide-up">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'End-to-End AI Platform Development',
              'Production ML Systems at Scale',
              'LLM Integration & RAG Architecture',
              'MLOps Pipeline Automation',
              'Distributed Systems Design',
              'High-Performance API Development',
              'Cloud Infrastructure (AWS)',
              'Vector Databases & Semantic Search',
              'Transformer Models & Fine-tuning',
            ].map((strength, i) => (
              <div key={i} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                <span className="text-white font-medium text-sm">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
