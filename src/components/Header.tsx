"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  RobotIcon,
  MenuIcon,
  CloseIcon,
  HomeIcon,
  NewsIcon,
  CalendarIcon,
  TrophyIcon,
} from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLocale();
  useEffect(() => setOpen(false), [pathname]);

  const items = [
    { label: t("nav.home"), href: "/", Icon: HomeIcon },
    { label: t("nav.competitions"), href: "/cuoc-thi/", Icon: CalendarIcon },
    { label: t("nav.rules"), href: "/the-le/", Icon: TrophyIcon },
    { label: t("nav.news"), href: "/tin-tuc/", Icon: NewsIcon },
  ];
  const isActive = (h: string) =>
    h === "/" ? pathname === "/" : pathname.startsWith(h);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow md:h-12 md:w-12">
            <RobotIcon />
          </div>
          <div className="hidden sm:block">
            <div className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              {t("brand.name")}
            </div>
            <div className="-mt-1 text-xs text-muted-foreground">
              {t("brand.sub")}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {items.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`group flex items-center gap-2 rounded-2xl px-4 py-2 ${
                isActive(href)
                  ? "text-primary"
                  : "text-foreground hover:bg-primary/10"
              }`}
            >
              <span className="h-5 w-5 text-primary/70 group-hover:text-primary">
                <Icon />
              </span>
              <span className="text-sm">{label}</span>
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href="/cuoc-thi/#dang-ky"
            className="rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground shadow hover:bg-primary/90"
          >
            {t("cta.register")}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="h-10 w-10 rounded-xl bg-primary/10 text-primary"
          >
            <span className="mx-auto block h-5 w-5">
              {open ? <CloseIcon /> : <MenuIcon />}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <nav className="space-y-2">
              {items.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-primary/10"
                >
                  <span className="h-6 w-6 text-primary/70 group-hover:text-primary">
                    <Icon />
                  </span>
                  <span>{label}</span>
                </Link>
              ))}
              <Link
                href="/cuoc-thi/#dang-ky"
                className="mt-2 flex w-full items-center justify-center rounded-2xl bg-primary px-4 py-3 text-primary-foreground"
              >
                {t("cta.register")}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
