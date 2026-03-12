export default function AboutMe() {
  return (
    <section id="about" className="flex gap-4">
      <div className="space-y-4">
        <h2 className="text-xl font-medium">About</h2>

        <p>
          Third-year Software Engineering student at University of Phayao.
          Interested in Full-Stack development and building practical web
          applications.
        </p>

        <p>
          Experience includes React, TypeScript, REST API development, and
          relational database design.
        </p>

        <p>GPAX: 3.81</p>
      </div>

      <img className="max-w-48" src="/profile.jpg" />
    </section>
  );
}
