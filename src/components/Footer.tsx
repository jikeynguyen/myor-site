"use client";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  RobotIcon,
  PhoneIcon,
  MailIcon,
  LocationIcon,
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  StarIcon,
  GearIcon,
  CircuitIcon,
} from "./icons";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-4 border-primary/30 bg-gradient-to-br from-orange-50 via-orange-100 to-primary/20">
      {/* decorations omitted for brevity */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-orange-500 text-primary-foreground shadow-lg">
                <RobotIcon />
              </div>
              <div>
                <div className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                  MYOR Robot Competition
                </div>
                <div className="text-sm text-muted-foreground">
                  Sân chơi robot cho các bạn nhỏ 🤖
                </div>
              </div>
            </div>

            <p className="max-w-md text-muted-foreground">
              🌟 Nơi các bạn nhỏ khám phá thế giới robot. Học hỏi, sáng tạo và
              trở thành Robot Master tương lai.
            </p>

            <div className="space-y-3">
              <h4 className="text-primary">{t("footer.connect")}</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/myorcompetition"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg"
                >
                  <span className="h-5 w-5">
                    <FacebookIcon />
                  </span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg"
                >
                  <span className="h-5 w-5">
                    <YoutubeIcon />
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500 text-white shadow-lg"
                >
                  <span className="h-5 w-5">
                    <InstagramIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-primary">{t("footer.quick")}</h4>
            <nav className="space-y-2 text-sm">
              <Link href="/">{t("nav.home")}</Link>
              <Link href="/cuoc-thi/">{t("nav.competitions")}</Link>
              <Link href="/the-le/">{t("nav.rules")}</Link>
              <Link href="/tin-tuc/">{t("nav.news")}</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-primary">{t("footer.contact")}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <PhoneIcon />
                </span>
                <div>
                  <div className="text-muted-foreground">Hotline</div>
                  <div>0123 456 789</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MailIcon />
                </span>
                <div>
                  <div className="text-muted-foreground">Email</div>
                  <div>info@myorrobot.vn</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <LocationIcon />
                </span>
                <div>
                  <div className="text-muted-foreground">Địa chỉ</div>
                  <div>123 Đường Robot, Hà Nội</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-muted-foreground">
              © {year} MYOR Robot Competition.
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="hover:text-primary">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-xs text-muted-foreground">
            <span className="h-4 w-4 text-primary">
              <RobotIcon />
            </span>
            <span>{t("footer.tag")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
