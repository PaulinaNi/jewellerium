import './shop.styles.css'

//components
import ProductCard from '../../components/productCard/productCard.component'

export default function Shop() {
 return (
  <section>
   <h2>Shop</h2>
   <section className='temp'>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
   </section>

  </section>
 )
}