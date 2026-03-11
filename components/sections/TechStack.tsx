import { techStack } from "@/data/techStack";

export default function TechStack() {
  return (
    <section id="stack" className="space-y-6">
      <h2 className="text-xl font-medium">Tech Stack</h2>

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <p className="text-sm mb-2">{category}</p>

            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm border"
                  style={{borderColor:"var(--border)"}}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}