import { Product } from '../product/Product'
import './Products.css'

const Products = () => {
    const products = [
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
            name: 'Raqueta',
            price: 50000,
            img: 'https://'
        },
        {
            name: 'Raqueta',
            price: 50000,
            img: 'https://'
        },
    ]

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
