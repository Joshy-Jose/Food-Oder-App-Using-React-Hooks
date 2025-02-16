
import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Layout/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';




function App() {

const [cartIsShown,setCartShown] = useState(false);

const showCartHandler = () => {
  setCartShown(true);
}
const hideCartHandler = () => {
  setCartShown(false);
}


  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>} 
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
