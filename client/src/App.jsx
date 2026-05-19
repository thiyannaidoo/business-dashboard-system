import './App.css'

function App() {
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
          <article>
            <span>Total Products</span>
            <strong>128</strong>
          </article>
          <article>
            <span>Low Stock Items</span>
            <strong>12</strong>
          </article>
          <article>
            <span>Inventory Value</span>
            <strong>R84,250</strong>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App