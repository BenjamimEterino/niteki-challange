import './App.css'
import { Header } from './components/Header'
import { ProductCard } from './components/ProductCard'
import Products from './pages/productsPage/Products'

function App() {

  return (
    <>
      <Header />
      <Products/>
      <p>Is Benjamim Alves a programmer?</p>
    </>
  )
}

export default App
