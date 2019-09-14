import React from "react";
import { Provider } from "mobx-react";
import Store from "./Store";
import SuperTable from "./SuperTable";

export default function index(props) {
  const store = new Store(props.base, props.resource);

  return (
    <Provider store={store}>
      <SuperTable {...props} />
    </Provider>
  );
}
