export interface Project {
  title: string;
  description: string;
  slug?: string;
  tech: string[];
  github?: string;
  demo?: string;
  videoType?: "local" | "embed";
  videoUrl?: string;
  mdPath?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "C++ 植物大战僵尸塔防游戏复刻",
    slug: "pvz-cpp",
    description:
      "基于面向对象设计实现植物、僵尸、子弹等核心实体，搭建固定步长主循环与 AABB 碰撞检测，完整复刻种植、防守、波次生成等塔防玩法，Windows 平台稳定 60 FPS。",
    tech: ["C++", "面向对象设计", "AABB 碰撞检测", "STL"],
    github: "https://github.com/yaoniexs1226/PVZ",
    videoType: "embed",
    videoUrl: "https://player.bilibili.com/player.html?bvid=BV1vZd8BnEs7&page=1",
    mdPath: "pvz-cpp",
    featured: true,
  },
  {
    title: "简易内存池管理器",
    description:
      "设计并实现基于首次适应（First Fit）算法的内存池，模拟操作系统内存分配与回收机制，支持批量内存请求/释放及非法输入处理。",
    tech: ["C++", "内存管理", "First Fit", "系统模拟"],
    featured: true,
  },
  {
    title: "毕业设计：单细胞多组学数据分析",
    description:
      "围绕单细胞多组学数据异质性与关联挖掘问题，负责数据清洗、存储与分析流程实现，完成降维与模型优化，验证并挖掘 10+ 关联位点。",
    tech: ["数据清洗", "降维分析", "模型优化", "多组学数据"],
    featured: true,
  },
  {
    title: "大学生创新创业项目：微塑料健康影响研究",
    description:
      "协助完成调研数据采集、清洗与校验，参与建模评估与结果输出，支持团队完成项目分析闭环与成果整理。",
    tech: ["科研调研", "数据分析", "团队协作"],
    featured: false,
  },
];
