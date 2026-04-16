"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
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
            关于我
            <span className="block w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                个人简介
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                你好！我是 <strong className="text-gray-800 dark:text-gray-200">刘沛阳</strong>，
                目前就读于中山大学（深圳）公共卫生与预防医学专业，关注公共卫生实践与数据分析在真实场景中的应用。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                我曾在深圳市光明区疾控中心和中山大学附属第七医院实习，参与疾病防控数据整理分析、流调支持以及多科室临床实践，
                累积了从数据到一线场景的综合经验。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                在项目方面，我完成了 C++ 塔防游戏复刻、简易内存池等工程练习，也参与多组学与微塑料健康影响相关研究项目。
                欢迎交流合作与学习心得。
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                技能栈
              </h3>
              <div className="space-y-5">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-100 dark:border-indigo-800"
                        >
                          {skill}
                        </span>
                      ))}
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
