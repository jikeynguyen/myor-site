"use client";
import { useLocale } from "@/i18n/LocaleProvider";

const flag = (l: "vi" | "en") => (l === "vi" ? "🇻🇳" : "🇬🇧");
const nextLabel = (l: "vi" | "en") =>
  l === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const next = locale === "vi" ? "en" : "vi";

  return (
    <button
      onClick={() => setLocale(next)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-lg hover:bg-primary/10"
      aria-label={nextLabel(locale)}
      title={nextLabel(locale)}
    >
      <span aria-hidden>{flag(locale)}</span>
    </button>
  );
}
