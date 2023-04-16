import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"

//components, pages, layouts
import Root from './layout/Root/root.layout'
import Shop from './pages/shop/shop.page'
import About from './pages/about/about.page'
import Contact from './pages/contact/contact.page'

//router provider
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}