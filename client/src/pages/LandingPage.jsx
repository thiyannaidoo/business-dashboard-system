import StatCard from '../components/StatCard'

function LandingPage() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Business Operations Dashboard</p>
        <h1>StockFlow</h1>
        <p className="hero-text">
          Track products, monitor stock levels, and manage day-to-day inventory
          from one clean dashboard.
        </p>
        <a className="primary-link" href="#dashboard-preview">
          View Dashboard
        </a>
      </section>

      <section id="dashboard-preview" className="preview-panel">
        <h2>Dashboard Preview</h2>
        <div className="stats-grid">
          <StatCard label="Total Products" value="128" />
          <StatCard label="Low Stock Items" value="12" />
          <StatCard label="Inventory Value" value="R84,250" />
        </div>
      </section>
    </main>
  )
}

export default LandingPage