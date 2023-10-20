import productImg from '../../assets/productOne.svg'
import './Product.css'

const Product = ({ product }) => {
    

    const price = Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: 'COP'
    }).format(product.price)
    
    return (
        <aside className="product">
            <img className="product-img" src={ productImg }/>
            <section className='product-bar'>
                <h2 className='product-title'>
                    { product.name }
                </h2>
                <h3 className='product-price'>
                    { price }
                </h3>
            </section>
            <button className='btn-buy'>Comprar</button>
        </aside>
    )
}

export { Product }