import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../imgs/vegan-dinners.jpg';
import classes from '../Layout/Header.module.css';

const Header = props => {


    return(
        <Fragment>
            <header className = {classes.header}>
                <h1>Vegan Meals</h1>
                <HeaderCartButton onClick = {props.onShowCart} />
            </header>
            <div className = {classes['main-image']}>
                <img src ={mealsImage} alt = '5  Vegan Meals'/>
            </div>


        </Fragment>


    );
};

export default Header;