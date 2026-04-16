# 搭建步骤指南

本文档记录从零开始搭建、本地运行和部署个人网站的完整步骤。

---

## 前置条件

- Node.js 18+ （推荐 20 LTS）：https://nodejs.org
- npm 9+（随 Node.js 一起安装）
- Git：https://git-scm.com
- GitHub 账号

---

## 本地开发

### 1. 安装依赖

```bash
cd e:\Myblog
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

打开浏览器访问：http://localhost:3000

### 3. 构建生产版本（静态导出）

```bash
npm run build
```

构建完成后，静态文件输出到 `out/` 目录。

### 4. 预览生产构建

```bash
npx serve out
```

---

## 部署到 GitHub Pages

### 步骤一：创建 GitHub 仓库

1. 登录 GitHub，点击右上角 **+** → **New repository**
2. 仓库名设置为 `yourusername.github.io`（将 `yourusername` 替换为你的 GitHub 用户名）
3. 设置为 **Public**（GitHub Pages 免费方案需要公开仓库）
4. 不要初始化 README，点击 **Create repository**

### 步骤二：推送代码

```bash
cd e:\Myblog
git init
git add .
git commit -m "Initial commit: personal website"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### 步骤三：开启 GitHub Pages

1. 进入仓库页面 → **Settings** → **Pages**
2. **Source** 选择 **GitHub Actions**
3. 保存

### 步骤四：等待部署完成

推送代码后，GitHub Actions 会自动触发部署流程（约 2-5 分钟）。

访问进度：仓库页面 → **Actions** 标签页

部署成功后，访问：`https://yourusername.github.io`

---

## 自定义域名（可选）

如果你有自己的域名（例如 `yourname.com`）：

1. 在 `public/` 目录下创建 `CNAME` 文件，内容为你的域名：
   ```
   yourname.com
   ```
2. 在域名注册商处添加 DNS 记录：
   - 类型：`CNAME`
   - 名称：`www`
   - 值：`yourusername.github.io`
3. 在 GitHub Pages 设置中填写自定义域名

---

## 常见问题

### Q: 构建时报错 "Error: Image Optimization"

`next.config.ts` 中已配置 `images: { unoptimized: true }`，静态导出下图片优化自动禁用。

### Q: 页面跳转 404

确认 `next.config.ts` 中设置了 `trailingSlash: true`。

### Q: 本地开发时 Framer Motion 动画不生效

确认组件文件顶部有 `"use client"` 指令（已默认添加）。

### Q: 如何添加自定义字体

在 `app/layout.tsx` 中通过 `next/font/google` 引入，已使用 Inter 字体。
