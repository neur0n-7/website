const socials = [
  { label: "GitHub", href: "https://github.com/neur0n-7" },
  { label: "Email", href: "mailto:anishgupta7500@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} Anish Gupta
        </p>
        <div className="flex gap-5 font-mono">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="transition-colors hover:text-accent"
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
