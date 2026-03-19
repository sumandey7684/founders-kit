export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              ⚙️ Founders Kit
            </h3>
            <p className="text-gray-600 text-sm">
              A curated collection of essential resources, tools, and playbooks
              to help founders build, launch, and scale startups successfully.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/avinash201199/founders-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/avinash201199/founders-kit/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  Report Issue
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/avinash201199/founders-kit#contributing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Community
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/AvinashSingh_20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  Follow on X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/avinash201199/founders-kit/stargazers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  Star on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              Made with ❤️ by{" "}
              <a
                href="https://x.com/AvinashSingh_20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Avinash Singh
              </a>
            </p>

            <p className="text-gray-600 text-sm">
              Licensed under{" "}
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                MIT License
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
