export default function Footer() {
  return (
    <footer
      className="mt-20 border-t"
      style={{
        background: "var(--nav-bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-[900px] mx-auto px-8 py-6 flex items-center justify-between">
        <span
          className="text-xs"
          style={{ color: "#d8c3ae" }}
        >
          © 2025 Arachaphon Klinchuen
        </span>

        <a
          href="https://github.com/Arachaphon"
          target="_blank"
          rel="noreferrer"
          className="text-xs transition-colors duration-200"
          style={{ color: "#d8c3ae" }}
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}