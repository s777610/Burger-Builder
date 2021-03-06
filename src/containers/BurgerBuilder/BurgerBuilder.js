import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { setAuthRedirectPath } from "../../store/actions/auth";
import { purchaseInit } from "../../store/actions/order";
import {
  addIngredient,
  removeIngredient,
  initIngredients
} from "../../store/actions/burgerBuilder";
import axios from "../../axios-orders";

const burgerBuilder = props => {
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    props.initIngredients(); // dispatch action to init ingredients..
  }, []);

  const updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients) // ["salad", "bacon", ...]
      .map(igKey => {
        return ingredients[igKey];
      }) // [2, 3, 4, ...]
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      // updated state for redirect path '/checkout', and redirect to '/auth'
      props.setAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  // push url on history stack, change the url, goes to Checkout
  const purchaseContinueHandler = () => {
    props.purchaseInit(); // set purchased to false before go to checkout
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...props.ings
  };

  for (let key in disabledInfo) {
    // if disabledInfo[key] <= 0, disabledInfo[key] is true
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;
  // burger is Spinner before burger come
  let burger = props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

  if (props.ings) {
    burger = (
      // disabledInfo is {salad: true, meat: false,...}
      <Aux>
        <Burger ingredients={props.ings} />
        <BuildControls
          ingredientAdded={props.addIngredient}
          ingredientRemoved={props.removeIngredient}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(props.ings)}
          ordered={purchaseHandler}
          isAuth={props.isAuthenticated}
          price={props.price}
        />
      </Aux>
    );

    orderSummary = (
      <OrderSummary
        ingredients={props.ings}
        price={props.price}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }

  // {salad: true, meat: false, ...}
  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
};

// access the state by call props.ings
const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(
  mapStateToProps,
  {
    addIngredient,
    removeIngredient,
    initIngredients,
    purchaseInit,
    setAuthRedirectPath
  }
)(withErrorHandler(burgerBuilder, axios));
