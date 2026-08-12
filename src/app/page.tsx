import Link from "next/link";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
];

const featuredProjects = [
  {
    title: "Project One",
    description:
      "A short one- or two-line description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Project Two",
    description:
      "A short one- or two-line description of what this project does and the problem it solves.",
    tags: ["Python", "FastAPI"],
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <section className="flex flex-col gap-6 py-24 sm:py-32">
        <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
        <h1 className="font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
          Anish Gupta
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          I&apos;m a software developer who builds clean, functional
          products. This is placeholder copy &mdash; swap in a real bio about
          what you work on and what you care about.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-accent-foreground transition-opacity hover:opacity-90"
          >
            View projects
          </Link>
          <Link
            href="/resume"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-6 border-t border-border py-16">
        <h2 className="font-heading text-2xl tracking-tight">About</h2>
        <p className="max-w-2xl leading-relaxed text-muted">
          Placeholder about paragraph. Talk about your background, what
          you&apos;ve worked on, the kinds of problems you like solving, and
          what you&apos;re looking for next. Keep it to two or three
          sentences so it stays easy to scan.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 border-t border-border py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-heading text-2xl tracking-tight">
            Featured work
          </h2>
          <Link
            href="/projects"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col gap-3 rounded-lg border border-border bg-background-elevated p-5 transition-colors hover:border-accent"
            >
              <h3 className="font-heading text-lg">{project.title}</h3>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
