const experiences = [
  {
    id: 1,
    role: "Senior Data Scientist",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading data science initiatives for predictive analytics and machine learning projects. Building scalable ML pipelines and mentoring junior team members.",
    achievements: [
      "Increased model accuracy by 25% through feature engineering",
      "Reduced data processing time by 60% with optimized pipelines",
      "Led a team of 5 data scientists on key projects"
    ]
  },
  {
    id: 2,
    role: "Data Scientist",
    company: "Analytics Inc",
    period: "2020 - 2022",
    description: "Developed machine learning models for customer behavior prediction and business intelligence solutions.",
    achievements: [
      "Built customer churn prediction model with 92% accuracy",
      "Created automated reporting dashboards saving 20 hours/week",
      "Implemented A/B testing framework for product features"
    ]
  },
  {
    id: 3,
    role: "Data Analyst",
    company: "StartUp XYZ",
    period: "2018 - 2020",
    description: "Analyzed business metrics and created data-driven insights to support strategic decision-making.",
    achievements: [
      "Identified $2M in cost savings through data analysis",
      "Built company's first data warehouse from scratch",
      "Trained 10+ employees on data analysis tools"
    ]
  }
];

const skills = {
  "Programming": ["Python", "R", "SQL", "JavaScript", "Scala"],
  "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras"],
  "Data Engineering": ["Apache Spark", "Airflow", "Kafka", "Docker", "AWS"],
  "Visualization": ["Tableau", "Power BI", "D3.js", "Plotly", "Matplotlib"],
  "Statistics": ["Hypothesis Testing", "Time Series", "Bayesian Methods", "Causal Inference"]
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Experience</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A journey through data science, from analysis to machine learning engineering.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Professional Journey</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-gray-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full"></div>
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <div className="flex items-center gap-4 text-gray-400 mt-1">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-500 mr-2">▪</span>
                      <span className="text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border border-gray-800 p-6 bg-gray-950">
                <h3 className="text-xl font-semibold mb-4 text-gray-100">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-800 pl-8">
              <h3 className="text-xl font-semibold">Master of Science in Data Science</h3>
              <p className="text-gray-400">University Name • 2016 - 2018</p>
              <p className="text-gray-300 mt-2">Specialized in machine learning and statistical modeling</p>
            </div>
            <div className="border-l-2 border-gray-800 pl-8">
              <h3 className="text-xl font-semibold">Bachelor of Science in Mathematics</h3>
              <p className="text-gray-400">University Name • 2012 - 2016</p>
              <p className="text-gray-300 mt-2">Minor in Computer Science</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's connect and discuss how I can help with your data challenges.
          </p>
          <a
            href="mailto:abby@example.com"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}