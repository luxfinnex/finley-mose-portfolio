import { useEffect, useState } from "react"
import finleyPortrait from "./imports/Professional_Portrait_with_Modern_Campus_Bokeh.png"

type IconName = "arrow" | "close" | "code" | "external" | "github" | "instagram" | "linkedin" | "mail" | "menu" | "phone" | "tiktok" | "whatsapp"

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5M20 4l-9 9" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5.1 5.1 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 19c-3 .9-3-1.5-4-2" />
      </>
    ),
    linkedin: (
      <>
        <path d="M4 4h.01M4 8v12M9 8v12M9 12a4 4 0 0 1 8 0v8" />
        <circle cx="4" cy="4" r="1.2" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
      </>
    ),
    tiktok: (
      <>
        <path d="M9 18a4 4 0 1 1-4-4" />
        <path d="M9 18V3h4c.4 3 2 5 5 5v4c-2 0-3.8-.7-5-2v8" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.3L3 20.3l1.4-5a8.4 8.4 0 1 1 16.1-3.7Z" />
        <path d="M8.2 7.6c.3-.6.6-.6.9-.6h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.3.4-.1.7.6 1.1 1.4 2 2.5 2.6.3.2.5.2.7-.1l.9-1c.2-.2.4-.3.7-.2l2 .9c.3.1.5.2.5.4 0 .2-.1 1.3-.6 1.8-.5.6-1.2.8-2 .8-.7 0-1.7-.2-3.4-1.1-2.1-1.1-3.5-2.8-4.4-4.2-.8-1.2-1-2.2-1-3 0-.8.4-1.5.7-1.9Z" />
      </>
    ),
  }
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const projects = [
  {
    id: "lux-finnex",
    number: "01",
    name: "LUX Finnex",
    tagline: "Where Price Is Always Right.",
    type: "Price comparison concept",
    description:
      "A product concept designed to make comparison shopping feel clear and considered—helping shoppers review options, understand price differences, and make informed purchasing decisions.",
    image: "./assets/lux-finnex-mockup.svg",
    url: "",
    accent: "violet",
    tech: [
      "Product design",
      "Web development",
      "Data comparison",
      "Responsive UI",
    ],
    note: "Illustrative interface mockup — not a live product screenshot.",
  },
  {
    id: "lux-services",
    number: "02",
    name: "LUX Services",
    tagline: "Everyday services, made easier.",
    type: "Digital marketplace concept",
    description:
      "A Kenya-friendly marketplace concept exploring a simple way to discover and connect with convenient local services through a trustworthy, mobile-first experience.",
    image: "./assets/lux-services-mockup.svg",
    url: "",
    accent: "green",
    tech: [
      "Marketplace UX",
      "Service discovery",
      "Mobile-first",
      "Kenyan context",
    ],
    note: "Illustrative interface mockup — not a live product screenshot.",
  },
  {
    id: "dairyflow",
    number: "03",
    name: "DairyFlow",
    tagline: "Farm records. Better organized.",
    type: "Farm management application",
    description:
      "A dairy farm management project focused on organizing production records, animal information, and daily operations, with offline-friendly functionality as a core design goal.",
    image: "./assets/dairyflow-mockup.svg",
    url: "https://dairy-milk.lovable.app",
    accent: "cyan",
    tech: [
      "Offline-first thinking",
      "Data records",
      "Dashboard design",
      "Farm operations",
    ],
    note: "Illustrative dashboard with demonstration data only.",
  },
  {
    id: "lux-ai",
    number: "04",
    name: "Offline AI USB",
    tagline: "Local intelligence, explored.",
    type: "LUX-AI personal experiment",
    description:
      "A personal project exploring how local AI models can run on a Windows computer from a USB drive using llama.cpp—focused on hands-on learning, portability, and private local workflows.",
    image: "./assets/offline-ai-usb.svg",
    url: "",
    accent: "gold",
    tech: ["llama.cpp", "Local AI models", "Windows", "USB portability"],
    note: "Concept visualization of the documented experiment.",
  },
]

const gallery = [
  {
    src: "./assets/gallery/workspace-coding.jpg",
    title: "Focused workspace",
    label: "Reference photography",
    span: "wide",
    credit: "Photo: Mohammad Rahmani / Unsplash",
  },
  {
    src: "./assets/lux-finnex-mockup.svg",
    title: "LUX Finnex exploration",
    label: "Illustrative mockup",
    span: "",
  },
  {
    src: "./assets/gallery/code-screen.jpg",
    title: "Building in code",
    label: "Reference photography",
    span: "tall",
    credit: "Photo: Jakub Żerdzicki / Unsplash",
  },
  {
    src: "./assets/dairyflow-mockup.svg",
    title: "DairyFlow dashboard",
    label: "Demonstration data",
    span: "",
  },
  {
    src: "./assets/gallery/study-workspace.jpg",
    title: "Study. Think. Iterate.",
    label: "Reference photography",
    span: "wide",
    credit: "Photo: Ghost / Unsplash",
  },
  {
    src: "./assets/lux-services-mockup.svg",
    title: "Service marketplace UI",
    label: "Illustrative mockup",
    span: "",
  },
  {
    src: "./assets/offline-ai-usb.svg",
    title: "Offline AI setup",
    label: "Concept visualization",
    span: "",
  },
  {
    src: "./assets/gallery/multi-screen.jpg",
    title: "Systems in motion",
    label: "Reference photography",
    span: "wide",
    credit: "Photo: Jakub Żerdzicki / Unsplash",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null)
        setMenuOpen(false)
      }
      if (lightbox !== null && event.key === "ArrowRight")
        setLightbox((lightbox + 1) % gallery.length)
      if (lightbox !== null && event.key === "ArrowLeft")
        setLightbox((lightbox - 1 + gallery.length) % gallery.length)
    }
    document.addEventListener("keydown", handleKey)
    document.body.classList.toggle("no-scroll", lightbox !== null)
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.classList.remove("no-scroll")
    }
  }, [lightbox])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Finley Mose home"
        >
          <span className="brand-mark">FM</span>
          <span className="brand-copy">
            <strong>FINLEY MOSE</strong>
            <small>LUX ENTERPRISE</small>
          </span>
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <nav
          id="site-nav"
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Primary navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#gallery" onClick={closeMenu}>
            Behind the scenes
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <a className="header-cta" href="#contact">
          Let's connect <Icon name="arrow" />
        </a>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal">
                <span /> Founder of LUX Enterprise
              </p>
              <h1 className="hero-title reveal">
                <span>Finley</span>
                <span className="outline">Mose.</span>
              </h1>
              <p className="hero-intro reveal">
                Kenyan digital creator, Computer Science student, and
                entrepreneur exploring software, AI, databases, and practical
                products built for real life.
              </p>
              <div className="hero-actions reveal">
                <a className="button button-primary" href="#projects">
                  Explore my projects <Icon name="arrow" />
                </a>
                <a className="button button-ghost" href="#contact">
                  Contact me
                </a>
              </div>
              <p className="hero-tagline reveal">
                One Vision. <em>Endless Possibilities.</em>
              </p>
            </div>

            <div className="hero-visual reveal">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="portrait-frame">
                <img
                  src={finleyPortrait}
                  alt="Professional portrait of Finley Mose"
                />
              </div>
              <div className="status-chip">
                <span className="status-dot" /> Building under the LUX brand
              </div>
              <div
                className="terminal"
                aria-label="Animated demonstration code"
              >
                <div className="terminal-bar">
                  <span />
                  <span />
                  <span />
                  <small>vision.py</small>
                </div>
                <div className="terminal-code">
                  <p>
                    <b>class</b> <i>Vision</i>:
                  </p>
                  <p className="indent">
                    <b>def</b> build(self):
                  </p>
                  <p className="indent-2">
                    learn(<q>deeply</q>)
                  </p>
                  <p className="indent-2">
                    create(<q>boldly</q>)
                  </p>
                  <p className="indent-2">
                    grow(<span>true</span>)<span className="cursor" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <span>Based in Kenya · Thinking globally</span>
            <a href="#about">
              Scroll to discover <span className="scroll-line" />
            </a>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">
              <span /> About me
            </p>
            <h2>
              Curiosity, shaped
              <br />
              into <em>useful things.</em>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-statement reveal">
              <p className="lead">
                I’m at the beginning of a long journey—and I’m building with
                intention.
              </p>
              <p>
                I’m Finley, a Kenyan digital creator and first-year Computer
                Science student at Kisii University. I’m drawn to the way
                software can turn an idea into something practical, accessible,
                and genuinely useful.
              </p>
              <p>
                Through LUX Enterprise, I’m exploring product concepts across
                commerce, services, agriculture, and local AI. My approach is
                simple: study the fundamentals, build consistently, and let
                every project teach me something new.
              </p>
              <div className="principles">
                <div>
                  <strong>01</strong>
                  <span>Learn with discipline</span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>Design with purpose</span>
                </div>
                <div>
                  <strong>03</strong>
                  <span>Build for the long term</span>
                </div>
              </div>
            </div>
            <aside className="timeline reveal" aria-label="Education timeline">
              <p className="mini-heading">Education / Journey</p>
              <div className="timeline-item">
                <span className="timeline-year">2026 — Present</span>
                <h3>BSc. Computer Science</h3>
                <p>Kisii University · First year</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">Completed 2025</span>
                <h3>Secondary Education</h3>
                <p>Segero Adventist High School</p>
              </div>
              <div className="timeline-note">
                <Icon name="code" />
                <p>
                  Currently building personal projects and developing technical
                  foundations under the LUX brand.
                </p>
              </div>
            </aside>
          </div>

          <div className="skills-block reveal">
            <div>
              <p className="eyebrow">
                <span /> Technology interests
              </p>
              <h3>
                What I’m learning
                <br />
                and building with.
              </h3>
            </div>
            <div className="skill-list">
              {[
                "Python",
                "Web Development",
                "Databases",
                "Artificial Intelligence",
                "Software Engineering",
                "Full-Stack Development",
              ].map((skill, index) => (
                <div className="skill-row" key={skill}>
                  <span>0{index + 1}</span>
                  <strong>{skill}</strong>
                  <i />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-heading project-heading reveal">
            <div>
              <p className="eyebrow">
                <span /> Selected projects
              </p>
              <h2>
                Ideas in
                <br />
                <em>motion.</em>
              </h2>
            </div>
            <p>
              Four explorations under the LUX vision—each grounded in learning,
              useful systems, and thoughtful digital experiences.
            </p>
          </div>

          <div className="project-index reveal" aria-label="Project index">
            {projects.map((project) => (
              <a href={`#${project.id}`} key={project.id}>
                <span>{project.number}</span>
                {project.name}
              </a>
            ))}
          </div>

          <div className="project-showcases">
            {projects.map((project, index) => (
              <article
                className={`project-showcase reveal accent-${project.accent}`}
                id={project.id}
                key={project.id}
              >
                <div className="project-media">
                  <span className="mockup-label">Illustrative mockup</span>
                  <img
                    src={project.image}
                    alt={`${project.name} illustrative interface mockup`}
                    loading="lazy"
                  />
                </div>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-description">{project.description}</p>
                  <ul
                    className="tech-list"
                    aria-label={`${project.name} technologies and concepts`}
                  >
                    {project.tech.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href={project.url || project.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.url ? "Visit live project" : "View project mockup"} <Icon name="external" />
                  </a>
                  <small className="project-note">{project.note}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="gallery-heading reveal">
            <p className="eyebrow">
              <span /> Behind the scenes
            </p>
            <h2>
              Code. Study.
              <br />
              Build. <em>Grow.</em>
            </h2>
            <p>
              A visual journal of the environments, interfaces, and systems that
              inspire the work. Photography is reference imagery; product
              screens are illustrative mockups.
            </p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <button
                className={`gallery-card reveal ${item.span}`}
                type="button"
                onClick={() => setLightbox(index)}
                key={`${item.src}-${index}`}
                aria-label={`Open ${item.title} in lightbox`}
              >
                <img src={item.src} alt="" loading="lazy" />
                <span className="gallery-overlay">
                  <small>{item.label}</small>
                  <strong>{item.title}</strong>
                  <i>
                    <Icon name="external" />
                  </i>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-top reveal">
            <p className="eyebrow">
              <span /> Start a conversation
            </p>
            <h2>
              Let’s build what
              <br />
              comes <em>next.</em>
            </h2>
            <p>
              I’m always open to thoughtful conversations about technology,
              ideas, learning, and future collaboration.
            </p>
          </div>
          <div className="contact-grid reveal">
            <a
              className="contact-primary"
              href="mailto:finleymose591@gmail.com"
            >
              <span>Email me</span>
              <strong>finleymose591@gmail.com</strong>
              <Icon name="arrow" />
            </a>
            <div className="contact-links">
              <a href="tel:+254748642352">
                <Icon name="phone" />
                <span>
                  <small>Phone</small>+254 748 642 352
                </span>
              </a>
              <a
                href="https://wa.me/254734382054"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="whatsapp" />
                <span>
                  <small>WhatsApp</small>+254 734 382 054
                </span>
              </a>
              <a
                href="https://github.com/luxfinnex"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" />
                <span>
                  <small>GitHub</small>@luxfinnex
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/finley-m-82b1703a2/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" />
                <span>
                  <small>LinkedIn</small>Finley Mose
                </span>
              </a>
              <a
                href="https://www.instagram.com/lux_finnex/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="instagram" />
                <span>
                  <small>Instagram</small>@lux_finnex
                </span>
              </a>
              <a
                href="https://www.tiktok.com/@lux_finnex"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="tiktok" />
                <span>
                  <small>TikTok</small>@lux_finnex
                </span>
              </a>
              <a href="./downloads/finley-mose-portfolio.zip" download>
                <Icon name="code" />
                <span>
                  <small>Source package</small>Download portfolio ZIP
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home" aria-label="Back to top">
          <span className="brand-mark">FM</span>
          <span className="brand-copy">
            <strong>FINLEY MOSE</strong>
            <small>LUX ENTERPRISE</small>
          </span>
        </a>
        <p>One Vision. Endless Possibilities.</p>
        <div>
          <span>© {new Date().getFullYear()} Finley Mose</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${gallery[lightbox].title} image viewer`}
          onClick={() => setLightbox(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <Icon name="close" />
          </button>
          <button
            className="lightbox-arrow prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setLightbox((lightbox - 1 + gallery.length) % gallery.length)
            }}
            aria-label="Previous image"
          >
            ←
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={gallery[lightbox].src} alt={gallery[lightbox].title} />
            <figcaption>
              <span>{gallery[lightbox].label}</span>
              <strong>{gallery[lightbox].title}</strong>
              {gallery[lightbox].credit && (
                <small>{gallery[lightbox].credit}</small>
              )}
            </figcaption>
          </figure>
          <button
            className="lightbox-arrow next"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setLightbox((lightbox + 1) % gallery.length)
            }}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </div>
  )
}
