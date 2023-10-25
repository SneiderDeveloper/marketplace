import { Product } from '../product/Product'
import './Products.css'

const Products = ({ products }) => {

    return (
        // No es HTML
        // Esto es JSX
        <section className='products'>
            {
                products.map((product, key) => {
                    return <Product product={product} key={key}/>
                })
            }
        </section>
    )
}

//Export nombrado
export { Products }

// Este es un export por defecto
// export default Products
