import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Realtime Device Monitor",
    description:
      "Backend service for real-time device monitoring. Provides REST endpoints for managing monitored devices and WebSocket events for live status updates, with scheduled status checks.",
    tech: ["Node.js", "TypeScript", "Express", "Socket.io", "MongoDB"],
    github: "https://github.com/MattiHel85/realtime-device-monitor-backend",
    demo: "https://example.com",
  },
  {
    title: "Event Management",
    description:
      "A modern event planning dashboard. Create events, set capacity, and manage per-event budgets with multi-currency support, KPI cards, budget line items, and a spend breakdown chart.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "Prisma"],
    github: "https://github.com/MattiHel85/event-management",
    demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
      <p className="text-zinc-400 mb-12">A selection of things I&apos;ve built.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}
