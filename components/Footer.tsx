import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Cirill Florenz Dalangin</span>
        <div className="flex items-center gap-4">
          <span>Built with Next.js + Tailwind</span>
          <a
            href="https://github.com/cdalangin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-700 transition-colors"
          >
            <FiGithub className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
