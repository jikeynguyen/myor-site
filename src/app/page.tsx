"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import AnimatedRobot from "@/components/animatedrobot";
import CircleTrack from "@/components/simplebottrack";

/* ---------- Minimal inline icons (no external deps) ---------- */
function RobotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11 2h2v3h-2zM7 7a5 5 0 0 1 10 0h2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h2zm-4 9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zM8 11h2v2H8zm6 0h2v2h-2z" />
    </svg>
  );
}
function GearIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11 2h2l.6 2.4 2.1.9 2-1.2 1.4 1.4-1.2 2 1 2.1L22 11v2l-2.4.6-1 2.1 1.2 2-1.4 1.4-2-1.2-2.1 1L13 22h-2l-.6-2.4-2.1-1-2 1.2L4 18.4l1.2-2-1-2.1L2 13v-2l2.4-.6 1-2.1-1.2-2L5.6 4l2 1.2 2.1-1L11 2zm1 6a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8z" />
    </svg>
  );
}
function CircuitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM15 12a3 3 0 1 1 0 6h-1v-2h1a1 1 0 1 0 0-2h-1v-2h1z" />
    </svg>
  );
}
function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 2.9 6.9L22 10l-5 4.3L18.2 22 12 18.6 5.8 22 7 14.3 2 10l7.1-1.1z" />
    </svg>
  );
}
function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5 3h14v2h2v3a5 5 0 0 1-5 5h-1a5 5 0 0 1-4 2 5 5 0 0 1-4-2H6a5 5 0 0 1-5-5V5h2V3zm0 4v1a3 3 0 0 0 3 3h1V7H5zm14 0h-4v4h1a3 3 0 0 0 3-3V7zM8 20h8v2H8z" />
    </svg>
  );
}

/* ---------- ImageWithFallback (inline) ---------- */
const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);
  const handleError = () => setDidError(true);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-[color:var(--border)]/20 text-center ${
        className ?? ""
      }`}
      style={style}
    >
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          {...rest}
          data-original-url={src}
          width={100}
          height={100}
        />
      </div>
    </div>
  ) : (
    <Image
      src={typeof src === "string" ? src : ""}
      alt={alt || "Image"}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
      width={100}
      height={100}
    />
  );
}

/* ---------- Page ---------- */
export default function Page() {
  const { t } = useLocale();

  const videos = [
    {
      title: t("home.video.1.title"),
      description: t("home.video.1.desc"),
      thumbnail:
        "https://images.unsplash.com/photo-1611581719398-08fe2eb020c7?q=80&w=1080&auto=format&fit=crop",
      duration: "12:45",
    },
    {
      title: t("home.video.2.title"),
      description: t("home.video.2.desc"),
      thumbnail:
        "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=1080&auto=format&fit=crop",
      duration: "8:30",
    },
    {
      title: t("home.video.3.title"),
      description: t("home.video.3.desc"),
      thumbnail:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1080&auto=format&fit=crop",
      duration: "15:20",
    },
  ];

  return (
    <main id="main" className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/15 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Hero Section with Circle Track */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 text-primary animate-bounce">
                <div className="h-5 w-5">
                  <RobotIcon />
                </div>
                <span className="text-sm">{t("home.badge")}</span>
              </div>
              <h1 className="bg-gradient-to-r from-primary to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                {t("home.title")}
              </h1>
              <p className="max-w-lg text-lg text-muted-foreground">
                {t("home.lead")}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/cuoc-thi/"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-primary-foreground shadow-lg transition hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
                >
                  <span>{t("home.cta.primary")}</span>
                </Link>
                <Link
                  href="/cuoc-thi/#dang-ky"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-6 py-3 text-primary transition hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                >
                  <span>{t("home.cta.secondary")}</span>
                </Link>
              </div>
            </div>

            {/* hình minh họa giữ nguyên */}
            <div className="relative border-2 border-border/50 rounded-3xl bg-gradient-to-br from-background to-primary/5 p-4 shadow-lg">
              <CircleTrack />
              <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                <StarIcon />
              </div>
              <div className="absolute -bottom-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-primary-foreground animate-bounce">
                <GearIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="bg-gradient-to-r from-primary/8 to-primary/15 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center space-x-2">
              <div className="h-8 w-8 text-primary">
                <PlayIcon />
              </div>
              <h2 className="text-3xl md:text-4xl">{t("home.video.title")}</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("home.video.lead")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {videos.map((v, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-3xl border-2 border-border bg-background transition hover:scale-105 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={v.thumbnail}
                    alt={v.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-110">
                      <PlayIcon />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-sm text-white">
                    {v.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 transition group-hover:text-primary">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl">{t("home.hl.title")}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("home.hl.lead")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/the-le/"
              className="group rounded-3xl border-2 border-border bg-gradient-to-br from-background to-primary/5 p-8 transition hover:scale-105 hover:shadow-xl hover:border-primary"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary text-primary-foreground shadow-lg transition group-hover:rotate-3">
                <CircuitIcon />
              </div>
              <h3 className="mb-3 transition group-hover:text-primary">
                {t("home.hl.1.title")}
              </h3>
              <p className="text-muted-foreground">{t("home.hl.1.desc")}</p>
            </Link>

            <Link
              href="/cuoc-thi/"
              className="group rounded-3xl border-2 border-border bg-gradient-to-br from-background to-primary/5 p-8 transition hover:scale-105 hover:shadow-xl hover:border-primary"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary text-primary-foreground shadow-lg transition group-hover:rotate-3">
                <RobotIcon />
              </div>
              <h3 className="mb-3 transition group-hover:text-primary">
                {t("home.hl.2.title")}
              </h3>
              <p className="text-muted-foreground">{t("home.hl.2.desc")}</p>
            </Link>

            <Link
              href="/tin-tuc/"
              className="group rounded-3xl border-2 border-border bg-gradient-to-br from-background to-primary/5 p-8 transition hover:scale-105 hover:shadow-xl hover:border-primary"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary text-primary-foreground shadow-lg transition group-hover:rotate-3">
                <TrophyIcon />
              </div>
              <h3 className="mb-3 transition group-hover:text-primary">
                {t("home.hl.3.title")}
              </h3>
              <p className="text-muted-foreground">{t("home.hl.3.desc")}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-8 text-center md:p-12">
            <div className="absolute left-8 top-4 h-8 w-8 text-primary/30 animate-pulse">
              <StarIcon />
            </div>
            <div className="absolute right-12 top-8 h-6 w-6 text-primary/30 animate-bounce">
              <GearIcon />
            </div>
            <div className="absolute bottom-6 left-16 h-10 w-10 text-primary/30 animate-spin">
              <CircuitIcon />
            </div>

            <div className="relative z-10">
              <AnimatedRobot />
              <div className="mb-4 inline-flex items-center space-x-2">
                <div className="h-8 w-8 text-primary">
                  <RobotIcon />
                </div>
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="mb-4 text-3xl md:text-4xl">
                {t("home.cta2.title")}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                {t("home.cta2.lead")}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/cuoc-thi/#dang-ky"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-primary-foreground shadow-lg transition hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
                >
                  <span>{t("home.cta2.primary")}</span>
                </Link>
                <Link
                  href="/cuoc-thi/"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-8 py-4 text-primary transition hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                >
                  <span>{t("home.cta2.secondary")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
