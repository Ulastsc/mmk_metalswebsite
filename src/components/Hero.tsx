type HeroProps = {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundUrl: string;
};

export default function Hero({
  title = "Reliable Supply of Aluminum & Metals Worldwide",
  subtitle = "MMK METALS",
  tagline = "We connect producers and industries with dependable logistics and compliant trade operations across continents.",
  backgroundUrl = "/hero.jpg",
}: HeroProps) {
  return (
    <section id="home" className="relative h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_top]"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      />
      <div className="absolute inset-0 hero-overlay-medium" />


      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <div className="mt-2">
          <p className="text-white/85 text-2xl md:text-3xl">{title}</p>

          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white tracking-wide">
            {subtitle}
          </h1>

          <p className="mt-3 text-white/85 text-xl md:text-2xl">{tagline}</p>
        </div>
      </div>
    </section>
  );
}
