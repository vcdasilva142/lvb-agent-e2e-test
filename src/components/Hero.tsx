import "./Hero.css";

export interface HeroProps {
  /** Badge exibido acima do título (ex.: "Novo"). Omita para não exibir. */
  eyebrow?: string;
  /** Título principal — mantenha como único <h1> da página. */
  title?: string;
  /** Parágrafo curto com a proposta de valor. */
  subtitle?: string;
  /** Rótulo do CTA principal. */
  ctaLabel?: string;
  /** Chamado no clique do CTA principal. Se ausente, o CTA vira âncora. */
  onCtaClick?: () => void;
  /** Destino do CTA principal quando onCtaClick não é informado. */
  ctaHref?: string;
  /** Rótulo do segundo CTA. Omita para não exibir. */
  secondaryCtaLabel?: string;
  /** Destino do segundo CTA. */
  secondaryCtaHref?: string;
  /** URL da imagem da coluna direita. Se ausente, mostra um placeholder. */
  imageUrl?: string;
  /** Texto alternativo da imagem/placeholder. */
  imageAlt?: string;
  /** id aplicado ao <h1>, referenciado pelo aria-labelledby da seção. */
  titleId?: string;
}

export function Hero({
  eyebrow = "Novo",
  title = "Bem-vindo",
  subtitle = "Crie sua conta em 2 minutos e comece hoje mesmo.",
  ctaLabel = "Começar agora",
  onCtaClick,
  ctaHref = "#",
  secondaryCtaLabel = "Saiba mais",
  secondaryCtaHref = "#",
  imageUrl,
  imageAlt = "Ilustração do produto",
  titleId = "hero-title",
}: HeroProps) {
  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__container">
        <div className="hero__content">
          {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
          <h1 className="hero__title" id={titleId}>
            {title}
          </h1>
          {subtitle ? <p className="hero__subtitle">{subtitle}</p> : null}
          <div className="hero__actions">
            {onCtaClick ? (
              <button
                type="button"
                className="hero__cta"
                onClick={onCtaClick}
              >
                {ctaLabel}
              </button>
            ) : (
              <a className="hero__cta" href={ctaHref}>
                {ctaLabel}
              </a>
            )}
            {secondaryCtaLabel ? (
              <a
                className="hero__cta hero__cta--secondary"
                href={secondaryCtaHref}
              >
                {secondaryCtaLabel}
              </a>
            ) : null}
          </div>
        </div>
        <div className="hero__media">
          {imageUrl ? (
            <img className="hero__image" src={imageUrl} alt={imageAlt} />
          ) : (
            <div
              className="hero__placeholder"
              role="img"
              aria-label={imageAlt}
            >
              <span aria-hidden="true">Sua imagem aqui</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
