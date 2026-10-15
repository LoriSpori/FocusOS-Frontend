const sessions = [
  {
    initials: "",
    name: "Session name",
    detail: "Start date and start time",
    duration: "1h 42m",
    score: 94,
    incidents: 2,
  },
  {
    initials: "",
    name: "Session name",
    detail: "Start date and start time",
    duration: "58m",
    score: 87,
    incidents: 4,
  },
  {
    initials: "",
    name: "Session name",
    detail: "Start date and start time",
    duration: "46m",
    score: 81,
    incidents: 3,
  },
  {
    initials: "",
    name: "Session name",
    detail: "Start date and start time",
    duration: "35m",
    score: 76,
    incidents: 5,
  },
];

const incidents = [
  {
    time: "09:18",
    user: "Session name",
    type: "Posture drift",
    detail: "Head angle held below threshold for 18 seconds",
    response: "Recovered in 8s",
    tone: "orange",
  },
  {
    time: "10:04",
    user: "Session name",
    type: "Scroll pattern",
    detail: "Repeated downward attention pattern detected",
    response: "Audio cue played",
    tone: "blue",
  },
  {
    time: "11:27",
    user: "Session name",
    type: "Attention returned",
    detail: "Focus restored after a gentle intervention",
    response: "Recovered in 5s",
    tone: "acid",
  },
  {
    time: "13:42",
    user: "Session name",
    type: "Extended drift",
    detail: "Second posture event within a 10-minute window",
    response: "Audio cue played",
    tone: "orange",
  },
];

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.4-3.4 2.2-5 5.5-5s5.1 1.6 5.5 5M16 5.5a3 3 0 0 1 0 5.5M16.5 14c2.4.2 3.7 1.8 4 4.5" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12h4l2-6 4 12 2.5-6H21" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 16V4M5.5 8.5 10 4l4.5 4.5" />
    </svg>
  );
}

export default function Dashboard() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-topbar">
        <a className="logo dashboard-logo" href="/" aria-label="Focus OS home">
          <span className="logo-mark logo-mark-header" aria-hidden="true" />
          <span className="logo-text-header">FOCUS OS</span>
        </a>
        <div className="dashboard-period">
          <span>DASHBOARD OVERVIEW</span>
          <strong>DATE</strong>
        </div>
        <div className="dashboard-account">
          <span className="live-status">
            <span className="fg-inline-italic">Name</span>
          </span>
          <span className="account-avatar" />
        </div>
      </header>

      <div className="dashboard-shell">
        <aside className="dashboard-sidebar" aria-label="Dashboard navigation">
          <div>
            <span className="sidebar-label">OVERVIEW</span>
            <a className="sidebar-link active" href="/dashboard">
              <GridIcon />
              Dashboard
            </a>
            <a className="sidebar-link" href="#sessions">
              <UsersIcon />
              Sessions
            </a>
            <a className="sidebar-link" href="#incidents">
              <PulseIcon />
              Incidents
            </a>
          </div>
        </aside>

        <section className="dashboard-content">
          <div className="dashboard-heading">
            <div>
              <span className="section-kicker">TODAY / LIVE VIEW</span>
              <div className="dashboard-title" role="heading" aria-level={1}>
                Your dashboard
              </div>
            </div>
            <div className="date-switcher" aria-label="Selected period">
              <span>Today</span>
              <span>This week</span>
              <span>This month</span>
            </div>
          </div>

          <div className="metric-grid">
            <article className="score-card">
              <div className="metric-label">
                <span>FOCUS SCORE</span>
              </div>
              <div className="score-card-body">
                <div className="score-ring" aria-label="Focus score 86 out of 100">
                  <div>
                    <strong>86</strong>
                    <span>/ 100</span>
                  </div>
                </div>
                <div className="score-summary">
                  <span className="trend-pill">
                    <ArrowUpIcon /> 8%
                  </span>
                  <strong>Strong focus</strong>
                  <p>Your are 12 points above its 30-day average.</p>
                </div>
              </div>
            </article>

            <article className="mini-metric">
              <span className="metric-label">FOCUSED TIME</span>
              <strong>6h 24m</strong>
              <p>Across 8 completed sessions</p>
              <div className="spark-bars" aria-hidden="true">
                {[42, 65, 52, 81, 68, 92, 78, 88].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </article>

            <article className="mini-metric accent-metric">
              <span className="metric-label">INTERVENTIONS</span>
              <strong>14</strong>
              <p>11 led to attention recovery</p>
              <div className="recovery-rate">
                <span />
              </div>
              <small>79% RECOVERY RATE</small>
            </article>
          </div>

          <section className="dashboard-panel sessions-panel" id="sessions">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">focus session analytics</span>
                <div className="panel-title" role="heading" aria-level={2}>
                  Recent sessions
                </div>
              </div>
              <span className="panel-count">08 TOTAL</span>
            </div>
            <div className="session-table">
              <div className="table-head">
                <span>SESSION</span>
                <span>DURATION</span>
                <span>FOCUS SCORE</span>
                <span>INCIDENTS</span>
              </div>
              {sessions.map((session) => (
                <article className="session-row" key={session.duration}>
                  <div className="session-user">
                    <span className="user-avatar">{session.initials}</span>
                    <span>
                      <strong>{session.name}</strong>
                      <small>{session.detail}</small>
                    </span>
                  </div>
                  <strong>{session.duration}</strong>
                  <div className="score-cell">
                    <strong>{session.score}</strong>
                    <span>
                      <i style={{ width: `${session.score}%` }} />
                    </span>
                  </div>
                  <span className="incident-count">{session.incidents}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="dashboard-panel incident-panel" id="incidents">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">REAL-TIME LOG</span>
                <div className="panel-title" role="heading" aria-level={2}>
                  Incident timeline
                </div>
              </div>
              <span className="timeline-legend">
                <i />
                ON-DEVICE SIGNALS ONLY
              </span>
            </div>
            <div className="incident-list">
              {incidents.map((incident) => (
                <article className="incident-row" key={`${incident.time}-${incident.user}`}>
                  <time>{incident.time}</time>
                  <span className={`incident-dot ${incident.tone}`} />
                  <div className="incident-copy">
                    <strong>{incident.type}</strong>
                    <p>{incident.detail}</p>
                  </div>
                  <span className="incident-user">{incident.user}</span>
                  <span className="response-chip">{incident.response}</span>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
