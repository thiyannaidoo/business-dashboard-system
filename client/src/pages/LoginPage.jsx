import PageHeader from '../components/PageHeader'

function LoginPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="Welcome Back"
        title="Sign in to StockFlow"
        description="Access your dashboard to manage inventory and review business activity."
      />
    </main>
  )
}

export default LoginPage