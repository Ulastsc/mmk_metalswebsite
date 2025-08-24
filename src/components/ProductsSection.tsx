"use client";

type Product = {
  title: string;
  desc: string;
};

const PRODUCTS: Product[] = [
  {
    title: "Aluminum A7",
    desc: "GOST 1583-93 · Purity 99.7%",
  },
  {
    title: "Aluminum A8",
    desc: "GOST 1583-93 · Purity 99.8%",
  },
  {
    title: "Copper, Stainless, Alloys",
    desc: "Additional grades on request",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6">
          <h2 className="text-3xl font-extrabold text-slate-900">Products</h2>
          <p className="mt-2 text-slate-600">
            Industrial metals supplied under international standards and strict QA.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-slate-900 font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
