"use client";

interface SearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  totalResults: number;
}

export default function Search({
  searchTerm,
  onSearchChange,
  totalResults,
}: SearchProps) {
  return (
    <div className="mb-12">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search resources by name..."
            className="w-full pl-12 pr-4 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
          />

          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {searchTerm && (
          <p className="mt-3 text-sm text-gray-600 text-center">
            Found{" "}
            <span className="font-semibold text-gray-900">{totalResults}</span>{" "}
            {totalResults === 1 ? "resource" : "resources"}
          </p>
        )}
      </div>
    </div>
  );
}
