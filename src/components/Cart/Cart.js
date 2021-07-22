import React from 'react';
import classes from './Cart.module.css';
import Modal from '../Layout/Meals/UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = (props) => {

const cartCtx = useContext(CartContext);

const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const hasItem = cartCtx.item.length > 0;

const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
};

const cartItemAddHandler = item => {
  //  cartCtx.addItem({...item.amount:1}); //addItem invoked in cart provider
   cartCtx.addItem(item);
};

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
    
    
    return(
        <Modal onClose ={props.onClose} >
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
               {!hasItem &&<button className={classes.button}>Order</button> }
            </div>
            
        </Modal>
    );
}

export default Cart;