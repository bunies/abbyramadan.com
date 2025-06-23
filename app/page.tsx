import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight">
            Abby Ramadan
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-400">
            Financial Analyst & Artist
          </p>
        </div>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to my digital space. I blend data science with creative expression,
            turning complex problems into elegant solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/projects"
            className="group px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg"
          >
            View Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/experience"
            className="group px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-300 font-medium text-lg"
          >
            Experience
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="pt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">20+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Domains</div>
          </div>
        </div>
      </div>
    </div>
  );
}