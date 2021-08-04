import { createStore } from "redux";
import { cartReducers } from "../reducer/cartReducer";

export const store = createStore(cartReducers);