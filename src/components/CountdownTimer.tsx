"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET = new Date("2026-04-15T00:00:00");

function getTimeLeft(): TimeLeft {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="bg-white/8 border border-white/10 rounded-xl px-3 py-3 min-w-[56px] md:min-w-[72px] md:px-5 md:py-4 text-center">
        <span className="text-3xl md:text-5xl font-light text-white tabular-nums" style={{ fontFamily: "var(--font-montserrat)" }}>
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-muted text-[9px] md:text-[10px] uppercase tracking-[0.12em]">{label}</span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const launched = timeLeft !== null && TARGET.getTime() <= Date.now();

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (launched) {
    return (
      <div className="flex items-center justify-center gap-3 py-4">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        <p className="text-white/80 text-sm tracking-wide">
          Il catalogo è ora disponibile — usa il tuo codice sconto!
        </p>
      </div>
    );
  }

  // Skeleton mentre il timer non è ancora idratato (evita hydration mismatch)
  if (timeLeft === null) {
    return (
      <div className="flex items-center justify-center gap-2 md:gap-6">
        {["Giorni", "Ore", "Minuti", "Secondi"].map((label) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <div className="bg-white/8 border border-white/10 rounded-xl min-w-[56px] md:min-w-[72px] h-[60px] md:h-[80px] animate-pulse" />
            <span className="text-muted text-[9px] md:text-[10px] uppercase tracking-[0.12em]">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center gap-2 md:gap-6">
      <TimeBox value={timeLeft.days} label="Giorni" />
      <div className="text-white/30 text-2xl md:text-3xl font-light mt-2.5 md:mt-3 select-none">:</div>
      <TimeBox value={timeLeft.hours} label="Ore" />
      <div className="text-white/30 text-2xl md:text-3xl font-light mt-2.5 md:mt-3 select-none">:</div>
      <TimeBox value={timeLeft.minutes} label="Minuti" />
      <div className="text-white/30 text-2xl md:text-3xl font-light mt-2.5 md:mt-3 select-none">:</div>
      <TimeBox value={timeLeft.seconds} label="Secondi" />
    </div>
  );
}
