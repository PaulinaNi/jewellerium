import './homepage.styles.css'

//components
import Button from '../../components/button/button.component'

export default function Homepage() {
 return (
  <section>

   <div className='hero'>
    <h1>Beautiful & Statement Jewellery</h1>
    <h2>- designed and handmade in London -</h2>
    <Button 
    buttonFunction='link'
    text='Shop Now'
    toWhere='/shop'
    color='dark'
    />
   </div>
  </section>
 )
}