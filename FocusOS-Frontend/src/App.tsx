function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 8.5h4l1.5-2h7l1.5 2h4v10H3z" stroke="var(--white)" />
      <circle cx="12" cy="13.5" r="3.5" stroke="var(--white)" />
    </svg>
  );
}

function SoundIcon({ whiteStroke = false }: { whiteStroke?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 10v4h4l5 4V6L8 10H4zM17 9c1.3 1.7 1.3 4.3 0 6M20 6.5c3 3 3 8 0 11"
        stroke={whiteStroke ? "var(--white)" : undefined}
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2" stroke="var(--white)" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" stroke="var(--white)" />
    </svg>
  );
}

function Logo({ header = false }: { header?: boolean }) {
  return (
    <a className="logo" href="#top" aria-label="Focus OS home">
      <span
        className={`logo-mark${header ? " logo-mark-header" : ""}`}
        aria-hidden="true"
      >
      </span>
      <span className={header ? "logo-text-header" : undefined}>
        FOCUS OS
      </span>
    </a>
  );
}

const steps = [
  {
    number: "01",
    title: "Focus percentage",
    copy: "lorem ipsum dolor sit amet consectetuer adipiscing elit",
    icon: <CameraIcon />,
  },
  {
    number: "02",
    title: "Minutes distracted",
    copy: "lorem ipsum dolor sit amet consectetuer adipiscing elit",
    icon: <span className="step-glyph">⌁</span>,
  },
  {
    number: "03",
    title: "Timeline of distraction incidents",
    copy: "lorem ipsum dolor sit amet consectetuer adipiscing elit",
    icon: <SoundIcon whiteStroke />,
  },
];

export default function App() {
  if (window.location.pathname === "/dashboard") {
    return <Dashboard />;
  }

  return (
    <main id="top">
      <nav className="nav-shell" aria-label="Main navigation">
        <Logo header />
        <div className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#reminders">Reminders</a>
          <a href="#the-why">The why</a>
          <a href="/dashboard">Dashboard</a>
        </div>
        <a className="button button-dark button-small" href="#early-access">
          Get Focus OS <ArrowIcon />
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="display-title" role="heading" aria-level={1}>
            Doomscrolling detection
          </div>
          <p className="hero-text">
            Focus OS is a real-time computer vision system that monitors a
            user&apos;s posture and head position via webcam to detect
            &quot;doomscrolling&quot; behavior and delivers spoken audio
            interventions to refocus their attention.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#early-access">
              Download Focus OS
              <ArrowIcon />
            </a>
            <a className="text-link" href="#how-it-works">
              See how it works <span>↓</span>
            </a>
          </div>
          <p className="microcopy">Software application tool</p>
        </div>

        <div className="hero-visual" aria-label="Hero image container">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </section>

      <div className="ticker" aria-label="Product benefits">
        <span>REAL-TIME AWARENESS</span>
        <i>✦</i>
        <span>MONITORING</span>
        <i>✦</i>
        <span>VOICE FEEDBACK</span>
        <i>✦</i>
        <span>REMINDERS</span>
        <i>✦</i>
      </div>

      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <div>
            <span className="section-kicker">HOW IT WORKS / 001</span>
            <div className="section-title" role="heading" aria-level={2}>
              Your own session dashboard
            </div>
          </div>
          <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <div className="step-top">
                <span className="step-number">{step.number}</span>
                <div className="step-icon">{step.icon}</div>
              </div>
              <div className="card-title" role="heading" aria-level={3}>
                {step.title}
              </div>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="intervention-section" id="reminders">
        <div className="intervention-copy">
          <span className="section-kicker light">Reminders / 002</span>
          <div className="section-title light-title" role="heading" aria-level={2}>
            lorem ipsum
          </div>
          <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
          <div className="quote-chip">
            <SoundIcon />
            “Quote from app.”
          </div>
        </div>
        <div className="moment-graphic" aria-label="Attention intervention timeline">
          <div className="timeline-labels">
            <span>0:00</span>
            <span>0:18</span>
            <span>0:32</span>
          </div>
          <div className="timeline">
            <span className="time-dot first" />
            <span className="time-dot middle" />
            <span className="time-dot last" />
          </div>
          <div className="timeline-events">
            <div>
              <i className="event-symbol">⌁</i>
              <strong>Head tilts down</strong>
              <span>Pattern begins</span>
            </div>
            <div className="active-event">
              <i className="event-symbol">
                <SoundIcon />
              </i>
              <strong>Gentle audio cue</strong>
              <span>Pattern interrupted</span>
            </div>
            <div>
              <i className="event-symbol">↑</i>
              <strong>Attention returns</strong>
              <span>You’re back</span>
            </div>
          </div>
        </div>
      </section>

      <section className="the-why-section" id="the-why">
        <div className="the-why-lock">
          <LockIcon />
        </div>
        <div className="the-why-copy">
          <span className="section-kicker">{" The why / 003"}</span>
          <div className="section-title" role="heading" aria-level={2}>
            lorem ipsum
          </div>
          <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
        </div>
        <div className="the-why-list">
          <div>
            <span>01</span>
            <strong>lorem ipsum</strong>
          </div>
          <div>
            <span>02</span>
            <strong>lorem ipsum</strong>
          </div>
          <div>
            <span>03</span>
            <strong>lorem ipsum</strong>
          </div>
        </div>
      </section>

      <section className="cta-section" id="early-access">
        <span className="cta-orbit" />
        <div className="cta-title" role="heading" aria-level={2}>
          lorem ipsum
        </div>
        <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
        <a
          className="button button-light"
          href="mailto:hello@focusos.app?subject=Focus%20OS%20early%20access"
        >
          Download
        </a>
      </section>

      <footer>
        <Logo />
        <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
        <div className="footer-links">
          <a href="#the-why">The Why</a>
          <a href="mailto:hello@focusos.app">Contact</a>
          <span>© 2026 FOCUS OS</span>
        </div>
      </footer>
    </main>
  );
}
import Dashboard from "./Dashboard";
