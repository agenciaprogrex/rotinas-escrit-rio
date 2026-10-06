import { CourseLaptop } from "@/components/course-laptop";
import { OfferCountdown } from "@/components/offer-countdown";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  BookOpenCheck,
  CircleCheck,
  ShieldCheck,
  Target,
  MessageCircleQuestion,
  BriefcaseBusiness,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { bonuses, checkoutUrl, discountPercent, faqs, modules } from "@/lib/course";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Contador 360 | Rotinas de um escritório contábil na prática" },
      {
        name: "description",
        content:
          "Formação prática em abertura de empresas, departamento pessoal, escrita fiscal, eSocial e obrigações acessórias. Acesso vitalício, certificado de 100 horas e cinco bônus.",
      },
      { property: "og:title", content: "Contador 360 | Prática contábil passo a passo" },
      {
        property: "og:description",
        content:
          "Curso completo com acesso vitalício. 12x de R$ 20,37 no cartão ou R$ 197,00 à vista.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

const navigation = [
  ["Benefícios", "#beneficios"],
  ["Conteúdo", "#conteudo"],
  ["Bônus", "#bonus"],
  ["Dúvidas", "#faq"],
];
const features = [
  "Curso completo Contador 360",
  "Acesso vitalício às aulas",
  "Certificado de 100 horas",
  "Cinco bônus incluídos",
  "Suporte via WhatsApp e e-mail",
  "Conteúdo atualizado",
  "Prática em software",
  "Acesso no computador, celular ou tablet",
];

function BuyButton({
  label = "Quero me matricular",
  light = false,
  href = checkoutUrl,
  animated = false,
}: {
  label?: string;
  light?: boolean;
  href?: string;
  animated?: boolean;
}) {
  return (
    <Button
      asChild
      variant={light ? "secondary" : "conversion"}
      size="xl"
      className={`h-auto min-h-13 whitespace-normal py-3 text-center ${animated ? "cta-nudge" : ""}`}
    >
      <a href={href}>
        {label}
        <ArrowDown />
      </a>
    </Button>
  );
}
function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="text-sm font-extrabold uppercase text-primary">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-muted-foreground">{text}</p>}
    </div>
  );
}
function SalesPage() {
  return (
    <main className="overflow-hidden bg-background">
      <div className="bg-[#c9ed59] px-4 py-4 text-center text-sm font-extrabold leading-6 text-slate-950 sm:text-base">
        Exclusivo para Estudantes, recém-formados que querem aprender a Prática de um Escritório
        Contábil.
      </div>
      <header className="relative z-40 border-b border-border/80 bg-slate-950 text-white">
        <div className="section-shell flex flex-col items-center justify-center gap-5 py-6">
          <img
            src="/course/logo-contador360.png"
            alt="Contador 360"
            width={768}
            height={172}
            className="h-auto w-64 max-w-full sm:w-80"
            fetchPriority="high"
          />
          <nav
            className="hidden items-center gap-7 text-sm font-semibold text-white/80 lg:flex"
            aria-label="Navegação principal"
          >
            {navigation.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative bg-sky-soft pt-6 lg:pt-10">
        <div className="section-shell relative mx-auto max-w-4xl pb-8 text-center">
          <div className="fade-up py-8">
            <h1 className="text-4xl leading-[1.12] font-extrabold sm:text-5xl lg:text-6xl">
              Saia da teoria e <span className="text-primary-strong">aprenda na prática</span> a
              rotina de um escritório contábil, mesmo que você ainda{" "}
              <span className="text-primary-strong">não tenha experiência.</span>
            </h1>
            <p className="mt-6 text-lg font-semibold leading-8 text-ink-soft sm:text-xl">
              <span className="font-extrabold text-primary-strong">Domine em 4 semanas</span> as
              principais tarefas dos departamentos Contábil, Fiscal, Pessoal e Legalização.
            </p>
            <div className="mt-9">
              <BuyButton
                label="Quero aprender a prática contábil"
                href="#depoimentos-videos"
                animated
              />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">100% online • Acesso imediato.</p>
          </div>
        </div>
      </section>
      <section id="depoimentos" className="bg-sky-soft py-10 lg:py-12">
        <div className="section-shell">
          <SectionTitle
            title="Veja a transformação que o curso gerou em nossos alunos"
            text="Primeiro emprego, novos clientes e o próprio escritório: veja os relatos compartilhados pelos alunos."
          />
          <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-8">
            {[
              ["Um novo escritório", "Relato de aluno que abriu seu próprio escritório", "1"],
              ["Dagmar", "Dagmar conta como conseguiu seu primeiro emprego na área", "2"],
              ["Fabiana", "Fabiana relata a abertura do seu escritório", "3"],

              ["Alex", "Alex celebra o primeiro contrato com um cliente", "5"],
            ].map(([name, description, imageNumber]) => (
              <figure key={name} className="w-full max-w-[260px]">
                <div className="phone-mockup">
                  <div className="phone-camera" aria-hidden="true" />
                  <div className="phone-screen">
                    <img
                      src={`/course/aluno-${imageNumber}.png`}
                      alt={description}
                      width={600}
                      height={1024}
                      loading="lazy"
                    />
                  </div>
                  <div className="phone-home" aria-hidden="true" />
                </div>
                <figcaption className="mt-5 text-center">
                  <strong className="text-base">{name}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section id="depoimentos-videos" className="py-10 lg:py-12">
        <div className="section-shell">
          <SectionTitle title="Ouça os resultados de nossos alunos." />
          <div className="mt-7 grid gap-8 md:grid-cols-2">
            {[
              {
                id: "6yEKyYVSKbQ",
                name: "Tatiane",
                title: "Tatiane falou: Depois que fiz o curso me tornei uma contadora de verdade",
              },
              {
                id: "e3OxxdYPS1c",
                name: "Jackson",
                title: "Método simplificado ajudou muito no início da minha carreira.",
              },
              {
                id: "FFc8iVyqvtc",
                name: "Ademar",
                title: "Eu nem atuava na área, depois que comecei o curso consegui meus clientes.",
              },
              {
                id: "tLyMwVtVM7c",
                name: "Mário",
                title:
                  "Esse curso é fantástico, ele mudou a minha vida e hoje tenho meu escritório.",
              },
            ].map((video) => (
              <figure key={video.id} className="flex flex-col">
                <div className="overflow-hidden rounded-2xl border border-foreground/20 bg-foreground p-2 shadow-[var(--shadow-card)]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={`Depoimento de ${video.name}: ${video.title}`}
                    width="820"
                    height="615"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="aspect-video h-auto w-full rounded-xl border-0"
                  />
                </div>
                <figcaption className="mt-6 text-center font-display text-xl font-extrabold leading-8 text-primary-strong sm:text-2xl">
                  “{video.title}”
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border py-7">
        <div className="course-stats section-shell grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:divide-x md:divide-border">
          {[
            ["100 horas", "no certificado"],
            ["11 módulos", "na grade do curso"],
            ["Vitalício", "seu acesso"],
            ["7 dias", "de garantia"],
          ].map(([value, label]) => (
            <div key={label}>
              <strong className="font-display text-2xl text-primary">{value}</strong>
              <span className="mt-1 block text-xs font-semibold text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="py-10 lg:py-12">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Da teoria para a prática"
            title="Transforme conhecimento em segurança para atuar"
            text="A falta de prática pode dificultar o primeiro estágio, um novo emprego ou a abertura do próprio escritório. O Contador 360 mostra os procedimentos que fazem parte do dia a dia da profissão."
          />
          <div className="mt-7 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {[
              [
                MessageCircleQuestion,
                "Aprenda desde o começo",
                "Acompanhe as rotinas passo a passo, mesmo que ainda não tenha experiência em escritório.",
              ],
              [
                Target,
                "Entenda os procedimentos",
                "Veja abertura e regularização de empresas, departamento pessoal, escrita fiscal e obrigações acessórias.",
              ],
              [
                BriefcaseBusiness,
                "Prepare sua próxima etapa",
                "Desenvolva repertório para buscar oportunidades na área ou organizar os serviços do seu escritório.",
              ],
            ].map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof Target;
              return (
                <article key={String(title)} className="bg-card p-8">
                  <span className="grid size-12 place-items-center rounded-md bg-secondary text-primary">
                    <ItemIcon />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{String(title)}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{String(text)}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["100% online", "Estude onde e quando quiser, no computador, smartphone ou tablet."],
              ["Conteúdo atualizado", "Continue aprendendo com as atualizações do treinamento."],
              ["Suporte para dúvidas", "Receba orientação via WhatsApp e e-mail durante o curso."],
              [
                "Prática em software",
                "Acompanhe a execução dos procedimentos para melhorar seu aprendizado.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-border p-6">
                <CircleCheck className="text-primary" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <BuyButton label="QUERO APRENDER TUDO ISSO" href="#oferta" />
          </div>
        </div>
      </section>

      <section id="conteudo" className="bg-sky-soft py-10 lg:py-12">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Conteúdo do Contador 360"
            title="As rotinas do escritório, em uma formação completa"
            text="Explore os módulos e veja os procedimentos apresentados na grade do curso."
          />
          <CourseLaptop />
          <div className="mx-auto mt-7 max-w-4xl rounded-xl border border-border bg-card px-5 sm:px-8">
            <Accordion type="multiple">
              {modules.map((module, index) => (
                <AccordionItem key={module.title} value={`module-${index}`}>
                  <AccordionTrigger className="py-6 text-left text-base font-bold hover:no-underline">
                    <span className="flex items-center gap-4">
                      <span className="font-display text-sm text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {module.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson}
                          className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                        >
                          <BookOpenCheck className="mt-1 size-4 shrink-0 text-primary" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-6 text-center">
            <BuyButton label="Quero acessar o curso completo" href="#oferta" />
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Quem vai guiar você"
            title="Experiência profissional compartilhada na prática"
          />
          <div className="mt-7 grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/course/professor.png"
              alt="Professor Francisco Lira, do Contador 360"
              width={800}
              height={457}
              loading="lazy"
              className="w-full rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-bold">Francisco Lira</h3>
              <p className="mt-2 font-semibold text-primary">
                Contador • Especialista em contabilidade e legislação tributária
              </p>
              <p className="mt-5 leading-8 text-muted-foreground">
                Mais de 25 anos de experiência em empresas comerciais, industriais e prestadoras de
                serviços. Sócio-diretor da Gestão Global Contábil e consultor tributário da Martão
                Rodrigues Advogados e da MR Empresarial.
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">
                O treinamento nasceu dos pedidos de estudantes e profissionais que precisavam
                aprender como executar os procedimentos de um escritório contábil.
              </p>
            </div>
          </div>
          <div className="mt-8 grid items-center gap-10 border-t border-border pt-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase text-primary">
                Parceria Alonso Freire • 2026
              </p>
              <h3 className="mt-3 text-2xl font-bold">Talita Alonso e Renata Freire</h3>
              <p className="mt-5 leading-8 text-muted-foreground">
                <strong className="text-foreground">Talita Alonso</strong> é formada em Ciências
                Contábeis desde 2014 e tem mais de 15 anos de experiência em Departamento Pessoal,
                com formação em Direito do Trabalho e MBA em Administração de Pessoal.
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">
                <strong className="text-foreground">Renata Freire</strong> é formada em Recursos
                Humanos desde 2016, atua em Departamento Pessoal desde 2014 e tem pós-graduação em
                Direito do Trabalho.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                As profissionais participam das gravações e do suporte dos conteúdos de Departamento
                Pessoal no novo formato do curso.
              </p>
            </div>
            <img
              src="/course/professoras.png"
              alt="Talita Alonso e Renata Freire, parceiras no Departamento Pessoal"
              width={800}
              height={457}
              loading="lazy"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <section id="bonus" className="border-y border-border bg-sky-soft py-10 lg:py-12">
        <div className="section-shell">
          <SectionTitle
            title="Mais ferramentas para sua prática e sua carreira"
            text="Além do curso completo, você recebe os mesmos cinco bônus apresentados no Contador 360. Liberação após os 7 dias de garantia."
          />
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((bonus, index) => (
              <article
                key={bonus.image}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="relative bg-secondary/40 p-5">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    BÔNUS {String(index + 1).padStart(2, "0")}
                  </span>
                  <img
                    src={`/course/${bonus.image}`}
                    alt={`Mockup original: ${bonus.title}`}
                    width={660}
                    height={911}
                    loading="lazy"
                    className="mx-auto h-72 w-full object-contain sm:h-80"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{bonus.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {bonus.text}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
                    <span className="text-sm text-muted-foreground">
                      De <s>R$ {bonus.value},00</s>
                    </span>
                    <strong className="text-lg text-success">Por R$ 0</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-2xl rounded-lg border border-success/20 bg-success-soft p-6 text-center">
            <p className="font-bold">R$ 407,00 em bônus incluídos na sua matrícula</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Curso de IRPF, comunidade e três guias para acompanhar seus próximos passos.
            </p>
          </div>
        </div>
      </section>

      <section id="oferta" className="bg-sky-soft py-10 lg:py-12">
        <div className="section-shell">
          <SectionTitle title="Comece agora com acesso vitalício" />
          <div className="mx-auto mt-7 grid max-w-5xl overflow-hidden rounded-xl border border-primary/20 bg-card shadow-[var(--shadow-card)] lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-7 sm:p-10">
              <h3 className="text-xl font-bold">Tudo o que você recebe</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-semibold">
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-md bg-success-soft p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="size-6 shrink-0 text-success" />
                  <div>
                    <p className="font-bold">Garantia incondicional de 7 dias</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Conheça o treinamento e decida com tranquilidade. Dentro do prazo, você pode
                      solicitar a devolução integral do investimento.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-xs leading-6 text-muted-foreground">
                Os bônus são liberados após os 7 dias de garantia.
              </p>
            </div>
            <div className="flex flex-col justify-center bg-primary p-7 text-primary-foreground sm:p-10">
              <OfferCountdown />
              <p className="text-sm font-bold uppercase opacity-80">
                Oferta especial • Curso + 5 bônus
              </p>
              <p className="mt-5 text-sm opacity-80">De</p>
              <s className="mt-1 font-display text-4xl font-extrabold decoration-2 opacity-65 sm:text-5xl">
                R$ 697,00
              </s>
              <div className="mt-6">
                <p className="mb-3 font-display text-2xl font-extrabold leading-tight text-[#a7f3b9] sm:text-3xl">
                  ECONOMIZE HOJE R$ 500,00
                </p>
                <div className="flex items-center justify-between gap-3 text-xs font-bold">
                  <span>71,74% de desconto</span>
                </div>
                <div
                  role="progressbar"
                  aria-label="Percentual de desconto no pagamento à vista"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Number(discountPercent.toFixed(2))}
                  className="mt-3 h-3 overflow-hidden rounded-full bg-primary-foreground/20"
                >
                  <div
                    className="h-full rounded-full bg-[#25D366]"
                    style={{ width: `${discountPercent}%` }}
                  />
                </div>
              </div>
              <p className="mt-7 text-sm font-semibold">Por apenas</p>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
                <span className="text-lg font-bold">12x de</span>
                <strong className="font-display text-5xl font-extrabold">R$ 20,37</strong>
              </div>
              <p className="mt-2 text-sm opacity-90">no cartão de crédito</p>
              <p className="mt-4 text-xl font-semibold">
                ou <strong>R$ 197,00</strong> à vista
              </p>
              <div className="mt-8 grid">
                <BuyButton label="Garantir minha matrícula" light />
              </div>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs opacity-80">
                <ShieldCheck className="size-4" />
                Pagamento seguro pela Hotmart, a maior plataforma da América Latina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-10 lg:py-12">
        <div className="section-shell grid gap-7 lg:grid-cols-[.7fr_1.3fr] lg:gap-12">
          <div>
            <p className="text-sm font-extrabold uppercase text-primary">Perguntas frequentes</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Ainda ficou alguma dúvida?</h2>
          </div>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map(([question, answer], index) => (
              <AccordionItem key={question} value={`faq-${index}`}>
                <AccordionTrigger className="py-6 text-base font-bold hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 leading-7 text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="bg-primary py-10 text-primary-foreground">
        <div className="section-shell flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold">Sua prática contábil começa aqui.</h2>
            <p className="mt-3 opacity-80">
              Curso completo, cinco bônus e acesso para a vida toda.
            </p>
          </div>
          <BuyButton label="Quero começar agora" light />
        </div>
      </section>
      <footer className="bg-foreground py-7 text-background">
        <p className="section-shell text-center text-sm font-semibold">
          Direitos reservados: <strong>Rotinas de escritório contábil 2026</strong> - Contador 360
        </p>
      </footer>
      <a
        href="https://api.whatsapp.com/send/?phone=65974002235&text=Ol%C3%A1.%20Vi%20a%20p%C3%A1gina%20do%20curso%20de%20rotinas%20de%20escrit%C3%B3rio%20cont%C3%A1bil.%20Tenho%20interesse%20em%20comprar!&type=phone_number&app_absent=0&source_url=&context=&icebreaker=Ol%C3%A1.%20Vi%20a%20p%C3%A1gina%20do%20curso%20de%20rotinas%20de%20escrit%C3%B3rio%20cont%C3%A1bil.%20Tenho%20interesse%20em%20comprar!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp sobre o curso"
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-success"
      >
        <svg viewBox="0 0 24 24" className="size-8" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.47 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.95 11.95 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.95a11.87 11.87 0 0 0-3.49-8.41zM12.06 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.03c0 5.47-4.45 9.92-9.97 9.85zM17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.11 3.23 5.11 4.53.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.73 2.02-1.44.25-.72.25-1.33.17-1.45-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
    </main>
  );
}
