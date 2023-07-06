import './App.css'
import { Header } from './components/Header'
import { ProductCard } from './components/ProductCard'
import { ProductDetails } from './pages/productsPage/ProductDetails'
import Products from './pages/productsPage/Products'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Products/>
      <ProductDetails />
      <p>Is Benjamim Alves a programmer?</p>
    </>
  )
}

export default App
