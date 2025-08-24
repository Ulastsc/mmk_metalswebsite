"use client";
import { useEffect, useState } from "react";

const pairs = [
  { code: "EUR", value: 1.1609, delta: 0 },
  { code: "GBP", value: 1.3414, delta: +0.01 },
  { code: "CHF", value: 1.2373, delta: -0.01 },
  { code: "CNY", value: 0.1393, delta: 0 },
  { code: "JPY", value: 0.0067, delta: -0.01 },
];

export default function Ticker() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-2 left-1/2 z-40 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 shadow">
      <div className="flex items-center gap-3 text-xs font-medium">
        <span className="rounded bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-white">
          Today, {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
        {pairs.map((p, i) => (
          <span key={p.code + tick + i} className="inline-flex items-center gap-1">
            <span className="font-semibold">{p.code}</span>
            <span className="opacity-60">{p.value.toFixed(4)}</span>
            <span
              className={
                p.delta > 0
                  ? "text-emerald-600"
                  : p.delta < 0
                  ? "text-rose-600"
                  : "text-slate-500"
              }
            >
              {p.delta > 0 ? "▲" : p.delta < 0 ? "▼" : "■"}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
