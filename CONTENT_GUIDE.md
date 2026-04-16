# 内容填写指南

本文档说明如何将网站中的占位内容替换为你自己的真实信息。

---

## 快速索引

| 要修改的内容 | 文件路径 |
|------------|----------|
| 个人名字、介绍、社交链接 | `components/Hero.tsx` |
| 关于我文字 | `components/About.tsx` |
| 导航栏名字 | `components/Navbar.tsx` |
| 教育经历、工作经历、技能 | `data/resume.ts` |
| 项目信息 | `data/projects.ts` |
| 竞赛获奖 | `data/awards.ts` |
| 联系方式 | `components/Contact.tsx` |
| 网页标题、描述 | `app/layout.tsx` |
| 个人头像 | `public/images/avatar.jpg` |

---

## 1. 个人基本信息

### 修改名字

`components/Hero.tsx` 第 61 行：
```tsx
你好，我是{" "}
<span>Your Name</span>   // ← 改为你的名字
```

`components/Navbar.tsx` 第 28 行：
```tsx
YourName   // ← 改为你的名字
```

### 修改一句话介绍

`components/Hero.tsx` 第 74 行：
```tsx
计算机专业在读 · 全栈开发爱好者 · 热爱用代码解决真实问题
// ↑ 改为你自己的介绍
```

### 修改社交链接

`components/Hero.tsx` 顶部 `socialLinks` 数组：
```ts
const socialLinks = [
  { icon: Github, href: "https://github.com/你的用户名", label: "GitHub" },
  { icon: Mail, href: "mailto:你的邮箱@example.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/你的用户名", label: "LinkedIn" },
];
```

---

## 2. 个人头像

将你的头像图片重命名为 `avatar.jpg`，放到以下路径：

```
public/images/avatar.jpg
```

> 推荐尺寸：400×400 像素，正方形，JPG 或 PNG 格式。

---

## 3. 关于我

编辑 `components/About.tsx` 中的三段介绍文字（第 42-51 行附近）：

```tsx
<p>
  你好！我是 <strong>Your Name</strong>，
  // ↑ 改为你自己的简介
</p>
```

---

## 4. 教育经历

编辑 `data/resume.ts` 中的 `education` 数组：

```ts
export const education: EducationItem[] = [
  {
    school: "北京大学",               // 学校名称
    degree: "本科",                    // 学历（本科/硕士/博士）
    major: "计算机科学与技术",          // 专业
    period: "2021.09 — 2025.06",      // 就读时间
    gpa: "3.8 / 4.0",                 // GPA（可选，删除则不显示）
    description: "主修课程描述...",    // 简短描述（可选）
  },
  // 可以添加多条教育经历
];
```

---

## 5. 工作经历

编辑 `data/resume.ts` 中的 `experience` 数组：

```ts
export const experience: ExperienceItem[] = [
  {
    company: "某某科技有限公司",        // 公司名称
    role: "前端开发实习生",             // 职位
    period: "2024.06 — 2024.09",      // 工作时间
    description: [
      "工作内容第一条",                 // 每条是一个字符串
      "工作内容第二条",
      "工作内容第三条",
    ],
  },
];
```

---

## 6. 技能栈

编辑 `data/resume.ts` 中的 `skills` 数组：

```ts
export const skills = [
  {
    category: "编程语言",                              // 分类名
    items: ["TypeScript", "Python", "Java", "C++"],   // 技能列表
  },
  {
    category: "前端框架",
    items: ["React", "Next.js", "Vue 3"],
  },
  // 可添加更多分类
];
```

---

## 7. 项目展示

编辑 `data/projects.ts` 中的 `projects` 数组：

```ts
export const projects: Project[] = [
  {
    title: "项目名称",
    description: "项目描述，一到两句话介绍项目的功能和价值。",
    tech: ["React", "Node.js", "MongoDB"],  // 技术栈标签
    github: "https://github.com/你/项目",   // GitHub 链接（可选）
    demo: "https://你的演示链接.com",        // Demo 链接（可选）
    featured: true,                          // true 显示"精选"标签
  },
  // 可添加更多项目
];
```

---

## 8. 竞赛获奖

编辑 `data/awards.ts` 中的 `awards` 数组：

```ts
export const awards: Award[] = [
  {
    title: "一等奖",                          // 奖项名称
    competition: "全国大学生计算机设计大赛",    // 比赛名称
    date: "2024.07",                          // 获奖时间
    level: "全国",                            // "国际" | "全国" | "省级" | "校级"
    rank: "全国前 5%",                        // 名次（可选）
    description: "获奖描述...",               // 详细说明（可选）
  },
];
```

**level 颜色对应：**
- `国际` → 金色
- `全国` → 靛蓝色
- `省级` → 紫色
- `校级` → 绿色

---

## 9. 联系方式

编辑 `components/Contact.tsx` 顶部的 `contactLinks` 数组：

```ts
const contactLinks = [
  {
    icon: Mail,
    label: "邮件",
    value: "your@email.com",       // 显示的邮箱地址
    href: "mailto:your@email.com", // 链接
    desc: "欢迎发送邮件",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "yourusername",         // GitHub 用户名
    href: "https://github.com/yourusername",
    desc: "查看开源项目",
  },
  // 可以替换或添加其他联系方式
];
```

---

## 10. 网页元信息

编辑 `app/layout.tsx` 中的 `metadata`：

```ts
export const metadata: Metadata = {
  title: "张三 | 个人主页",              // 网页标签标题
  description: "计算机专业学生，...",    // 搜索引擎描述
  keywords: ["个人网站", "前端开发"],    // 关键词
};
```

---

## 11. 添加简历 PDF（可选）

将你的简历 PDF 文件放到：

```
public/resume.pdf
```

Hero 组件中的"下载简历"按钮会自动链接到该文件。
