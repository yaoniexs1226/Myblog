"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import { education, experience } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            个人履历
            <span className="block w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
                  <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  教育经历
                </h3>
              </div>
              <div className="relative border-l-2 border-indigo-200 dark:border-indigo-700 pl-6 space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-indigo-500 ring-2 ring-white dark:ring-gray-800" />
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {edu.school}
                      </h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                        {edu.degree} · {edu.major}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          {edu.period}
                        </span>
                        {edu.gpa && (
                          <span className="flex items-center gap-1">
                            <MapPin size={13} />
                            GPA {edu.gpa}
                          </span>
                        )}
                      </div>
                      {edu.description && (
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Briefcase className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  工作经历
                </h3>
              </div>
              <div className="relative border-l-2 border-purple-200 dark:border-purple-700 pl-6 space-y-8">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-purple-500 ring-2 ring-white dark:ring-gray-800" />
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {exp.company}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mt-1">
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-1 mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                      <ul className="mt-3 space-y-1">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-400 flex gap-2"
                          >
                            <span className="text-purple-400 mt-0.5 shrink-0">·</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
