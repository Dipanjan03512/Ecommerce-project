// import './App.css'
import Signinform from "./main/signinform";
import Signupform from "./main/signupform";
import { Home, Product, Products, AboutPage, ContactPage, Cart, Checkout, PageNotFound } from "./main/pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './main/page/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signinform/>}/>
          <Route path="/signup" element={<Signupform/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;