"use client";
import { Chart } from "@/components/Chart";
import { BuySell } from "@/components/BuySell";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <div className="grid grid-cols-12">
        <BuySell />
        <Chart />
      </div>
      <main className="h-40">Hello World</main>
    </div>
  );
}
