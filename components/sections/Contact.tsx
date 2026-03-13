export default function Contact() {
  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-xl font-medium">Contact</h2>

      <div className="space-y-2 text-sm">
        <a
          href="mailto:arachaphonklinchueng@gmail.com"
          className="block hover:underline"
        >
          Email: arachaphonklinchueng@gmail.com
        </a>

        <a
          href="tel:+66970540944"
          className="block hover:underline"
        >
          Phone: 097 054 0944
        </a>

        <a
          href="https://github.com/Arachaphon"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          GitHub: github.com/Arachaphon
        </a>

        <p>Location: Chiang Mai, Thailand</p>
      </div>
    </section>
  );
}