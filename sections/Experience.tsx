"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { FiBriefcase, FiStar, FiHeart } from "react-icons/fi";
import experienceData from "@/data/experience.json";

type ExpEntry = {
  id: number;
  role: string;
  org: string;
  date: string;
  type: "work" | "fellowship" | "volunteer";
  bullets: string[];
};

const typeConfig: Record<
  string,
  { icon: React.ReactNode; bg: string; text: string }
> = {
  work: {
    icon: <FiBriefcase />,
    bg: "#7c6fe0",
    text: "#fff",
  },
  fellowship: {
    icon: <FiStar />,
    bg: "#a394f7",
    text: "#fff",
  },
  volunteer: {
    icon: <FiHeart />,
    bg: "#e9e3ff",
    text: "#6658c9",
  }
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-subheading"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="section-heading"
        >
          Where I&apos;ve worked &amp; contributed
        </motion.h2>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-4 mt-6 mb-10"
        >
          {Object.entries(typeConfig).map(([type, cfg]) => (
            <span
              key={type}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-gray-100 text-gray-500 capitalize"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: cfg.bg }}
              />
              {type}
            </span>
          ))}
        </motion.div>

        <VerticalTimeline lineColor="#e5e7eb">
          {(experienceData as ExpEntry[]).map((entry) => {
            const cfg = typeConfig[entry.type] ?? typeConfig.work;
            return (
              <VerticalTimelineElement
                key={entry.id}
                date={entry.date}
                iconStyle={{ background: cfg.bg, color: cfg.text, boxShadow: "none" }}
                icon={cfg.icon}
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #f3f4f6",
                  borderRadius: "12px",
                  boxShadow: "none",
                  padding: "1.5rem",
                }}
                contentArrowStyle={{ borderRight: "7px solid #f3f4f6" }}
              >
                <h3 className="font-display font-semibold text-gray-900 text-base">
                  {entry.role}
                </h3>
                <p className="text-accent-600 text-sm font-medium mt-0.5 mb-3">
                  {entry.org}
                </p>
                <ul className="space-y-1.5">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-500 leading-relaxed flex gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-300 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
