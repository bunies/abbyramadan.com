"use client";

import { useState } from "react";

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

export default function ArtPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks = selectedCategory === "All" 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Art & Creative Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where data science meets creative expression. Exploring the intersection
            of algorithms, aesthetics, and artistic vision.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border transition-all duration-300 ${
                selectedCategory === category
                  ? "border-white bg-white text-black"
                  : "border-gray-600 text-gray-400 hover:border-white hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-gray-900 border border-gray-800 overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600 text-sm">Artwork Preview</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-lg">View Details</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{artwork.title}</h3>
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
          <h2 className="text-3xl font-bold mb-6">Creative Process</h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
            <p>
              My artistic practice explores the aesthetic possibilities within data and algorithms. 
              Each piece begins with a question: How can we make the invisible patterns in data visible 
              and beautiful?
            </p>
            <p>
              Using tools ranging from Processing and P5.js to machine learning frameworks, 
              I create works that blur the line between art and analysis, turning complex 
              datasets into visual experiences that speak to both the mind and the soul.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              Commission Work
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}