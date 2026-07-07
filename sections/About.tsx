"use client";

import { motion } from "framer-motion";

const currently = [
  { label: "Learning", value: "Next.js & TypeScript" },
  { label: "Building", value: "A personal project (coming soon)" },
  { label: "Making", value: "Crochet sunflowers 🌻" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-subheading"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="section-heading"
        >
          A little about me
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-5 text-gray-600 leading-relaxed"
          >
            <p>
            I'm a Software Engineer with 3 years of experience building full-stack web 
            applications and scalable systems in TypeScript and Java. I've led end-to-end 
            feature development for a global financial intelligence platform serving 2,000+ 
            enterprise clients, and built out logging and observability infrastructure that 
            improved visibility and data-driven decision making across the product.
            </p>

            <p>
            I'm passionate about writing clean, reliable code that solves real problems 
            for real people. My background spans frontend interfaces, backend APIs, and 
            analytics infrastructure, and I thrive in collaborative environments where 
            engineering and product work closely together to ship meaningful software.
            </p>

            <p>
            I'm currently looking for opportunities where I can bring that experience to 
            work that has a direct, positive impact on people's lives.
            </p>
          </motion.div>

          {/* Currently sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 h-fit"
          >
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-5">
              Currently
            </p>
            <ul className="space-y-4">
              {currently.map((item) => (
                <li key={item.label}>
                  <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                  <p className="text-sm text-gray-700 font-medium">{item.value}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
