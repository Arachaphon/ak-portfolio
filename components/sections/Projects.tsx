import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-xl font-medium">Projects</h2>

      {projects.map((project) => (
        <div
          key={project.title}
          className="border-b pb-6 space-y-3"
          style={{ borderColor: "var(--border)" }}
        >
          <h3 className="font-medium">{project.title}</h3>

          <p className="text-sm">{project.role}</p>

          <div className="flex gap-2 flex-wrap pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-2 py-1 border"
                style={{ borderColor: "var(--border)" }}
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="text-sm list-disc pl-5 pt-2">
            {project.description.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          {/* links */}
          <div className="flex gap-3 pt-2 text-sm">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                className="px-3 py-1 border"
                style={{ borderColor: "var(--border)" }}
              >
                Demo
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="px-3 py-1 border"
                style={{ borderColor: "var(--border)" }}
              >
                GitHub
              </a>
            )}

            {project.links.github_frontend && (
              <a
                href={project.links.github_frontend}
                target="_blank"
                className="px-3 py-1 border"
                style={{ borderColor: "var(--border)" }}
              >
                Frontend
              </a>
            )}

            {project.links.github_backend && (
              <a
                href={project.links.github_backend}
                target="_blank"
                className="px-3 py-1 border"
                style={{ borderColor: "var(--border)" }}
              >
                Backend
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}