import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug as string }));
}

async function getProjectMarkdown(mdPath?: string) {
  if (!mdPath) return "";
  const filePath = path.join(process.cwd(), "content", "projects", `${mdPath}.md`);

  try {
    const markdown = await fs.readFile(filePath, "utf-8");
    const processed = await remark().use(remarkGfm).use(remarkHtml).process(markdown);
    return processed.toString();
  } catch {
    return "";
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const markdownHtml = await getProjectMarkdown(project.mdPath);
  const hasVideo = Boolean(project.videoUrl);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <Link
            href="/#projects"
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            ← 返回项目列表
          </Link>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              查看 GitHub 仓库
            </a>
          )}
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">演示视频</h2>
          {hasVideo ? (
            project.videoType === "embed" ? (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} 演示视频`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                controls
                preload="metadata"
                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-black"
              >
                <source src={project.videoUrl} type="video/mp4" />
                你的浏览器不支持视频播放，请直接查看 GitHub 仓库。
              </video>
            )
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              暂未配置演示视频，你可以后续在 `data/projects.ts` 中补充 `videoType` 和 `videoUrl`。
            </p>
          )}
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">项目介绍</h2>
          {markdownHtml ? (
            <article
              className="prose prose-sm sm:prose-base max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: markdownHtml }}
            />
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              暂未找到项目文档，请检查 `content/projects` 下对应 Markdown 文件是否存在。
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
