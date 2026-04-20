import { useEffect, useRef } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const EMAIL = "ansh@houseofkriya.com";

// IntersectionObserver-based subtle reveal on scroll
function useScrollReveal() {
    const containerRef = useRef(null);

    useEffect(() => {
        const root = containerRef.current;
        if (!root) return;

        const targets = root.querySelectorAll("[data-reveal]");
        if (!targets.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("kriya-scroll-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        targets.forEach((el) => {
            el.classList.add("kriya-scroll-init");
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return containerRef;
}

const Nav = () => (
    <header className="w-full" data-testid="site-header">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-8 flex items-center justify-between">
            <a
                href="/"
                className="font-display font-medium text-base md:text-lg tracking-tight text-[color:var(--kriya-primary)]"
                data-testid="brand-mark"
            >
                House of Kriyā
            </a>
        </div>
    </header>
);

const Hero = () => (
    <section
        className="relative pt-12 md:pt-20 lg:pt-28 pb-24 md:pb-32"
        data-testid="hero-section"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 relative">
            {/* Subtle Devanagari accent */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-2 md:-top-6 right-4 md:right-10 lg:right-16 font-devanagari text-[96px] md:text-[160px] lg:text-[200px] leading-none text-[color:var(--kriya-border)] opacity-70"
                data-testid="devanagari-accent"
            >
                क्रिया
            </div>

            <div className="relative">
                <h1
                    className="font-display font-semibold text-[56px] leading-[1.02] md:text-[104px] lg:text-[136px] md:leading-[0.96] text-[color:var(--kriya-primary)]"
                    data-testid="hero-title"
                >
                    House of
                    <br />
                    Kriyā.
                </h1>

                <p
                    className="mt-8 md:mt-10 font-body font-normal text-lg md:text-xl text-[color:var(--kriya-secondary)] max-w-md"
                    data-testid="hero-subtitle"
                >
                    We&rsquo;re building.
                </p>

                <div
                    className="mt-8 md:mt-10 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--kriya-border)] bg-[color:var(--kriya-surface)] pl-3 pr-4 py-1.5"
                    data-testid="hero-status-pill"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--kriya-primary)] opacity-40 animate-[kriyaPing_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--kriya-primary)]"></span>
                    </span>
                    <span className="font-body text-[11px] md:text-xs tracking-[0.18em] uppercase text-[color:var(--kriya-primary)]">
                        In motion — more coming soon
                    </span>
                </div>
            </div>
        </div>
    </section>
);

const Context = () => (
    <section
        className="py-20 md:py-28 lg:py-36 border-t border-[color:var(--kriya-border)]"
        data-testid="context-section"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div
                className="md:col-span-4 flex items-start justify-start mb-2 md:mb-0"
                data-reveal
                aria-hidden="true"
            >
                <svg
                    viewBox="0 0 160 180"
                    className="w-20 md:w-28 lg:w-36 text-[color:var(--kriya-accent)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-testid="context-house-mark"
                >
                    {/* Torana-inspired house mark */}
                    <path d="M20 170 L20 80" />
                    <path d="M140 170 L140 80" />
                    <path d="M20 80 Q80 0 140 80" />
                    <path d="M55 170 L55 112 Q80 64 105 112 L105 170" />
                    <path d="M80 10 L80 22" />
                    <circle cx="80" cy="34" r="2.2" fill="currentColor" stroke="none" />
                    <path d="M12 170 L148 170" strokeWidth="1" />
                </svg>
            </div>
            <div className="md:col-span-8" data-reveal>
                <p
                    className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-[color:var(--kriya-primary)]"
                    data-testid="context-headline"
                >
                    A place where ideas turn into real businesses.
                </p>
                <p
                    className="mt-6 md:mt-8 font-body text-base md:text-lg leading-relaxed text-[color:var(--kriya-secondary)] max-w-2xl"
                    data-testid="context-body"
                >
                    We build across products, brands, and new opportunities —
                    from scratch, with partners, and over time.
                </p>
            </div>
        </div>
    </section>
);

const FOCUS_AREAS = [
    {
        title: "Consumer & Brands",
        desc: "Culture-first products, creator-led brands, and new formats.",
    },
    {
        title: "Software & Apps",
        desc: "Consumer apps, tools, and internet products.",
    },
    {
        title: "IP & Experiences",
        desc: "Media, formats, events, and cultural IP.",
    },
    {
        title: "Partnerships & Market Entry",
        desc: "Joint ventures, collaborations, and launching into new markets.",
    },
    {
        title: "Publishing & Distribution",
        desc: "Publishing, licensing, and regional distribution across digital and physical products.",
    },
];

const Focus = () => (
    <section
        className="py-20 md:py-28 lg:py-36 border-t border-[color:var(--kriya-border)]"
        data-testid="focus-section"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4" data-reveal>
                <h2
                    className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-[color:var(--kriya-primary)]"
                    data-testid="focus-heading"
                >
                    What we&rsquo;re working across.
                </h2>
            </div>
            <div className="md:col-span-8">
                <ul data-testid="focus-list" className="divide-y divide-[color:var(--kriya-border)] border-t border-[color:var(--kriya-border)]">
                    {FOCUS_AREAS.map((item, idx) => (
                        <li
                            key={item.title}
                            className="py-6 md:py-7 grid grid-cols-12 gap-4 md:gap-8"
                            data-testid={`focus-item-${idx + 1}`}
                            data-reveal
                        >
                            <span className="col-span-1 font-body text-xs tracking-[0.2em] text-[color:var(--kriya-accent)] pt-1">
                                {String(idx + 1).padStart(2, "0")}
                            </span>
                            <div className="col-span-11 md:grid md:grid-cols-12 md:gap-8">
                                <h3 className="md:col-span-5 font-display font-semibold text-xl md:text-2xl tracking-tight text-[color:var(--kriya-primary)]">
                                    {item.title}
                                </h3>
                                <p className="md:col-span-7 mt-2 md:mt-0 font-body text-sm md:text-base leading-relaxed text-[color:var(--kriya-secondary)]">
                                    {item.desc}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

const Philosophy = () => (
    <section
        className="py-20 md:py-28 lg:py-36 border-t border-[color:var(--kriya-border)]"
        data-testid="philosophy-section"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div
                className="md:col-span-4 flex items-start justify-start mb-2 md:mb-0"
                data-reveal
                aria-hidden="true"
            >
                <svg
                    viewBox="0 0 180 180"
                    className="w-24 md:w-32 lg:w-40 text-[color:var(--kriya-accent)] kriya-spin-slow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    data-testid="philosophy-chakra-mark"
                >
                    {/* Chakra / wheel of action */}
                    <circle cx="90" cy="90" r="74" />
                    <circle cx="90" cy="90" r="52" />
                    <circle cx="90" cy="90" r="28" />
                    <line x1="90" y1="12" x2="90" y2="168" />
                    <line x1="12" y1="90" x2="168" y2="90" />
                    <line x1="35" y1="35" x2="145" y2="145" />
                    <line x1="145" y1="35" x2="35" y2="145" />
                    <line x1="90" y1="22" x2="90" y2="34" strokeWidth="1.5" />
                    <line x1="90" y1="146" x2="90" y2="158" strokeWidth="1.5" />
                    <line x1="22" y1="90" x2="34" y2="90" strokeWidth="1.5" />
                    <line x1="146" y1="90" x2="158" y2="90" strokeWidth="1.5" />
                    <circle cx="90" cy="90" r="3" fill="currentColor" stroke="none" />
                </svg>
            </div>
            <div className="md:col-span-8" data-reveal>
                <p
                    className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-[color:var(--kriya-primary)]"
                    data-testid="philosophy-line-1"
                >
                    Kriyā means action.
                </p>
                <p
                    className="mt-5 md:mt-6 font-display font-medium text-2xl md:text-3xl lg:text-4xl leading-[1.2] text-[color:var(--kriya-secondary)] max-w-2xl"
                    data-testid="philosophy-line-2"
                >
                    We focus on building — and letting the work speak.
                </p>

                <div
                    className="mt-10 md:mt-14 pt-8 border-t border-[color:var(--kriya-border)] max-w-md"
                    data-testid="philosophy-sanskrit-block"
                >
                    <p className="font-devanagari text-xl md:text-2xl text-[color:var(--kriya-primary)]">
                        क्रिया से सृजन।
                    </p>
                    <p className="mt-2 font-body text-sm md:text-base tracking-wide text-[color:var(--kriya-accent)]">
                        Creation through action.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const CTA = () => (
    <section
        className="py-24 md:py-32 lg:py-44 border-t border-[color:var(--kriya-border)]"
        data-testid="cta-section"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="max-w-3xl" data-reveal>
                <p
                    className="font-display font-semibold text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[color:var(--kriya-primary)]"
                    data-testid="cta-headline"
                >
                    Have something worth building? Let&rsquo;s build it together.
                </p>

                <div className="mt-10 md:mt-14">
                    <a
                        href={`mailto:${EMAIL}?subject=Let%27s%20build%20%E2%80%94%20House%20of%20Kriy%C4%81`}
                        target="_top"
                        rel="noopener"
                        className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--kriya-primary)] px-8 py-4 font-body font-medium text-sm tracking-wide text-[color:var(--kriya-bg)] transition-transform duration-300 hover:-translate-y-0.5"
                        data-testid="cta-build-button"
                    >
                        <span>Let&rsquo;s build.</span>
                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer
        className="border-t border-[color:var(--kriya-border)]"
        data-testid="site-footer"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
                <p
                    className="font-display font-semibold text-xl md:text-2xl tracking-tight text-[color:var(--kriya-primary)]"
                    data-testid="footer-brand"
                >
                    House of Kriyā
                </p>
                <p
                    className="mt-1.5 font-body text-xs tracking-[0.18em] uppercase text-[color:var(--kriya-accent)]"
                    data-testid="footer-tagline"
                >
                    Currently in motion — more coming soon.
                </p>
            </div>

            <a
                href={`mailto:${EMAIL}`}
                target="_top"
                rel="noopener"
                className="group inline-flex items-center gap-3 rounded-full border border-[color:var(--kriya-primary)] bg-transparent px-6 py-3 font-body font-medium text-sm tracking-wide text-[color:var(--kriya-primary)] transition-colors duration-300 hover:bg-[color:var(--kriya-primary)] hover:text-[color:var(--kriya-bg)]"
                data-testid="footer-email-button"
                aria-label={`Email ${EMAIL}`}
            >
                <Mail size={15} />
                <span>Get in touch</span>
            </a>
        </div>
    </footer>
);

export default function Landing() {
    const containerRef = useScrollReveal();

    return (
        <main
            ref={containerRef}
            className="min-h-screen bg-[color:var(--kriya-bg)] text-[color:var(--kriya-primary)] antialiased"
            data-testid="landing-page"
        >
            <Nav />
            <Hero />
            <Context />
            <Focus />
            <Philosophy />
            <CTA />
            <Footer />
        </main>
    );
}
