import Image from "next/image";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "Lascia i tuoi dati",
    desc: "Registrati ora in pochi secondi. Ti basta inserire nome, email e partita IVA — nessun impegno, nessun pagamento.",
  },
  {
    num: "02",
    title: "Ricevi il coupon il 15 aprile",
    desc: "Il giorno del lancio riceverai una mail con un coupon da €50 di sconto, valido sul tuo primo ordine da €200.",
  },
  {
    num: "03",
    title: "Inizia ad ordinare",
    desc: "Dal 15 aprile accedi al catalogo completo, sfoglia le collezioni P E 2026 e fai il tuo primo ordine online.",
  },
];

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="pt-14 pb-8 md:py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <AnimateIn delay={0}>
              <div className="mb-14">
                <p className="text-muted text-xs tracking-[0.2em] uppercase mb-3">
                  Come Funziona
                </p>
                <h2 className="font-display text-5xl md:text-6xl font-light text-dark leading-[0.95]">
                  Tre passi
                  <br />
                  per iniziare
                </h2>
              </div>
            </AnimateIn>

            <div className="space-y-10">
              {steps.map((step, i) => (
                <AnimateIn key={step.num} direction="left" delay={i * 0.15}>
                  <div className="flex gap-6">
                    <span
                      className="font-display text-6xl font-light leading-none mt-1 shrink-0 w-14"
                      style={{ color: "#C8B89A", opacity: 0.5 }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-dark font-medium text-base mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={0.45}>
              <div className="mt-12 border-t border-dark/10 pt-10">
                <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">A chi si rivolge MIWA</p>
                <ul className="space-y-2 text-sm text-muted mb-8">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Boutique indipendenti</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Negozi di abbigliamento multimarca</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Retailer moda in tutta Italia</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Professionisti con partita IVA</li>
                </ul>
                <a
                  href="#contatti"
                  className="inline-flex items-center justify-center bg-dark text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-accent hover:text-dark transition-colors duration-300"
                >
                  Ottieni €50 di Sconto
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Visual side — photo */}
          <AnimateIn direction="right" delay={0.1}>
            <div
              className="relative overflow-hidden rounded-3xl hidden lg:block"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/appendi.jpg"
                alt="Abbigliamento fashion store"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
