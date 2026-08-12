import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Anish Gupta",
};

type PostMeta = {
  title: string;
  date: string;
  excerpt: string;
};

const contentDir = path.join(process.cwd(), "src/content/blog");

async function getPosts() {
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = (await import(`@/content/blog/${slug}.mdx`)) as {
        metadata: PostMeta;
      };
      return { slug, ...metadata };
    })
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl tracking-tight">Blog</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        Notes and writeups. Placeholder posts below &mdash; swap in real
        entries.
      </p>

      <div className="mt-12 flex flex-col divide-y divide-border border-t border-border">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 py-6 transition-colors"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-heading text-xl transition-colors group-hover:text-accent">
                {post.title}
              </h2>
              <time className="shrink-0 font-mono text-xs text-muted">
                {post.date}
              </time>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
