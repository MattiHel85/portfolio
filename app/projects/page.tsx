import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Lorem Ipsum Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    tech: ["Lorem", "Ipsum", "Dolor"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Dolor Sit Amet",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
    tech: ["Sit", "Amet", "Consectetur"],
    github: "https://github.com",
  },
  {
    title: "Consectetur Adipiscing",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
    tech: ["Adipiscing", "Elit", "Sed"],
    github: "https://github.com",
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
