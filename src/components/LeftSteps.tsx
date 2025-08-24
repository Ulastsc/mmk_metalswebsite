"use client";
import { useEffect, useState } from "react";

type Step = { id: string; label: string };

const steps: Step[] = [
  { id: "home", label: "1" },
  { id: "about", label: "2" },
  { id: "numbers", label: "3" },
  { id: "logistics", label: "4" },
];

export default function LeftSteps() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => Math.abs(0.5 - a.intersectionRatio) - Math.abs(0.5 - b.intersectionRatio));
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    steps.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="pointer-events-none fixed left-3 top-1/2 z-30 -translate-y-1/2 space-y-3 text-[11px] font-semibold md:left-6">
      {steps.map((s) => {
        const isActive = active === s.id;
        return (
          <li key={s.id} className="pointer-events-auto">
            <a href={`#${s.id}`} className="group flex items-center gap-2">
              <span className={isActive ? "text-white" : "text-white/70 group-hover:text-white"}>
                {s.label}
              </span>
              <span
                className={`h-px ${isActive ? "w-12 bg-white" : "w-10 bg-white/50"}transition-all`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
