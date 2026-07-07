"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiTrophy } from "react-icons/hi2";
import projectsData from "@/data/projects.json";

type Project = {
  id: number;
  name: string;
  prize: string | null;
  desc: string;
  technologies: string[];
  github: string;
  demo: string;
  demo_label: string;
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-subheading"
        >
          Projects
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10"
        >
          <h2 className="section-heading mb-0">Things I&apos;ve built</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {(projectsData as Project[]).map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 hover:border-accent-200 hover:shadow-sm transition-all duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display font-semibold text-gray-900 text-lg leading-snug">
                  {project.name}
                </h3>
                {/* Links */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub`}
                    className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors rounded-lg hover:bg-gray-50"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} demo`}
                    className="p-1.5 text-gray-400 hover:text-accent-600 transition-colors rounded-lg hover:bg-accent-50"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                  )}
                </div>
              </div>

              {/* Prize badge */}
              {project.prize && (
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-100 rounded-full px-3 py-1 w-fit">
                  <HiTrophy className="w-3 h-3 text-amber-500" />
                  {project.prize}
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-1 border-t border-gray-50">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-500 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          <a
            href="https://github.com/cdalangin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-600 hover:underline"
          >
            Check out my Github to see what I build next!
          </a>
        </motion.p>
      </div>
    </section>
  );
}
