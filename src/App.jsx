import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"

//components, pages, layouts
import Root from './layout/Root/root.layout'
import Homepage from './pages/homepage/homepage.page'
import Shop from './pages/shop/shop.page'
import Contact from './pages/contact/contact.page'
import About from './pages/about/about.page'
import Product from './pages/product/product.page'

//router provider
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Homepage />} />
      <Route path="shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}