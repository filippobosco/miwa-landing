"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface FormData {
  nome: string;
  cognome: string;
  email: string;
  negozio: string;
  telefono: string;
  partitaIva: string;
}

const initialState: FormData = {
  nome: "",
  cognome: "",
  email: "",
  negozio: "",
  telefono: "",
  partitaIva: "",
};

function Input({
  name,
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  name: keyof FormData;
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-white/50 text-xs mb-1.5 tracking-wide"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors duration-200"
      />
    </div>
  );
}

export default function LeadForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbylF_UvRL5NrReUlYS9zzjqdtm9H9Yuxyd_Ybttq1Co6_BDgjDUkicNK9zEmoRpJE1zbA/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );
    } catch {
      // ignora errori di rete — il redirect avviene comunque
    }
    router.push("/thank-you");
  };

  return (
    <section id="contatti" className="py-14 md:py-24 px-6 bg-dark">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-accent text-xs tracking-[0.2em] uppercase mb-3">
            Offerta Esclusiva — Solo al Lancio
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white font-light mb-4 leading-[1.05] md:leading-[0.95]">
            €50 di Sconto sul{" "}
            <span className="text-white">tuo Primo Ordine</span>
          </h2>
          <p className="text-accent text-sm max-w-sm mx-auto leading-relaxed">
            Registrati ora e ricevi €50 di buono valido su ordini da €200. Riceverai il codice via email il 15 aprile, giorno di apertura del catalogo.
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="text-accent shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <p className="text-accent/70 text-xs">
              Riceverai il codice sconto via email il{" "}
              <span className="text-accent/90">15 aprile</span>, giorno di
              apertura del catalogo.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="nome"
              label="Nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Mario"
            />
            <Input
              name="cognome"
              label="Cognome"
              value={form.cognome}
              onChange={handleChange}
              required
              placeholder="Rossi"
            />
          </div>
          <Input
            name="email"
            label="Email Aziendale"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="mario@negozio.it"
          />
          <Input
            name="negozio"
            label="Nome Negozio"
            value={form.negozio}
            onChange={handleChange}
            required
            placeholder="Boutique Rossi S.r.l."
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="telefono"
              label="Telefono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              required
              placeholder="+39 333 000 0000"
            />
            <Input
              name="partitaIva"
              label="Partita IVA"
              value={form.partitaIva}
              onChange={handleChange}
              required
              placeholder="IT12345678901"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-accent text-dark py-4 rounded-full text-sm font-medium tracking-wide hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Invio in corso..." : "Richiedi €50 di Sconto →"}
          </button>

          <p className="text-center text-accent/60 text-xs mt-3">
            Nessuno spam. I tuoi dati non vengono ceduti a terzi.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
