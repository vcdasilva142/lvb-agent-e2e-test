export function Hero() {
  return (
    <section className="hero" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
      <div className="hero-left">
        <h1>Bem-vindo</h1>
        <button>Clique aqui</button>
      </div>
      <div className="hero-right" style={{ flex: "0 0 50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src="/uploads/CT-01-mtmdckbk-6891732a.png"
          alt="Imagem da hero"
          style={{ width: "100%", height: "auto", maxWidth: "520px", objectFit: "contain", display: "block" }}
        />
      </div>
    </section>
  );
}
