"use client";

export default function ServicesSection() {
  return (
    <section id="network" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Our Network
        </h2>
        <p className="mt-2 text-center text-slate-600">
          Operations across Türkiye, USA, Uganda, Bulgaria, Kenya, and Uzbekistan with dependable partners.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              Road & sea coverage for EMEA &amp; Asia
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Wide transport and logistics coverage tailored for Europe, Middle East and Asia.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              Container Shipment
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Reliable containerized shipping for worldwide coverage.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              Railway Transportation
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Efficient railway solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
