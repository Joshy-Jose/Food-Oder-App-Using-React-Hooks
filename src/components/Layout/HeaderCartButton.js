import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';



const HeaderCartButton = () => {

    return <button className={classes.button}>
        <spin className={classes.icon}>
            <CartIcon/>
        </spin>
        <spin>Your Cart</spin>
        <spin className={classes.badge}>3</spin>

    </button>
}

export default HeaderCartButton;