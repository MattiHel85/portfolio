import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-indigo-400 text-sm font-medium mb-4 tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
          Matt Simpson
        </h1>
        <p className="text-2xl sm:text-3xl text-zinc-400 mb-8 font-light">
          Software Developer
        </p>
        <p className="text-zinc-400 max-w-xl leading-relaxed mb-12 text-lg">
          I build clean, performant web applications. Passionate about great
          user experiences and well-crafted code.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
