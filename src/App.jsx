import { Products } from './components/products/Products.jsx'
import logo from './assets/logo.svg'
import { useState } from 'react'
import './App.css'

function App() {

  const productsLocal = [
    {
        name: 'Raqueta',
        price: 50000,
        img: 'https://'
    },
    {
        name: 'Balón',
        price: 120000,
        img: 'https://'
    },
    {
        name: 'Mouse',
        price: 50000,
        img: 'https://'
    },
    {
        name: 'Pantalla',
        price: 50000,
        img: 'https://'
    },
  ]

  const [productSearch, setProductSearch] = useState('')
  const [products, setProducts] = useState(productsLocal)

  const filter = value => {
    return products.filter(
      product => product.name.toLowerCase().includes(value.toLowerCase())
    )
  }

  const filterProduct = () => {
    const productsFilter = filter(productSearch)
    setProducts(productsFilter)
  }

  const handleChangeSearch = e => {
    const value = e.target.value
    const productsFilter = filter(value)
    setProductSearch(value)
    if (productsFilter.length === 0) {
      setProducts(productsLocal)
      return null
    }
    
    if (value.length === 0) {
      setProducts(productsLocal)
      return null
    }

    setProducts(productsFilter)
  }

  return (
    <>
      <header className='header'>
        <img src={ logo } />
        <section className='container-search'>
          <input
            className='search'
            type="search"
            value={ productSearch }
            placeholder='¿Qué quieres comprar?'
            onChange={ handleChangeSearch }
          />
          <button 
            className='btn-search'
            onClick={ filterProduct }
          >
            <i className="bi bi-search"></i>
          </button>
        </section>
        <section className='logger'>
          <p>Iniciar sesion</p>
          <p>Resgitrar</p>
        </section>
      </header>
      <main className='main'>
        <Products products={ products } />
      </main>
    </>
  )
}

export default App

