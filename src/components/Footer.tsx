import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-8 md:py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Image src="/logo Miwa.png" alt="Miwa" width={80} height={32} className="h-8 w-auto invert" />

          {/* Links */}
          <nav className="flex gap-6 text-muted text-xs tracking-wide">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="#contatti" className="hover:text-white transition-colors">
              Contatti B2B
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-muted/40 text-xs">
            © {new Date().getFullYear()} Miwa. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
