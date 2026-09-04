export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08080a] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 via-transparent to-transparent" />
      <div className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[90px]" />
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <nav className="mb-12 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 font-bold tracking-tight">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[11px] text-black">◆</span>
            LVB<span className="font-normal text-zinc-500"> Agent</span>
          </div>
          <div className="hidden items-center gap-5 text-zinc-400 md:flex">
            <a className="hover:text-white">Produto</a>
            <a className="hover:text-white">Preços</a>
            <button className="rounded-full border border-white/10 px-4 py-1.5 text-white hover:bg-white hover:text-black transition">Entrar</button>
          </div>
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-violet-200">Novo: GPT-4o integrado</span>
            </div>
            <h1 className="mt-6 text-5xl font-extrabold leading-none tracking-tighter sm:text-6xl">
              Build faster
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">with AI.</span>
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
              Plataforma completa para criar e escalar produtos com IA.
              <span className="text-zinc-100"> Do protótipo ao deploy em minutos.</span>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-zinc-100">Começar agora</button>
              <button className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10 transition">Ver demonstração</button>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-6 text-sm">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=11" alt="" className="h-7 w-7 rounded-full border-2 border-[#08080a]" />
                <img src="https://i.pravatar.cc/100?img=32" alt="" className="h-7 w-7 rounded-full border-2 border-[#08080a]" />
                <img src="https://i.pravatar.cc/100?img=14" alt="" className="h-7 w-7 rounded-full border-2 border-[#08080a]" />
              </div>
              <span className="text-amber-400">★★★★★</span>
              <span className="font-medium">4.9/5</span>
              <span className="text-zinc-500">· 10k+ times</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/15 to-transparent blur-2xl rounded-[32px]" />
            <img
              src="/uploads/CT-01.png"
              alt="CT-01"
              className="relative w-full max-w-[480px] h-auto rounded-[20px] border border-white/10 shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
