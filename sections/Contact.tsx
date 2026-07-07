"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="section-subheading">Contact</p>
          <h2 className="section-heading">Let's connect!</h2>
          <p className="text-gray-500 leading-relaxed mt-4 mb-10">
            I&apos;m actively looking for full-time frontend or full stack software engineering
            roles. Whether you have an opportunity, or just wanna chat about junk journaling, my inbox is open.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:florenzdalangin@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-full font-medium hover:bg-accent-700 transition-colors text-sm"
            >
              <FiMail className="w-4 h-4" />
              Send an email
            </a>
            <a
              href="https://linkedin.com/in/cdalangin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-full font-medium hover:border-accent-600 hover:text-accent-600 transition-colors text-sm"
            >
              <FiLinkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
