# 个人网站设计规划

## 概述

本项目是一个基于 Next.js 14 构建的个人展示网站，包含个人履历、项目展示、竞赛获奖、联系方式等板块，通过 GitHub Actions 自动部署到 GitHub Pages。

---

## 技术选型

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 14+ | 前端框架（App Router） |
| TypeScript | 5+ | 类型安全 |
| Tailwind CSS | 3+ | 原子化 CSS 样式 |
| Framer Motion | 11+ | 页面动画与过渡效果 |
| Lucide React | 最新 | 图标库 |
| GitHub Actions | — | CI/CD 自动部署 |
| GitHub Pages | — | 静态网站托管 |

---

## 网站结构

```
单页滚动式网站（Single Page Application）

首页 (Hero)
  ↓
关于我 (About) — 个人简介 + 技能栈
  ↓
个人履历 (Resume) — 教育经历 + 工作经历
  ↓
项目展示 (Projects) — 卡片网格
  ↓
竞赛获奖 (Awards) — 获奖列表
  ↓
联系方式 (Contact) — 社交链接 + 留言表单
```

---

## 目录结构

```
e:\Myblog
├── app/
│   ├── page.tsx          # 首页，组合所有板块组件
│   ├── layout.tsx        # 全局布局，包含 Navbar 和 Meta 信息
│   └── globals.css       # 全局样式（Tailwind + 自定义）
├── components/
│   ├── Navbar.tsx        # 顶部固定导航栏（支持滚动高亮、移动端菜单）
│   ├── Hero.tsx          # 首屏全屏展示（头像、名字、介绍、CTA）
│   ├── About.tsx         # 关于我（个人简介 + 技能标签云）
│   ├── Resume.tsx        # 履历时间轴（教育 + 工作经历）
│   ├── Projects.tsx      # 项目卡片网格
│   ├── Awards.tsx        # 竞赛获奖列表
│   └── Contact.tsx       # 联系方式 + 留言表单
├── data/
│   ├── resume.ts         # 履历数据（教育、工作、技能）
│   ├── projects.ts       # 项目数据
│   └── awards.ts         # 获奖数据
├── public/
│   └── images/
│       └── avatar.jpg    # 个人头像（需手动放置）
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions 自动部署配置
├── next.config.ts        # Next.js 配置（静态导出）
├── package.json
├── tsconfig.json
├── PLAN.md               # 本文档
├── SETUP.md              # 搭建步骤文档
└── CONTENT_GUIDE.md      # 内容填写指南
```

---

## 各板块设计说明

### Hero（首屏）
- 全屏渐变背景 + 装饰性模糊圆形
- 个人头像（圆形，带 ring 边框）
- 名字标题（渐变色）+ 一句话介绍
- 社交链接图标按钮（GitHub、邮件、LinkedIn）
- CTA 按钮：查看项目 + 下载简历
- 向下滚动指示箭头（动画）

### About（关于我）
- 左侧：个人简介文字段落
- 右侧：技能标签云，按类别分组

### Resume（履历）
- 左右双栏：教育经历 / 工作经历
- 垂直时间轴设计，卡片式展示
- 不同颜色区分教育（靛蓝）和工作（紫色）

### Projects（项目展示）
- 三列卡片网格（移动端单列）
- 每张卡片：项目名、描述、技术栈标签、GitHub/Demo 链接
- `featured: true` 的项目带"精选"标签

### Awards（竞赛获奖）
- 两列网格布局
- 按奖项级别（国际/全国/省级/校级）显示不同颜色和图标
- 包含奖项名称、比赛名称、时间、描述

### Contact（联系方式）
- 联系方式卡片（邮件、GitHub、微信）
- 简单留言表单（姓名、邮件、内容）
- 页脚版权信息

---

## 部署流程

1. 将代码推送到 GitHub `main` 分支
2. GitHub Actions 自动触发 `deploy.yml`
3. 执行 `npm ci` 安装依赖
4. 执行 `npm run build` 生成静态文件到 `out/` 目录
5. 将 `out/` 目录部署到 GitHub Pages

访问地址：`https://yourusername.github.io`
