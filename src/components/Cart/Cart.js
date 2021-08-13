import React from 'react';
import classes from './Cart.module.css';
import Modal from '../Layout/Meals/UI/Modal';
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {

const cartCtx = useContext(CartContext);
const [isCheckout, setIsCheckout] = useState(false);
const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const hasItem = cartCtx.item.length > 0;

const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
};

const cartItemAddHandler = item => {
  //  cartCtx.addItem({...item.amount:1}); //addItem invoked in cart provider
   cartCtx.addItem(item);
};

const orderHandler = () => {
    setIsCheckout(true);
}

const submitOrderHandler = (userData) => {
    fetch('https://react-http-hooks-88948-default-rtdb.europe-west1.firebasedatabase.app/order.json', {
      method:'POST',
      body:JSON.stringify({
          user:userData,
          orderItems:cartCtx.item
      })
    })

}

//bind pre-configure as a function to future exicution and basically 
//allow you to pre-configure the argument that function will receive when its being executed
const cartItem = (
<ul className={classes['cart-items']}>
    {cartCtx.item.map((item) => (<CartItem 
        key={item.id} 
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
        />))
    } </ul>        
);
    const modelActions =  <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
        Close
    </button>
    {hasItem &&<button className={classes.button} onClick={orderHandler}>Order</button> }
    </div>
    
    return(
        <Modal onClose ={props.onClose} >
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
           {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
           {!isCheckout && modelActions}
           
        </Modal>
    );
}

export default Cart;