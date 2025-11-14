import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ChatWidget } from "@/components/ChatWidget";

const logos = [
  { name: "ShopOne" }, { name: "CommerceX" }, { name: "RetailHub" }
];

const features: { title: string; desc: string }[] = [
  { title: "Intelligente Antworten", desc: "Maßgeschneidert auf Ihr Sortiment und Ihre Policies." },
  { title: "24/7 Support", desc: "Rund um die Uhr verfügbar – günstiger als klassischer Support." },
  { title: "Einfache Integration", desc: "Nahtlos in bestehende Shop-Stacks." },
  { title: "Mehr Conversion", desc: "Schnellere Antworten, weniger Tickets." },
  { title: "DSGVO-konform", desc: "Datensparsam, EU-Hosting-Optionen." },
  { title: "Messbare Ergebnisse", desc: "Dashboards & KPIs." },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--brand-navy)]">
          KI-Chatbots für mittelgroße Online-Shops
        </h1>
        <p className="mt-4 text-black/70 max-w-2xl">
          Maßgeschneiderte Antworten. 24/7 verfügbar. Schneller ROI.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="#kontakt" className="btn">Demo anfragen</Link>
          <Link href="#faq" className="btn btn-secondary">Jetzt testen</Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-10 bg-black/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {logos.map((l, idx) => (
            <div key={l.name ?? `logo-${idx}`} className="h-10 rounded bg-black/5 grid place-content-center text-sm text-black/60">
              {l.name}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div className="card" key={f.title ?? `f-${idx}`}>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-black/70 mt-2">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="px-6 py-16 max-w-3xl mx-auto">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <ContactForm />
          <p className="text-xs text-black/60 mt-4">
            Patrick Schneider — Tel. +49 1520 5823121 — E-Mail: <a href="mailto:patrick.schnei@icloud.com">patrick.schnei@icloud.com</a>
          </p>
        </div>
      </section>

      <ChatWidget />
    </main>
  );
}
