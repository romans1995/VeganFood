import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = (props) =>{
    const cartCtx = useContext(CartContext);
    const price = `$${props.price}`;

    const addItemtoCartHandler = amount =>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    };
return(<li className = {classes.meal} >
    <h3>
    {props.name}
    </h3>
    <div className ={classes.description}>{props.description}</div>
    <div className ={classes.price}>{price}</div>
    <MealItemForm onAddToCart = {addItemtoCartHandler} id={props.id}/>
    </li>);

}

export default MealItem;