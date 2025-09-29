"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Locale = "vi" | "en";
type Dict = Record<string, string>;
const DICTS: Record<Locale, Dict> = {
  vi: {
    "brand.name": "MYOR Robot",
    "brand.sub": "Competition 🤖",
    "nav.home": "Trang chủ",
    "nav.competitions": "Cuộc thi",
    "nav.rules": "Thể lệ",
    "nav.news": "Tin tức",
    "cta.register": "Đăng ký",
    "footer.quick": "Liên kết nhanh",
    "footer.contact": "📞 Liên hệ",
    "footer.connect": "🔗 Kết nối với chúng tôi",
    "footer.privacy": "Chính sách bảo mật",
    "footer.terms": "Điều khoản sử dụng",
    "footer.tag": "Powered by young dreams and endless creativity ✨",
    // HOME
    "home.badge": "Sáng tạo cùng Robot! 🤖",
    "home.title": "MYOR Robot Competition",
    "home.lead":
      "🎉 Chào mừng các bạn nhỏ đến với sân chơi Robot. Lắp ráp, lập trình và tạo ra những chú robot tuyệt vời nhất! ✨",
    "home.cta.primary": "🚀 Khám phá cuộc thi",
    "home.cta.secondary": "⭐ Đăng ký ngay",

    "home.video.title": "🎬 Video các cuộc thi đã diễn ra",
    "home.video.lead":
      "Xem lại khoảnh khắc và học hỏi từ các đội thi tài năng. 🌟",
    "home.video.1.title": "🏆 Chung kết MYOR 2024",
    "home.video.1.desc": "Những màn thi đấu nghẹt thở và đầy cảm xúc.",
    "home.video.2.title": "🤖 Workshop Lắp ráp Robot",
    "home.video.2.desc": "Hướng dẫn chi tiết cách lắp ráp robot đầu tiên.",
    "home.video.3.title": "⚡ Lập trình siêu dễ",
    "home.video.3.desc": "Học lập trình robot vui nhộn cùng các bạn.",

    "home.hl.title": "📚 Thông tin quan trọng",
    "home.hl.lead":
      "Tất cả những gì bạn cần biết để tham gia cuộc thi robot. 🎯",
    "home.hl.1.title": "🎯 Chủ đề & hạng mục",
    "home.hl.1.desc":
      "Khám phá chủ đề thi phù hợp nhiều lứa tuổi. Từ lắp ráp đến lập trình.",
    "home.hl.2.title": "📅 Lịch thi & địa điểm",
    "home.hl.2.desc":
      "Xem thời gian và địa điểm tổ chức. Chuẩn bị tham dự cùng đội của bạn.",
    "home.hl.3.title": "🏆 Kết quả & album",
    "home.hl.3.desc": "Xem các đội vô địch và album ảnh nổi bật các mùa trước.",

    "home.cta2.title": "Sẵn sàng trở thành Robot Master?",
    "home.cta2.lead":
      "Tham gia ngay để khám phá thế giới robot và kết nối bạn bè cùng đam mê. 🤖",
    "home.cta2.primary": "🌟 Đăng ký tham gia ngay",
    "home.cta2.secondary": "📖 Tìm hiểu thêm",
    "comps.hero.badge": "Cuộc thi Robot MYOR 🤖",
    "comps.hero.title": "Tất cả cuộc thi MYOR",
    "comps.hero.lead":
      "🎉 Khám phá tất cả các cuộc thi robot MYOR đã và đang diễn ra!",
    "comps.hero.stats.competitions": "Cuộc thi",
    "comps.hero.stats.participants": "Thí sinh",
    "comps.hero.stats.schools": "Trường học",
    "comps.hero.stats.prizes": "Giải thưởng",

    "comps.status.open": "Đang mở đăng ký",
    "comps.status.closed": "Đã kết thúc",
    "comps.topic": "Chủ đề",
    "comps.stat.final": "Chung kết",
    "comps.stat.participants": "Thí sinh",
    "comps.stat.prizes": "Giải",
    "comps.cta.open": "🚀 Đăng ký ngay",
    "comps.cta.view": "📖 Xem chi tiết",

    "comps.cta2.title": "Không tìm thấy cuộc thi mong muốn?",
    "comps.cta2.lead":
      "Theo dõi chúng tôi để cập nhật thông tin về các cuộc thi robot mới nhất!",
    "comps.cta2.news": "📰 Xem tin tức",
    "comps.cta2.contact": "✉️ Liên hệ chúng tôi",

    "comps.2025.title": "MYOR 2025 - Thành phố thông minh",
    "comps.2025.theme": "Thành phố thông minh",
    "comps.2025.desc":
      "Bạn yêu thích công nghệ và robot? Hãy tham gia ngay MYOR 2025 – nơi ý tưởng công nghệ bùng nổ!",
    "comps.2025.stats.participants": "Đang đăng ký",
    "comps.2025.stats.schools": "Toàn quốc",
    "comps.2025.stats.prizes": "Nhiều giải thưởng",
    "comps.2025.hl.1": "🎯 3 Bảng thi: Tiểu học, THCS, THPT",
    "comps.2025.hl.2": "🤖 Chủ đề Smart City siêu thú vị",
    "comps.2025.hl.3": "💡 Phát triển ý tưởng công nghệ",
    "comps.2025.hl.4": "🏆 Giải thưởng hấp dẫn",

    "comps.2024.title": "MYOR 2024 - Biến đổi khí hậu",
    "comps.2024.theme": "Biến đổi khí hậu",
    "comps.2024.desc":
      "Cuộc thi robot lớn 2024 với chủ đề bảo vệ môi trường và ứng phó biến đổi khí hậu.",
    "comps.2024.stats.participants": "180 thí sinh",
    "comps.2024.stats.schools": "57 trường",
    "comps.2024.stats.prizes": "54 giải thưởng",
    "comps.2024.hl.1": "🌍 Chủ đề Biến đổi khí hậu",
    "comps.2024.hl.2": "👥 180 thí sinh tham gia",
    "comps.2024.hl.3": "🏫 57 trường học",
    "comps.2024.hl.4": "🏆 54 giải thưởng đã trao",
    "detail.notfound.title": "Không tìm thấy cuộc thi",
    "detail.notfound.desc":
      "Cuộc thi bạn tìm kiếm không tồn tại hoặc đã bị xóa.",
    "detail.notfound.back": "Quay lại danh sách cuộc thi",
    "detail.topic": "Chủ đề",
    "detail.cats.title": "👥 Đối tượng tham gia",
    "detail.cats.lead": "Các bảng thi phù hợp từng độ tuổi và trình độ.",
    "detail.reg.title": "Cách thức đăng ký",
    "detail.reg.lead": "Thí sinh có thể đăng ký cá nhân hoặc theo đơn vị.",
    "detail.reg.form": "Hình thức dự thi",
    "detail.reg.links": "Liên kết đăng ký",
    "detail.reg.info": "Xem chi tiết kế hoạch, thể lệ, mẫu đăng ký",
    "detail.reg.apply": "Đăng ký trực tuyến",
    "detail.timeline.title": "Thời gian tổ chức",
    "detail.timeline.lead":
      "Theo dõi các mốc quan trọng để không bỏ lỡ cơ hội.",
    "detail.contact.title": "Thông tin liên hệ",
    "detail.contact.person": "Người liên hệ",
    "detail.contact.phone": "Số điện thoại",
    "detail.cta.title": "Sẵn sàng tham gia",
    "detail.cta.2025": "Đăng ký ngay để không bỏ lỡ chủ đề Smart City.",
    "detail.cta.2024": "Xem lại thông tin và kết quả cuộc thi năm 2024.",
    "detail.common.deadline": "Hạn chót đăng ký",
    "detail.common.deadline.desc": "Các đội hoàn thành đăng ký trực tuyến.",
    "detail.common.semifinal": "Vòng bán kết",
    "detail.common.semifinal.prov": "Vòng bán kết tại các tỉnh",
    "detail.common.final": "Vòng chung kết",
    "detail.common.final.desc": "Quyết định nhà vô địch các bảng thi.",
    "detail.2025.title":
      "CUỘC THI LẮP RÁP VÀ LẬP TRÌNH ROBOT DÀNH CHO HỌC SINH – MYOR 2025",
    "detail.2025.subtitle": "THÀNH PHỐ THÔNG MINH – SMART CITY",
    "detail.2025.theme": "Thành phố thông minh",
    "detail.2025.desc":
      "Bạn yêu thích công nghệ và robot? Hãy tham gia MYOR 2025 – nơi ý tưởng công nghệ bùng nổ!",
    "detail.2025.semi.desc": "Thi đấu từ 17/5/2025 đến 31/5/2025.",
    "detail.2025.reg.participants":
      "Cá nhân hoặc đội nhóm (tối đa 2 thành viên/đội)",
    "detail.2025.reg.schools": "Mỗi trường đăng ký tối đa 5 đội thi",
    "detail.2025.stats.participants": "Đang đăng ký",
    "detail.2025.stats.schools": "Toàn quốc",
    "detail.2025.stats.prizes": "Nhiều giải thưởng",
    "detail.2025.stats.provinces": "Các tỉnh thành",
    "detail.2025.catA.title": "Bảng A - Tiểu học",
    "detail.2025.catA.subtitle": "Lập trình và điều khiển robot",
    "detail.2025.catA.desc":
      "Dành cho học sinh tiểu học với chủ đề Smart City.",
    "detail.2025.catB.title": "Bảng B - THCS",
    "detail.2025.catB.subtitle": "Lập trình và điều khiển robot",
    "detail.2025.catB.desc":
      "Dành cho học sinh THCS với thử thách thành phố thông minh.",
    "detail.2025.catC.title": "Bảng C - THPT & GDNN-GDTX",
    "detail.2025.catC.subtitle": "Lập trình robot nâng cao",
    "detail.2025.catC.desc":
      "Bài toán robot phức tạp cho giải pháp Smart City.",
    "detail.2024.title":
      "CUỘC THI LẮP RÁP VÀ LẬP TRÌNH ROBOT DÀNH CHO HỌC SINH – MYOR 2024",
    "detail.2024.subtitle": "BIẾN ĐỔI KHÍ HẬU",
    "detail.2024.theme": "Biến đổi khí hậu",
    "detail.2024.desc":
      "Sân chơi lập trình robot phát huy sáng tạo cho thanh thiếu niên.",
    "detail.2024.semi.prov.desc": "Thi đấu tại địa phương để chọn đội tuyển.",
    "detail.2024.semi.hcm": "Vòng bán kết TP.HCM",
    "detail.2024.semi.hcm.desc": "4 cụm thi tại Thành phố Hồ Chí Minh.",
    "detail.2024.reg.participants": "Cá nhân hoặc đội (tối đa 2 thành viên)",
    "detail.2024.reg.schools": "Mỗi trường đăng ký tối đa 5 đội thi",
    "detail.2024.stats.participants": "180 thí sinh",
    "detail.2024.stats.schools": "57 trường học",
    "detail.2024.stats.prizes": "54 giải thưởng",
    "detail.2024.stats.provinces": "7 tỉnh thành",
    "detail.2024.w.title": "Chúc mừng các nhà vô địch MYOR 2025",
    "detail.2024.w.lead": "Tổng kết 14/6/2025 tại THCS Trần Quốc Toản 1.",
    "detail.2024.w1.title": "Giải Nhất Bảng Tiểu học",
    "detail.2024.w2.title": "Giải Nhất Bảng THCS",
    "detail.2024.w3.title": "Giải Nhất Bảng THPT",
    "detail.2024.catA.title": "Bảng A - Tiểu học",
    "detail.2024.catA.subtitle": "Điều khiển và lập trình robot",
    "detail.2024.catA.desc":
      "Dành cho học sinh tiểu học, học cách điều khiển robot cơ bản.",

    "detail.2024.catB.title": "Bảng B - THCS",
    "detail.2024.catB.subtitle": "Điều khiển và lập trình robot",
    "detail.2024.catB.desc": "Dành cho học sinh THCS với thử thách khó hơn.",

    "detail.2024.catC.title": "Bảng C - THPT",
    "detail.2024.catC.subtitle": "Lập trình robot nâng cao",
    "detail.2024.catC.desc":
      "Thử thách lập trình robot phức tạp cho học sinh THPT.",

    "detail.2024.catD.title": "Bảng D - Makerthon",
    "detail.2024.catD.subtitle": "Dự án sản phẩm sáng tạo",
    "detail.2024.catD.desc":
      "Tạo sản phẩm robot sáng tạo giải quyết vấn đề thực tế.",
  },
  en: {
    "brand.name": "MYOR Robot",
    "brand.sub": "Competition 🤖",
    "nav.home": "Home",
    "nav.competitions": "Competitions",
    "nav.rules": "Rules",
    "nav.news": "News",
    "cta.register": "Register",
    "footer.quick": "Quick links",
    "footer.contact": "📞 Contact",
    "footer.connect": "🔗 Connect with us",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.tag": "Powered by young dreams and endless creativity ✨",
    "home.badge": "Create with Robots! 🤖",
    "home.title": "MYOR Robot Competition",
    "home.lead":
      "🎉 Welcome to the robot playground. Build, code, and create awesome robots! ✨",
    "home.cta.primary": "🚀 Explore competitions",
    "home.cta.secondary": "⭐ Register now",

    "home.video.title": "🎬 Videos from past competitions",
    "home.video.lead": "Relive great moments and learn from talented teams. 🌟",
    "home.video.1.title": "🏆 MYOR 2024 Finals",
    "home.video.1.desc": "Thrilling matches full of emotions.",
    "home.video.2.title": "🤖 Robot Assembly Workshop",
    "home.video.2.desc": "Step-by-step guide to your first robot.",
    "home.video.3.title": "⚡ Coding made simple",
    "home.video.3.desc": "Learn robot coding the fun way.",

    "home.hl.title": "📚 Key information",
    "home.hl.lead": "Everything you need to join the robot competition. 🎯",
    "home.hl.1.title": "🎯 Themes & categories",
    "home.hl.1.desc": "Explore age-appropriate themes from assembly to coding.",
    "home.hl.2.title": "📅 Schedule & locations",
    "home.hl.2.desc": "See time and venue. Get your team ready.",
    "home.hl.3.title": "🏆 Results & albums",
    "home.hl.3.desc": "See champions and photo highlights from past seasons.",

    "home.cta2.title": "Ready to become a Robot Master?",
    "home.cta2.lead":
      "Join now to explore the world of robots and connect with peers. 🤖",
    "home.cta2.primary": "🌟 Register now",
    "home.cta2.secondary": "📖 Learn more",
    "comps.hero.badge": "MYOR Robot Competitions 🤖",
    "comps.hero.title": "All MYOR Competitions",
    "comps.hero.lead":
      "🎉 Explore all past and current MYOR robot competitions!",
    "comps.hero.stats.competitions": "Competitions",
    "comps.hero.stats.participants": "Participants",
    "comps.hero.stats.schools": "Schools",
    "comps.hero.stats.prizes": "Prizes",

    "comps.status.open": "Open for registration",
    "comps.status.closed": "Finished",
    "comps.topic": "Theme",
    "comps.stat.final": "Final",
    "comps.stat.participants": "Participants",
    "comps.stat.prizes": "Prizes",
    "comps.cta.open": "🚀 Register now",
    "comps.cta.view": "📖 View details",

    "comps.cta2.title": "Didn't find the competition you want?",
    "comps.cta2.lead": "Follow us for the latest robot competition updates!",
    "comps.cta2.news": "📰 View news",
    "comps.cta2.contact": "✉️ Contact us",

    "comps.2025.title": "MYOR 2025 - Smart City",
    "comps.2025.theme": "Smart City",
    "comps.2025.desc":
      "Love tech and robots? Join MYOR 2025 where ideas ignite and grow!",
    "comps.2025.stats.participants": "Open now",
    "comps.2025.stats.schools": "Nationwide",
    "comps.2025.stats.prizes": "Many prizes",
    "comps.2025.hl.1": "🎯 3 divisions: Primary, Junior, Senior",
    "comps.2025.hl.2": "🤖 Exciting Smart City theme",
    "comps.2025.hl.3": "💡 Develop innovative ideas",
    "comps.2025.hl.4": "🏆 Attractive awards",

    "comps.2024.title": "MYOR 2024 - Climate Change",
    "comps.2024.theme": "Climate Change",
    "comps.2024.desc":
      "The major 2024 robot competition focused on environment and climate response.",
    "comps.2024.stats.participants": "180 participants",
    "comps.2024.stats.schools": "57 schools",
    "comps.2024.stats.prizes": "54 prizes",
    "comps.2024.hl.1": "🌍 Climate Change theme",
    "comps.2024.hl.2": "👥 180 participants",
    "comps.2024.hl.3": "🏫 57 schools",
    "comps.2024.hl.4": "🏆 54 prizes awarded",
    "detail.notfound.title": "Competition not found",
    "detail.notfound.desc":
      "The competition does not exist or has been removed.",
    "detail.notfound.back": "Back to competitions",
    "detail.topic": "Theme",
    "detail.cats.title": "👥 Eligibility & divisions",
    "detail.cats.lead": "Divisions tailored for age and skill levels.",
    "detail.reg.title": "How to register",
    "detail.reg.lead": "Register individually or via your organization.",
    "detail.reg.form": "Entry format",
    "detail.reg.links": "Registration links",
    "detail.reg.info": "See plan, rules, and templates",
    "detail.reg.apply": "Online registration",
    "detail.timeline.title": "Schedule",
    "detail.timeline.lead": "Track key milestones so you don’t miss out.",
    "detail.contact.title": "Contact information",
    "detail.contact.person": "Contact person",
    "detail.contact.phone": "Phone number",
    "detail.cta.title": "Ready to join",
    "detail.cta.2025": "Register now for the Smart City theme.",
    "detail.cta.2024": "Review details and results for 2024.",
    "detail.common.deadline": "Registration deadline",
    "detail.common.deadline.desc": "Complete online registration.",
    "detail.common.semifinal": "Semifinals",
    "detail.common.semifinal.prov": "Provincial semifinals",
    "detail.common.final": "Finals",
    "detail.common.final.desc": "Champions decided across divisions.",
    "detail.2025.title": "ROBOT ASSEMBLY & CODING FOR STUDENTS – MYOR 2025",
    "detail.2025.subtitle": "SMART CITY",
    "detail.2025.theme": "Smart City",
    "detail.2025.desc":
      "Love tech and robots? Join MYOR 2025 where ideas ignite!",
    "detail.2025.semi.desc": "Matches run from May 17 to May 31, 2025.",
    "detail.2025.reg.participants": "Individual or team (max 2 members)",
    "detail.2025.reg.schools": "Each school may register up to 5 teams",
    "detail.2025.stats.participants": "Open for registration",
    "detail.2025.stats.schools": "Nationwide",
    "detail.2025.stats.prizes": "Many prizes",
    "detail.2025.stats.provinces": "Provinces",
    "detail.2025.catA.title": "Division A – Primary",
    "detail.2025.catA.subtitle": "Programming and robot control",
    "detail.2025.catA.desc": "Basics for primary students in Smart City.",
    "detail.2025.catB.title": "Division B – Lower Secondary",
    "detail.2025.catB.subtitle": "Programming and robot control",
    "detail.2025.catB.desc": "Smart City challenges for lower secondary.",
    "detail.2025.catC.title": "Division C – Upper Secondary & TVET",
    "detail.2025.catC.subtitle": "Advanced robotics",
    "detail.2025.catC.desc": "Complex robotics for Smart City solutions.",
    "detail.2024.title": "ROBOT ASSEMBLY & CODING FOR STUDENTS – MYOR 2024",
    "detail.2024.subtitle": "CLIMATE CHANGE",
    "detail.2024.theme": "Climate Change",
    "detail.2024.desc": "A robotics playground to foster creativity.",
    "detail.2024.semi.prov.desc": "Local competitions to select teams.",
    "detail.2024.semi.hcm": "Ho Chi Minh City semifinals",
    "detail.2024.semi.hcm.desc": "Four clusters in HCMC.",
    "detail.2024.reg.participants": "Individual or team (max 2 members)",
    "detail.2024.reg.schools": "Each school may register up to 5 teams",
    "detail.2024.stats.participants": "180 participants",
    "detail.2024.stats.schools": "57 schools",
    "detail.2024.stats.prizes": "54 prizes",
    "detail.2024.stats.provinces": "7 provinces",
    "detail.2024.w.title": "Congratulations to MYOR 2025 Champions",
    "detail.2024.w.lead": "Summary on Jun 14, 2025 at Tran Quoc Toan 1.",
    "detail.2024.w1.title": "Gold – Primary",
    "detail.2024.w2.title": "Gold – Lower Secondary",
    "detail.2024.w3.title": "Gold – Upper Secondary",
    "detail.2024.catA.title": "Division A – Primary",
    "detail.2024.catA.subtitle": "Robot control and programming",
    "detail.2024.catA.desc":
      "For primary students to learn basic robot control.",

    "detail.2024.catB.title": "Division B – Lower Secondary",
    "detail.2024.catB.subtitle": "Robot control and programming",
    "detail.2024.catB.desc":
      "For lower secondary students with more challenging tasks.",

    "detail.2024.catC.title": "Division C – Upper Secondary",
    "detail.2024.catC.subtitle": "Advanced robotics",
    "detail.2024.catC.desc":
      "Complex robotics challenges for upper secondary students.",

    "detail.2024.catD.title": "Division D – Makerthon",
    "detail.2024.catD.subtitle": "Creative product projects",
    "detail.2024.catD.desc":
      "Build creative robotic products that solve real problems.",
  },
};

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (k: string) => string;
};
const C = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("vi");
  useEffect(() => {
    const saved = (localStorage.getItem("locale") as Locale) || "vi";
    setLocale(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = (k: string) => DICTS[locale][k] ?? k;
  return <C.Provider value={{ locale, setLocale, t }}>{children}</C.Provider>;
}
export function useLocale() {
  const ctx = useContext(C);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
