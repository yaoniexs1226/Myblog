# 项目详情页功能规划文档

## 1. 目标与范围

### 1.1 目标
- 在“项目展示”中支持点击项目卡片进入详情页。
- 详情页展示三类核心内容：
  - 项目演示视频
  - 项目介绍 Markdown 文档
  - GitHub 仓库链接

### 1.2 本期范围（V1）
- 先支持 `C++ 植物大战僵尸塔防游戏复刻` 的详情页。
- 采用统一的可扩展方案，后续可快速新增更多项目详情页。
- 保持兼容当前部署方式（Next.js 静态导出 + GitHub Pages）。

### 1.3 非目标（V1 暂不做）
- 在线评论系统
- 项目点赞/收藏
- 后台管理系统

---

## 2. 当前项目约束与设计原则

### 2.1 约束
- 当前站点使用 Next.js App Router，且通过 `output: "export"` 静态导出到 GitHub Pages。
- 详情页必须是静态可生成路由，不能依赖服务端运行时接口。
- GitHub Pages 对仓库体积和单文件体积敏感，视频不建议直接上传超大文件。

### 2.2 设计原则
- 数据驱动：项目列表和详情信息统一由数据文件管理。
- 内容解耦：Markdown 内容独立存放，便于你后续单独编辑。
- 渐进增强：先把核心展示做完整，再迭代美化和交互。

---

## 3. 目标信息架构

```text
/                           首页（已有）
└── 项目展示 Section（已有）
    └── 点击项目卡片
        └── /projects/[slug]/      新增详情页
            ├── 视频演示
            ├── Markdown 介绍
            └── GitHub 链接 + 返回按钮
```

建议 slug：
- `pvz-cpp` -> C++ 植物大战僵尸塔防游戏复刻

---

## 4. 目录与文件规划

```text
e:\Myblog
├── app
│   └── projects
│       └── [slug]
│           └── page.tsx                # 项目详情页（静态生成）
├── content
│   └── projects
│       └── pvz-cpp.md                  # 项目 Markdown 内容
├── data
│   └── projects.ts                     # 扩展字段：slug、video、mdPath 等
├── public
│   └── videos
│       └── pvz-demo.mp4                # 可选：本地视频（小体积）
└── components
    └── ProjectDetail.tsx               # 可选：详情页展示组件（建议）
```

---

## 5. 数据模型规划（重点）

在 `data/projects.ts` 的 `Project` 接口中新增字段（建议）：

- `slug: string`  
  用于生成详情页路由，如 `pvz-cpp`。
- `summary?: string`  
  作为详情页顶部摘要（可选）。
- `videoType?: "local" | "embed"`  
  视频来源类型（本地文件或外链嵌入）。
- `videoUrl?: string`  
  本地视频路径（如 `/videos/pvz-demo.mp4`）或嵌入链接。
- `mdPath?: string`  
  Markdown 文件路径标识（如 `pvz-cpp` 对应 `content/projects/pvz-cpp.md`）。

说明：
- 列表页继续使用 `description` 显示简要信息。
- 详情页优先从 `slug` 和 `mdPath` 加载完整内容。

---

## 6. 页面交互与展示规划

## 6.1 项目卡片交互（列表页）
- 当前“代码”链接保留。
- 新增“查看详情”入口（按钮或整卡可点击）。
- 点击后跳转：`/projects/<slug>/`

## 6.2 项目详情页模块

建议顺序：
1. 顶部导航区
   - 项目标题
   - 返回项目列表按钮
   - GitHub 按钮
2. 视频演示区
   - `videoType = local`：使用 `<video controls>` 播放
   - `videoType = embed`：使用 `iframe` 嵌入（Bilibili/YouTube）
3. Markdown 内容区
   - 渲染项目背景、功能、技术难点、运行说明、截图说明等
4. 底部行动区
   - 再次提供 GitHub 链接
   - 可选“下载演示视频/文档”按钮

---

## 7. Markdown 内容规范（建议模板）

`content/projects/pvz-cpp.md` 建议结构：

```md
# C++ 植物大战僵尸塔防游戏复刻

## 项目概述
一句话总结项目目标与成果。

## 核心功能
- 植物种植
- 僵尸生成与移动
- 自动射击与碰撞检测
- 波次系统

## 技术实现
### 架构设计
### 主循环与 deltaTime
### AABB 碰撞
### 内存管理与对象回收

## 项目亮点
- ...

## 遇到的问题与解决方案
- ...

## 运行方式
1. ...
2. ...
```

---

## 8. 技术实现要点（Next.js + 静态导出）

### 8.1 动态路由静态化
- 在 `app/projects/[slug]/page.tsx` 中通过 `generateStaticParams` 输出所有 `slug`。
- 确保 `next export` 时每个项目详情页都被预渲染。

### 8.2 Markdown 解析方案
- 推荐依赖：
  - `gray-matter`（可选 frontmatter）
  - `remark` + `remark-gfm`
  - `remark-html` 或 `rehype` 渲染链
- 解析时机：构建阶段（静态安全）。

### 8.3 视频方案建议
- 优先方案：外链嵌入（Bilibili/YouTube），减小仓库体积、加载更稳定。
- 备选方案：本地 `mp4`（建议 < 30MB，避免仓库膨胀）。

### 8.4 404 处理
- 若 `slug` 不存在，返回 `notFound()`，保持路由健壮性。

---

## 9. 分步实施清单（按顺序执行）

### Step 1：扩展数据结构
- 修改 `data/projects.ts`：
  - 增加 `slug/videoType/videoUrl/mdPath` 字段
  - 给 `C++ 植物大战僵尸` 项目补齐详情字段

### Step 2：补充 Markdown 内容
- 新建 `content/projects/pvz-cpp.md`
- 按模板填入完整介绍

### Step 3：实现详情页路由
- 新建 `app/projects/[slug]/page.tsx`
- 从 `data/projects.ts` 读取项目数据
- 根据 `slug` 定位项目并渲染
- 接入 Markdown 解析渲染

### Step 4：改造项目列表卡片
- 在 `components/Projects.tsx` 增加“查看详情”按钮或链接
- 跳转到 `/projects/[slug]/`

### Step 5：视频接入
- 若本地视频：将 `pvz-demo.mp4` 放到 `public/videos/`
- 若外链：在项目数据中填 `videoUrl`

### Step 6：样式与体验优化
- 详情页排版优化（标题、卡片、代码块、间距）
- 增加“返回项目列表”导航

### Step 7：本地验证
- `npm run dev` 手动检查：
  - 路由跳转
  - 视频播放
  - Markdown 渲染
  - GitHub 按钮
- `npm run build` 确认静态导出通过

### Step 8：部署验证
- 推送到 `main`
- Actions 成功后线上检查 `https://yaoniexs1226.github.io/Myblog/projects/pvz-cpp/`

---

## 10. 验收标准（Definition of Done）

- 项目卡片可进入对应详情页。
- `pvz-cpp` 详情页可正常访问（非 404）。
- 页面同时展示视频、Markdown 内容、GitHub 链接。
- 构建通过，GitHub Pages 线上样式与内容正常。
- 移动端无明显排版错位。

---

## 11. 风险与规避

- 视频过大导致仓库膨胀：优先用外链嵌入。
- Markdown 渲染样式过素：增加针对 `prose` 或自定义样式。
- 新增路由后资源路径问题：继续保持当前 `basePath` 配置。
- 后续项目增多维护成本上升：坚持数据驱动与内容文件分离。

---

## 12. 后续可扩展方向（V2）

- 项目截图轮播
- 技术栈图标化展示
- 项目时间线与版本记录
- 在线 Demo（如可运行）
- 中英双语项目文档切换

