import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "ansh@houseofkriya.com";

// Custom hook-like function to attach scroll reveal to a set of elements
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
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
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
    <header
        className="w-full"
        data-testid="site-header"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-8 flex items-center justify-between">
            <a
                href="/"
                className="font-serif-display text-lg md:text-xl tracking-tight text-[color:var(--kriya-primary)] kriya-reveal"
                data-testid="brand-mark"
            >
                House of Kriyā
            </a>
            <span
                className="font-body text-[11px] md:text-xs tracking-[0.22em] uppercase text-[color:var(--kriya-accent)] kriya-reveal kriya-delay-1"
                data-testid="status-pill"
            >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--kriya-primary)] mr-2 align-middle"></span>
                In Motion
            </span>
        </div>
    </header>
);

const Hero = () => (
    <section
        className="relative pt-16 md:pt-24 lg:pt-32 pb-24 md:pb-32"
        data-testid="hero-section"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 relative">
            {/* Subtle Devanagari accent */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-4 md:-top-10 right-4 md:right-10 lg:right-16 font-devanagari text-[110px] md:text-[180px] lg:text-[220px] leading-none text-[color:var(--kriya-border)] opacity-70 kriya-reveal"
                data-testid="devanagari-accent"
            >
                क्रिया
            </div>

            <div className="relative">
                <p
                    className="font-body text-[11px] md:text-xs tracking-[0.28em] uppercase text-[color:var(--kriya-accent)] mb-8 md:mb-10 kriya-reveal kriya-delay-1"
                    data-testid="hero-eyebrow"
                >
                    Est. 2025 — India
                </p>

                <h1
                    className="font-serif-display font-normal text-[52px] leading-[1.02] md:text-[96px] lg:text-[128px] md:leading-[0.98] tracking-tight text-[color:var(--kriya-primary)] kriya-reveal kriya-delay-2"
                    data-testid="hero-title"
                >
                    House of
                    <br />
                    <span className="italic">Kriyā.</span>
                </h1>

                <p
                    className="mt-8 md:mt-12 font-body text-lg md:text-xl text-[color:var(--kriya-secondary)] max-w-md kriya-reveal kriya-delay-3"
                    data-testid="hero-subtitle"
                >
                    We&rsquo;re building.
                </p>
            </div>
        </div>
    </section>
);

const SectionLabel = ({ children, testid }) => (
    <p
        className="font-body text-[11px] tracking-[0.28em] uppercase text-[color:var(--kriya-accent)]"
        data-testid={testid}
    >
        {children}
    </p>
);

const Context = () => (
    <section
        className="py-20 md:py-28 lg:py-36 border-t border-[color:var(--kriya-border)]"
        data-testid="context-section"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4" data-reveal>
                <SectionLabel testid="context-label">01 — Context</SectionLabel>
            </div>
            <div className="md:col-span-8" data-reveal>
                <p
                    className="font-serif-display font-normal text-3xl md:text-4xl lg:text-5xl leading-snug tracking-tight text-[color:var(--kriya-primary)]"
                    data-testid="context-headline"
                >
                    A place where ideas turn into real businesses.
                </p>
                <p
                    className="mt-8 md:mt-10 font-body text-base md:text-lg leading-relaxed text-[color:var(--kriya-secondary)] max-w-2xl"
                    data-testid="context-body"
                >
                    We work across products, brands, and new opportunities —
                    building from scratch, with partners, and over time.
                </p>
            </div>
        </div>
    </section>
);

const StatusItem = ({ index, children, testid }) => (
    <li
        className="flex items-baseline gap-6 py-6 border-b border-[color:var(--kriya-border)] last:border-b-0"
        data-testid={testid}
        data-reveal
    >
        <span className="font-body text-xs tracking-[0.24em] text-[color:var(--kriya-accent)] w-8 shrink-0">
            {index}
        </span>
        <span className="font-serif-display text-xl md:text-2xl lg:text-3xl font-normal leading-snug text-[color:var(--kriya-primary)]">
            {children}
        </span>
    </li>
);

const Status = () => (
    <section
        className="py-20 md:py-28 lg:py-36 border-t border-[color:var(--kriya-border)]"
        data-testid="status-section"
    >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4" data-reveal>
                <SectionLabel testid="status-label">02 — Status</SectionLabel>
                <h2
                    className="mt-6 font-serif-display font-normal text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-[color:var(--kriya-primary)]"
                    data-testid="status-heading"
                >
                    Currently
                    <br />
                    <span className="italic">in motion.</span>
                </h2>
            </div>
            <div className="md:col-span-8">
                <ul data-testid="status-list">
                    <StatusItem index="I" testid="status-item-1">
                        A few things in development.
                    </StatusItem>
                    <StatusItem index="II" testid="status-item-2">
                        Early partnerships forming.
                    </StatusItem>
                    <StatusItem index="III" testid="status-item-3">
                        More coming soon.
                    </StatusItem>
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
            <div className="md:col-span-4" data-reveal>
                <SectionLabel testid="philosophy-label">
                    03 — Philosophy
                </SectionLabel>
            </div>
            <div className="md:col-span-8" data-reveal>
                <p
                    className="font-serif-display font-normal text-3xl md:text-4xl lg:text-5xl leading-snug tracking-tight text-[color:var(--kriya-primary)]"
                    data-testid="philosophy-line-1"
                >
                    <span className="font-devanagari text-[color:var(--kriya-accent)] mr-3">
                        क्रिया
                    </span>
                    <span className="italic">Kriyā</span> means action.
                </p>
                <p
                    className="mt-6 md:mt-8 font-serif-display font-normal text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight text-[color:var(--kriya-secondary)] max-w-2xl"
                    data-testid="philosophy-line-2"
                >
                    We focus on building — and letting the work speak.
                </p>
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
                <SectionLabel testid="cta-label">04 — Get in Touch</SectionLabel>
                <p
                    className="mt-6 md:mt-8 font-serif-display font-normal text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[color:var(--kriya-primary)]"
                    data-testid="cta-headline"
                >
                    If you&rsquo;re building something{" "}
                    <span className="italic">interesting</span> —
                </p>

                <div className="mt-10 md:mt-14">
                    <a
                        href={`mailto:${EMAIL}?subject=Let%27s%20build%20%E2%80%94%20House%20of%20Kriy%C4%81`}
                        className="group inline-flex items-center gap-3 rounded-full border border-[color:var(--kriya-primary)] px-8 py-4 font-body text-sm tracking-wide text-[color:var(--kriya-primary)] transition-colors duration-300 hover:bg-[color:var(--kriya-primary)] hover:text-[color:var(--kriya-bg)]"
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
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
                <p
                    className="font-serif-display text-lg md:text-xl tracking-tight text-[color:var(--kriya-primary)]"
                    data-testid="footer-brand"
                >
                    House of Kriyā
                </p>
                <p
                    className="mt-1 font-body text-xs tracking-[0.2em] uppercase text-[color:var(--kriya-accent)]"
                    data-testid="footer-tagline"
                >
                    In motion · MMXXV
                </p>
            </div>
            <a
                href={`mailto:${EMAIL}`}
                className="font-body text-sm md:text-base text-[color:var(--kriya-primary)] underline decoration-[color:var(--kriya-accent)] underline-offset-[6px] hover:decoration-[color:var(--kriya-primary)] transition-colors duration-300"
                data-testid="footer-email"
            >
                {EMAIL}
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
            <Status />
            <Philosophy />
            <CTA />
            <Footer />
        </main>
    );
}
