import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from '../../store/cart-context';




const Cart = props =>{
    

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const CartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);
        console.log(totalAmount);
        
    };
     const CartItemAddHandler = item =>{
         cartCtx.addItem({...item,amount: 1});
         
     };
    const carItems = <ul className = {classes['cart-items']}>{cartCtx.items.map((item) =><CartItem key = {item.id} name ={item.name} amount ={item.amount} 
    price ={item.price} onRemove = {CartItemRemoveHandler.bind(null,item.id)} 
    onAdd = {CartItemAddHandler.bind(null,item)}/>)}</ul>
   
return (
    
    <Modal    onClose = {props.onClose}>
        {carItems}
        <div className ={classes.total}>
            <span>Total Amount</span>
            <span >{totalAmount}</span>
        </div>
        <div className = {classes.actions}>
            <button className = {classes['button--alt']} onClick = {props.onClose}>close</button>
            {hasItems && <button  className = {classes.button} onClick = {props.onConfirm}>Order</button> } 
        </div>
    </Modal>
);
    
};

export default Cart;