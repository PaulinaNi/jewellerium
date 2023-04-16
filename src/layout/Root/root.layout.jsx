import './root.styles.css'
import { Outlet } from 'react-router-dom'
//components
import NavBar from '../../components/navBar/navBar.component'

export default function Root(){
 return(
  <main>
   <NavBar />
   <Outlet />
  </main>
 )
}