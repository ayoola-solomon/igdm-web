import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers";

const configureStore = () => {
  const enhancers = [applyMiddleware(thunk)];
  const store = createStore(reducers, composeWithDevTools(...enhancers));
  return store;
};

export default configureStore;
