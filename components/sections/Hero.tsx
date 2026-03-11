export default function Hero() {
  return (
    <section className="space-y-4 border-b pb-10" style={{borderColor:"var(--border)"}}>
      <p className="text-sm" style={{color:"var(--accent)"}}>
        Full-Stack Developer
      </p>

      <h1 className="text-5xl font-semibold tracking-tight">
        Arachaphon Klinchuen
      </h1>

      <p className="max-w-md">
        Software Engineering student seeking a Full-Stack Developer internship.
        Experienced in React, REST APIs, and relational databases.
      </p>

      <div className="flex gap-4 pt-2">
        <a
          href="#projects"
          className="px-4 py-2 border"
          style={{borderColor:"var(--border)"}}
        >
          Projects
        </a>

        <a
          href="#contact"
          className="px-4 py-2 border"
          style={{borderColor:"var(--border)"}}
        >
          Contact
        </a>
      </div>
    </section>
  );
}