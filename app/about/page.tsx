export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold text-white mb-12">About Me</h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6 text-zinc-400 leading-relaxed text-base">
          <p>
            Hi, I&apos;m Matt — a software developer with a passion for building
            things that work beautifully. I enjoy the full journey from idea to
            deployed product.
          </p>
          <p>
            I have experience working across the stack, with a particular
            interest in modern frontend development using React and Next.js,
            backed by clean and efficient APIs.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me [your hobby here].
            I&apos;m always open to interesting projects and conversations —
            feel free to reach out.
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-white font-semibold mb-3">Frontend</h2>
            <ul className="space-y-1 text-zinc-400 text-sm">
              {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((s) => (
                <li key={s}>— {s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-3">Backend</h2>
            <ul className="space-y-1 text-zinc-400 text-sm">
              {["Node.js", "REST APIs", "PostgreSQL", "Prisma"].map((s) => (
                <li key={s}>— {s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-3">Tools</h2>
            <ul className="space-y-1 text-zinc-400 text-sm">
              {["Git", "Docker", "Vercel", "VS Code"].map((s) => (
                <li key={s}>— {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
