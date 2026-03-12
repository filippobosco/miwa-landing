import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Miwa B2B",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

const sections = [
  {
    title: "1. Titolare del trattamento",
    content: `Il Titolare del trattamento dei dati personali è Miwa S.r.l., con sede legale in Milano (MI), Italia (di seguito "Miwa" o "Titolare").

Per qualsiasi informazione relativa al trattamento dei tuoi dati personali puoi contattarci all'indirizzo email: privacy@miwa.it`,
  },
  {
    title: "2. Tipologie di dati raccolti",
    content: `Attraverso il modulo di registrazione presente sul sito raccogliamo i seguenti dati personali:

• Nome e cognome
• Indirizzo email aziendale
• Numero di telefono
• Nome del negozio / ragione sociale
• Partita IVA

Questi dati vengono forniti volontariamente dall'utente al momento della registrazione.`,
  },
  {
    title: "3. Finalità e base giuridica del trattamento",
    content: `I dati raccolti vengono trattati per le seguenti finalità:

a) Gestione della registrazione e invio del codice sconto di benvenuto — base giuridica: esecuzione di un contratto o misure precontrattuali (art. 6, par. 1, lett. b GDPR).

b) Invio di comunicazioni commerciali relative al catalogo B2B, alle promozioni e ai nuovi arrivi — base giuridica: consenso dell'interessato (art. 6, par. 1, lett. a GDPR). Puoi revocare il consenso in qualsiasi momento tramite il link di disiscrizione presente in ogni email.

c) Adempimento di obblighi di legge (es. fiscali e contabili) — base giuridica: obbligo legale (art. 6, par. 1, lett. c GDPR).`,
  },
  {
    title: "4. Destinatari dei dati",
    content: `I tuoi dati personali non vengono ceduti a terzi per scopi propri. Potranno essere condivisi con:

• Fornitori di servizi tecnici (es. piattaforma email, hosting) che agiscono in qualità di Responsabili del trattamento ai sensi dell'art. 28 GDPR.
• Autorità pubbliche, nei casi previsti dalla legge.

Tutti i soggetti che trattano dati per nostro conto sono stati adeguatamente istruiti e operano nel rispetto del GDPR.`,
  },
  {
    title: "5. Trasferimento dei dati extra-UE",
    content: `Alcuni fornitori di servizi potrebbero trasferire dati al di fuori dello Spazio Economico Europeo. In tali casi, ci assicuriamo che il trasferimento avvenga nel rispetto delle garanzie previste dal GDPR (es. Clausole Contrattuali Standard approvate dalla Commissione Europea).`,
  },
  {
    title: "6. Periodo di conservazione",
    content: `I dati raccolti tramite il modulo di registrazione vengono conservati per tutta la durata del rapporto commerciale e per i successivi 10 anni per gli adempimenti di legge.

I dati trattati per finalità di marketing vengono conservati fino alla revoca del consenso o per un periodo massimo di 5 anni dall'ultima interazione.`,
  },
  {
    title: "7. Diritti dell'interessato",
    content: `Ai sensi degli artt. 15–22 del GDPR, hai il diritto di:

• Accedere ai tuoi dati personali (art. 15)
• Rettificare dati inesatti o incompleti (art. 16)
• Ottenere la cancellazione dei dati ("diritto all'oblio") (art. 17)
• Limitare il trattamento (art. 18)
• Ricevere i dati in formato strutturato (portabilità) (art. 20)
• Opporti al trattamento (art. 21)
• Revocare il consenso in qualsiasi momento, senza pregiudizio per la liceità del trattamento basato sul consenso prestato prima della revoca.

Per esercitare i tuoi diritti, invia una richiesta a: privacy@miwa.it

Hai inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).`,
  },
  {
    title: "8. Cookie e tecnologie di tracciamento",
    content: `Il sito utilizza cookie tecnici necessari al suo corretto funzionamento. Per informazioni dettagliate consulta la nostra Cookie Policy.`,
  },
  {
    title: "9. Modifiche alla presente informativa",
    content: `Il Titolare si riserva il diritto di aggiornare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento. Ti invitiamo a consultare periodicamente questa pagina.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background" style={{ fontFamily: "var(--font-montserrat)" }}>
      {/* Header */}
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

      {/* Content */}
      <section className="flex-1 py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">
            Ultimo aggiornamento: marzo 2026
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-dark leading-[0.95] mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm leading-relaxed mb-16 max-w-xl">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title} className="border-t border-dark/10 pt-8">
                <h2 className="font-medium text-dark text-base mb-4">
                  {section.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
