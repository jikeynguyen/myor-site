// src/app/cuoc-thi/[id]/page.tsx
import DetailClient from "./DetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "myor-2025" }, { id: "myor-2024" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DetailClient id={id as "myor-2025" | "myor-2024"} />;
}
