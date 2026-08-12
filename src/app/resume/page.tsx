import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Anish Gupta",
};

const experience = [
  {
    role: "Software Engineer",
    org: "Company Name",
    period: "2024 — Present",
    points: [
      "Placeholder bullet describing an impact or responsibility.",
      "Placeholder bullet describing an impact or responsibility.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Company Name",
    period: "2023 — 2024",
    points: [
      "Placeholder bullet describing an impact or responsibility.",
      "Placeholder bullet describing an impact or responsibility.",
    ],
  },
];

const education = [
  {
    school: "University Name",
    detail: "B.S. in Computer Science",
    period: "2020 — 2024",
  },
];

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="font-heading text-4xl tracking-tight">Resume</h1>
        <a
          href="/resume.pdf"
          className="shrink-0 rounded-md border border-border px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Download PDF
        </a>
      </div>

      <section className="mt-14">
        <h2 className="font-heading text-xl tracking-tight text-accent">
          Experience
        </h2>
        <div className="mt-6 flex flex-col gap-8">
          {experience.map((job) => (
            <div key={job.role + job.org} className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-lg">
                  {job.role} <span className="text-muted">· {job.org}</span>
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-xl tracking-tight text-accent">
          Education
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
            >
              <h3 className="font-heading text-lg">
                {edu.school}{" "}
                <span className="text-muted">· {edu.detail}</span>
              </h3>
              <span className="font-mono text-xs text-muted">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
