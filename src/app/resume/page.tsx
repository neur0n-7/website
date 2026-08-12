import type { Metadata } from "next";
import { decodeReply } from "next/dist/server/app-render/entry-base";

export const metadata: Metadata = {
  title: "Resume - Anish Gupta",
};

const experience = [
  {
    role: "Founding Member & Programming Captain",
    org: "FIRST Robotics Competition Team 11744 NYX",
    period: "2026 to present",
    points: [
      "Key founding member of NYX and lead the programming team",
      "Helped establish the team's structure, software training and robot code development",
      "Lead robot software including vision, automation, and subsystem control",
      "Made budget sheets and helped allocate tens of thousands of dollars across departments and equipment"
    ],
  },
  {
    role: "President",
    org: "Oak Valley Coding Club",
    period: "2024 to 2025",
    points: [
      "Led the club and taught beginner and advanced programming.",
      "Prepared members for the USA Computing Olympiad and American Computer Science League competitions.",
      "Managed members, registration and helped organize club fundraising.",
      "Before being president, served as Assistant Treasurer in 2023-2024"
    ],
  },
  {
    role: "Director of Operations",
    org: "Pi-Thon Club",
    period: "2025 to 2026",
    points: [
      "Taught coding, math, and debate workshops to children in local elementary schools"
    ]
  },
  {
    role: "Instructor",
    org: "WeEMBRACE",
    period: "2026",
    points: [
      "Taught a six-week introductory Python course to neurodivergent students.",
      "Designed lessons covering Python fundamentals, conditionals, loops, functions, etc.",
    ],
  },
  {
    role: "Instructor",
    org: "PyCode Academy",
    period: "2024 to 2026",
    points: [
      "Taught beginner and competitive programming concepts to students.",
      "Covered Python programming, algorithms, and problem-solving techniques.",
    ],
  },
];

const education = [
  {
    school: "Del Norte High School",
    detail: "High School",
    period: "2025 to present",
    description: "4.0 unweighted GPA in 2025-2026 year",
  },
  {
    school: "Machine Learning Specialization",
    detail: "DeepLearning.AI / Stanford Online via Coursera",
    period: "2026 - In progress",
    description:
      "2/3 courses completed - covers supervised learning, neural networks, decision trees, and unsupervised learning",
    certificates: [
      {
        name: "Supervised Machine Learning: Regression and Classification",
        href: "https://coursera.org/share/9582cb17e31265786a2ea7645c041623",
      },
      {
        name: "Advanced Learning Algorithms",
        href: "https://coursera.org/share/d2406bbc1afe206f7fd785530debac37",
      },
    ],
  },
];

const achievements = [
  {
    title: "USA Computing Olympiad (USACO)",
    points: [
      "Silver competitor",
    ],
  },
  {
    title: "FIRST (FLL & FRC)",
    points: [
      "FLL 2023-2024: State Tournament #1 Robot Design & #3 Robot Performance, Student Coach",
      "FLL 2024-2025: Regionals Engineering Excellence Award, Student Coach",
      "FRC 2025-2026: Software member of 3749 Optix: MVP, Technical Council, Impact Award at Aerospace Valley, Sustainability Award at San Diego Regional",
      "FRC 2026-present: Key founding member and Programming Captain of Team 11744 NYX",
    ],
  },
  {
    title: "American Computer Science League (ACSL)",
    points: [
      "Three-time National Finalist (2x Junior Division, 1x Senior Division)",
      "Silver medalist at 2024-2025 National Finals (Junior Division)",
      "2024-2025 Junior Division: 46/48 points prior to finals, tied #3 nationally"
    ],
  },
  {
    title: "CyberPatriot",
    points: [
      "CyberPatriot Linux Main",
      "2024-2025 Middle School Division: #6 nationally at Semifinals, top 0.8%, team MVP",
      "2025-2026 Open Division: top 0.8% nationally at States, top 1.8% nationally at Semifinals",
    ],
  },
];

const projects = [
  {
    name: "Axiom",
    description:
      "Local semantic search engine using SQLite, a Python backend, and Tauri desktop application",
  },
  {
    name: "Sentinel NIDS",
    description:
      "ML network intrusion detection system that monitors network traffic and detects anomalies",
  },
  {
    name: "Mafia",
    description:
      "Real-time multiplayer browser game built with Flask and Socket.IO",
  },
  {
    name: "Snake AI",
    description:
      "Deep Q-Network trained with PyTorch to play Snake",
  },
];

const skills = [
  "Python",
  "Java",
  "C++",
  "SQL",
  "Linux",
  "Git",
  "PyTorch & Tensorflow",
  "FastAPI",
  "Flask",
  "WPILib",
];

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="font-heading text-4xl tracking-tight">
          Resume
        </h1>
      </div>

      {/* Experience */}
      <section className="mt-14">
        <h2 className="font-heading text-xl tracking-tight text-accent">
          Experience & Leadership
        </h2>

        <div className="mt-6 flex flex-col gap-8">
          {experience.map((job) => (
            <div
              key={job.role + job.org}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-lg">
                  {job.role}{" "}
                  <span className="text-muted">
                    · {job.org}
                  </span>
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

      {/* Education & Certifications */}
      <section className="mt-14">
        <h2 className="font-heading text-xl tracking-tight text-accent">
          Education & Certifications
        </h2>

        <div className="mt-6 flex flex-col gap-6">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="flex flex-col gap-1"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-lg">
                  {edu.school}{" "}
                  <span className="text-muted">
                    · {edu.detail}
                  </span>
                </h3>

                <span className="font-mono text-xs text-muted">
                  {edu.period}
                </span>
              </div>

              {edu.description && (
                <p className="text-sm leading-relaxed text-muted">
                  {edu.description}
                </p>
              )}

              {edu.certificates && (
                <div className="mt-1 flex flex-col gap-1">
                  {edu.certificates.map((certificate) => (
                    <a
                      key={certificate.name}
                      href={certificate.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {certificate.name} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-14">
        <h2 className="font-heading text-xl tracking-tight text-accent">
          Selected Projects
        </h2>

        <div className="mt-6 flex flex-col gap-5">
          {projects.map((project) => (
            <div key={project.name}>
              <h3 className="font-heading text-lg">
                {project.name}
              </h3>

              <p className="mt-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-14">
        <h2 className="font-heading text-xl tracking-tight text-accent">
          Achievements
        </h2>

        <div className="mt-6 flex flex-col gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.title}>
              <h3 className="font-heading text-lg">
                {achievement.title}
              </h3>

              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {achievement.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-14">
        <h2 className="font-heading text-xl tracking-tight text-accent">
          Technical Skills
        </h2>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}