import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import Routes from "../../Routes";

const Error = () => {
  const location = useLocation();
  const history = useHistory();

  const validateRender = () => {
    const index = Routes.findIndex(
      el => el.path === location.pathname
    );

    return index === -1;
  };

  return validateRender() ? (
    <div className="error">
      <h1>Error 404</h1>
      <button onClick={() => history.goBack()}>Return</button>
    </div>
  ) : (
    ""
  );
};

export default Error;
