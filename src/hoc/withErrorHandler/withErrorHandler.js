import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";
import useHttpErrorHandler from "../../hooks/http-error-handler";

//////////////////////////////////////////////////////////////////////////////////////
// The purpose of the withErrorHandler HOC is to add a customized error GUI //////////
//////////////////////////////////////////////////////////////////////////////////////
const withErrorHandler = (WrappedComponent, axios) => {
  // withErrorHandler create a func component
  return props => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      // error,message is returned by firebase
      <Aux>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
