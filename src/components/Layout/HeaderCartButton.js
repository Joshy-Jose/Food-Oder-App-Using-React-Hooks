import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';



const HeaderCartButton = (props) => {

    return <button className={classes.button} onClick={props.onClick}>
        <spin className={classes.icon}>
            <CartIcon/>
        </spin>
        <spin>Your Cart</spin>
        <spin className={classes.badge}>3</spin>

    </button>
}

export default HeaderCartButton;