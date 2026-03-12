import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy — Miwa B2B",
  description: "Informativa sull'uso dei cookie e delle tecnologie di tracciamento sul sito Miwa.",
};

const sections = [
  {
    title: "1. Cosa sono i cookie",
    content: `I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo (computer, smartphone, tablet) quando li visiti. Vengono utilizzati per far funzionare il sito correttamente, per ricordare le tue preferenze e per raccogliere informazioni aggregate sull'utilizzo del sito.`,
  },
  {
    title: "2. Tipologie di cookie utilizzati",
    content: `Il sito miwa.it utilizza le seguenti categorie di cookie:

Cookie tecnici (necessari)
Questi cookie sono indispensabili per il corretto funzionamento del sito e non possono essere disattivati. Non raccolgono informazioni personali identificabili. Includono cookie di sessione, cookie di sicurezza e cookie che ricordano le preferenze di navigazione.

Cookie analitici
Utilizziamo cookie analitici (con IP anonimizzato) per raccogliere informazioni aggregate su come gli utenti interagiscono con il sito — ad esempio quali pagine vengono visitate più spesso e se si verificano errori. Questi dati ci aiutano a migliorare l'esperienza di navigazione.

Cookie di marketing
Questi cookie possono essere impostati da partner pubblicitari terzi (es. Meta Pixel) per costruire un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti. Non memorizzano direttamente informazioni personali, ma si basano sull'identificazione del tuo browser e dispositivo.`,
  },
  {
    title: "3. Cookie di terze parti",
    content: `Il sito può includere componenti di terze parti che impostano cookie propri. In particolare:

• Meta Pixel (Meta Platforms Inc.) — utilizzato per misurare l'efficacia delle campagne pubblicitarie su Facebook e Instagram. I dati raccolti sono soggetti alla Privacy Policy di Meta: https://www.facebook.com/privacy/policy

• Google Analytics (Google LLC) — utilizzato per l'analisi statistica del traffico con IP anonimizzato. I dati raccolti sono soggetti alla Privacy Policy di Google: https://policies.google.com/privacy

Ti invitiamo a consultare le informative privacy di questi soggetti per maggiori informazioni sul trattamento dei dati da loro effettuato.`,
  },
  {
    title: "4. Come gestire i cookie",
    content: `Puoi gestire le preferenze sui cookie in qualsiasi momento tramite le impostazioni del tuo browser. Di seguito i link alle istruzioni per i browser più comuni:

• Google Chrome: Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti
• Mozilla Firefox: Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web
• Safari: Preferenze → Privacy → Gestisci dati siti web
• Microsoft Edge: Impostazioni → Privacy, ricerca e servizi → Cookie

Tieni presente che la disattivazione di alcuni cookie potrebbe compromettere il corretto funzionamento di alcune funzionalità del sito.

Puoi inoltre optare fuori dalla pubblicità personalizzata di Meta visitando: https://www.facebook.com/adpreferences/`,
  },
  {
    title: "5. Durata dei cookie",
    content: `I cookie possono essere:

• Cookie di sessione: vengono eliminati automaticamente alla chiusura del browser.
• Cookie persistenti: rimangono sul dispositivo per un periodo definito (solitamente da 30 giorni a 2 anni) o finché non vengono eliminati manualmente.

La durata specifica di ciascun cookie è indicata nella tabella di dettaglio disponibile nel banner cookie.`,
  },
  {
    title: "6. Base giuridica",
    content: `L'utilizzo di cookie tecnici è basato sul legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR), in quanto necessari al funzionamento del sito.

L'utilizzo di cookie analitici e di marketing è basato sul consenso dell'utente (art. 6, par. 1, lett. a GDPR), espresso tramite il banner cookie al primo accesso al sito. Il consenso può essere revocato in qualsiasi momento modificando le preferenze cookie.`,
  },
  {
    title: "7. Titolare del trattamento",
    content: `Il Titolare del trattamento è Miwa S.r.l., con sede in Milano (MI), Italia.

Per qualsiasi domanda relativa all'utilizzo dei cookie puoi contattarci all'indirizzo: privacy@miwa.it`,
  },
  {
    title: "8. Aggiornamenti alla Cookie Policy",
    content: `La presente Cookie Policy può essere aggiornata periodicamente per riflettere modifiche tecniche, normative o operative. Ti invitiamo a consultare questa pagina regolarmente. La data dell'ultimo aggiornamento è indicata in cima alla pagina.`,
  },
];

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p className="text-muted text-sm leading-relaxed mb-16 max-w-xl">
            Informativa sull&apos;uso dei cookie e delle tecnologie di tracciamento ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003.
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
