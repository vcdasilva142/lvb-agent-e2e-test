export function Hero() {
  return (
    <section
      className="hero lvb-e2e-mtmdbe5u-cc257ff1"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
        padding: "88px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minHeight: "560px",
        borderRadius: "28px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(600px 300px at 50% 0%, rgba(99,102,241,0.25), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "680px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <span
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#e0e7ff",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: "999px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: 999,
              background: "#22c55e",
              boxShadow: "0 0 8px rgba(34,197,94,0.6)",
              display: "inline-block",
            }}
          />
          Novo — Design premium
        </span>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 52px)",
            lineHeight: 1.05,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Bem-vindo a uma
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #a5b4fc, #f0abfc 50%, #93c5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            experiência extraordinária
          </span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#cbd5e1", maxWidth: "540px", margin: "4px 0 8px" }}>
          Design minimalista, performance e elegância em cada detalhe. Feito para impressionar e converter desde o primeiro clique.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "6px" }}>
          <button
            style={{
              background: "#fff",
              color: "#1e1b4b",
              fontSize: "15px",
              fontWeight: 700,
              padding: "14px 26px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            Clique aqui →
          </button>
          <button
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 26px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
            }}
          >
            Ver demonstração
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginTop: "10px",
            color: "#94a3b8",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          <span>
            <span style={{ color: "#facc15" }}>★★★★★</span> 4.9/5
          </span>
          <span style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.15)" }} />
          <span>+2.400 clientes satisfeitos</span>
        </div>
      </div>
    </section>
  );
}
