import React, {Fragment} from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>                                     // is there any '-' in style name use format className={classes['main-image'] 
{

    return (
    <Fragment>
       <header className={classes.header}>
           <h1>ReactMeals</h1>
           <HeaderCartButton onClick={props.onShowCart}/>
        </header> 
       
       <div className={classes['main-image']}>                 
           <img src={mealsImage} alt="A table full of delicios food!"/>
       </div>

    </Fragment> );
}

export default Header;