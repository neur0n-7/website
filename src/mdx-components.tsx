import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-heading text-3xl tracking-tight mt-10 mb-4 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-heading text-2xl tracking-tight mt-10 mb-4 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-heading text-xl tracking-tight mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="leading-relaxed text-foreground/90 my-4">{children}</p>
  ),
  a: ({ href, children }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="text-accent underline underline-offset-4 hover:opacity-80">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-4 hover:opacity-80"
      >
        {children}
      </a>
    );
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 my-4 space-y-1.5 text-foreground/90">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 my-4 space-y-1.5 text-foreground/90">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-accent pl-4 my-6 italic text-muted">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-border" />,
  img: ({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt ?? ""}
      className="w-full h-auto rounded-lg border border-border my-6"
    />
  ),
  code: ({ children }) => (
    <code className="rounded bg-background-elevated border border-border px-1.5 py-0.5 font-mono text-sm text-accent">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-lg border border-border bg-background-elevated p-4 font-mono text-sm leading-relaxed [&_code]:bg-transparent [&_code]:border-0 [&_code]:p-0 [&_code]:text-foreground">
      {children}
    </pre>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
