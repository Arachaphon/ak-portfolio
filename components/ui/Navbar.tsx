"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center justify-between px-8 border-b backdrop-blur-md"
      style={{
        background: "rgba(63,53,43,0.92)",
        borderColor: "var(--border)",
      }}
    >
      <Link
        href="#hero"
        className="font-serif text-[17px] tracking-wide"
        style={{ color: "#f6e8d7" }}
      >
        AK
      </Link>

      <ul className="flex gap-7 list-none">
        {links.map(({ href, label }) => {
          const id = href.replace("#", "");
          const isActive = active === id;

          return (
            <li key={href} className="relative">
              <a
                href={href}
                className="text-[13px] tracking-wide transition-colors duration-200"
                style={{
                  color: isActive ? "#f6e8d7" : "#d8c3ae",
                }}
              >
                {label}
              </a>

              {isActive && (
                <span
                  className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}