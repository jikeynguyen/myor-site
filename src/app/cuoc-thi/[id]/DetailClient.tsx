"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  RobotIcon,
  GearIcon,
  CircuitIcon,
  TrophyIcon,
  UsersIcon,
  AwardIcon,
  BookIcon,
  TargetIcon,
  DocumentIcon,
  StarIcon,
} from "@/components/icons";

type Category = {
  title: string;
  subtitle: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
};
type TimelineItem = {
  date: string;
  event: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
type Registration = {
  participants: string;
  schools: string;
  infoLink: string;
  registerLink: string;
};
type Contact = { name: string; phone: string };
type Stats = {
  participants: string;
  schools: string;
  prizes: string;
  provinces: string;
};
type Winner = { title: string; names: string; school: string; medal: string };
type Competition = {
  title: string;
  subtitle: string;
  theme: string;
  year: string;
  image: string;
  description: string;
  categories: Category[];
  timeline: TimelineItem[];
  registration: Registration;
  contact: Contact;
  stats: Stats;
  winners?: Winner[];
};

export default function DetailClient({
  id,
}: {
  id: "myor-2025" | "myor-2024";
}) {
  const { t } = useLocale();
  const competitionId = id;

  const competitions: Record<"myor-2025" | "myor-2024", Competition> = {
    "myor-2025": {
      title: t("detail.2025.title"),
      subtitle: t("detail.2025.subtitle"),
      theme: t("detail.2025.theme"),
      year: "2025",
      image:
        "https://res.cloudinary.com/eggoeggoeggoeggo/image/upload/v1759129075/2025_ozczjt.jpg",
      description: t("detail.2025.desc"),
      categories: [
        {
          title: t("detail.2025.catA.title"),
          subtitle: t("detail.2025.catA.subtitle"),
          description: t("detail.2025.catA.desc"),
          Icon: RobotIcon,
          color: "from-blue-400 to-blue-600",
        },
        {
          title: t("detail.2025.catB.title"),
          subtitle: t("detail.2025.catB.subtitle"),
          description: t("detail.2025.catB.desc"),
          Icon: CircuitIcon,
          color: "from-green-400 to-green-600",
        },
        {
          title: t("detail.2025.catC.title"),
          subtitle: t("detail.2025.catC.subtitle"),
          description: t("detail.2025.catC.desc"),
          Icon: GearIcon,
          color: "from-purple-400 to-purple-600",
        },
      ],
      timeline: [
        {
          date: "27/04/2025",
          event: t("detail.common.deadline"),
          description: t("detail.common.deadline.desc"),
          Icon: DocumentIcon,
        },
        {
          date: "01/04–26/05/2025",
          event: t("detail.common.semifinal"),
          description: t("detail.2025.semi.desc"),
          Icon: UsersIcon,
        },
        {
          date: "14/06/2025",
          event: t("detail.common.final"),
          description: t("detail.common.final.desc"),
          Icon: TrophyIcon,
        },
      ],
      registration: {
        participants: t("detail.2025.reg.participants"),
        schools: t("detail.2025.reg.schools"),
        infoLink: "https://bit.ly/thongtinMYOR2025",
        registerLink: "https://bit.ly/dangkyMYOR2025",
      },
      contact: { name: "Đ/c Hồ Thị Hồng Yến", phone: "0339.070.255" },
      stats: {
        participants: t("detail.2025.stats.participants"),
        schools: t("detail.2025.stats.schools"),
        prizes: t("detail.2025.stats.prizes"),
        provinces: t("detail.2025.stats.provinces"),
      },
    },
    "myor-2024": {
      title: t("detail.2024.title"),
      subtitle: t("detail.2024.subtitle"),
      theme: t("detail.2024.theme"),
      year: "2024",
      image:
        "https://res.cloudinary.com/eggoeggoeggoeggo/image/upload/v1759129075/2024_ra4d26.jpg",
      description: t("detail.2024.desc"),
      categories: [
        {
          title: t("detail.2024.catA.title"),
          subtitle: t("detail.2024.catA.subtitle"),
          description: t("detail.2024.catA.desc"),
          Icon: RobotIcon,
          color: "from-blue-400 to-blue-600",
        },
        {
          title: t("detail.2024.catB.title"),
          subtitle: t("detail.2024.catB.subtitle"),
          description: t("detail.2024.catB.desc"),
          Icon: CircuitIcon,
          color: "from-green-400 to-green-600",
        },
        {
          title: t("detail.2024.catC.title"),
          subtitle: t("detail.2024.catC.subtitle"),
          description: t("detail.2024.catC.desc"),
          Icon: GearIcon,
          color: "from-purple-400 to-purple-600",
        },
        {
          title: t("detail.2024.catD.title"),
          subtitle: t("detail.2024.catD.subtitle"),
          description: t("detail.2024.catD.desc"),
          Icon: TargetIcon,
          color: "from-orange-400 to-orange-600",
        },
      ],
      timeline: [
        {
          date: "15/04/2024",
          event: t("detail.common.deadline"),
          description: t("detail.common.deadline.desc"),
          Icon: DocumentIcon,
        },
        {
          date: "01/04–26/05/2024",
          event: t("detail.common.semifinal.prov"),
          description: t("detail.2024.semi.prov.desc"),
          Icon: UsersIcon,
        },
        {
          date: "20–28/04/2024",
          event: t("detail.2024.semi.hcm"),
          description: t("detail.2024.semi.hcm.desc"),
          Icon: CircuitIcon,
        },
        {
          date: "02/06/2024",
          event: t("detail.common.final"),
          description: t("detail.common.final.desc"),
          Icon: TrophyIcon,
        },
      ],
      winners: [
        {
          title: t("detail.2024.w1.title"),
          names: "Trần Lê Na, Hồ Sỹ Dũng",
          school: "TH Long Bình Tân, Đồng Nai",
          medal: "🥇",
        },
        {
          title: t("detail.2024.w2.title"),
          names: "Huỳnh Lê Minh, Trần Quốc Duy",
          school: "TH-THCS-THPT Ngô Thời Nhiệm",
          medal: "🥇",
        },
        {
          title: t("detail.2024.w3.title"),
          names: "Lê Phúc Khang Gia, Nguyễn Đình Quý",
          school: "THPT Nguyễn Hữu Huân",
          medal: "🥇",
        },
      ],
      registration: {
        participants: t("detail.2024.reg.participants"),
        schools: t("detail.2024.reg.schools"),
        infoLink: "https://bit.ly/thongtinMYOR2024",
        registerLink: "https://bit.ly/dangkyMYOR2024",
      },
      contact: { name: "Đ/c Hồ Thị Hồng Yến", phone: "0339.070.255" },
      stats: {
        participants: t("detail.2024.stats.participants"),
        schools: t("detail.2024.stats.schools"),
        prizes: t("detail.2024.stats.prizes"),
        provinces: t("detail.2024.stats.provinces"),
      },
    },
  };

  const c = competitions[competitionId];

  if (!c) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="space-y-4 text-center">
          <div className="mx-auto h-16 w-16 text-primary/50">
            <RobotIcon />
          </div>
          <h2 className="text-2xl text-muted-foreground">
            {t("detail.notfound.title")}
          </h2>
          <p className="text-muted-foreground">{t("detail.notfound.desc")}</p>
          <Link
            href="/cuoc-thi/"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white transition hover:bg-primary/90"
          >
            ← {t("detail.notfound.back")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-background to-orange-100 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                <span className="h-5 w-5">
                  <TrophyIcon />
                </span>
                <span className="text-sm">
                  MYOR {c.year} - {c.theme} 🌍
                </span>
              </div>
              <h1 className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-3xl tracking-tight text-transparent md:text-4xl lg:text-5xl">
                {c.title}
              </h1>
              <div className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-primary to-orange-500 px-4 py-2 text-white">
                <span className="h-5 w-5">
                  <TargetIcon />
                </span>
                <span>
                  {t("detail.topic")}: “{c.subtitle}”
                </span>
              </div>
              <p className="max-w-lg text-lg text-muted-foreground md:text-xl">
                {c.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 text-primary">
                    <UsersIcon />
                  </span>
                  <span>{c.stats.participants}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 text-primary">
                    <BookIcon />
                  </span>
                  <span>{c.stats.schools}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 text-primary">
                    <AwardIcon />
                  </span>
                  <span>{c.stats.prizes}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 text-primary">
                    <TargetIcon />
                  </span>
                  <span>{c.stats.provinces}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-primary/20 shadow-2xl transition hover:scale-105">
                <Image
                  src={c.image}
                  alt={`${c.title} - ${c.subtitle}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white animate-pulse">
                <StarIcon />
              </div>
              <div className="absolute -bottom-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white animate-bounce">
                <GearIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl md:text-4xl">
              {t("detail.cats.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("detail.cats.lead")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {c.categories.map(
              ({ title, subtitle, description, Icon, color }, i) => (
                <div
                  key={i}
                  className="group rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50 p-8 transition hover:scale-105 hover:border-primary hover:shadow-xl"
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg transition group-hover:rotate-6`}
                  >
                    <Icon />
                  </div>
                  <h3 className="mb-2 text-xl transition group-hover:text-primary">
                    {title}
                  </h3>
                  <h4 className="mb-3 text-primary">{subtitle}</h4>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              )
            )}
          </div>

          {/* Registration */}
          <div className="mt-12 rounded-3xl border-2 border-primary/20 bg-gradient-to-r from-primary/10 via-orange-100 to-primary/10 p-8">
            <div className="space-y-4 text-center">
              <h3 className="text-xl text-primary">
                📝 {t("detail.reg.title")}
              </h3>
              <p className="text-muted-foreground">{t("detail.reg.lead")}</p>
              <div className="grid gap-6 text-left md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="text-primary">👥 {t("detail.reg.form")}</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• {c.registration.participants}</li>
                    <li>• {c.registration.schools}</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-primary">🔗 {t("detail.reg.links")}</h4>
                  <div className="space-y-2">
                    <a
                      href={c.registration.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-primary hover:underline"
                    >
                      📄 {t("detail.reg.info")}
                    </a>
                    {competitionId === "myor-2025" && (
                      <a
                        href={c.registration.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-primary hover:underline"
                      >
                        📌 {t("detail.reg.apply")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl md:text-4xl">
              🗓️ {t("detail.timeline.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("detail.timeline.lead")}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 hidden w-0.5 bg-primary/30 md:block" />
            <div className="space-y-8">
              {c.timeline.map(({ date, event, description, Icon }, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg">
                    <Icon />
                  </div>
                  <div className="flex-1 rounded-2xl border-2 border-orange-200 bg-white p-6 transition-colors hover:border-primary hover:shadow-lg">
                    <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg text-primary">{event}</h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                        {date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Winners (2024) */}
      {competitionId === "myor-2024" && c.winners && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl md:text-4xl">
                {t("detail.2024.w.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {t("detail.2024.w.lead")}
              </p>
            </div>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {c.winners.map((w, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border-2 border-orange-200 bg-white transition hover:scale-105 hover:shadow-xl"
                >
                  <div className="absolute right-4 top-4 text-3xl animate-bounce">
                    {w.medal}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg text-primary">{w.title}</h3>
                    <p className="mb-2 font-medium">{w.names}</p>
                    <p className="text-sm text-muted-foreground">{w.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact + CTA */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16 md:py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-orange-200 bg-white p-8 transition hover:shadow-xl">
            <h3 className="mb-6 flex items-center text-xl text-primary">
              <span className="mr-2 inline-block h-6 w-6">
                <DocumentIcon />
              </span>
              {t("detail.contact.title")}
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span>👤</span>
                </div>
                <div>
                  <div className="text-muted-foreground">
                    {t("detail.contact.person")}
                  </div>
                  <div>{c.contact.name}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span>📱</span>
                </div>
                <div>
                  <div className="text-muted-foreground">
                    {t("detail.contact.phone")}
                  </div>
                  <div>{c.contact.phone}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-orange-500 p-8 text-white">
            <div className="absolute right-4 top-4 h-12 w-12 text-white/20 animate-pulse">
              <RobotIcon />
            </div>
            <div className="absolute bottom-4 left-4 h-8 w-8 text-white/20 animate-bounce">
              <GearIcon />
            </div>

            <div className="relative z-10">
              <h3 className="mb-4 text-xl">
                🚀 {t("detail.cta.title")} MYOR {c.year}?
              </h3>
              <p className="mb-6 text-white/90">
                {competitionId === "myor-2025"
                  ? t("detail.cta.2025")
                  : t("detail.cta.2024")}
              </p>
              <div className="space-y-3">
                <a
                  href={c.registration.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-2xl bg-white px-6 py-3 text-center text-primary transition hover:bg-gray-100"
                >
                  📋 {t("detail.reg.info")}
                </a>
                {competitionId === "myor-2025" && (
                  <a
                    href={c.registration.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-2xl border-2 border-white px-6 py-3 text-center transition hover:bg-white hover:text-primary"
                  >
                    ✍️ {t("detail.reg.apply")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
