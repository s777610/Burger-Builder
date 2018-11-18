import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // Object.keys(props.ingredients) is [salad, bacon, cheese, meat]
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        // [...Array(2)] will give me an array with 2 empty spaces(undefined array items), [undefined, undefined]
        return [...Array(props.ingredients[igKey])].map((_, i) => { // index is important in this case
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }) // before reduce [[salad, salad], [bacon], [cheese, cheese, cheese], [meat]]
    .reduce((arr, el) => { // after reduce [salad, salad, bacon, cheese, cheese, cheese, meat]
        // Above:  salad is <BurgerIngredient .... type={salad} />
        return arr.concat(el)
    }, []); // initialValue is []
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    
    //console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;