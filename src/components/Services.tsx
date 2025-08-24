export default function Services() {
  const cards = [
    {
      title: 'International Import & Export',
      desc: 'Financing and logistics solutions for global trade.',
      icon: '💼',
    },
    {
      title: 'Trade Network Development',
      desc: 'Wide supplier and customer network across regions.',
      icon: '🌐',
    },
    {
      title: 'Supply Chain Planning',
      desc: 'Vessel, container and rail options tailored to orders.',
      icon: '🚢',
    },
    {
      title: 'Quality & Compliance',
      desc: 'ISO-certified processes and product assurance.',
      icon: '✅',
    },
  ];

  return (
    <section className="relative z-20 -mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div key={i} className="group [perspective:1000px]">
            <div className="relative h-[320px] w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-700 to-blue-600 p-8 text-white shadow-lg ring-1 ring-blue-500/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-white/15">
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug">{card.title}</h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-blue-100">
                  {card.desc}
                </p>
              </div>
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-600 to-emerald-500 p-8 text-white shadow-lg ring-1 ring-emerald-400/20 [transform:rotateY(180deg)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-white/15">
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug">{card.title}</h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-emerald-100">
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className="mb-20" />
    </section>
  );
}
