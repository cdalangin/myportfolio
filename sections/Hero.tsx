"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import portrait from "../public/portrait.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-accent-600 font-medium text-sm tracking-wide mb-4"
          >
            Hi, I'm Cirill!
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-gray-900 leading-tight mb-4"
          >
            <span className="text-accent-600">Full Stack Software Engineer</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md"
          >
            Based in NYC Metropolitan Area. I build clean, accessible web experiences and
            I'm actively looking for full-time opportunities.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="#contact"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-full font-medium hover:bg-accent-700 transition-colors text-sm"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-5"
          >
            <a
              href="https://linkedin.com/in/cdalangin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-accent-600 transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/cdalangin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-accent-600 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="mailto:florenzdalangin@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-accent-600 transition-colors"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Accent ring */}
            <div className="absolute inset-0 rounded-full border-2 border-accent-200 scale-110" />
            <div className="w-full h-full rounded-full bg-accent-50 border border-accent-100 overflow-hidden flex items-center justify-center text-accent-300 text-6xl font-display font-semibold select-none">
              CF
              <Image
                src={portrait}
                alt="Cirill Florenz Dalangin"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
