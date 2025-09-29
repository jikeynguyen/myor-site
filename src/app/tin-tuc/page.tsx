"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import Image from "next/image";

import { PlayIcon } from "@/components/icons";

// Mock videos
const featuredVideos = [
  {
    id: "myor-2025-final",
    title: "🏆 CHUNG KẾT MYOR 2025 - Những màn thi đấu nghẹt thở!",
    description:
      "Xem lại những khoảnh khắc đỉnh cao của cuộc thi MYOR 2025 với 100 đội thi xuất sắc!",
    thumbnail:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1080&auto=format&fit=crop",
    duration: "25:43",
    views: "12.5K",
    publishedAt: "2 ngày trước",
  },
  {
    id: "workshop-lap-rap",
    title: "🔧 Workshop lắp ráp robot từ A-Z cho người mới bắt đầu",
    description:
      "Hướng dẫn chi tiết cách lắp ráp robot đầu tiên với các bộ kit MYOR!",
    thumbnail:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1080&auto=format&fit=crop",
    duration: "18:22",
    views: "8.7K",
    publishedAt: "1 tuần trước",
  },
  {
    id: "lap-trinh-co-ban",
    title: "💻 Lập trình robot siêu dễ hiểu - Bài 1: Khởi động",
    description:
      "Học lập trình robot từ những dòng code đầu tiên! Vui như chơi game!",
    thumbnail:
      "https://images.unsplash.com/photo-1526815478697-0815071c5eb6?q=80&w=1080&auto=format&fit=crop",
    duration: "14:55",
    views: "15.2K",
    publishedAt: "2 tuần trước",
  },
  {
    id: "giai-nhat-interview",
    title: "⭐ Phỏng vấn nhà vô địch MYOR 2024 - Bí kíp thành công",
    description:
      "Gặp gỡ các em học sinh đoạt giải nhất và nghe chia sẻ kinh nghiệm!",
    thumbnail:
      "https://images.unsplash.com/photo-1573164574230-db1d5e960238?q=80&w=1080&auto=format&fit=crop",
    duration: "22:18",
    views: "9.4K",
    publishedAt: "3 tuần trước",
  },
  {
    id: "thuat-thuat-robot",
    title: "🤸 Những màn biểu diễn robot siêu đỉnh của các bạn nhỏ",
    description:
      "Robot nhảy múa, robot vẽ tranh... Xem các em sáng tạo những điều không tưởng!",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1080&auto=format&fit=crop",
    duration: "16:07",
    views: "11.8K",
    publishedAt: "1 tháng trước",
  },
  {
    id: "behind-scenes",
    title: "🎬 Hậu trường MYOR 2025 - Những câu chuyện chưa kể",
    description:
      "Khám phá những khoảnh khắc thú vị đằng sau cuộc thi robot lớn nhất năm!",
    thumbnail:
      "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=1080&auto=format&fit=crop",
    duration: "20:31",
    views: "7.2K",
    publishedAt: "1 tháng trước",
  },
];

const awardsData = {
  eventInfo: {
    date: "14/6/2025",
    venue: "Trường THCS Trần Quốc Toản 1",
    duration: "2 tháng triển khai",
    participants: { teams: 100, students: 180, schools: 57, provinces: 7 },
    provinces: [
      "TP. Hồ Chí Minh",
      "Đồng Nai",
      "Quảng Ninh",
      "Bà Rịa Vũng Tàu",
      "Đắk Lắk",
      "Kon Tum",
      "Gia Lai",
    ],
  },
  awards: {
    total: 54,
    breakdown: {
      first: 3,
      second: 6,
      third: 9,
      encouragement: 15,
      potential: 21,
    },
  },
  winners: [
    {
      rank: "Giải Nhất Bảng Tiểu học",
      students: ["Trần Lê Na", "Hồ Sỹ Dũng"],
      school: "Trường Tiểu học Long Bình Tân, Đồng Nai",
      icon: "🥇",
    },
    {
      rank: "Giải Nhất Bảng THCS",
      students: ["Huỳnh Lê Minh", "Trần Quốc Duy"],
      school: "Trường Tiểu học, THCS, THPT Ngô Thời Nhiệm",
      icon: "🥇",
    },
    {
      rank: "Giải Nhất Bảng THPT",
      students: ["Lê Phúc Khang Gia", "Nguyễn Đình Quý"],
      school: "Trường THPT Nguyễn Hữu Huân",
      icon: "🥇",
    },
  ],
};

export default function NewsPage() {
  const { t } = useLocale();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-orange-50 to-orange-100 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl">{t("news.hero.title")}</h1>
          <p className="mx-auto mb-8 max-w-3xl text-muted-foreground">
            {t("news.hero.lead")}
          </p>
        </div>
      </section>

      {/* Featured videos */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl">
              {t("news.featured.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("news.featured.lead")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((v) => (
              <div
                key={v.id}
                className="group overflow-hidden rounded-3xl border-2 border-orange-200 bg-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg transition group-hover:scale-110">
                      <PlayIcon />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-sm text-white">
                    {v.duration}
                  </div>
                  <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs text-white">
                    {v.views} {t("news.video.views")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 line-clamp-2 transition group-hover:text-primary">
                    {v.title}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                    {v.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>🕒 {v.publishedAt}</span>
                    <span className="text-primary">
                      {t("news.video.watchNow")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.youtube.com/@GARASTEM/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-8 py-4 text-white shadow-lg transition-all hover:scale-105 hover:bg-red-700"
            >
              <PlayIcon />
              <span>🎯 {t("news.youtube.more")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl">
              {t("news.awards.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("news.awards.lead")}
            </p>
          </div>

          {/* Event info */}
          <div className="mb-12 rounded-3xl border-2 border-primary/20 bg-white p-8 shadow-lg md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl text-primary">
                  📅 {t("news.event.info")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t("news.event.date")}
                      </p>
                      <p>{awardsData.eventInfo.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t("news.event.venue")}
                      </p>
                      <p>{awardsData.eventInfo.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t("news.event.duration")}
                      </p>
                      <p>{awardsData.eventInfo.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl text-primary">
                  📊 {t("news.scale.title")}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 p-4 text-center">
                    <div className="mb-1 text-2xl text-primary">
                      {awardsData.eventInfo.participants.teams}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("news.scale.teams")}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 p-4 text-center">
                    <div className="mb-1 text-2xl text-primary">
                      {awardsData.eventInfo.participants.students}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("news.scale.students")}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 p-4 text-center">
                    <div className="mb-1 text-2xl text-primary">
                      {awardsData.eventInfo.participants.schools}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("news.scale.schools")}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 p-4 text-center">
                    <div className="mb-1 text-2xl text-primary">
                      {awardsData.eventInfo.participants.provinces}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("news.scale.provinces")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <h4 className="mb-4 text-lg text-primary">
                🗺️ {t("news.event.provinces")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {awardsData.eventInfo.provinces.map((p, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Awards summary */}
          <div className="mb-12 rounded-3xl border-2 border-primary/20 bg-white p-8 shadow-lg md:p-12">
            <h3 className="mb-8 text-center text-2xl text-primary">
              🎁{" "}
              {t("news.prizes.total").replace(
                "{total}",
                awardsData.awards.total.toString()
              )}
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              <div className="rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 text-center">
                <div className="mb-2 text-3xl">🥇</div>
                <div className="mb-1 text-2xl text-yellow-600">
                  {awardsData.awards.breakdown.first}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("news.prizes.first")}
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-6 text-center">
                <div className="mb-2 text-3xl">🥈</div>
                <div className="mb-1 text-2xl text-gray-600">
                  {awardsData.awards.breakdown.second}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("news.prizes.second")}
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 p-6 text-center">
                <div className="mb-2 text-3xl">🥉</div>
                <div className="mb-1 text-2xl text-orange-600">
                  {awardsData.awards.breakdown.third}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("news.prizes.third")}
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-green-100 to-green-200 p-6 text-center">
                <div className="mb-2 text-3xl">🌟</div>
                <div className="mb-1 text-2xl text-green-600">
                  {awardsData.awards.breakdown.encouragement}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("news.prizes.encouragement")}
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 p-6 text-center">
                <div className="mb-2 text-3xl">💎</div>
                <div className="mb-1 text-2xl text-purple-600">
                  {awardsData.awards.breakdown.potential}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("news.prizes.potential")}
                </div>
              </div>
            </div>
          </div>

          {/* Winners */}
          <div className="rounded-3xl border-2 border-primary/20 bg-white p-8 shadow-lg md:p-12">
            <h3 className="mb-8 text-center text-2xl text-primary">
              🌟 {t("news.winners.title")}
            </h3>

            <div className="space-y-6">
              {awardsData.winners.map((w, i) => (
                <div
                  key={i}
                  className="rounded-2xl border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{w.icon}</div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-lg text-primary">{w.rank}</h4>
                      <div className="mb-2">
                        <span className="text-sm text-muted-foreground">
                          {t("news.winners.students")}{" "}
                        </span>
                        <span className="text-lg">{w.students.join(", ")}</span>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">
                          {t("news.winners.school")}{" "}
                        </span>
                        <span>{w.school}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary/10 to-orange-100 p-6 text-center">
              <p className="text-lg">{t("news.winners.closing")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-r from-primary/10 via-orange-100 to-primary/10 p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl md:text-4xl">{t("news.cta.title")}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              {t("news.cta.lead")}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/cuoc-thi"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
              >
                <span>🌟 {t("news.cta.btn.register")}</span>
              </Link>
              <a
                href="https://www.youtube.com/@GARASTEM/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-8 py-4 text-primary transition-all hover:scale-105 hover:bg-primary hover:text-white"
              >
                <span>📺 {t("news.cta.btn.moreVideos")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
