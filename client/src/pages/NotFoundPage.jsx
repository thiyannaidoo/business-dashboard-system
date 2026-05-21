import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function NotFoundPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="404"
        title="Page not found"
        description="The page you are looking for does not exist or may have been moved."
      />

      <Link className="primary-link page-action" to="/">
        Back to Home
      </Link>
    </main>
  )
}

export default NotFoundPage