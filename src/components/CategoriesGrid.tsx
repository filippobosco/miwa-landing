"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const pages = [
  { num: "01", img: "/1.jpg" },
  { num: "02", img: "/2.jpg" },
  { num: "03", img: "/3.jpg" },
  { num: "04", img: "/4.jpg" },
  { num: "05", img: "/5.jpg" },
  { num: "06", img: "/6.jpg" },
  { num: "07", img: "/7.jpg" },
  { num: "08", img: "/8.jpg" },
  { num: "09", img: "/9.jpg" },
  { num: "10", img: "/10.jpg" },
];

const TOTAL_SPREADS = Math.ceil(pages.length / 2);

function Photo({ img, num, pos }: { img: string; num: string; pos: "left" | "right" }) {
  return (
    <>
      <Image src={img} alt={`Look ${num}`} fill className="object-cover" sizes="30vw" />
      <span className={`absolute bottom-4 font-display text-white/25 text-5xl font-light leading-none select-none pointer-events-none ${pos === "right" ? "right-5" : "left-5"}`}>
        {num}
      </span>
    </>
  );
}

function BlankPage() {
  return (
    <div className="w-full h-full bg-[#F5EFE8] flex items-end p-8">
      <span className="font-display text-8xl font-light text-dark/10 leading-none select-none">fin.</span>
    </div>
  );
}

export default function CategoriesGrid() {
  const [spread, setSpread] = useState(0);

  const cur = { left: pages[spread * 2], right: pages[spread * 2 + 1] };
  const hasNext = spread < TOTAL_SPREADS - 1;
  const hasPrev = spread > 0;

  return (
    <section id="categorie" className="py-14 md:py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left col — testo fisso */}
          <AnimateIn delay={0}>
            <div className="lg:w-[260px] shrink-0">
              <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">Collezione P E 2026</p>
              <h2 className="font-display text-5xl md:text-6xl font-light text-dark leading-[0.95] mb-6">
                Selezione<br />Donna
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Capi contemporanei con carattere. Sfoglia il lookbook e scopri le proposte della prossima stagione.
              </p>
              <a href="#contatti" className="text-sm text-dark underline underline-offset-4 hover:text-accent transition-colors">
                Accedi al catalogo completo →
              </a>
              <div className="flex gap-1.5 mt-10">
                {Array.from({ length: TOTAL_SPREADS }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSpread(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === spread ? "w-6 bg-dark" : "w-1.5 bg-dark/20"}`}
                  />
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Right col — libro */}
          <AnimateIn delay={0.15} className="w-full lg:flex-1 lg:min-w-0 flex justify-center">
            <div className="relative w-full max-w-sm lg:max-w-none">

              {/* Preload tutte le immagini al mount */}
              <div aria-hidden className="sr-only">
                {pages.map(p => (
                  <Image key={p.num} src={p.img} alt="" fill sizes="1px" />
                ))}
              </div>

              {/* Libro a due pagine */}
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                style={{ aspectRatio: "3/2" }}
              >
                <AnimatePresence mode="sync">
                  <motion.div
                    key={spread}
                    className="absolute inset-0 flex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                  >
                    <div className="w-1/2 relative">
                      <Photo img={cur.left.img} num={cur.left.num} pos="left" />
                    </div>
                    <div className="w-1/2 relative">
                      {cur.right ? <Photo img={cur.right.img} num={cur.right.num} pos="right" /> : <BlankPage />}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Rilegatura */}
                <div
                  className="absolute inset-y-0 pointer-events-none"
                  style={{ left: "calc(50% - 0.5px)", width: 1, zIndex: 30, background: "linear-gradient(to bottom, rgba(35,35,35,0.05), rgba(35,35,35,0.2), rgba(35,35,35,0.05))" }}
                />
              </div>

              {/* Frecce */}
              <button
                onClick={() => setSpread(s => s - 1)}
                disabled={!hasPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1 lg:-translate-x-5 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-dark hover:bg-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setSpread(s => s + 1)}
                disabled={!hasNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1 lg:translate-x-5 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-dark hover:bg-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
