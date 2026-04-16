"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award as AwardIcon, Star } from "lucide-react";
import { awards } from "@/data/awards";
import type { Award } from "@/data/awards";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const levelConfig: Record<
  Award["level"],
  { color: string; bgColor: string; Icon: React.ElementType }
> = {
  国际: {
    color: "text-yellow-700 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700",
    Icon: Trophy,
  },
  全国: {
    color: "text-indigo-700 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700",
    Icon: Medal,
  },
  省级: {
    color: "text-purple-700 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700",
    Icon: AwardIcon,
  },
  校级: {
    color: "text-green-700 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700",
    Icon: Star,
  },
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            竞赛获奖
            <span className="block w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {awards.map((award, idx) => {
              const config = levelConfig[award.level];
              const Icon = config.Icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className={`flex gap-4 p-5 rounded-2xl border ${config.bgColor} transition-all hover:shadow-md`}
                >
                  <div className={`shrink-0 mt-0.5 ${config.color}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {award.title}
                      </h3>
                      <span
                        className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${config.bgColor} ${config.color}`}
                      >
                        {award.level}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                      {award.competition}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {award.date}
                      </span>
                      {award.rank && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          · {award.rank}
                        </span>
                      )}
                    </div>
                    {award.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                        {award.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
