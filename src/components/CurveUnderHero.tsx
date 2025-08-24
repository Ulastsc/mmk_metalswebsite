export default function CurveUnderHero() {
  return (
    <div aria-hidden className="relative z-[1]">
      <svg
        className="-mt-6 w-full"
        viewBox="0 0 1440 260"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,170
            C 260,85 520,85 720,150
            C 1020,250 1240,230 1440,160
            L1440,260 L0,260 Z
          "
          fill="#E6F5EE"
        />
      </svg>
      <div className="h-6 w-full bg-white" />
    </div>
  );
}
