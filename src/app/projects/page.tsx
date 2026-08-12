import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Anish Gupta",
};

const projects = [
  {
    title: "Axiom",
    description:
      "A local semantic search engine for finding files throughout your computer",
    tags: ["Python", "FastAPI", "SQLite", "Tauri", "Rust"],
    href: "https://github.com/neur0n-7/axiom",
  },
  {
    title: "Sentinel NIDS",
    description:
      "A machine-learning network intrusion detection system that monitors traffic and detects anomalies",
    tags: ["Python", "Scapy", "SQLite", "scikit-learn"],
    href: "https://github.com/neur0n-7/sentinel-nids",
  },
  {
    title: "Mafia",
    description:
      "A real-time multiplayer browser game with a Flask and Socket.IO backend",
    tags: ["Python", "Flask", "Socket.IO", "JavaScript"],
    href: "https://neur0n-7.github.io/mafia/",
  },
  {
    title: "Snake AI",
    description:
      "A reinforcement learning agent trained with a Deep Q-Network to play Snake",
    tags: ["Python", "PyTorch", "DQN"],
    href: "https://github.com/neur0n-7/snake-ai",
  },
  {
    title: "Chattix",
    description:
      "A Flask and Socket.IO web application for real-time encrypted text chat",
    tags: ["Python", "Flask", "Socket.IO", "Cryptography"],
    href: "https://github.com/neur0n-7/chattix",
  },
];


export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl tracking-tight">Projects</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        A selection of things I&apos;ve built. See my <a
    href="https://github.com/neur0n-7"
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent underline underline-offset-4 hover:opacity-80"
  >
    GitHub profile
  </a>{" "}
  for more. for more.
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
