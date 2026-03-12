import AnimateIn from "./AnimateIn";
import CountdownTimer from "./CountdownTimer";

export default function LaunchSection() {
  return (
    <section className="bg-dark border-t border-white/10 py-12 md:py-20 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Headline */}
        <AnimateIn delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-3 leading-tight">
            Ricevi €50 di Sconto
            <br />
            {" "}sul{" "}
            <span className="text-white font-medium">
              tuo primo ordine
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-accent/70 text-sm mb-12">
            In occasione del lancio ufficiale, riserviamo ai nuovi negozianti registrati €50 di buono su una spesa minima di €200. Offerta riservata ai professionisti del settore moda.
          </p>
        </AnimateIn>

        {/* Countdown */}
        <AnimateIn delay={0.3}>
          <CountdownTimer />
        </AnimateIn>

        {/* Subtext */}
        <AnimateIn delay={0.45}>
          <p className="text-accent/50 text-xs mt-10 leading-relaxed">
            Registrati ora — il{" "}
            <span className="text-accent/80">15 aprile 2026</span> riceverai via email il buono da €50.
          </p>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn delay={0.55}>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center mt-8 bg-accent text-dark px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-white transition-colors duration-300"
          >
            Ottieni €50 di Sconto
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
