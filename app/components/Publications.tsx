'use client'

import { FaBook, FaCalendar, FaTag } from 'react-icons/fa'

export default function Publications() {
  const publications = [
    {
      title: 'Hybrid Machine Learning Framework for Stock Market Forecasting',
      subtitle: 'Integrating Technical Indicators with Ensemble Models',
      conference: 'CISES 2025 (Conference on Information Systems and Emerging Sciences)',
      date: 'June 29, 2025',
      keywords: ['Stock Market Prediction', 'Ensemble Models', 'Random Forest', 'XGBoost', 'LightGBM', 'Financial Time Series'],
      description: 'Developed a novel ensemble approach combining Random Forest, XGBoost, and LightGBM with technical indicators, achieving 12-18% accuracy improvement over baseline models for financial time-series forecasting.',
    },
    {
      title: 'A Time-Series Forecasting Framework for Stock Market Prediction',
      subtitle: 'Using LSTM and Technical Indicators',
      conference: 'CISES 2025 (Conference on Information Systems and Emerging Sciences)',
      date: 'June 29, 2025',
      keywords: ['LSTM', 'Time-Series Forecasting', 'Deep Learning', 'Technical Indicators', 'Financial Market Analysis'],
      description: 'Designed a deep learning architecture integrating LSTM networks with domain-specific technical indicators for sequential financial data analysis, demonstrating superior performance on long-term forecasts.',
    },
  ]

  return (
    <section id="publications" className="section-container bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Research Publications
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Published research demonstrating academic rigor and practical ML applications
        </p>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="card p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <FaBook className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pub.title}
                  </h3>
                  {pub.subtitle && (
                    <p className="text-lg text-gray-700 mb-3 italic">
                      {pub.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2 text-primary-600 font-semibold">
                  <FaBook className="w-4 h-4" />
                  <span>{pub.conference}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaCalendar className="w-4 h-4" />
                  <span>{pub.date}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {pub.description}
              </p>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaTag className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    Keywords:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Impact */}
        <div className="mt-8 card p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Research Impact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
              <span className="text-gray-700">
                Demonstrates expertise in both classical ML (ensemble methods) and deep learning (LSTM networks)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
              <span className="text-gray-700">
                Practical applications in financial domain with quantified improvements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
              <span className="text-gray-700">
                Establishes credibility in FinTech and time-series forecasting
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
              <span className="text-gray-700">
                Applies academic rigor to real-world trading scenarios
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
