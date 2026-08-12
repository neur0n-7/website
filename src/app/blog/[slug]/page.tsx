import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const contentDir = path.join(process.cwd(), "src/content/blog");

type PostMeta = {
  title: string;
  date: string;
  excerpt: string;
};

export function generateStaticParams() {
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

async function getPost(slug: string) {
  try {
    const mod = (await import(`@/content/blog/${slug}.mdx`)) as {
      default: React.ComponentType;
      metadata: PostMeta;
    };
    return mod;
  } catch {
    return null;
  }
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPost(slug);
  return { title: post ? `${post.metadata.title} - Anish Gupta` : "Post not found" };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { default: Content, metadata } = post;

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20">
      <Link
        href="/blog"
        className="font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        ← Back to blog
      </Link>

      <div className="mt-8 flex flex-col gap-2">
        <time className="font-mono text-xs text-muted">{metadata.date}</time>
        <h1 className="font-heading text-4xl tracking-tight">
          {metadata.title}
        </h1>
      </div>

      <article className="mt-10 max-w-2xl">
        <Content />
      </article>
    </div>
  );
}
