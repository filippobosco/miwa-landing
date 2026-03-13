"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 pt-24 md:pb-24 md:pt-32 overflow-hidden bg-black">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/MIWA Hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark/75 via-dark/25 to-dark/10" />

      <div className="w-full relative z-20 px-6 lg:px-12" style={{ textAlign: "center" }}>
        {/* Headline */}
        <h1 className="font-display text-white text-5xl md:text-6xl lg:text-[5.75rem] leading-[0.9] font-light mb-8" style={{ textAlign: "center" }}>
          <motion.span {...fadeUp(0.1)}>Ingrosso moda</motion.span>
          <br />
          <motion.span {...fadeUp(0.2)}>per boutique.</motion.span>
        </h1>

        {/* Sub-headline */}
        <motion.p
          className="text-white/75 text-lg md:text-xl mb-10 leading-relaxed text-center"
          {...fadeUp(0.45)}
        >
          <span className="md:whitespace-nowrap">Registrati e ricevi €50 di sconto sul tuo primo ordine da €200.</span>
          <br />
          <strong>MIWA apre il 15 aprile.</strong>
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" {...fadeUp(0.6)}>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center bg-white text-dark px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-300"
          >
            Ottieni €50 di Sconto
          </a>
          <a
            href="#categorie"
            className="hidden sm:inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white/10 transition-colors duration-300"
          >
            Scopri le Collezioni
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-12 hidden lg:flex flex-col items-center gap-2 text-white/40"
        {...fadeUp(1)}
      >
        <div className="w-px h-14 bg-white/25" />
        <span className="tracking-[0.2em] uppercase text-[9px]">Scorri</span>
      </motion.div>
    </section>
  );
}
