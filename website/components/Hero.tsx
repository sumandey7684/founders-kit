"use client";

export default function Hero() {
  const scrollToResources = () => {
    const element = document.getElementById("resources");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <span className="text-6xl sm:text-7xl">⚙️</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Founders Kit
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            A curated collection of essential resources, tools, and playbooks
          </p>

          <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Everything you need to build, launch, and scale your startup successfully
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToResources}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-sm hover:shadow-md"
            >
              Browse Resources
            </button>

            <a
              href="https://github.com/avinash201199/founders-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg shadow-sm hover:shadow-md"
            >
              View on GitHub
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Curated Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-gray-600">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
