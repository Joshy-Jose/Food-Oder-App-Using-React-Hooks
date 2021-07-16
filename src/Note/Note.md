## Modal

## Portal

Render actual html element in a specific place in the actual DOM

    Index.html
    ----------
    <div id="overlays"></div>

    Modal.js
    --------
    import ReactDom from 'react-dom';

    const portalElement = document.getElementById('overlays');      //go get access to the overlays div in index
    {ReactDom.createPortal(<component/>,portalElement)}



---

## context

cart-context.js
---------------
const CartContext = React.createContext({
item: [],
totalAmount: 0,
addItem: (item) => {},
removeItem: (id) => {}
});

---
cartprovider.js
---------------
const CartProvider = props => {
    const addItemToCartHandler = item => {};
    const removeItemFromCartHandler = id => {};
    const cartContext = {
        item: [],
        totalAmount : 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler

    };
    return <CartContext.Provider value={cartContext}>
            {props.children}
    </CartContext.Provider>
}

export default CartProvider;
----------------------------------
Headercartbutton.js
---------------------
import React from 'react';
import { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);   //header cart button component will be re-evaluvated 
                                                //by react when ever the cart context changes,changes do updated in cart provider component
    return <button className={classes.button} onClick={props.onClick}>
        <spin className={classes.icon}>
            <CartIcon/>
        </spin>
        <spin>Your Cart</spin>
        <spin className={classes.badge}>3</spin>

    </button>
}

export default HeaderCartButton;
---------------------------------------