import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Anish Gupta",
};

const projects = [
  {
    title: "Axiom",
    description:
      "Placeholder description of the project, the problem it solves, and your role building it.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/neur0n-7",
  },
  {
    title: "Sentinel",
    description:
      "Intelligent real-time network intrusion detection powered by machine learning",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Project Three",
    description:
      "Placeholder description of the project, the problem it solves, and your role building it.",
    tags: ["React", "Node.js"],
    href: "#",
  },
  {
    title: "Project Four",
    description:
      "Placeholder description of the project, the problem it solves, and your role building it.",
    tags: ["Swift", "iOS"],
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl tracking-tight">Projects</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        A selection of things I&apos;ve built. Placeholder entries below
        &mdash; swap in real projects, links, and screenshots.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group flex flex-col gap-3 rounded-lg border border-border bg-background-elevated p-6 transition-colors hover:border-accent"
          >
            <h2 className="font-heading text-xl transition-colors group-hover:text-accent">
              {project.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
