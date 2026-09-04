export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050507] text-white selection:bg-violet-500/30">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/[0.12] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute -top-48 left-1/2 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.22),transparent_70%)] blur-[40px]" />
      <div className="absolute -top-20 right-[-10%] h-[500px] w-[600px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      <div className="absolute top-[30%] -left-[10%] h-[500px] w-[600px] rounded-full bg-indigo-500/10 blur-[110px]" />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <nav className="flex items-center justify-between py-6 text-sm">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-600/20 text-[12px] font-bold">◆</span>
              <span className="text-[15px] font-bold tracking-tight">LVB<span className="font-light text-zinc-400"> Agent</span></span>
            </a>
            <div className="hidden items-center gap-6 text-[13px] font-medium text-zinc-400 lg:flex">
              <a href="#" className="transition hover:text-white">Produto</a>
              <a href="#" className="transition hover:text-white">Soluções</a>
              <a href="#" className="transition hover:text-white">Preços</a>
              <a href="#" className="transition hover:text-white">Recursos</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm font-medium text-zinc-400 transition hover:text-white sm:block">Entrar</a>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(255,255,255,0.15)] transition hover:bg-zinc-100 active:scale-[0.98]">
              Começar grátis
            </button>
          </div>
        </nav>
        <div className="grid items-center gap-10 pb-12 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-16 lg:pt-8">
          <div className="relative">
            <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] py-1 pl-1 pr-3 text-xs backdrop-blur-xl transition hover:bg-white/[0.08]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 font-medium text-emerald-300 ring-1 ring-emerald-500/20">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Novo
              </span>
              <span className="text-zinc-300">GPT-4o integrado — 2x mais rápido</span>
              <span className="ml-1 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:text-zinc-300">→</span>
            </a>
            <h1 className="mt-6 text-balance text-[42px] font-[800] leading-[0.9] tracking-[-0.04em] sm:text-[56px] lg:text-[64px]">
              <span className="block text-white">Build faster</span>
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent pb-1">with AI.</span>
            </h1>
            <p className="mt-5 max-w-[520px] text-balance text-[17px] leading-7 text-zinc-400">
              Plataforma completa para criar e escalar produtos com IA.{" "}
              <span className="text-zinc-200">Do protótipo ao deploy em minutos</span> — sem complexidade, só resultado.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-[13px] text-[14px] font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.18)] transition hover:bg-zinc-100 active:scale-[0.98]">
                Começar agora
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-[13px] text-[14px] font-semibold text-white backdrop-blur-xl transition hover:bg-white/10 active:scale-[0.98]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 4.5l6 3.5-6 3.5v-7z" fill="currentColor"/></svg>
                </span>
                Ver demonstração
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                <img src="https://i.pravatar.cc/100?img=11" alt="" className="h-8 w-8 rounded-full border-[2.5px] border-[#050507] object-cover" />
                <img src="https://i.pravatar.cc/100?img=32" alt="" className="h-8 w-8 rounded-full border-[2.5px] border-[#050507] object-cover" />
                <img src="https://i.pravatar.cc/100?img=14" alt="" className="h-8 w-8 rounded-full border-[2.5px] border-[#050507] object-cover" />
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-[2.5px] border-[#050507] bg-zinc-800 text-[11px] font-semibold text-zinc-300">+2k</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] tracking-widest text-amber-400">★★★★★</span>
                  <span className="text-sm font-semibold">4.9/5</span>
                  <span className="text-sm text-zinc-500">· 10k+ equipes</span>
                </div>
                <p className="text-xs text-zinc-500">Confiado por líderes de produto</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.06] pt-6 text-xs font-medium tracking-wide text-zinc-500">
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Sem cartão necessário</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-violet-400"/> Setup em 2 minutos</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"/> Cancele quando quiser</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-violet-600/20 via-fuchsia-500/15 to-indigo-600/20 blur-2xl" />
            <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] blur-[1px]" />
            <div className="relative w-full max-w-[520px]">
              <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)_inset] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[16px] border border-white/10 bg-[#0a0a0f]">
                  <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      lvb-agent.app
                    </div>
                    <div className="h-2.5 w-10" />
                  </div>
                  <img src="/uploads/CT-01.png" alt="Preview do produto LVB Agent" className="h-auto w-full object-cover" />
                </div>
              </div>
              <div className="absolute -right-2 -top-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#121214]/90 px-3 py-3 shadow-xl backdrop-blur-xl sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.2H22l-6.2 4.5 2.4 7.2L12 16.4 5.8 20.9l2.4-7.2L2 9.2h7.6L12 2z" fill="currentColor" opacity="0.95"/></svg>
                </div>
                <div>
                  <p className="text-xs font-semibold leading-none text-white">AI gerando</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-zinc-400"><span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400"/> 1.2s • 98% preciso</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-[#0f0f12]/90 p-4 shadow-2xl backdrop-blur-xl sm:block">
                <div className="flex items-center justify-between gap-8">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">Deploy realizado</p>
                    <p className="mt-1 text-sm font-semibold text-white">+ 342% produtividade</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/20">▲ 24%</span>
                </div>
                <div className="mt-3 flex gap-1.5">
                  <span className="h-1.5 w-8 rounded-full bg-violet-500" />
                  <span className="h-1.5 w-6 rounded-full bg-violet-500/60" />
                  <span className="h-1.5 w-10 rounded-full bg-white/10" />
                  <span className="h-1.5 w-4 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.06] py-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">Confiado por equipes inovadoras</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 opacity-70">
            <span className="text-sm font-bold tracking-tight text-white/80">NOTION</span>
            <span className="text-sm font-bold tracking-tight text-white/80">LINEAR</span>
            <span className="text-sm font-bold tracking-tight text-white/80">VERCEL</span>
            <span className="text-sm font-bold tracking-tight text-white/80">STRIPE</span>
            <span className="text-sm font-bold tracking-tight text-white/80">PERPLEXITY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
