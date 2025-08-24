export default function NumbersSection() {
  return (
    <section
      id="numbers"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/world-map-placeholder.png')" }}
    >
      <div className="absolute inset-0 bg-slate-900/35" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">
            Metal Market with Numbers
          </h2>
          <p className="text-slate-200">  
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-slate-200 shadow-lg px-6 py-8 text-center flex flex-col items-center justify-center">
            <p className="text-3xl font-extrabold leading-none text-blue-800">12+</p>
            <p className="mt-1 font-medium text-slate-900">Countries</p>
            <p className="mt-1 text-sm text-slate-600">Active trading network</p>
          </div>
          <div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-slate-200 shadow-lg px-6 py-8 text-center flex flex-col items-center justify-center">
            <p className="text-3xl font-extrabold leading-none text-blue-800">150k+</p>
            <p className="mt-1 font-medium text-slate-900">Tons / year</p>
            <p className="mt-1 text-sm text-slate-600">Scalable capacity</p>
          </div>
        </div>
      </div>
    </section>
  );
}
