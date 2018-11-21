import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

//////////////////////////////////////////////////////////////////////////////////////
// The purpose of the withErrorHandler HOC is to add a customized error GUI //////////
//////////////////////////////////////////////////////////////////////////////////////
const withErrorHandler = (WrappedComponent, axios) => {
    // withErrorHandler create a class component
    return class extends Component {
        state = {
            error: null
        }

        // componentDidMount is called after all children rendered, meaning after componentDidMount of <WrappedComponent {...this.props} /> is completed
        // so we use componentWillMount () here, it get called before children rendered
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        }

        componentWillUnmount() {
            //console.log('componentWillUnmount !!', this.reqInterceptor, this.resInterceptor)
            
            // Interceptors are actually added globally, not just to the wrapped component. 
            // That's why ejecting is important when the component that uses them is not rendered anymore.

            // it could make sense if your auth status changes and you don't want to check that in the interceptor 
            // but simply not run an interceptor at all if the user is unauthenticated.
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>

                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
                
            );
        }
    } 
}

export default withErrorHandler;