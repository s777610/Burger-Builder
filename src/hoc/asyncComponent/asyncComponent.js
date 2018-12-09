import React, { Component } from 'react';

// this func take a func referance as input 
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }
        componentDidMount () {
            importComponent() // import('./containers/Checkout/Checkout');
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }
        render () {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;