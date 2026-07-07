"use client";

import { motion } from "framer-motion";
import categories from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-subheading"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="section-heading"
        >
          What I work with
        </motion.h2>

        <div className="mt-10 space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.08 }}
            >
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm text-gray-700 font-medium hover:border-accent-200 hover:text-accent-700 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gray-400" />
                    {name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
