import React from 'react';
import { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);   //header cart button component will be re-evaluvated 
                                                //by react when ever the cart context changes,changes do updated in cart provider component

    const numgerOfCartItems = cartCtx.item.reduce((curNumber, item) => {

        return curNumber + item.amount;
    },0);   

    return <button className={classes.button} onClick={props.onClick}>
        <spin className={classes.icon}>
            <CartIcon/>
        </spin>
        <spin>Your Cart</spin>
        <spin className={classes.badge}>{numgerOfCartItems}</spin>

    </button>
}

export default HeaderCartButton;