interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({ title, description, tech, github, demo }: Project) {
  return (
    <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900 flex flex-col gap-4 hover:border-zinc-600 transition-colors">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 pt-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            GitHub →
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
