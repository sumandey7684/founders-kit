"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { resources, categories } from "@/data/resources";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = useMemo(() => {
    if (!searchTerm.trim()) {
      return resources;
    }

    const term = searchTerm.toLowerCase();
    return resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(term) ||
        resource.description.toLowerCase().includes(term) ||
        resource.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const categorizedResources = useMemo(() => {
    const grouped: Record<string, typeof resources> = {};

    filteredResources.forEach((resource) => {
      if (!grouped[resource.category]) {
        grouped[resource.category] = [];
      }
      grouped[resource.category].push(resource);
    });

    return grouped;
  }, [filteredResources]);

  const visibleCategories = useMemo(() => {
    return categories.filter((category) => categorizedResources[category]?.length > 0);
  }, [categorizedResources]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <main className="flex-grow">
        <section id="resources" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Explore Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse through our curated collection of tools, guides, and
                resources for every stage of your startup journey
              </p>
            </div>

            <Search
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              totalResults={filteredResources.length}
            />

            {filteredResources.length === 0 ? (
              <div className="text-center py-16">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No resources found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms
                </p>
              </div>
            ) : (
              <div id="categories">
                {visibleCategories.map((category) => (
                  <CategorySection
                    key={category}
                    category={category}
                    resources={categorizedResources[category]}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
