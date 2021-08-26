
import { useContext ,useEffect,useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from '../Layout/HeaderCartButton.module.css';
const HeaderCartButton = props =>{
    const [btnisHighlighted ,setBtnIsHighlihted] =  useState(false);
const cartCtx = useContext(CartContext);
const {items} = cartCtx;
const numberOfCartItems = items.reduce((curNumber,item)=>{
    return curNumber +item.amount;
},0);

const btnClasess = `${classes.button} ${btnisHighlighted ? classes.bump: ''}`;
useEffect(()=>{
    if(items.length === 0){
        return;
    }
    setBtnIsHighlihted(true);
     const timer = setTimeout(() => {
        setBtnIsHighlihted(false);
    }, 300);
    return () => {
        clearTimeout(timer);
    }
},[items]);
    return <button className={btnClasess} onClick = {props.onClick}>
        <span className = {classes.button}>
    <CartIcon/>
        </span>
        <span> Your Cart</span>
        <span className = {classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;