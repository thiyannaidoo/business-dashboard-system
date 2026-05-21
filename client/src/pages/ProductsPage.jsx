import PageHeader from '../components/PageHeader'

function ProductsPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="Products"
        title="Product Management"
        description="Manage product details, categories, pricing, suppliers, and stock levels."
      />
    </main>
  )
}

export default ProductsPage