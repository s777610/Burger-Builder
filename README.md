# Burger Builder
This project([Burger Builder](https://react-my-burger-bcc18.firebaseapp.com/)) was built by react and redux and deployed on Firebase. This demo project is a tutorial from Udemy.

## Installation
```npm install```

## Available Scripts
1. Runs the app in the development mode.<br>
```npm start```


2. Launches the test runner in the interactive watch mode. There are some testing file for test components, containers and redux.<br>
```npm test```

```k```

3. Builds the app for production to the build folder.<br>
```npm run build```

## Architecture
```
├── App.js
├── assets
│   └── images
│       └── burger-logo.png
├── axios-orders.js
├── components
│   ├── Burger
│   │   ├── BuildControls
│   │   │   ├── BuildControl
│   │   │   │   ├── BuildControl.js
│   │   │   │   └── BuildControl.module.css
│   │   │   ├── BuildControls.js
│   │   │   └── BuildControls.module.css
│   │   ├── Burger.js
│   │   ├── Burger.module.css
│   │   ├── BurgerIngredient
│   │   │   ├── BurgerIngredient.js
│   │   │   └── BurgerIngredient.module.css
│   │   └── OrderSummary
│   │       └── OrderSummary.js
│   ├── Logo
│   │   ├── Logo.js
│   │   └── Logo.module.css
│   ├── Navigation
│   │   ├── NavigationItems
│   │   │   ├── NavigationItem
│   │   │   │   ├── NavigationItem.js
│   │   │   │   └── NavigationItem.module.css
│   │   │   ├── NavigationItems.js
│   │   │   ├── NavigationItems.module.css
│   │   │   └── NavigationItems.test.js
│   │   ├── SideDrawer
│   │   │   ├── DrawerToggle
│   │   │   │   ├── DrawerToggle.js
│   │   │   │   └── DrawerToggle.module.css
│   │   │   ├── SideDrawer.js
│   │   │   └── SideDrawer.module.css
│   │   └── Toolbar
│   │       ├── Toolbar.js
│   │       └── Toolbar.module.css
│   ├── Order
│   │   ├── CheckoutSummary
│   │   │   ├── CheckoutSummary.js
│   │   │   └── CheckoutSummary.module.css
│   │   ├── Order.js
│   │   └── Order.module.css
│   └── UI
│       ├── Backdrop
│       │   ├── Backdrop.js
│       │   └── Backdrop.module.css
│       ├── Button
│       │   ├── Button.js
│       │   └── Button.module.css
│       ├── Input
│       │   ├── Input.js
│       │   └── Input.module.css
│       ├── Modal
│       │   ├── Modal.js
│       │   └── Modal.module.css
│       └── Spinner
│           ├── Spinner.js
│           └── Spinner.module.css
├── containers
│   ├── Auth
│   │   ├── Auth.js
│   │   ├── Auth.module.css
│   │   └── Logout
│   │       └── Logout.js
│   ├── BurgerBuilder
│   │   ├── BurgerBuilder.js
│   │   └── BurgerBuilder.test.js
│   ├── Checkout
│   │   ├── Checkout.js
│   │   └── ContactData
│   │       ├── ContactData.js
│   │       └── ContactData.module.css
│   └── Orders
│       └── Orders.js
├── hoc
│   ├── Aux
│   │   └── Aux.js
│   ├── Layout
│   │   ├── Layout.js
│   │   └── Layout.module.css
│   ├── asyncComponent
│   │   └── asyncComponent.js
│   └── withErrorHandler
│       └── withErrorHandler.js
├── index.css
├── index.js
├── serviceWorker.js
├── shared
│   └── utility.js
└── store
    ├── actions
    │   ├── actionTypes.js
    │   ├── auth.js
    │   ├── burgerBuilder.js
    │   ├── index.js
    │   └── order.js
    └── reducers
        ├── auth.js
        ├── auth.test.js
        ├── burgerBuilder.js
        └── order.js
```