import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Work - Anish Gupta",
};

const currentWork = [
  {
    title: "NYX Offseason Robot 2026",
    description:
      "Leading software development for our offseason bot. I am currently coordinating the robot software as a whole, but am personally handling autoaim/shoot-on-the-move and vision.",
    status: "In Progress",
  },
  {
    title: "Biomedical Engineering Society",
    description:
      "Helping establish and organize the chapter for the Biomedical Engineering Society at my high school.",
    status: "In Progress"
  },
  {
    title: "Semantic Search Research Paper",
    description:
      "Improving Axiom, a local AI-powered semantic search engine, focusing on accuracy and performance. I will be looking for improvements and will use those improvements as a foundation for a research paper.",
    status: "In Progress",
  },
  {
    title: "Visual SLAM Drone",
    description:
      "Designing an autonomous drone utilizing visual SLAM, including camera-based localization, ROS 2, PX4, custom PCBs, a custom 3D-printed chassis, and embedded computing.",
    status: "Planned - 2027",
  },
];

export default function CurrentWorkPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl tracking-tight">Current Work</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        Things I'm actively working on right now.
      </p>

      <div className="mt-12 flex flex-col divide-y divide-border border-t border-border">
        {currentWork.map((work, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 py-6"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-heading text-xl">
                {work.title}
              </h2>
              <span className="shrink-0 font-mono text-xs text-accent">
                {work.status}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
