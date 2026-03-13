export default function Hero() {
  return (
    <section
      className="space-y-4 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-2xl">

        <h1 className="text-5xl font-semibold tracking-tight mb-3">
          Arachaphon Klinchuen
        </h1>

        <p className="text-xl mb-4 text-[var(--muted)]">
          Full-Stack Developer
        </p>

        <p className="leading-relaxed mb-6">
          Third-year Software Engineering student at the University of Phayao,
          focused on building modern web applications and scalable backend APIs.
        </p>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">

          <span className="px-3 py-1 border rounded"
            style={{ borderColor: "var(--border)" }}>
            React
          </span>

          <span className="px-3 py-1 border rounded"
            style={{ borderColor: "var(--border)" }}>
            TypeScript
          </span>

          <span className="px-3 py-1 border rounded"
            style={{ borderColor: "var(--border)" }}>
            Hono
          </span>

          <span className="px-3 py-1 border rounded"
            style={{ borderColor: "var(--border)" }}>
            Cloudflare D1
          </span>

          <span className="px-3 py-1 border rounded"
            style={{ borderColor: "var(--border)" }}>
            Supabase
          </span>

        </div>

        <div className="flex gap-4">

          <a
            href="#projects"
            className="px-6 py-2 border-2 transition-colors hover:bg-[var(--border)]"
            style={{ borderColor: "var(--border)" }}
          >
            View Projects
          </a>

          <a
            href="https://github.com/Arachaphon"
            target="_blank"
            className="px-6 py-2 border-2 transition-colors hover:bg-[var(--border)]"
            style={{ borderColor: "var(--border)" }}
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="px-6 py-2 border-2 transition-colors hover:bg-[var(--border)]"
            style={{ borderColor: "var(--border)" }}
          >
            Contact
          </a>

        </div>

      </div>
    </section>
  );
}