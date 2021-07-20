import CartContext from './cart-context';
import { useReducer } from 'react';

//define out side => no data needed from component and no need to re-evaluvated

const defaultCartState = {
    item: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if(action.type === 'ADD'){
        const updatedItem = state.item.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            item: updatedItem,
            totalAmount: updatedTotalAmount
        };


    }
    if(action.type === 'REMOVE'){
        
    }

    return defaultCartState; 
};



const CartProvider = props => {


    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction ({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction ({type: 'REMOVE', id: id})
    };

    const cartContext = {
        item: cartState.item,
        totalAmount : cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler

    };




    return <CartContext.Provider value={cartContext}>
            {props.children}
    </CartContext.Provider>
}

export default CartProvider;