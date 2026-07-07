"use client";

import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Building() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-accent-100 bg-accent-50 px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
        >
          <div className="flex-1">
            <p className="text-xs font-medium text-accent-600 uppercase tracking-widest mb-3">
              What I&apos;m building
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-3">
              Projects coming soon.
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-md">
              {/* TODO: Update with what you're actually working on */}
              I&apos;m currently working on a project I&apos;ll be sharing here shortly.
              In the meantime, you can follow along on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/cdalangin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-full font-medium hover:bg-accent-700 transition-colors text-sm shrink-0 w-fit"
          >
            See my GitHub <HiArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
