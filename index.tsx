import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rigveda Chowdary — Full Stack Developer & CSE Student" },
      {
        name: "description",
        content:
          "Portfolio of Rigveda Chowdary — B.Tech CSE student at BVRIT, Full Stack Web Development Intern, and Toastmasters leader.",
      },
      { property: "og:title", content: "Rigveda Chowdary — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Web Developer, Toastmasters leader, and CSE student building impactful digital experiences.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700family=Figtree:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: "/portfolio.css" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const onScroll = () => {
      if (window.scrollY > 20) nav?.classList.add("scrolled");
      else nav?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const toggleMenu = () => navLinks?.classList.toggle("open");
    menuBtn?.addEventListener("click", toggleMenu);
    navLinks?.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("open"))
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Subtle tile tilt on mouse move
    const tiles = document.querySelectorAll<HTMLElement>(".tile-featured, .hero-card");
    const handlers: Array<() => void> = [];
    tiles.forEach((tile) => {
      const onMove = (ev: MouseEvent) => {
        const r = tile.getBoundingClientRect();
        const x = ((ev.clientX - r.left) / r.width - 0.5) * 6;
        const y = ((ev.clientY - r.top) / r.height - 0.5) * -6;
        tile.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
      };
      const onLeave = () => {
        tile.style.transform = "";
      };
      tile.addEventListener("mousemove", onMove);
      tile.addEventListener("mouseleave", onLeave);
      handlers.push(() => {
        tile.removeEventListener("mousemove", onMove);
        tile.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      menuBtn?.removeEventListener("click", toggleMenu);
      handlers.forEach((fn) => fn());
    };
  }, []);

  const skills = [
    "HTML", "CSS", "JavaScript", "Firebase", "GitHub", "Node.js",
    "React (basics)", "UI/UX Design", "Leadership", "Public Speaking",
  ];

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#home" className="logo">
            Rigveda<span>.</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button className="menu-btn" aria-label="Toggle menu">☰</button>
        </div>
      </header>

      <main id="home">
        {/* HERO BENTO */}
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-card">
                <span className="hero-greet">
                  <span className="dot" /> Available for opportunities
                </span>
                <h1>
                  Rigveda<br />
                  <span className="accent">Chowdary</span>
                </h1>
                <p className="hero-sub">
                  Full Stack Web Developer, Toastmasters leader, and CSE student
                  passionate about building impactful digital experiences.
                </p>
                <div className="hero-ctas">
                  <a href="#projects" className="btn btn-primary">View Projects →</a>
                  <a href="#contact" className="btn btn-ghost">Contact Me</a>
                </div>
              </div>

              <div className="hero-side">
                <div className="hero-tile">
                  <div className="label">Currently</div>
                  <div className="big serif">
                    Full Stack <em className="italic">Intern</em>
                  </div>
                  <div className="sm">@ Future Interns</div>
                </div>
                <div className="hero-tile accent">
                  <div className="label">Studying</div>
                  <div className="big serif">
                    B.Tech <em className="italic">CSE</em>
                  </div>
                  <div className="sm">at BVRIT</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="container">
            <div className="section-head reveal">
              <div className="section-tag">About</div>
              <h2 className="section-title">
                A student of <em>code,</em> design, and people.
              </h2>
            </div>

            <div className="bento about-bento">
              <div className="tile tile-about reveal">
                <p>
                  I'm a <strong>B.Tech Computer Science</strong> student at{" "}
                  <strong>BVRIT</strong>, where I split my time between writing code,
                  designing interfaces, and leading teams.
                </p>
                <p>
                  I care deeply about <strong>web development and UI/UX</strong> —
                  building things that look honest, work fast, and feel human.
                </p>
                <p>
                  Through my time as President of <strong>BVRIT-N Toastmasters</strong>,
                  I've grown to love the craft of leading people and building
                  <strong> meaningful student-focused platforms.</strong>
                </p>
              </div>

              <div className="tile tile-fact reveal">
                <div>
                  <div className="num">3<em>+</em></div>
                  <div className="lbl">Projects shipped</div>
                </div>
              </div>
              <div className="tile tile-fact reveal">
                <div>
                  <div className="num">2<em>+</em></div>
                  <div className="lbl">Years coding</div>
                </div>
              </div>
              <div className="tile tile-fact reveal">
                <div>
                  <div className="num">1</div>
                  <div className="lbl">Toastmasters chapter led</div>
                </div>
              </div>
              <div className="tile tile-fact reveal">
                <div>
                  <div className="num serif"><em>∞</em></div>
                  <div className="lbl">Ideas brewing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="container">
            <div className="section-head reveal">
              <div className="section-tag">Toolkit</div>
              <h2 className="section-title">
                Skills <em>I lean on</em> daily.
              </h2>
            </div>

            <div className="bento">
              <div className="tile skills-tile reveal">
                <p style={{ color: "var(--ink-soft)", maxWidth: 620 }}>
                  A mix of technical chops and human skills — because shipping
                  software is just as much about people as it is about code.
                </p>
                <div className="skills-grid">
                  {skills.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <div className="section-head reveal">
              <div className="section-tag">Selected Work</div>
              <h2 className="section-title">
                Things I've <em>built</em> & shipped.
              </h2>
            </div>

            <div className="bento projects-bento">
              <article className="tile tile-featured reveal">
                <div className="tile-arrow">↗</div>
                <div>
                  <div className="project-badge">Flagship · Campus</div>
                  <h3 className="serif">ASSEMBLE</h3>
                  <p>
                    A campus collaboration and hackathon team formation platform —
                    helping students discover collaborators, form balanced teams,
                    and ship together.
                  </p>
                </div>
                <div className="project-tags">
                  <span>React</span><span>Firebase</span><span>Node.js</span><span>UI/UX</span>
                </div>
              </article>

              <article className="tile tile-project reveal">
                <div className="tile-arrow">↗</div>
                <div>
                  <div className="project-badge">AI · Accessibility</div>
                  <h3 className="serif">Synerva</h3>
                  <p>
                    An AI-powered sign language accessibility extension for YouTube,
                    making video content more inclusive.
                  </p>
                </div>
                <div className="project-tags">
                  <span>AI</span><span>Chrome Ext</span>
                </div>
              </article>

              <article className="tile tile-project reveal">
                <div className="tile-arrow">↗</div>
                <div>
                  <div className="project-badge">Personal</div>
                  <h3 className="serif">Portfolio</h3>
                  <p>
                    The site you're on — a hand-crafted, responsive portfolio built
                    with care.
                  </p>
                </div>
                <div className="project-tags">
                  <span>HTML</span><span>CSS</span><span>JS</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="container">
            <div className="section-head reveal">
              <div className="section-tag">Experience</div>
              <h2 className="section-title">
                Where I've <em>grown.</em>
              </h2>
            </div>

            <div className="bento exp-bento">
              <article className="tile tile-exp reveal">
                <span className="period">Present</span>
                <h3 className="serif">Full Stack Web Dev Intern</h3>
                <div className="org">Future Interns</div>
                <p>
                  Building responsive, production-ready interfaces and full stack
                  features — collaborating with mentors and shipping real client work.
                </p>
              </article>

              <article className="tile tile-exp reveal">
                <span className="period">Past</span>
                <h3 className="serif">President</h3>
                <div className="org">BVRIT-N Toastmasters</div>
                <p>
                  Led the chapter through events, mentorship, and weekly meetings —
                  growing both members and myself as a communicator and leader.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="container">
            <div className="bento">
              <div className="tile contact-tile reveal">
                <div className="section-tag">Contact</div>
                <h2>
                  Let's build <em>something good.</em>
                </h2>
                <p className="lead">
                  Open to internships, collaborations, and good conversations.
                  Reach out — I usually reply quickly.
                </p>
                <div className="contact-links">
                  <a className="contact-link" href="mailto:rigvedachowdary@gmail.com">
                    ✉ Email
                  </a>
                  <a
                    className="contact-link"
                    href="https://linkedin.com/in/rigvedachowdary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    in LinkedIn
                  </a>
                  <a
                    className="contact-link"
                    href="https://github.com/rigvedachowdary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ⌘ GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          © {new Date().getFullYear()} Rigveda Chowdary · Crafted with{" "}
          <span className="heart">care</span> using HTML, CSS & JavaScript.
        </div>
      </footer>
    </>
  );
}
