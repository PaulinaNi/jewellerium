import './product.styles.css'
//react
import { useState } from 'react'
//component import
import Button from '../../components/button/button.component'

//font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Product(props) {
  //state to keep quantity of product 
  const [productQuantity, setProductQuantity] = useState(1)

  // function to set quantity of product to be added to cart
  const increaseProductQuantity = () => setProductQuantity(prevState => prevState + 1)
  const decreaseProductQuantity = () => {
    setProductQuantity(prevState => prevState > 1 ? prevState - 1 : 1)
  }

  //state to keep if tabs need to be extended or no
  const [areTabsOpen, setAreTabsOpen] = useState(
    {
      dimensions: false,
      care: false,
      delivery: false,
    })

  // function to change state areTabsOpen to extend tabs 
  const handleAreTabsOpen = (tabName) => {
    setAreTabsOpen(prevState => {
      return {
        ...prevState,
        [tabName]: true
      }
    })
  }
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

          <span
            className='productPage-Quantity minus' onClick={decreaseProductQuantity}>-</span>
          <span className='productPage-Quantity display'>{productQuantity}</span>
          <span className='productPage-Quantity plus' onClick={increaseProductQuantity}>+</span>

          <Button
            buttonFunction='action'
            text='Add to cart'
            func={() => console.log(`${productQuantity} x added to cart`)}
            color='dark'
          />
        </div>

        <div className='productPage-TabsContainer'>
          {/* tabs */}
          <div className='productPage-Tab'>
            Dimensions
            <FontAwesomeIcon
              icon={faAngleDown}
              size='lg'
              style={{ color: "#507028", padding: '0 0.5rem' }}
              onClick={() => handleAreTabsOpen('dimensions')}
            />
            <p
              className='productPage-TabsText'
              aria-expanded={areTabsOpen.dimensions}
            > Length: 10 mm</p>
            <p
              className='productPage-TabsText'
              aria-expanded={areTabsOpen.dimensions}
            > Width: 20mm</p>
          </div>

          <div className='productPage-Tab'>
            Care
            <FontAwesomeIcon
              icon={faAngleDown}
              size='lg'
              style={{ color: "#507028", padding: '0 0.5rem' }}
              onClick={() => handleAreTabsOpen('care')}
            />
            <p
              className='productPage-TabsText'
              aria-expanded={areTabsOpen.care}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, earum dolor iste aliquam optio rerum saepe. Eum laudantium corrupti sunt obcaecati unde, ab temporibus officia debitis inventore aspernatur! Eum, reiciendis?
              Quaerat fuga a, perferendis accusantium asperiores explicabo modi vitae deserunt corrupti, veritatis quibusdam officiis sequi, pariatur laborum blanditiis tempora neque praesentium dolorum suscipit fugiat adipisci voluptatibus aspernatur. Iste, ipsum reprehenderit.</p>
          </div>

          <div className='productPage-Tab'>
            Delivery
            <FontAwesomeIcon
              icon={faAngleDown}
              size='lg'
              style={{ color: "#507028", padding: '0 0.5rem' }}
              onClick={() => handleAreTabsOpen('delivery')}
            />
            <p
              className='productPage-TabsText'
              aria-expanded={areTabsOpen.delivery}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, earum dolor iste aliquam optio rerum saepe. Eum laudantium corrupti sunt obcaecati unde, ab temporibus officia debitis inventore aspernatur! Eum, reiciendis?
              Quaerat fuga a, perferendis accusantium asperiores explicabo modi vitae deserunt corrupti, veritatis quibusdam officiis sequi, pariatur laborum blanditiis tempora neque praesentium dolorum suscipit fugiat adipisci voluptatibus aspernatur. Iste, ipsum reprehenderit.</p>
          </div>
        </div>
      </div>

    </section>
  )
}