import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => { // return many orders object, { {object}, {object},...}
                console.log(res.data) 
                const fetchedOrders = [];
                for (let key in res.data) { // key is id created by firebase
                    // console.log(key) // -LSC3HJ6DqNgmevQWX_D
                    // console.log(res.data[key]) // {customer: {…}, deliveryMethod: "fastest", ingredients: {…}, price: "6.9"}
                    fetchedOrders.push({
                        ...res.data[key], // res.data[key] is a order object
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render () {
        return (
            <div>
                {this.state.orders.map(order => ( // key is id created by firebase
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);