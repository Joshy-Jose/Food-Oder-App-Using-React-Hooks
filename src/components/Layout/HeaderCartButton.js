import React from 'react';
import { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

    const [btnIsHighlated, setBtnIsHighlated] = useState(false);
    
    const cartCtx = useContext(CartContext);   //header cart button component will be re-evaluvated 
                                                //by react when ever the cart context changes,changes do updated in cart provider component

    const {item} = cartCtx;

    const numgerOfCartItems = item.reduce((curNumber, item) => {

        return curNumber + item.amount;
    },0);   
    const btnClasses = `${classes.button} ${btnIsHighlated ? classes.bump : ''}`;

    useEffect(() => {
        if(item.length === 0) {
            return;
        }
        setBtnIsHighlated(true);

        const timer = setTimeout(() => {
            setBtnIsHighlated(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        };

    },[item])
   
   
   
   return <button className={btnClasses} onClick={props.onClick}>
        <spin className={classes.icon}>
            <CartIcon/>
        </spin>
        <spin>Your Cart</spin>
        <spin className={classes.badge}>{numgerOfCartItems}</spin>

    </button>
}

export default HeaderCartButton;