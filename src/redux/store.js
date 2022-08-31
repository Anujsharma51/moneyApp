import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { AddCart } from "./reducer";

import thunk from "redux-thunk";
export const store = createStore(AddCart, applyMiddleware(thunk));
