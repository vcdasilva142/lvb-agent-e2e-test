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
              <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-zinc-100">Começar agora →</button>
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
          <div className="relative">
            <div className="rounded-[20px] border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[14px] border border-white/5 bg-[#0f0f11]">
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-500">lvb-agent.live • online</span>
                </div>
                <div className="space-y-3 p-4">
                  <div className="flex gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold">AI</span>
                    <p className="rounded-2xl rounded-tl-sm border border-white/5 bg-zinc-900 px-3 py-2 text-sm text-zinc-300">Criei o Hero premium com gradientes e glassmorphism ✨</p>
                  </div>
                  <p className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-white px-3 py-2 text-sm font-medium text-black">Perfeito! Tema dark com violeta</p>
                  <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-3">
                    <div className="flex justify-between text-xs text-violet-300"><span>● Gerando design...</span><span>78%</span></div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-violet-950"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
