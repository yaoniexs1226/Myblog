"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const contactLinks = [
  {
    icon: Mail,
    label: "邮件",
    value: "yaoniexuesheng@gmail.com",
    href: "mailto:yaoniexuesheng@gmail.com",
    desc: "欢迎发送邮件",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "yaoniexs1226",
    href: "https://github.com/yaoniexs1226",
    desc: "查看开源项目",
  },
  {
    icon: MessageCircle,
    label: "微信",
    value: "lpy011226",
    href: "#wechat",
    desc: "欢迎添加交流",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
          >
            联系我
            <span className="block w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-xl mx-auto"
          >
            如果你对我的项目感兴趣，或者想要探讨合作机会，欢迎通过以下方式联系我！
          </motion.p>

          {/* Contact cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
          >
            {contactLinks.map(({ icon: Icon, label, value, href, desc }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all text-center"
              >
                <div className="p-3 mb-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors text-indigo-600 dark:text-indigo-400">
                  <Icon />
                </div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  {label}
                </p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1 font-medium">
                  {value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {desc}
                </p>
              </a>
            ))}
          </motion.div>

          {/* Message form */}
          <motion.div
            variants={fadeUp}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
              <Send size={18} className="text-indigo-600" />
              发送消息
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("消息已发送！（此处需接入后端或表单服务）");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    姓名
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="你的姓名"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    邮件地址
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yaoniexuesheng@gmail.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  消息内容
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="你的消息..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/50"
              >
                发送
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} 刘沛阳 · Built with Next.js & Tailwind CSS</p>
      </div>
    </section>
  );
}
