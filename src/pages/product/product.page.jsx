import './product.styles.css'
//component import
import Button from '../../components/button/button.component'

export default function Product(props) {
 return (
  <section className='productPage'>
   <img className='productPage-Image' src="https://placehold.co/300x500" alt="product photo" />

   <div className='productPage-ItemInfoContainer'>
    <h1 className='productPage-Name'>Blue Earrings</h1>
    <p className='productPage-Price'>Price: £5</p>
    <p className='productPage-Discription'>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus vel quo corrupti perspiciatis ipsa autem blanditiis quae, atque dolores, soluta quia necessitatibus officiis molestiae laudantium distinctio placeat itaque repellendus harum!
     Sed cumque sapiente qui laudantium! Blanditiis facere rerum itaque, dolorum dignissimos inventore ea nesciunt possimus hic corrupti illum quod mollitia in id ipsum incidunt cumque! Repudiandae maxime voluptatem delectus magnam.
     Accusamus culpa veritatis labore, eveniet, laudantium quia, ullam sint incidunt libero reprehenderit doloribus impedit similique? Odit deserunt, temporibus sit provident repudiandae sequi expedita error quaerat cum assumenda consequatur veritatis quibusdam!
     Quidem illum et consequatur ad expedita nesciunt, corporis molestiae eveniet quas reiciendis assumenda excepturi quisquam provident dolorem blanditiis cum minus voluptatibus numquam minima, ducimus beatae omnis illo optio? Est, commodi!
     Corporis ratione provident ipsum illo sunt quo accusamus non quia placeat odit quod, dolorem vero dignissimos dolor suscipit! Illo quae, tempore ratione animi sunt ipsum? Ipsa consequatur nobis iure cupiditate.
    </p>
    <div className='productPage-AddToCart'>
     <span>-</span>
     <span>1</span>
     <span>+</span>
     <Button
      buttonFunction='action'
      text='Add to cart'
      func={() => console.log('added to cart')}
      color='dark'
     />
    </div>
    <div>
     <div>Dimension
      <p> Length: 10 mm</p>
      <p> Width: 20mm</p>
     </div>

     <div>Care
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, earum dolor iste aliquam optio rerum saepe. Eum laudantium corrupti sunt obcaecati unde, ab temporibus officia debitis inventore aspernatur! Eum, reiciendis?
       Quaerat fuga a, perferendis accusantium asperiores explicabo modi vitae deserunt corrupti, veritatis quibusdam officiis sequi, pariatur laborum blanditiis tempora neque praesentium dolorum suscipit fugiat adipisci voluptatibus aspernatur. Iste, ipsum reprehenderit.</p>
     </div>

     <div>Delivery
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, earum dolor iste aliquam optio rerum saepe. Eum laudantium corrupti sunt obcaecati unde, ab temporibus officia debitis inventore aspernatur! Eum, reiciendis?
       Quaerat fuga a, perferendis accusantium asperiores explicabo modi vitae deserunt corrupti, veritatis quibusdam officiis sequi, pariatur laborum blanditiis tempora neque praesentium dolorum suscipit fugiat adipisci voluptatibus aspernatur. Iste, ipsum reprehenderit.</p>
     </div>
    </div>
   </div>

  </section>
 )
}