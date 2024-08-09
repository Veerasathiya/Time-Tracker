// Index.tsx
import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import AppNavigator from "./navigator/AppNavigator";

const store = createStore(reducer);

const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default Index;
