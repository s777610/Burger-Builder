import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

// this could be a functional component, doesn't have to be a
class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate')
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => { 
            return ( // {textTransform: 'capitalize'} is JS object
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: <span>{this.props.ingredients[igKey]}</span>
            </li>
            )
        });

        return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Contunue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }
};

export default OrderSummary;