import Link from "next/link";

const skills = [
  "Python",
  "Java",
  "C++",
  "SQL",
  "Git",
  "Linux"
];

const featuredProjects = [
  {
    title: "Axiom",
    description:
      "A local semantic search engine for finding files on your computer",
    tags: ["Python", "FastAPI", "SQLite", "Tauri"],
  },
  {
    title: "Sentinel",
    description:
      "A network intrusion detection system that monitors traffic and uses ML to detect anomalies",
    tags: ["Python", "Scapy", "SQLite", "ML"],
  },
  {
    title: "Mafia",
    description:
      "A multiplayer web-based Mafia game built with a Flask backend",
    tags: ["Python", "Flask", "Socket.IO"],
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <section className="flex flex-col gap-6 py-24 sm:py-32">
        <p className="font-mono text-sm text-accent">
          Hi, I&apos;m
        </p>

        <h1 className="font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
          Anish Gupta
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          I&apos;m a high school student software developer interested in software development and competitive programming, robotics (FRC), and cybersecurity (CyberPatriot).
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-accent-foreground transition-opacity hover:opacity-90"
          >
            View projects
          </Link>

          <Link
            href="/blog"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Read my blog
          </Link>

          <Link
            href="/resume"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="flex flex-col gap-6 border-t border-border py-16">
        <h2 className="font-heading text-2xl tracking-tight">
          About
        </h2>

        <p className="max-w-2xl leading-relaxed text-muted">
          I&apos;m a high school student who likes building software. I work on projects ranging from cybersecurity and machine learning to robotics and software engineering.
        </p>

        <ul className="max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-muted">
          <li>USA Computing Olympiad Silver Competitor</li>
          <li>Three-time American Computer Science League National Finalist, one-time Silver medalist</li>
          <li>Programming captain of FIRST Robotics Competition Team 11744 NYX</li>
          <li>CyberPatriot Middle School Division, 2024-2025: top 0.8% at semifinals (#6 nationally), team MVP</li>
          <li>CyberPatriot Open Division, 2025-2026: top 0.8% nationally at states, top 1.8% at semifinals</li>
        </ul>

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

      {/* Featured work */}
      <section className="flex flex-col gap-6 border-t border-border py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-heading text-2xl tracking-tight">
            Featured projects
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
              <h3 className="font-heading text-lg">
                {project.title}
              </h3>

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

      {/* Blog */}
      <section className="flex flex-col gap-6 border-t border-border py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-heading text-2xl tracking-tight">
            Latest blog post
          </h2>

          <Link
            href="/blog"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            View all →
          </Link>
        </div>

        <Link
          href="/blog/building-axiom"
          className="group rounded-lg border border-border bg-background-elevated p-5 transition-colors hover:border-accent"
        >
          <p className="font-mono text-xs text-muted">
            2026-08-11
          </p>

          <h3 className="mt-2 font-heading text-lg transition-colors group-hover:text-accent">
            Building Axiom
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted">
            How I built a local semantic search engine, Axiom.
          </p>
        </Link>
      </section>
    </div>
  );
}