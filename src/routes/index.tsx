import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Clock, Phone, Star, ArrowUpRight, CalendarCheck } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { JEF, services, hours, reviews, highlights } from "@/components/jef-data";
import heroImg from "@/assets/jef-interior-cadeiras.jpg";
import salaoImg from "@/assets/jef-salao-espelhos.jpg";
import bancadaImg from "@/assets/jef-detalhe-bancada.jpg";
import espelhoImg from "@/assets/jef-espelho-barbeiro.jpg";
import cadeirasImg from "@/assets/jef-cadeiras-vintage.jpg";

const title = "JEF BARBER'S — Barbearia em Itabirito MG | Agende online";
const description =
  "Barbearia em Itabirito (MG) com nota 5,0 no Google e 43 avaliações. Ambiente retrô climatizado, profissionais especializados e agendamento online: escolha o serviço e o seu horário.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "JEF BARBER'S",
          description,
          telephone: "+55 31 98506-1203",
          priceRange: "R$ 15 - R$ 100",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Manoel Salvador de Oliveira, 623",
            addressLocality: "Itabirito",
            addressRegion: "MG",
            postalCode: "35450-114",
            addressCountry: "BR",
          },
          areaServed: { "@type": "City", name: "Itabirito" },
          geo: { "@type": "GeoCoordinates", latitude: -20.2523723, longitude: -43.7989462 },
          hasMap: JEF.maps,
          sameAs: [JEF.instagram, JEF.booking],
          potentialAction: {
            "@type": "ReserveAction",
            target: { "@type": "EntryPoint", urlTemplate: JEF.booking },
            result: { "@type": "Reservation", name: "Agendamento de horário" },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: 43,
          },
          makesOffer: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name },
            price: s.price,
            priceCurrency: "BRL",
          })),
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "20:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "17:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Landing,
});

/* ---------------------------------------------------------------- actions */

const btnBase =
  "group inline-flex items-center justify-center gap-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300";

function BookButton({
  children = "Agendar horário",
  size = "md",
  className = "",
}: {
  children?: string;
  size?: "md" | "lg" | "sm";
  className?: string;
}) {
  const pad =
    size === "lg"
      ? "px-8 py-4 text-[0.74rem]"
      : size === "sm"
        ? "px-5 py-2.5 text-[0.64rem]"
        : "px-7 py-3.5";
  return (
    <a
      href={JEF.booking}
      target="_blank"
      rel="noopener"
      className={`${btnBase} ${pad} bg-brass text-primary-foreground shadow-[0_10px_30px_-14px_oklch(0.79_0.113_84/60%)] hover:bg-brass-soft hover:-translate-y-0.5 ${className}`}
    >
      <CalendarCheck className="h-4 w-4" />
      {children}
    </a>
  );
}

function WhatsButton({
  children = "Falar no WhatsApp",
  className = "",
}: {
  children?: string;
  className?: string;
}) {
  return (
    <a
      href={JEF.whatsapp}
      target="_blank"
      rel="noopener"
      className={`${btnBase} px-7 py-3.5 border border-cream/25 text-cream hover:border-cream/60 hover:bg-cream/5 ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

/* ---------------------------------------------------------------- chrome */

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg leading-none tracking-tight sm:text-xl">JEF</span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-brass">
            Barber's
          </span>
        </a>
        <nav className="hidden items-center gap-9 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground lg:flex">
          <a className="transition-colors hover:text-cream" href="#casa">
            A casa
          </a>
          <a className="transition-colors hover:text-cream" href="#cuidados">
            Cuidados
          </a>
          <a className="transition-colors hover:text-cream" href="#agendar">
            Seu horário
          </a>
          <a className="transition-colors hover:text-cream" href="#onde">
            Itabirito
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={JEF.instagram}
            target="_blank"
            rel="noopener"
            aria-label="Instagram da JEF BARBER'S"
            className="hidden p-2 text-muted-foreground transition-colors hover:text-brass sm:block"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <BookButton size="sm">Agendar</BookButton>
        </div>
      </div>
    </header>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-lg lg:hidden">
      <div className="flex items-stretch gap-2">
        <a
          href={JEF.booking}
          target="_blank"
          rel="noopener"
          className="flex flex-[1.6] items-center justify-center gap-2 bg-brass py-3.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground"
        >
          <CalendarCheck className="h-4 w-4" />
          Agendar online
        </a>
        <a
          href={JEF.whatsapp}
          target="_blank"
          rel="noopener"
          className="flex flex-1 items-center justify-center gap-2 border border-cream/25 py-3.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cream"
        >
          <Phone className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-brass text-brass" />
      ))}
    </span>
  );
}

/* ---------------------------------------------------------------- 1. impacto */

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Salão da JEF BARBER'S em Itabirito com cadeiras de barbeiro e ambiente retrô"
        className="absolute inset-0 h-full w-full object-cover object-center hero-pan"
      />
      <div className="veil absolute inset-0" />
      <div className="absolute inset-0 bg-forest-deep/25" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-end px-5 pb-28 pt-32 sm:px-8 lg:pb-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brass" />
            <span className="eyebrow">Barbearia · Itabirito, MG</span>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-6 max-w-[22ch] font-display text-[clamp(2.9rem,12vw,8.5rem)] leading-[0.86] tracking-[-0.03em]">
            JEF
            <span className="block text-brass">BARBER'S</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-7 max-w-[46ch] text-[1.02rem] leading-relaxed text-cream/85 sm:text-lg">
            Cadeira reclinada, ar-condicionado no ponto e um barbeiro que escuta antes de tocar na
            tesoura. <span className="text-cream">A sua barbearia</span> — a três minutos do centro
            de Itabirito.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookButton size="lg">Escolher meu horário</BookButton>
            <WhatsButton>Tirar uma dúvida</WhatsButton>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-cream/15 pt-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl leading-none text-brass">{JEF.rating}</span>
              <span className="flex flex-col">
                <Stars />
                <span className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {JEF.reviewCount} avaliações no Google
                </span>
              </span>
            </div>
            <span className="hidden h-8 w-px bg-cream/15 sm:block" />
            <span className="max-w-[26ch] font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
              Agendamento online · Seg a sáb
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 2. interesse */

function Casa() {
  return (
    <section id="casa" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:col-start-1">
          <Reveal>
            <span className="eyebrow">Desde o primeiro café</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.4vw,3.6rem)] leading-[0.98] tracking-[-0.02em]">
              Aqui você não é o próximo da fila.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-7 max-w-[46ch] text-[1.02rem] leading-relaxed text-cream/80">
              A JEF nasceu com um jeito de receber: ambiente familiar, madeira escura, espelhos
              antigos e uma temperatura que convida a ficar. O corte começa na conversa — entender o
              seu cabelo, o seu rosto e a sua rotina antes de decidir qualquer coisa.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ul className="mt-9 divide-y divide-border/60 border-y border-border/60">
              {[
                ["Ambiente familiar", "Você entra cliente e sai de casa."],
                ["Estilo retrô, cuidado atual", "Referência clássica, técnica de hoje."],
                ["Climatizado", "Conforto do começo ao fim do atendimento."],
                ["Escuta ativa", "Ninguém corta sem entender o que você quer."],
              ].map(([k, v]) => (
                <li key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-brass sm:w-[13rem] sm:shrink-0">
                    {k}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-cream/75">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="relative">
            <Reveal>
              <img
                src={salaoImg}
                alt="Salão com espelhos e bancada de madeira da JEF BARBER'S"
                loading="lazy"
                className="photo-frame aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
              />
            </Reveal>
            <Reveal delay={200} className="absolute -bottom-10 -left-4 w-[42%] max-w-[15rem] sm:-left-10 sm:-bottom-14">
              <img
                src={bancadaImg}
                alt="Detalhe da bancada e ferramentas de barbeiro"
                loading="lazy"
                className="photo-frame aspect-square w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 3. desejo */

function Cuidados() {
  return (
    <section id="cuidados" className="relative overflow-hidden bg-forest-deep py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal>
          <div className="max-w-[36ch]">
            <span className="eyebrow">Cabelo, barba e detalhes</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.4vw,3.6rem)] leading-[0.98] tracking-[-0.02em]">
              Seu estilo, do seu jeito.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-0 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={Math.min(i, 6) * 45}>
              <div className="group flex items-baseline gap-4 border-b border-border/50 py-5 transition-colors hover:border-brass/50">
                <span className="font-mono text-[0.6rem] tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl leading-tight transition-colors group-hover:text-brass sm:text-2xl">
                  {s.name}
                </span>
                <span className="mx-2 hidden h-px flex-1 bg-border/60 sm:block" />
                <span className="ml-auto flex shrink-0 items-baseline gap-4 sm:ml-0">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.minutes} min
                  </span>
                  <span className="font-display text-lg text-cream sm:text-xl">R$ {s.price}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
            Valores e durações conforme o sistema oficial de agendamento da JEF BARBER'S. Combinações
            de serviços você monta na hora de marcar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 4. prova */

function Resultado() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2rem,5.4vw,3.6rem)] leading-[0.98] tracking-[-0.02em]">
              O resultado fala por si.
            </h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.98rem] leading-relaxed text-cream/75">
              Fotos reais da casa e do dia a dia. Nada de cenário montado — é assim que você vai
              encontrar a JEF quando chegar.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12">
          <Reveal className="col-span-2 lg:col-span-7">
            <img
              src={espelhoImg}
              alt="Barbeiro finalizando corte em frente ao espelho na JEF BARBER'S"
              loading="lazy"
              className="photo-frame h-full w-full object-cover aspect-[16/11]"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5">
            <img
              src={cadeirasImg}
              alt="Cadeiras de barbeiro vintage da JEF BARBER'S"
              loading="lazy"
              className="photo-frame h-full w-full object-cover aspect-[4/5] lg:aspect-auto lg:min-h-full"
            />
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <img
              src={bancadaImg}
              alt="Detalhes das ferramentas de barbearia"
              loading="lazy"
              className="photo-frame h-full w-full object-cover aspect-[4/5] lg:aspect-[5/4]"
            />
          </Reveal>
          <Reveal delay={200} className="col-span-2 lg:col-span-7">
            <img
              src={salaoImg}
              alt="Vista geral do salão climatizado da JEF BARBER'S"
              loading="lazy"
              className="photo-frame h-full w-full object-cover aspect-[16/11]"
            />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-10 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl leading-snug sm:text-3xl">
                Mais cortes, mais detalhes, mais JEF.
              </p>
              <p className="mt-2 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-muted-foreground">
                O dia a dia está no Instagram
              </p>
            </div>
            <a
              href={JEF.instagram}
              target="_blank"
              rel="noopener"
              className={`${btnBase} px-7 py-3.5 border border-brass/60 text-brass hover:bg-brass hover:text-primary-foreground`}
            >
              <Instagram className="h-4 w-4" />
              Ver Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 5. confiança */

function Reputacao() {
  return (
    <section id="avaliacoes" className="relative overflow-hidden bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">Quem conhece, recomenda</span>
              <div className="mt-6 flex items-end gap-4">
                <span className="font-display text-[clamp(4rem,12vw,7rem)] leading-[0.8] text-brass">
                  {JEF.rating}
                </span>
                <div className="pb-2">
                  <Stars />
                  <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {JEF.reviewCount} avaliações
                    <br />
                    no Google
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-10 space-y-4">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[0.95rem] leading-relaxed text-cream/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-border/60">
              {reviews.map((r, i) => (
                <Reveal key={r.name} delay={i * 90}>
                  <blockquote className="py-8 first:pt-0">
                    <p className="font-display text-[1.35rem] leading-snug text-cream sm:text-[1.6rem]">
                      “{r.text}”
                    </p>
                    <footer className="mt-4 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="text-brass">{r.name}</span>
                      <span className="h-px w-6 bg-border" />
                      {r.when}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <a
                href={JEF.maps}
                target="_blank"
                rel="noopener"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brass"
              >
                Ler todas as avaliações no Google
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 6. agendamento */

function Agendar() {
  return (
    <section id="agendar" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-[88rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">Agendamento online</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.4vw,3.6rem)] leading-[0.98] tracking-[-0.02em]">
              Seu horário, do seu jeito.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-7 max-w-[46ch] text-[1.02rem] leading-relaxed text-cream/80">
              A JEF tem agenda online própria: você escolhe o serviço, vê os horários livres e
              confirma em poucos toques — sem esperar resposta, a qualquer hora do dia. Precisa
              remarcar ou tirar uma dúvida antes? O WhatsApp está logo ali.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookButton size="lg">Agendar online</BookButton>
              <WhatsButton>Falar no WhatsApp</WhatsButton>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <dl className="mt-11 grid gap-x-8 gap-y-5 border-t border-border/60 pt-8 sm:grid-cols-2">
              {hours.map((h) => (
                <div key={h.day} className="flex items-baseline justify-between gap-4">
                  <dt className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {h.day}
                  </dt>
                  <dd className="font-display text-lg text-cream">{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
          <div className="relative">
            <img
              src={espelhoImg}
              alt="Atendimento na cadeira de barbeiro da JEF BARBER'S"
              loading="lazy"
              className="photo-frame aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-3 border border-brass/40 bg-background/95 px-5 py-4 backdrop-blur sm:left-8 sm:right-8">
              <Clock className="h-5 w-5 shrink-0 text-brass" />
              <p className="font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.18em] text-cream/85">
                Agenda aberta de segunda a sábado
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 7. onde */

function Onde() {
  return (
    <section id="onde" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Av. Manoel Salvador de Oliveira</span>
              <h2 className="mt-5 font-display text-[clamp(2rem,5.4vw,3.4rem)] leading-[0.98] tracking-[-0.02em]">
                Estamos em Itabirito.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                  <p className="text-[0.98rem] leading-relaxed text-cream/80">{JEF.address}</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                  <a
                    href={`tel:${JEF.phoneRaw}`}
                    className="text-[0.98rem] text-cream/80 transition-colors hover:text-brass"
                  >
                    {JEF.phoneDisplay}
                  </a>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                  <p className="text-[0.98rem] leading-relaxed text-cream/80">
                    {hours.map((h) => `${h.day}: ${h.time}`).join(" · ")}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <a
                href={JEF.maps}
                target="_blank"
                rel="noopener"
                className="group mt-9 inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-brass"
              >
                Traçar rota no Google Maps
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-7">
            <iframe
              src={JEF.embed}
              title="Mapa da JEF BARBER'S em Itabirito"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="photo-frame h-[320px] w-full grayscale-[35%] sm:h-[440px] lg:h-full lg:min-h-[440px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 8. fechamento */

function Fechamento() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={cadeirasImg}
        alt="Cadeira de barbeiro pronta para o próximo cliente"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="veil absolute inset-0" />
      <div className="relative mx-auto max-w-[88rem] px-5 py-28 text-center sm:px-8 sm:py-36">
        <Reveal>
          <span className="eyebrow">A sua barbearia</span>
          <h2 className="mx-auto mt-6 max-w-[20ch] font-display text-[clamp(2.3rem,8vw,5rem)] leading-[0.92] tracking-[-0.03em]">
            Seu próximo corte começa aqui.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-7 max-w-[42ch] text-[1.02rem] leading-relaxed text-cream/80">
            Escolha o serviço, pegue o horário que caber no seu dia e deixe o resto com a gente.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookButton size="lg">Agendar meu horário</BookButton>
            <WhatsButton>Falar no WhatsApp</WhatsButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background pb-24 pt-14 lg:pb-14">
      <div className="mx-auto grid max-w-[88rem] gap-10 px-5 sm:px-8 lg:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl">JEF</span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-brass">
              Barber's
            </span>
          </div>
          <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-muted-foreground">
            {JEF.category} em {JEF.city}, {JEF.state}. {JEF.tagline}
          </p>
        </div>
        <div className="font-mono text-[0.68rem] uppercase leading-loose tracking-[0.16em] text-muted-foreground">
          <p>{JEF.address}</p>
          <a href={`tel:${JEF.phoneRaw}`} className="mt-2 block hover:text-brass">
            {JEF.phoneDisplay}
          </a>
        </div>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] lg:justify-end">
          <a href={JEF.booking} target="_blank" rel="noopener" className="text-brass hover:underline">
            Agendar online
          </a>
          <a href={JEF.whatsapp} target="_blank" rel="noopener" className="hover:text-brass">
            WhatsApp
          </a>
          <a href={JEF.instagram} target="_blank" rel="noopener" className="hover:text-brass">
            Instagram
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[88rem] px-5 sm:px-8">
        <p className="border-t border-border/60 pt-6 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} JEF BARBER'S — Itabirito, MG
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="scroll-smooth">
      <Header />
      <Hero />
      <Casa />
      <Cuidados />
      <Resultado />
      <Reputacao />
      <Agendar />
      <Onde />
      <Fechamento />
      <Footer />
      <MobileBar />
    </main>
  );
}
