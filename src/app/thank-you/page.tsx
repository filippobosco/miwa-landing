import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Grazie per la registrazione — Miwa B2B",
  description: "Registrazione ricevuta. Il 15 aprile riceverai il tuo codice sconto e l'accesso al catalogo B2B Miwa.",
};

const nextSteps = [
  {
    num: "01",
    title: "Controlla la tua email",
    desc: "Ti abbiamo inviato una conferma alla mail che hai indicato. Controlla anche la cartella spam.",
  },
  {
    num: "02",
    title: "Il 15 aprile arriva il coupon",
    desc: "Riceverai via email il codice sconto da €50 e il link diretto al catalogo B2B con prezzi riservati.",
  },
  {
    num: "03",
    title: "Ordina con lo sconto",
    desc: "Usa il codice sul tuo primo ordine da €200 o superiore.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Minimal header */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-dark/8">
        <a
          href="/"
          className="font-display text-xl tracking-[0.2em] uppercase text-dark font-medium"
        >
          Miwa
        </a>
        <a
          href="/"
          className="text-sm text-muted hover:text-dark transition-colors"
        >
          ← Torna alla home
        </a>
      </header>

      {/* Hero confirmation */}
      <section className="flex-1 flex items-center py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: message */}
            <div>
              <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">
                Registrazione Confermata
              </p>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full border border-accent/50 bg-accent/10 flex items-center justify-center mb-8">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="text-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-dark leading-[0.95] mb-6">
                Registrazione
                <br />
                confermata.
              </h1>

              <p className="text-text/70 text-base leading-relaxed max-w-sm mb-8">
                Il{" "}
                <strong className="text-dark">15 aprile 2026</strong> riceverai
                via email il tuo codice sconto da{" "}
                <strong className="text-dark">€50</strong> e il link al
                catalogo B2B con prezzi riservati.
              </p>

              {/* Date badge */}
              <div className="inline-flex items-center gap-2.5 bg-accent/10 border border-accent/20 text-dark text-xs px-4 py-2.5 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                Coupon e catalogo in arrivo il 15 aprile 2026
              </div>
            </div>

            {/* Right: next steps */}
            <div className="bg-dark rounded-3xl px-8 py-10">
              <p className="text-accent text-xs tracking-[0.2em] uppercase mb-8">
                Cosa succede ora
              </p>
              <div className="space-y-8">
                {nextSteps.map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <span
                      className="font-display text-5xl font-light leading-none mt-0.5 shrink-0 w-12"
                      style={{ color: "#C8B89A", opacity: 0.4 }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-accent text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/"
                className="inline-flex items-center justify-center w-full mt-10 border border-white/15 text-white/70 px-6 py-3 rounded-full text-sm tracking-wide hover:bg-white/5 hover:text-white transition-colors duration-300"
              >
                Torna alla home →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
