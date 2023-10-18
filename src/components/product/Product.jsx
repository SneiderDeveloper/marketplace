import product from '../../assets/productOne.svg'
import './Product.css'

const Product = () => {
    return (
        <aside className="product">
            <img src={ product }/>
            <h2 className='product-title'>Casco de Darth Vader</h2>
            <h3 className='product-price'>{ 150000 }</h3>
            <button className='btn-buy'>Comprar</button>
        </aside>
    )
}

export default Product