const projects = [
  {
    id: 1,
    title: "Predictive Analytics Dashboard",
    description: "Built a real-time dashboard for predictive maintenance using machine learning models to forecast equipment failures.",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    category: "Machine Learning",
    link: "#"
  },
  {
    id: 2,
    title: "Customer Segmentation Engine",
    description: "Developed an automated customer segmentation system using clustering algorithms to improve marketing targeting.",
    technologies: ["Python", "Scikit-learn", "PostgreSQL", "Airflow"],
    category: "Data Engineering",
    link: "#"
  },
  {
    id: 3,
    title: "NLP Sentiment Analyzer",
    description: "Created a sentiment analysis tool for social media data to track brand perception and customer feedback.",
    technologies: ["Python", "NLTK", "Transformers", "FastAPI"],
    category: "Natural Language Processing",
    link: "#"
  },
  {
    id: 4,
    title: "Time Series Forecasting",
    description: "Implemented ARIMA and LSTM models for sales forecasting with 95% accuracy improvement over baseline.",
    technologies: ["Python", "Keras", "Pandas", "Plotly"],
    category: "Machine Learning",
    link: "#"
  },
  {
    id: 5,
    title: "A/B Testing Framework",
    description: "Designed a statistical framework for A/B testing with automated significance testing and reporting.",
    technologies: ["Python", "Stats", "Docker", "React"],
    category: "Statistics",
    link: "#"
  },
  {
    id: 6,
    title: "Data Pipeline Automation",
    description: "Built ETL pipelines processing 100GB+ daily data with monitoring and error handling capabilities.",
    technologies: ["Apache Spark", "Python", "AWS", "Kafka"],
    category: "Data Engineering",
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of data science projects showcasing machine learning, 
            data engineering, and analytical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300 bg-gray-950"
            >
              <div className="mb-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-300 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors group"
              >
                View Project
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            View GitHub
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}