export type Competition = {
  slug: string;
  title: string;
  year: number;
  theme?: string;
  location?: string;
  dateRange?: string;
  status: "upcoming" | "closed" | "finished";
  cover?: string; // URL ảnh bìa (tùy chọn)
  summary: string;
  categories: string[]; // Ví dụ: ["Primary", "Junior", "Senior"]
  docs?: { label: string; href: string }[]; // Thể lệ, đề bài...
  register?: string; // Link đăng ký
};

export const COMPETITIONS: Competition[] = [
  {
    slug: "myor-2025",
    title: "MYOR Robot Competition 2025",
    year: 2025,
    theme: "Exploration & Sustainability",
    location: "HCM City",
    dateRange: "Q4/2025",
    status: "upcoming",
    summary:
      "Mùa 2025 tập trung khám phá, tối ưu thuật toán điều hướng và nhiệm vụ môi trường.",
    categories: ["Primary", "Junior", "Senior"],
    docs: [
      { label: "Thể lệ (PDF)", href: "/docs/myor-2025-rules.pdf" },
      { label: "Hướng dẫn kỹ thuật", href: "/docs/myor-2025-tech-guide.html" },
    ],
    register: "https://forms.gle/your-form-2025",
  },
  {
    slug: "myor-2024",
    title: "MYOR Robot Competition 2024",
    year: 2024,
    theme: "Climate Change",
    location: "HCM City",
    dateRange: "11/2024",
    status: "finished",
    summary:
      "Mùa 2024 hoàn thành với chủ đề biến đổi khí hậu, tập trung cảm biến và tối ưu năng lượng.",
    categories: ["Primary", "Junior", "Senior"],
    docs: [
      { label: "Thể lệ (PDF)", href: "/docs/myor-2024-rules.pdf" },
      { label: "Kết quả", href: "/news/#myor-2024-results" },
      {
        label: "Album ảnh",
        href: "https://www.facebook.com/myorcompetition/photos",
      },
    ],
  },
];
