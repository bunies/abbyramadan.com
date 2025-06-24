"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

const artworks = [
  {
    id: 1,
    title: "Data Visualization Series I",
    medium: "Digital Art",
    year: "2024",
    description: "Exploring the beauty in data patterns through generative art algorithms.",
    category: "Digital"
  },
  {
    id: 2,
    title: "Neural Network Dreams",
    medium: "AI-Generated + Digital Painting",
    year: "2024",
    description: "Collaboration between human creativity and machine learning outputs.",
    category: "AI Art"
  },
  {
    id: 3,
    title: "Abstract Data Flows",
    medium: "Processing & P5.js",
    year: "2023",
    description: "Real-time data streams transformed into dynamic visual compositions.",
    category: "Generative"
  },
  {
    id: 4,
    title: "Statistical Landscapes",
    medium: "3D Rendering",
    year: "2023",
    description: "Turning statistical distributions into imaginary landscapes.",
    category: "3D Art"
  },
  {
    id: 5,
    title: "Code Poetry",
    medium: "Typography & Code",
    year: "2023",
    description: "Where programming syntax meets visual poetry.",
    category: "Typography"
  },
  {
    id: 6,
    title: "Binary Botanicals",
    medium: "Digital Illustration",
    year: "2022",
    description: "Nature-inspired patterns generated through recursive algorithms.",
    category: "Digital"
  }
];

const categories = ["All", "Digital", "AI Art", "Generative", "3D Art", "Typography"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks = selectedCategory === "All" 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-[100vh] px-4">
        <div className="max-w-[52rem] w-full space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-[3.75rem] sm:text-[6rem] font-bold tracking-tight fade-in">
              Abby Ramadan
            </h1>
            <p className="text-[1.5rem] sm:text-[1.875rem] text-gray-400 fade-in delay-200">
              Financial Analyst & Artist
            </p>
          </div>
          
          <div className="space-y-4 max-w-[42rem] mx-auto">
            <p className="text-[1.125rem] text-gray-300 leading-relaxed fade-in delay-400">
              Welcome to my digital space. I blend data science with creative expression,
              turning complex problems into elegant solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              variant="default"
              size="lg"
              className="group px-8 py-4 text-[1.125rem] slide-in-left delay-500"
            >
              <a href="#projects">
                View Projects
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group px-8 py-4 text-[1.125rem] slide-in-right delay-500"
            >
              <a href="#experience">
                Experience
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Button>
          </div>

          <div className="pt-20 grid grid-cols-3 gap-8 max-w-[42rem] mx-auto">
            <div className="text-center scale-in delay-600">
              <div className="text-[1.875rem] font-bold mb-2">5+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center scale-in delay-700">
              <div className="text-[1.875rem] font-bold mb-2">20+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center scale-in delay-800">
              <div className="text-[1.875rem] font-bold mb-2">3</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Domains</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-[100vh] px-4 py-20">
        <div className="max-w-[80rem] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-[3rem] sm:text-[3.75rem] font-bold mb-4 fade-in">Projects</h2>
            <p className="text-[1.25rem] text-gray-400 max-w-[42rem] mx-auto fade-in delay-200">
              A collection of data science projects showcasing machine learning, 
              data engineering, and analytical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`group border-gray-800 hover:border-gray-600 transition-all duration-[300ms] bg-gray-950 scale-in delay-${(project.id - 1) * 100}`}
              >
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-[1.25rem] group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button
                    asChild
                    variant="link"
                    className="h-auto p-0 text-white hover:text-gray-300"
                  >
                    <a href={project.link} className="inline-flex items-center group">
                      View Project
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-6">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <Button
              asChild
              variant="default"
              size="lg"
              className="px-6 py-3"
            >
              <a href="https://github.com" className="inline-flex items-center">
                View GitHub
                <span className="ml-2">→</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-[100vh] px-4 py-20">
        <div className="max-w-[72rem] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-[3rem] sm:text-[3.75rem] font-bold mb-4 fade-in">Experience</h2>
            <p className="text-[1.25rem] text-gray-400 max-w-[42rem] mx-auto fade-in delay-200">
              A journey through data science, from analysis to machine learning engineering.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-[1.875rem] font-bold mb-8 slide-in-left">Professional Journey</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className={`relative pl-8 border-l-2 border-gray-800 fade-in delay-${(exp.id - 1) * 200}`}>
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full"></div>
                  <div className="mb-4">
                    <h4 className="text-[1.5rem] font-semibold">{exp.role}</h4>
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
            <h3 className="text-[1.875rem] font-bold mb-8 slide-in-left">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category} className="border-gray-800 bg-gray-950 scale-in">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-100">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-[1.875rem] font-bold mb-8 slide-in-left">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-gray-800 pl-8 slide-in-right">
                <h4 className="text-[1.25rem] font-semibold">Master of Science in Data Science</h4>
                <p className="text-gray-400">University Name • 2016 - 2018</p>
                <p className="text-gray-300 mt-2">Specialized in machine learning and statistical modeling</p>
              </div>
              <div className="border-l-2 border-gray-800 pl-8 slide-in-right delay-200">
                <h4 className="text-[1.25rem] font-semibold">Bachelor of Science in Mathematics</h4>
                <p className="text-gray-400">University Name • 2012 - 2016</p>
                <p className="text-gray-300 mt-2">Minor in Computer Science</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Interested in working together? Let's connect and discuss how I can help with your data challenges.
            </p>
            <Button
              asChild
              variant="default"
              size="lg"
              className="px-6 py-3"
            >
              <a href="mailto:abby@example.com" className="inline-flex items-center">
                Get in Touch
                <span className="ml-2">→</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Art Section */}
      <section id="art" className="min-h-[100vh] px-4 py-20">
        <div className="max-w-[80rem] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-[3rem] sm:text-[3.75rem] font-bold mb-4 fade-in">Art & Creative Work</h2>
            <p className="text-[1.25rem] text-gray-400 max-w-[42rem] mx-auto fade-in delay-200">
              Where data science meets creative expression. Exploring the intersection
              of algorithms, aesthetics, and artistic vision.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant="outline"
                className={`px-4 py-2 scale-in delay-${index * 100} ${
                  selectedCategory === category
                    ? "bg-white text-black border-white hover:bg-gray-100 hover:text-black"
                    : "border-gray-600 text-gray-400 hover:border-white hover:text-white hover:bg-transparent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className={`group cursor-pointer fade-in delay-${(artwork.id - 1) * 100}`}
              >
                <div className="aspect-square bg-gray-900 border border-gray-800 overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">Artwork Preview</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-[300ms] flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-[1.125rem]">View Details</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-semibold mb-1">{artwork.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {artwork.medium} • {artwork.year}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center border-t border-gray-800 pt-20">
            <h3 className="text-[1.875rem] font-bold mb-6 fade-in">Creative Process</h3>
            <div className="max-w-[48rem] mx-auto text-gray-300 space-y-4">
              <p className="fade-in delay-200">
                My artistic practice explores the aesthetic possibilities within data and algorithms. 
                Each piece begins with a question: How can we make the invisible patterns in data visible 
                and beautiful?
              </p>
              <p className="fade-in delay-400">
                Using tools ranging from Processing and P5.js to machine learning frameworks, 
                I create works that blur the line between art and analysis, turning complex 
                datasets into visual experiences that speak to both the mind and the soul.
              </p>
            </div>
            <div className="mt-8">
              <Button
                asChild
                variant="default"
                size="lg"
                className="px-6 py-3"
              >
                <a href="#" className="inline-flex items-center">
                  Commission Work
                  <span className="ml-2">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}