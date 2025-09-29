"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import Image from "next/image";
import {
  TrophyIcon,
  RobotIcon,
  StarIcon,
  GearIcon,
  CircuitIcon,
} from "@/components/icons";
import AIRobotAnimation from "@/components/AIRobotAnimation";

/* Inline Target icon để tránh phụ thuộc khác */
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10h-2A8 8 0 1 1 12 4V2zm0 4a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V6zm1 1v3h3a3 3 0 1 0-3-3z" />
    </svg>
  );
}

type Comp = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  theme: string;
  status: string;
  statusColor: string;
  description: string;
  image: string;
  registrationDeadline: string;
  finalDate: string;
  stats: { participants: string; schools: string; prizes: string };
  highlights: string[];
};

export default function CompetitionList() {
  const { t } = useLocale();

  const competitions: Comp[] = [
    {
      id: "myor-2025",
      title: t("comps.2025.title"),
      subtitle: "SMART CITY",
      year: "2025",
      theme: t("comps.2025.theme"),
      status: t("comps.status.closed"),
      statusColor: "bg-green-500",
      description: t("comps.2025.desc"),
      image:
        "https://res.cloudinary.com/eggoeggoeggoeggo/image/upload/v1759129075/2025_ozczjt.jpg",
      registrationDeadline: "27/04/2025",
      finalDate: "14/06/2025",
      stats: {
        participants: t("comps.2025.stats.participants"),
        schools: t("comps.2025.stats.schools"),
        prizes: t("comps.2025.stats.prizes"),
      },
      highlights: [
        t("comps.2025.hl.1"),
        t("comps.2025.hl.2"),
        t("comps.2025.hl.3"),
        t("comps.2025.hl.4"),
      ],
    },
    {
      id: "myor-2024",
      title: t("comps.2024.title"),
      subtitle: "CLIMATE CHANGE",
      year: "2024",
      theme: t("comps.2024.theme"),
      status: t("comps.status.closed"),
      statusColor: "bg-blue-500",
      description: t("comps.2024.desc"),
      image:
        "https://res.cloudinary.com/eggoeggoeggoeggo/image/upload/v1759129075/2024_ra4d26.jpg",
      registrationDeadline: "15/04/2024",
      finalDate: "02/06/2024",
      stats: {
        participants: t("comps.2024.stats.participants"),
        schools: t("comps.2024.stats.schools"),
        prizes: t("comps.2024.stats.prizes"),
      },
      highlights: [
        t("comps.2024.hl.1"),
        t("comps.2024.hl.2"),
        t("comps.2024.hl.3"),
        t("comps.2024.hl.4"),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/15 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
              <div className="h-5 w-5">
                <TrophyIcon />
              </div>
              <span className="text-sm">{t("comps.hero.badge")}</span>
            </div>
            <h1 className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-4xl text-transparent md:text-5xl lg:text-6xl">
              {t("comps.hero.title")}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              {t("comps.hero.lead")}
            </p>

            {/* Quick stats */}
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-border bg-white/70 p-4 backdrop-blur-sm">
                <div className="mb-2 text-2xl">🏆</div>
                <div className="text-primary text-lg">2</div>
                <div className="text-sm text-muted-foreground">
                  {t("comps.hero.stats.competitions")}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white/70 p-4 backdrop-blur-sm">
                <div className="mb-2 text-2xl">👥</div>
                <div className="text-primary text-lg">200+</div>
                <div className="text-sm text-muted-foreground">
                  {t("comps.hero.stats.participants")}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white/70 p-4 backdrop-blur-sm">
                <div className="mb-2 text-2xl">🏫</div>
                <div className="text-primary text-lg">60+</div>
                <div className="text-sm text-muted-foreground">
                  {t("comps.hero.stats.schools")}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white/70 p-4 backdrop-blur-sm">
                <div className="mb-2 text-2xl">🎯</div>
                <div className="text-primary text-lg">60+</div>
                <div className="text-sm text-muted-foreground">
                  {t("comps.hero.stats.prizes")}
                </div>
              </div>
            </div>
          </div>
          <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="container max-w-6xl px-4 mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl mb-4">
                  {t("home.ai.title")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t("home.ai.lead")}
                </p>
              </div>

              <div className="max-w-4xl mx-auto h-[600px]">
                <AIRobotAnimation />
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  {t("home.ai.body")}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Decorations */}
        <div className="absolute left-16 top-16 h-16 w-16 text-primary/10 animate-pulse">
          <StarIcon />
        </div>
        <div className="absolute right-20 top-32 h-12 w-12 text-primary/10 animate-bounce">
          <GearIcon />
        </div>
        <div className="absolute bottom-20 left-24 h-10 w-10 text-primary/10 animate-spin">
          <CircuitIcon />
        </div>
      </section>

      {/* List */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="space-y-8">
            {competitions.map((c) => (
              <div key={c.id} className="group">
                <div className="overflow-hidden rounded-3xl border-2 border-border bg-white transition-all hover:border-primary hover:shadow-2xl">
                  <div className="grid gap-0 md:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden md:aspect-square">
                      <Image
                        src={c.image}
                        alt={c.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute left-4 top-4">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-sm text-white ${c.statusColor}`}
                        >
                          {c.status}
                        </span>
                      </div>
                      <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
                        <span className="text-sm text-primary">{c.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <div className="space-y-6">
                        <div>
                          <h2 className="mb-2 text-2xl md:text-3xl transition-colors group-hover:text-primary">
                            {c.title}
                          </h2>
                          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                            <div className="h-4 w-4">
                              <TargetIcon />
                            </div>
                            <span>
                              {t("comps.topic")}: {c.subtitle}
                            </span>
                          </div>
                        </div>

                        <p className="leading-relaxed text-muted-foreground">
                          {c.description}
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 gap-2">
                          {c.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 border-t border-orange-100 py-4">
                          <div className="text-center">
                            <div className="text-primary">📅</div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              {t("comps.stat.final")}
                            </div>
                            <div className="text-sm">{c.finalDate}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-primary">👥</div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              {t("comps.stat.participants")}
                            </div>
                            <div className="text-sm">
                              {c.stats.participants}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-primary">🏆</div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              {t("comps.stat.prizes")}
                            </div>
                            <div className="text-sm">{c.stats.prizes}</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <a
                          href={`/cuoc-thi/${c.id}`}
                          className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
                        >
                          {c.status === t("comps.status.open")
                            ? t("comps.cta.open")
                            : t("comps.cta.view")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-gradient-to-r from-primary/10 via-orange-100 to-primary/10 p-8 md:p-12">
            <div className="absolute left-8 top-4 h-8 w-8 text-primary/20 animate-pulse">
              <StarIcon />
            </div>
            <div className="absolute right-12 top-8 h-6 w-6 text-primary/20 animate-bounce">
              <GearIcon />
            </div>
            <div className="absolute bottom-6 left-16 h-10 w-10 text-primary/20 animate-spin">
              <CircuitIcon />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="mb-4 inline-flex items-center gap-2">
                <div className="h-8 w-8 text-primary">
                  <RobotIcon />
                </div>
                <span className="text-2xl">🎉</span>
              </div>
              <h2 className="text-3xl md:text-4xl">{t("comps.cta2.title")}</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {t("comps.cta2.lead")}
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="/tin-tuc/"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-primary-foreground shadow-lg transition hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
                >
                  <span>{t("comps.cta2.news")}</span>
                </a>
                <a
                  href="mailto:info@myorrobot.vn"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-8 py-4 text-primary transition hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                >
                  <span>{t("comps.cta2.contact")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
