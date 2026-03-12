import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className="flex items-center justify-between gap-8 bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 w-full max-w-4xl"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
      >
        {/* Logo */}
        <a href="#">
          <Image src="/logo Miwa.png" alt="Miwa" width={80} height={32} className="h-5 w-auto" />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7 text-sm text-text">
          <a href="#categorie" className="hover:text-dark transition-colors">
            Lookbook
          </a>
          <a href="#come-funziona" className="hover:text-dark transition-colors">
            Come Funziona
          </a>
          <a href="#contatti" className="hover:text-dark transition-colors">
            Registrati
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contatti"
          className="bg-dark text-white text-sm px-5 py-2.5 rounded-full hover:bg-accent hover:text-dark transition-colors duration-300 whitespace-nowrap"
        >
          Ottieni €50 di Sconto
        </a>
      </nav>
    </header>
  );
}
