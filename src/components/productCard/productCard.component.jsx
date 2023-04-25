import './productCard.styles.css'

//components
import Button from '../../components/button/button.component'

export default function ProductCard(props) {
 return (
  <div className='productCard-Container'>
   <img className='productCard-Image' src="https://placehold.co/300" alt="product photo" />
   <p className='productCard-ProductName'>Blue Earrings</p>
   <div className='productCard-Price'>Price: £5</div>
   <Button
    buttonFunction='action'
    text='Add to cart'
    func={() => console.log('added to cart')}
    color='dark'
   />
  </div>
 )
}