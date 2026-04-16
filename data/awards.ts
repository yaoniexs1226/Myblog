export interface Award {
  title: string;
  competition: string;
  date: string;
  level: "国际" | "全国" | "省级" | "校级";
  rank?: string;
  description?: string;
}

export const awards: Award[] = [
  {
    title: "一等奖",
    competition: "大学生数学竞赛",
    date: "2025.11",
    level: "校级",
    description: "在校内大学生数学竞赛中获得一等奖。",
  },
  {
    title: "二等奖",
    competition: "大学生创新创业竞赛",
    date: "2021.12",
    level: "省级",
    description: "在大学生创新创业竞赛中获得校级二等奖。",
  },
  {
    title: "二等奖",
    competition: "实验室安全知识竞赛",
    date: "2021.05",
    level: "校级",
    description: "在实验室安全知识竞赛中获得二等奖。",
  },
  {
    title: "三等奖学金",
    competition: "中山大学校级奖学金",
    date: "2020.09",
    level: "校级",
    description: "获得中山大学三等奖学金。",
  },
];
