import { Link, NavLink, Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="app-layout">
      <header className="site-header">
        <Link className="brand-link" to="/">
          StockFlow
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/login">Sign In</NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  )
}

export default AppLayout