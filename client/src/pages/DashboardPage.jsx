import PageHeader from '../components/PageHeader'

function DashboardPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="Dashboard"
        title="Inventory Overview"
        description="Monitor product totals, low-stock items, and inventory value from one central view."
      />
    </main>
  )
}

export default DashboardPage