export default function Hero() {
  return (
    <section
      className="max-w-[680px] mx-auto flex justify-between items-center gap-4 border-b pb-4 px-8"
      style={{ borderColor: "var(--border)" }}
    >
      <h1 className="text-5xl font-semibold tracking-tight">
        Arachaphon Klinchuen
      </h1>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-4 py-2 border-2 transition-colors hover:bg-[var(--border)]"
          style={{ borderColor: "var(--border)" }}
        >
          Projects
        </a>

        <a
          href="#projects"
          className="px-4 py-2 border-2 transition-colors hover:bg-[var(--border)]"
          style={{ borderColor: "var(--border)" }}
        >
          Contact
        </a>
      </div>
    </section>
  );
}
