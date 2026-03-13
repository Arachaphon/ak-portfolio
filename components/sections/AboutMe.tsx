export default function AboutMe() {
  return (
    <section id="about" 
    className="flex justify-between border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="space-y-4 w-3/4">
        <h2 className="text-xl font-medium">About</h2>

        <p>
          Third-year Software Engineering student at the University of Phayao
          specializing in full-stack web development.
        </p>

        <p>
          Experienced in building production-style web applications using React,
          TypeScript, Hono, and relational databases.
        </p>

        <p>
          Developed a dormitory management system that handles tenant records,
          billing workflows, utility tracking, and role-based access control.
        </p>

        <p>GPAX: 3.81</p>
      </div>

      <img className="w-46 h-46 rounded-xl object-cover" src="/profile.jpg" />
    </section>
  );
}
