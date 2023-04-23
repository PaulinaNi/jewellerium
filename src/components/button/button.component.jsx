import './button.styles.css'

import { Link } from 'react-router-dom'

export default function Button(props) {
 // props explained
 // buttonFunction: action (e.g. button to add to cart, button where you need to pass function) or link (e.g. button to go shop page, button where you need to pass where the link need to redirect)
 // func - only to use for action
 // toWhere - redirect link
 // color: light or dark - differen classname pass to style button 
 // text - display text
 const { buttonFunction, func, toWhere, color, text } = props

 const buttonStyle = color === "light" ? 'button light' : color === "dark" ? 'button dark' : 'button'

 return (
  buttonFunction === 'link' ?
   <Link
    className={buttonStyle}
    to={toWhere}
   >
    {text}</Link>
   :
   buttonFunction === 'action' ?
    <button
     className={buttonStyle}
     onClick={func}
    >
     {text}</button> : <div>Error</div>
 )
}