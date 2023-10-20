import { Products } from './components/products/Products.jsx'
import './App.css'

function App() {
  return (
    <>
      <header className='header'>
        <img src='' /> 
        <input
          className='search'
          type="search"
          placeholder='¿Qué quieres comprar?'
        />
        <div className='logger'>
          <p>Iniciar sesion</p>
          <p>Resgitrar</p>
        </div>
      </header>
      <main className='main'>
        <Products />
      </main>
    </>
  )
}

export default App

