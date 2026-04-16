export interface EducationItem {
  school: string;
  degree: string;
  major: string;
  period: string;
  description?: string;
  gpa?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const education: EducationItem[] = [
  {
    school: "中山大学（深圳）",
    degree: "本科",
    major: "公共卫生与预防医学",
    period: "2019.09 — 2025.12",
    gpa: "2.3 / 4.0（排名 50% - 100%）",
    description: "完成公共卫生与预防医学本科学习，参与数据分析相关毕业设计与科研训练。",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "深圳市光明区疾病预防控制中心",
    role: "实习生",
    period: "2024.10 — 2025.01",
    description: [
      "参与登革热防控数据收集、整理与分析，使用统计方法完成分类汇总并协助产出流调分析报告。",
      "参与小学不明原因群体性腹泻调查，负责采样配合、数据录入清洗与核查，协助撰写疫情分析简报。",
      "参与公共卫生应急演练的数据统计和结果汇总，保障演练流程顺利推进。",
    ],
  },
  {
    company: "中山大学附属第七医院",
    role: "临床实习生",
    period: "2024.07 — 2024.10",
    description: [
      "在外科、内科、感染科、妇产科轮转实习，累计完成多科室临床实践。",
      "参与交班、查房、病历书写、换药、手术配合和值班等日常临床工作。",
      "提升了临床沟通、规范操作与多科协作能力。",
    ],
  },
];

export const skills = [
  {
    category: "编程与算法",
    items: ["C++", "Python（基础）", "数据结构与算法", "LeetCode 100+ 题"],
  },
  {
    category: "计算机基础",
    items: ["操作系统", "计算机组成原理", "CPU 与存储体系", "指令系统基础"],
  },
  {
    category: "数据处理与分析",
    items: ["单细胞多组学数据处理", "数据清洗与校验", "统计分析", "多维关联挖掘"],
  },
  {
    category: "科研与办公工具",
    items: ["R", "Office", "科研数据处理流程", "项目协作与问题拆解"],
  },
];
