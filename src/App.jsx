import Index from './components/pages/index/Index'
import Cart from './components/pages/cart/Cart'
import Product from './components/pages/product_details/Product'
import About from './components/pages/about/About';

import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
          <Routes>
            <Route path='/' Component={Index}/>
            <Route path='/cart' Component={Cart}/>
            <Route path='/product' Component={Product}/>
            <Route path='/about' Component={About}/>
          </Routes>
    </>
  )
}

export default App
